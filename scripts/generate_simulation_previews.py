from __future__ import annotations

import runpy
from pathlib import Path

import matplotlib

matplotlib.use("Agg", force=True)
import matplotlib.pyplot as plt


ROOT = Path(__file__).resolve().parents[1]
ENTRIES_DIR = ROOT / "public" / "diffeq" / "entries"


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
    scripts = sorted(ENTRIES_DIR.glob("*/*_simulation.py"))

    if not scripts:
        raise RuntimeError(f"No simulation scripts found under {ENTRIES_DIR}")

    for script_path in scripts:
        output_path = render_simulation(script_path)
        print(f"Rendered {output_path.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
