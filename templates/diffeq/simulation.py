from __future__ import annotations

import matplotlib.pyplot as plt
import numpy as np


def solution(x: np.ndarray) -> np.ndarray:
    return x


x = np.linspace(-4, 4, 400)
y = solution(x)

fig, ax = plt.subplots(figsize=(7, 4.5))
ax.plot(x, y, color="#2563eb", linewidth=2)
ax.axhline(0, color="#111827", linewidth=0.8, alpha=0.45)
ax.axvline(0, color="#111827", linewidth=0.8, alpha=0.45)
ax.set_title("Entry {ENTRY_NUMBER}: simulation")
ax.set_xlabel("x")
ax.set_ylabel("y")
ax.grid(True, alpha=0.25)
fig.tight_layout()

if __name__ == "__main__":
    plt.show()
