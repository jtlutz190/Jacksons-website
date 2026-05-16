import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-6, 6, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = 0.5*np.log(np.abs(x**2 + 1))
    y_prime = x/(x**2 + 1)

plt.figure(figsize=(8, 5))
plt.plot(x, y, label="y = (1/2)ln|x^2 + 1|", linewidth=2)
plt.plot(x, y_prime, label="y' = x/(x^2 + 1)", linewidth=2, color="red")
plt.title("Entry #020: solution and derivative")
plt.xlabel("x")
plt.ylabel("value")
plt.grid(True, alpha=0.35)
plt.legend()
plt.tight_layout()
plt.show()
