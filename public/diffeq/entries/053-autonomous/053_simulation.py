import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-2.5, 2.5, 600)
y_values = np.linspace(-4, 4, 300)
constants = [-2, -1, -0.5, 0.5, 1, 2]

fig, (ax, phase_ax) = plt.subplots(
    1,
    2,
    figsize=(9, 4.5),
    gridspec_kw={"width_ratios": [2.2, 1]},
)

for constant in constants:
    y = constant * np.exp(3 * x)
    y = np.where(np.abs(y) <= 8, y, np.nan)
    ax.plot(x, y, linewidth=2, label=f"C = {constant}")

ax.axhline(0, color="black", linewidth=1, alpha=0.7, label="equilibrium y = 0")
ax.axvline(0, color="#111827", linewidth=0.8, alpha=0.35)
ax.set_title("Entry #053: y' = 3y")
ax.set_xlabel("x")
ax.set_ylabel("y")
ax.set_ylim(-8, 8)
ax.grid(True, alpha=0.3)
ax.legend(fontsize=8, ncols=2)

phase_ax.plot(y_values, 3 * y_values, color="#dc2626", linewidth=2)
phase_ax.axhline(0, color="#111827", linewidth=0.8, alpha=0.45)
phase_ax.axvline(0, color="black", linewidth=1, alpha=0.7)
phase_ax.set_title("Rate f(y)")
phase_ax.set_xlabel("y")
phase_ax.set_ylabel("y'")
phase_ax.grid(True, alpha=0.3)

fig.tight_layout()
plt.show()
