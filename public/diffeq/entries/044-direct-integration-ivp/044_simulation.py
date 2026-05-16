import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-2.5, 2.5, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = np.sin(5*x) + 2
    y_prime = 5*np.cos(5*x)

plt.figure(figsize=(8, 5))
plt.plot(x, y, label="y = sin(5x) + 2", linewidth=2)
plt.plot(x, y_prime, label="y' = 5cos(5x)", linewidth=2, color="red")
plt.title("Entry #044: solution and derivative")
plt.xlabel("x")
plt.ylabel("value")
plt.grid(True, alpha=0.35)
plt.legend()
plt.tight_layout()
plt.show()
