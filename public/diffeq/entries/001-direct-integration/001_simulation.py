"""
Entry #001 simulation for y' = 2x with y(0) = 0.

This script compares the exact solution y = x^2 with a simple Euler
approximation, then plots the solution behavior and derivative field.
"""

from __future__ import annotations

import matplotlib.pyplot as plt
import numpy as np


def derivative(x: float, y: float) -> float:
    """Return y' for the differential equation y' = 2x."""
    return 2.0 * x


def exact_solution(x: np.ndarray) -> np.ndarray:
    """Return the exact solution satisfying y(0) = 0."""
    return x**2


def euler_from_zero(x_values: np.ndarray) -> np.ndarray:
    """
    Approximate y' = 2x from the initial condition y(0) = 0.

    The grid runs from negative to positive x-values, so the approximation
    integrates forward for x >= 0 and backward for x <= 0.
    """
    y_values = np.zeros_like(x_values)
    zero_index = int(np.argmin(np.abs(x_values)))

    for index in range(zero_index, len(x_values) - 1):
        step = x_values[index + 1] - x_values[index]
        y_values[index + 1] = y_values[index] + step * derivative(
            x_values[index], y_values[index]
        )

    for index in range(zero_index, 0, -1):
        step = x_values[index - 1] - x_values[index]
        y_values[index - 1] = y_values[index] + step * derivative(
            x_values[index], y_values[index]
        )

    return y_values


def main() -> None:
    x_values = np.linspace(-3.0, 3.0, 121)
    exact_y = exact_solution(x_values)
    euler_y = euler_from_zero(x_values)
    derivative_y = 2.0 * x_values

    max_error = np.max(np.abs(exact_y - euler_y))
    print(f"Maximum Euler error on [-3, 3]: {max_error:.4f}")

    fig, axes = plt.subplots(1, 2, figsize=(12, 4.8))

    axes[0].plot(x_values, exact_y, label="Exact solution: y = x^2", linewidth=2.5)
    axes[0].plot(
        x_values,
        euler_y,
        "--",
        label="Euler approximation",
        linewidth=2.0,
    )
    axes[0].set_title("Entry #001 solution behavior")
    axes[0].set_xlabel("x")
    axes[0].set_ylabel("y")
    axes[0].grid(True, alpha=0.3)
    axes[0].legend()

    axes[1].plot(x_values, derivative_y, color="crimson", linewidth=2.5)
    axes[1].axhline(0, color="black", linewidth=0.8)
    axes[1].set_title("Derivative: y' = 2x")
    axes[1].set_xlabel("x")
    axes[1].set_ylabel("slope")
    axes[1].grid(True, alpha=0.3)

    fig.suptitle("ODE #001: y' = 2x, y(0) = 0")
    fig.tight_layout()
    plt.show()


if __name__ == "__main__":
    main()
