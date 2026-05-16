import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-0.32, 0.32, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = np.arcsin(3*x) + 4
    y_prime = 3/np.sqrt(1 - 9*x**2)

plt.figure(figsize=(8, 5))
plt.plot(x, y, label="y = arcsin(3x) + 4", linewidth=2)
plt.plot(x, y_prime, label="y' = 3/sqrt(1 - 9x^2)", linewidth=2, color="red")
plt.title("Entry #048: solution and derivative")
plt.xlabel("x")
plt.ylabel("value")
plt.grid(True, alpha=0.35)
plt.legend()
plt.tight_layout()
plt.show()
