import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-0.99, 0.99, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = np.arcsin(x)
    y_prime = 1/np.sqrt(1 - x**2)

plt.figure(figsize=(8, 5))
plt.plot(x, y, label="y = arcsin(x)", linewidth=2)
plt.plot(x, y_prime, label="y' = 1/sqrt(1 - x^2)", linewidth=2, color="red")
plt.title("Entry #023: solution and derivative")
plt.xlabel("x")
plt.ylabel("value")
plt.grid(True, alpha=0.35)
plt.legend()
plt.tight_layout()
plt.show()
