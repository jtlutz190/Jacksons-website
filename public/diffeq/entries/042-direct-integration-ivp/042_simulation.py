import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-6, 6, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = np.log(x**2 + 4) + 1 - np.log(4)
    y_prime = 2*x/(x**2 + 4)

plt.figure(figsize=(8, 5))
plt.plot(x, y, label="y = ln(x^2 + 4) + 1 - ln(4)", linewidth=2)
plt.plot(x, y_prime, label="y' = 2x/(x^2 + 4)", linewidth=2, color="red")
plt.title("Entry #042: solution and derivative")
plt.xlabel("x")
plt.ylabel("value")
plt.grid(True, alpha=0.35)
plt.legend()
plt.tight_layout()
plt.show()
