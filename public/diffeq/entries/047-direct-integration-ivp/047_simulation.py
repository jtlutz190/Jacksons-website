import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-6, 6, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = 0.5*np.arctan(2*x) - 1
    y_prime = 1/(1 + 4*x**2)

plt.figure(figsize=(8, 5))
plt.plot(x, y, label="y = (1/2)arctan(2x) - 1", linewidth=2)
plt.plot(x, y_prime, label="y' = 1/(1 + 4x^2)", linewidth=2, color="red")
plt.title("Entry #047: solution and derivative")
plt.xlabel("x")
plt.ylabel("value")
plt.grid(True, alpha=0.35)
plt.legend()
plt.tight_layout()
plt.show()
