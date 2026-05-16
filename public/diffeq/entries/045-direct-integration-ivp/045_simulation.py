import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-4, 4, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = -np.cos(x**2) + 4
    y_prime = 2*x*np.sin(x**2)

plt.figure(figsize=(8, 5))
plt.plot(x, y, label="y = -cos(x^2) + 4", linewidth=2)
plt.plot(x, y_prime, label="y' = 2xsin(x^2)", linewidth=2, color="red")
plt.title("Entry #045: solution and derivative")
plt.xlabel("x")
plt.ylabel("value")
plt.grid(True, alpha=0.35)
plt.legend()
plt.tight_layout()
plt.show()
