import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-6, 6, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = 0.5*np.log(np.abs(x**2 + 1))
    y_prime = x/(x**2 + 1)


def clean(values, limit=100):
    values = np.asarray(values, dtype=float)
    return np.where(np.isfinite(values) & (np.abs(values) <= limit), values, np.nan)


y = clean(y)
y_prime = clean(y_prime)

plt.figure(figsize=(8, 5))
plt.plot(x, y, label="y = (1/2)ln|x^2 + 1| + C", linewidth=2)
plt.plot(x, y_prime, label="y' = x/(x^2 + 1)", linewidth=2, linestyle="--")
plt.title("Entry #020: solution and derivative")
plt.xlabel("x")
plt.ylabel("value")
plt.grid(True, alpha=0.35)
plt.legend()
plt.tight_layout()
plt.show()
