import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-6, 6, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = np.log(np.abs(x))
    y_prime = 1/x


def mask(values, limit=100):
    return np.where(np.isfinite(values) & (np.abs(values) <= limit), values, np.nan)

y = mask(y)
y_prime = mask(y_prime)
plt.figure(figsize=(8, 5))
plt.plot(x, y, label="y = ln|x|", linewidth=2)
plt.plot(x, y_prime, label="y' = 1/x", linewidth=2, color="red")
plt.title("Entry #018: solution and derivative")
plt.xlabel("x")
plt.ylabel("value")
plt.grid(True, alpha=0.35)
plt.legend()
plt.tight_layout()
plt.show()
