import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 6, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = (8/3)*x**1.5 + 2
    y_prime = 4*np.sqrt(x)

plt.figure(figsize=(8, 5))
plt.plot(x, y, label="y = (8/3)x^(3/2) + 2", linewidth=2)
plt.plot(x, y_prime, label="y' = 4sqrt(x)", linewidth=2, color="red")
plt.title("Entry #030: solution and derivative")
plt.xlabel("x")
plt.ylabel("value")
plt.grid(True, alpha=0.35)
plt.legend()
plt.tight_layout()
plt.show()
