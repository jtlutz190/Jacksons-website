import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-3, 3, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = x**3/3 + 3*np.sin(x) - 4*np.exp(x)
    y_prime = x**2 + 3*np.cos(x) - 4*np.exp(x)


def clean(values, limit=100):
    values = np.asarray(values, dtype=float)
    return np.where(np.isfinite(values) & (np.abs(values) <= limit), values, np.nan)


y = clean(y)
y_prime = clean(y_prime)

plt.figure(figsize=(8, 5))
plt.plot(x, y, label="y = x^3/3 + 3sin(x) - 4e^x + C", linewidth=2)
plt.plot(x, y_prime, label="y' = x^2 + 3cos(x) - 4e^x", linewidth=2, linestyle="--")
plt.title("Entry #017: solution and derivative")
plt.xlabel("x")
plt.ylabel("value")
plt.grid(True, alpha=0.35)
plt.legend()
plt.tight_layout()
plt.show()
