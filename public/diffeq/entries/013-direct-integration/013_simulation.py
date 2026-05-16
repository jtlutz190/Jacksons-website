import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-4.5, 4.5, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = 3*np.tan(x)
    y_prime = 3/(np.cos(x)**2)


def mask(values, limit=100):
    return np.where(np.isfinite(values) & (np.abs(values) <= limit), values, np.nan)

y = mask(y)
y_prime = mask(y_prime)
plt.figure(figsize=(8, 5))
plt.plot(x, y, label="y = 3tan(x)", linewidth=2)
plt.plot(x, y_prime, label="y' = 3sec^2(x)", linewidth=2, color="red")
plt.title("Entry #013: solution and derivative")
plt.xlabel("x")
plt.ylabel("value")
plt.grid(True, alpha=0.35)
plt.legend()
plt.tight_layout()
plt.show()
