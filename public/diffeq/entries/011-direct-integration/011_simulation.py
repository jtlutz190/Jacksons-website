import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-7, 7, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = -np.cos(x)
    y_prime = np.sin(x)

plt.figure(figsize=(8, 5))
plt.plot(x, y, label="y = -cos(x) + C", linewidth=2)
plt.plot(x, y_prime, label="y' = sin(x)", linewidth=2, linestyle="--")
plt.title("Entry #011: solution and derivative")
plt.xlabel("x")
plt.ylabel("value")
plt.grid(True, alpha=0.35)
plt.legend()
plt.tight_layout()
plt.show()
