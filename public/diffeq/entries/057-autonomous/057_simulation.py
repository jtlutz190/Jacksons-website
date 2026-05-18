import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-4, 4, 900)
constants = [-3, -2, -1, 0, 1, 2]

fig, ax = plt.subplots(figsize=(7, 4.5))

for constant in constants:
    denominator = x + constant
    y = 1 / denominator
    y = np.where((np.abs(denominator) > 0.08) & (np.abs(y) <= 8), y, np.nan)
    ax.plot(x, y, linewidth=2, label=f"C = {constant}")

ax.axhline(0, color="black", linewidth=1, alpha=0.7, label="equilibrium y = 0")
ax.axvline(0, color="#111827", linewidth=0.8, alpha=0.35)
ax.set_title("Entry #057: y' = -y^2")
ax.set_xlabel("x")
ax.set_ylabel("y")
ax.set_ylim(-8, 8)
ax.grid(True, alpha=0.3)
ax.legend(fontsize=8, ncols=2)

fig.tight_layout()
plt.show()
