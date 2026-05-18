import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-2, 2, 800)
y_values = np.linspace(-0.5, 3.5, 300)
constants = [0.1, 0.25, 0.5, 1, 2, 5]

fig, (ax, phase_ax) = plt.subplots(
    1,
    2,
    figsize=(9, 4.5),
    gridspec_kw={"width_ratios": [2.2, 1]},
)

for constant in constants:
    y = 3 / (constant * np.exp(-6 * x) + 1)
    ax.plot(x, y, linewidth=2, label=f"C = {constant}")

ax.axhline(0, color="#111827", linewidth=1, alpha=0.55, label="equilibrium y = 0")
ax.axhline(3, color="black", linewidth=1, alpha=0.7, label="stable equilibrium y = 3")
ax.axvline(0, color="#111827", linewidth=0.8, alpha=0.35)
ax.set_title("Entry #059: y' = 2y(3 - y)")
ax.set_xlabel("x")
ax.set_ylabel("y")
ax.set_ylim(-0.4, 3.4)
ax.grid(True, alpha=0.3)
ax.legend(fontsize=8, ncols=2)

phase_ax.plot(y_values, 2 * y_values * (3 - y_values), color="#dc2626", linewidth=2)
phase_ax.axhline(0, color="#111827", linewidth=0.8, alpha=0.45)
phase_ax.axvline(0, color="#111827", linewidth=1, alpha=0.55)
phase_ax.axvline(3, color="black", linewidth=1, alpha=0.7)
phase_ax.set_title("Rate f(y)")
phase_ax.set_xlabel("y")
phase_ax.set_ylabel("y'")
phase_ax.grid(True, alpha=0.3)

fig.tight_layout()
plt.show()
