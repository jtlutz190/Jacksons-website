from __future__ import annotations

import argparse
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
ENTRIES_DIR = ROOT / "public" / "diffeq" / "entries"
SIMULATION_TEMPLATE = ROOT / "templates" / "diffeq" / "simulation.py"


def format_entry_number(number: int) -> str:
    return f"{number:03d}"


def slugify(value: str) -> str:
    return value.strip().lower().replace("_", "-").replace(" ", "-")


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Create a differential equation entry folder and metadata snippet.",
    )
    parser.add_argument("--number", type=int, required=True, help="Entry number, e.g. 051.")
    parser.add_argument(
        "--section",
        required=True,
        help="Section slug suffix, e.g. autonomous or direct-integration-ivp.",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Overwrite the simulation template if it already exists.",
    )
    args = parser.parse_args()

    entry_number = format_entry_number(args.number)
    section_slug = slugify(args.section)
    slug = f"{entry_number}-{section_slug}"
    entry_dir = ENTRIES_DIR / slug
    simulation_path = entry_dir / f"{entry_number}_simulation.py"

    entry_dir.mkdir(parents=True, exist_ok=True)

    if simulation_path.exists() and not args.force:
        print(f"Kept existing {simulation_path.relative_to(ROOT)}")
    else:
        template = SIMULATION_TEMPLATE.read_text(encoding="utf8")
        simulation_path.write_text(
            template.replace("{ENTRY_NUMBER}", entry_number),
            encoding="utf8",
        )
        print(f"Wrote {simulation_path.relative_to(ROOT)}")

    print()
    print("Metadata snippet:")
    print(
        f"""  defineDiffeqEntry(sectionTemplate, {{
    number: {args.number},
    equation: "y' = ...",
    equationLatex: "y' = ...",
    solution: "y = ...",
    solutionLatex: "y = ...",
    tags: {{
      concept: [],
    }},
  }}),"""
    )


if __name__ == "__main__":
    main()
