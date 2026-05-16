import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-1.5, 1.5, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = (1/3)*np.exp(x**3)
    y_prime = x**2*np.exp(x**3)

plt.figure(figsize=(8, 5))
plt.plot(x, y, label="y = (1/3)e^(x^3)", linewidth=2)
plt.plot(x, y_prime, label="y' = x^2e^(x^3)", linewidth=2, color="red")
plt.title("Entry #024: solution and derivative")
plt.xlabel("x")
plt.ylabel("value")
plt.grid(True, alpha=0.35)
plt.legend()
plt.tight_layout()
plt.show()
