import numpy as np
import plotly.graph_objects as go

x = np.linspace(-2, 2, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = x**5 - x**2 + 7*x
    y_prime = 5*x**4 - 2*x + 7

fig = go.Figure()
fig.add_trace(go.Scatter(x=x, y=y, mode="lines", name='y = x^5 - x^2 + 7x + C'))
fig.add_trace(
    go.Scatter(
        x=x,
        y=y_prime,
        mode="lines",
        name="y' = 5x^4 - 2x + 7",
        line=dict(dash="dash"),
    )
)

fig.update_layout(
    title="Entry #003: solution and derivative",
    xaxis_title="x",
    yaxis_title="value",
    template="plotly_white",
    hovermode="x unified",
)

fig.show()
