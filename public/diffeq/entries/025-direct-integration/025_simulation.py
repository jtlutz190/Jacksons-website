import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-4, 4, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = np.sin(x**2)
    y_prime = 2*x*np.cos(x**2)

plt.figure(figsize=(8, 5))
plt.plot(x, y, label="y = sin(x^2) + C", linewidth=2)
plt.plot(x, y_prime, label="y' = 2xcos(x^2)", linewidth=2, linestyle="--")
plt.title("Entry #025: solution and derivative")
plt.xlabel("x")
plt.ylabel("value")
plt.grid(True, alpha=0.35)
plt.legend()
plt.tight_layout()
plt.show()
