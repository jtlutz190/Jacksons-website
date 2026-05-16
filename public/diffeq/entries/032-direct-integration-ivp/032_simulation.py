import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-3, 3, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = 2*x**3 - 4*np.log(np.abs(x)) - 2
    y_prime = 6*x**2 - 4/x


def mask(values, limit=100):
    return np.where(np.isfinite(values) & (np.abs(values) <= limit), values, np.nan)

y = mask(y)
y_prime = mask(y_prime)
plt.figure(figsize=(8, 5))
plt.plot(x, y, label="y = 2x^3 - 4ln|x| - 2", linewidth=2)
plt.plot(x, y_prime, label="y' = 6x^2 - 4x^(-1)", linewidth=2, color="red")
plt.title("Entry #032: solution and derivative")
plt.xlabel("x")
plt.ylabel("value")
plt.grid(True, alpha=0.35)
plt.legend()
plt.tight_layout()
plt.show()
