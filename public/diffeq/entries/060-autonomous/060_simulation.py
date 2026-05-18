import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-3, 3, 900)
constants = [-2, -1, -0.5, 0.1, 0.25, 0.5]

fig, ax = plt.subplots(figsize=(7, 4.5))

for constant in constants:
    denominator = 1 - constant * np.exp(4 * x)
    y = 4 / denominator
    y = np.where((np.abs(denominator) > 0.08) & (np.abs(y) <= 10), y, np.nan)
    ax.plot(x, y, linewidth=2, label=f"C = {constant}")

ax.axhline(0, color="#111827", linewidth=1, alpha=0.55, label="stable equilibrium y = 0")
ax.axhline(4, color="black", linewidth=1, alpha=0.7, label="equilibrium y = 4")
ax.axvline(0, color="#111827", linewidth=0.8, alpha=0.35)
ax.set_title("Entry #060: y' = y(y - 4)")
ax.set_xlabel("x")
ax.set_ylabel("y")
ax.set_ylim(-2, 10)
ax.grid(True, alpha=0.3)
ax.legend(fontsize=8, ncols=2)

fig.tight_layout()
plt.show()
