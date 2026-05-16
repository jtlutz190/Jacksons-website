import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-3, 3, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = x**4/4 + np.exp(x)
    y_prime = x**3 + np.exp(x)

plt.figure(figsize=(8, 5))
plt.plot(x, y, label="y = x^4/4 + e^x", linewidth=2)
plt.plot(x, y_prime, label="y' = x^3 + e^x", linewidth=2, color="red")
plt.title("Entry #015: solution and derivative")
plt.xlabel("x")
plt.ylabel("value")
plt.grid(True, alpha=0.35)
plt.legend()
plt.tight_layout()
plt.show()
