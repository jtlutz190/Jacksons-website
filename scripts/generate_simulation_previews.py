from __future__ import annotations

import argparse
import runpy
from pathlib import Path

import matplotlib

matplotlib.use("Agg", force=True)
import matplotlib.pyplot as plt


ROOT = Path(__file__).resolve().parents[1]
ENTRIES_DIR = ROOT / "public" / "diffeq" / "entries"


def preview_is_current(script_path: Path, output_path: Path) -> bool:
    return (
        output_path.exists()
        and output_path.stat().st_mtime >= script_path.stat().st_mtime
    )


def render_simulation(script_path: Path) -> Path:
    output_path = script_path.with_suffix(".png")
    plt.close("all")

    original_show = plt.show
    plt.show = lambda *args, **kwargs: None

    try:
        runpy.run_path(str(script_path), run_name="__main__")
        figure_numbers = plt.get_fignums()

        if not figure_numbers:
            raise RuntimeError("No matplotlib figure was created")

        figure = plt.figure(figure_numbers[-1])
        figure.savefig(output_path, dpi=160, bbox_inches="tight", facecolor="white")
    finally:
        plt.show = original_show
        plt.close("all")

    return output_path


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Generate static PNG previews from differential equation simulations.",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Regenerate every preview, even when the PNG is newer than the source script.",
    )
    args = parser.parse_args()

    scripts = sorted(ENTRIES_DIR.glob("*/*_simulation.py"))

    if not scripts:
        raise RuntimeError(f"No simulation scripts found under {ENTRIES_DIR}")

    rendered_count = 0
    skipped_count = 0

    for script_path in scripts:
        output_path = script_path.with_suffix(".png")

        if not args.force and preview_is_current(script_path, output_path):
            skipped_count += 1
            print(f"Skipped {output_path.relative_to(ROOT)}")
            continue

        output_path = render_simulation(script_path)
        rendered_count += 1
        print(f"Rendered {output_path.relative_to(ROOT)}")

    print(f"Done: {rendered_count} rendered, {skipped_count} skipped")


if __name__ == "__main__":
    main()
