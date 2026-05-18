import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-6, 6, 800)
y_values = np.linspace(-0.5, 1.5, 300)
constants = [0.2, 0.5, 1, 2, 5, 10]

fig, (ax, phase_ax) = plt.subplots(
    1,
    2,
    figsize=(9, 4.5),
    gridspec_kw={"width_ratios": [2.2, 1]},
)

for constant in constants:
    y = 1 / (constant * np.exp(-x) + 1)
    ax.plot(x, y, linewidth=2, label=f"C = {constant}")

ax.axhline(0, color="#111827", linewidth=1, alpha=0.55, label="equilibrium y = 0")
ax.axhline(1, color="black", linewidth=1, alpha=0.7, label="stable equilibrium y = 1")
ax.axvline(0, color="#111827", linewidth=0.8, alpha=0.35)
ax.set_title("Entry #058: y' = y(1 - y)")
ax.set_xlabel("x")
ax.set_ylabel("y")
ax.set_ylim(-0.2, 1.2)
ax.grid(True, alpha=0.3)
ax.legend(fontsize=8, ncols=2)

phase_ax.plot(y_values, y_values * (1 - y_values), color="#dc2626", linewidth=2)
phase_ax.axhline(0, color="#111827", linewidth=0.8, alpha=0.45)
phase_ax.axvline(0, color="#111827", linewidth=1, alpha=0.55)
phase_ax.axvline(1, color="black", linewidth=1, alpha=0.7)
phase_ax.set_title("Rate f(y)")
phase_ax.set_xlabel("y")
phase_ax.set_ylabel("y'")
phase_ax.grid(True, alpha=0.3)

fig.tight_layout()
plt.show()
