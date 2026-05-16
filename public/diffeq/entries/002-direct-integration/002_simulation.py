import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-3, 3, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = x**3
    y_prime = 3*x**2

plt.figure(figsize=(8, 5))
plt.plot(x, y, label="y = x^3", linewidth=2)
plt.plot(x, y_prime, label="y' = 3x^2", linewidth=2, color="red")
plt.title("Entry #002: solution and derivative")
plt.xlabel("x")
plt.ylabel("value")
plt.grid(True, alpha=0.35)
plt.legend()
plt.tight_layout()
plt.show()
