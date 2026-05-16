import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-6, 6, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = np.log(np.abs(x**2 + 5))
    y_prime = (2*x)/(x**2 + 5)

plt.figure(figsize=(8, 5))
plt.plot(x, y, label="y = ln|x^2 + 5|", linewidth=2)
plt.plot(x, y_prime, label="y' = (2x)/(x^2 + 5)", linewidth=2, color="red")
plt.title("Entry #021: solution and derivative")
plt.xlabel("x")
plt.ylabel("value")
plt.grid(True, alpha=0.35)
plt.legend()
plt.tight_layout()
plt.show()
