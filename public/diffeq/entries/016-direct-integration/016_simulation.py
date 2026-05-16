import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-4, 4, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = x**2 + np.cos(x)
    y_prime = 2*x - np.sin(x)

plt.figure(figsize=(8, 5))
plt.plot(x, y, label="y = x^2 + cos(x) + C", linewidth=2)
plt.plot(x, y_prime, label="y' = 2x - sin(x)", linewidth=2, color="red")
plt.title("Entry #016: solution and derivative")
plt.xlabel("x")
plt.ylabel("value")
plt.grid(True, alpha=0.35)
plt.legend()
plt.tight_layout()
plt.show()
