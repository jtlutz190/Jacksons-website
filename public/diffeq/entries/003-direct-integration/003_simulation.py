import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-2, 2, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = x**5 - x**2 + 7*x
    y_prime = 5*x**4 - 2*x + 7


def clean(values, limit=100):
    values = np.asarray(values, dtype=float)
    return np.where(np.isfinite(values) & (np.abs(values) <= limit), values, np.nan)


y = clean(y)
y_prime = clean(y_prime)

plt.figure(figsize=(8, 5))
plt.plot(x, y, label="y = x^5 - x^2 + 7x + C", linewidth=2)
plt.plot(x, y_prime, label="y' = 5x^4 - 2x + 7", linewidth=2, linestyle="--")
plt.title("Entry #003: solution and derivative")
plt.xlabel("x")
plt.ylabel("value")
plt.grid(True, alpha=0.35)
plt.legend()
plt.tight_layout()
plt.show()
