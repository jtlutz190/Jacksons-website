import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-2, 6, 600)
constants = [-6, -3, -1, 1, 3, 6]

fig, ax = plt.subplots(figsize=(7, 4.5))

for constant in constants:
    y = 5 - constant * np.exp(-x)
    y = np.where(np.abs(y) <= 12, y, np.nan)
    ax.plot(x, y, linewidth=2, label=f"C = {constant}")

ax.axhline(5, color="black", linewidth=1, alpha=0.7, label="stable equilibrium y = 5")
ax.axvline(0, color="#111827", linewidth=0.8, alpha=0.35)
ax.set_title("Entry #055: y' = 5 - y")
ax.set_xlabel("x")
ax.set_ylabel("y")
ax.set_ylim(-2, 12)
ax.grid(True, alpha=0.3)
ax.legend(fontsize=8, ncols=2)

fig.tight_layout()
plt.show()
