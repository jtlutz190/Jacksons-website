import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0.03, 9, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = 2*np.sqrt(x)
    y_prime = 1/np.sqrt(x)

plt.figure(figsize=(8, 5))
plt.plot(x, y, label="y = 2sqrt(x) + C", linewidth=2)
plt.plot(x, y_prime, label="y' = 1/sqrt(x)", linewidth=2, linestyle="--")
plt.title("Entry #006: solution and derivative")
plt.xlabel("x")
plt.ylabel("value")
plt.grid(True, alpha=0.35)
plt.legend()
plt.tight_layout()
plt.show()
