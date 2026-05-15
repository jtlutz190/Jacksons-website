import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-2, 2, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = -(1/3)*np.exp(-3*x)
    y_prime = np.exp(-3*x)

plt.figure(figsize=(8, 5))
plt.plot(x, y, label="y = -1/3 e^(-3x) + C", linewidth=2)
plt.plot(x, y_prime, label="y' = e^(-3x)", linewidth=2, linestyle="--")
plt.title("Entry #010: solution and derivative")
plt.xlabel("x")
plt.ylabel("value")
plt.grid(True, alpha=0.35)
plt.legend()
plt.tight_layout()
plt.show()
