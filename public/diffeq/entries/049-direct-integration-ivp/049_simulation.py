import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-3, 3, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = np.exp(x) + np.sin(x) + x**2 - 1
    y_prime = np.exp(x) + np.cos(x) + 2*x

plt.figure(figsize=(8, 5))
plt.plot(x, y, label="y = e^x + sin(x) + x^2 - 1", linewidth=2)
plt.plot(x, y_prime, label="y' = e^x + cos(x) + 2x", linewidth=2, color="red")
plt.title("Entry #049: solution and derivative")
plt.xlabel("x")
plt.ylabel("value")
plt.grid(True, alpha=0.35)
plt.legend()
plt.tight_layout()
plt.show()
