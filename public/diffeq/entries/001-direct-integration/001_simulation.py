import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-3, 3, 400)
y = x**2

plt.plot(x, y)
plt.title("Solution family for y' = 2x")
plt.xlabel("x")
plt.ylabel("y")
plt.grid(True)
plt.show()
