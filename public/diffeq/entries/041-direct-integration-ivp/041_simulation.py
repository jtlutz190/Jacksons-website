import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 4, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = 2*x**1.5 + 2*np.exp(x) + 3
    y_prime = 3*np.sqrt(x) + 2*np.exp(x)

plt.figure(figsize=(8, 5))
plt.plot(x, y, label="y = 2x^(3/2) + 2e^x + 3", linewidth=2)
plt.plot(x, y_prime, label="y' = 3sqrt(x) + 2e^x", linewidth=2, color="red")
plt.title("Entry #041: solution and derivative")
plt.xlabel("x")
plt.ylabel("value")
plt.grid(True, alpha=0.35)
plt.legend()
plt.tight_layout()
plt.show()
