import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-7, 7, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = 4*np.sin(x)
    y_prime = 4*np.cos(x)

plt.figure(figsize=(8, 5))
plt.plot(x, y, label="y = 4sin(x)", linewidth=2)
plt.plot(x, y_prime, label="y' = 4cos(x)", linewidth=2, color="red")
plt.title("Entry #012: solution and derivative")
plt.xlabel("x")
plt.ylabel("value")
plt.grid(True, alpha=0.35)
plt.legend()
plt.tight_layout()
plt.show()
