import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-2, 2, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = np.exp(2*x)
    y_prime = 2*np.exp(2*x)

plt.figure(figsize=(8, 5))
plt.plot(x, y, label="y = e^(2x)", linewidth=2)
plt.plot(x, y_prime, label="y' = 2e^(2x)", linewidth=2, color="red")
plt.title("Entry #009: solution and derivative")
plt.xlabel("x")
plt.ylabel("value")
plt.grid(True, alpha=0.35)
plt.legend()
plt.tight_layout()
plt.show()
