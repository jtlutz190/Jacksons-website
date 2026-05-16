import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-2, 2, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = x**5 - x**2 + 7*x - 1
    y_prime = 5*x**4 - 2*x + 7

plt.figure(figsize=(8, 5))
plt.plot(x, y, label="y = x^5 - x^2 + 7x - 1", linewidth=2)
plt.plot(x, y_prime, label="y' = 5x^4 - 2x + 7", linewidth=2, color="red")
plt.title("Entry #028: solution and derivative")
plt.xlabel("x")
plt.ylabel("value")
plt.grid(True, alpha=0.35)
plt.legend()
plt.tight_layout()
plt.show()
