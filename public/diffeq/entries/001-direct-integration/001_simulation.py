import numpy as np
import plotly.graph_objects as go

x = np.linspace(-3, 3, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = x**2
    y_prime = 2*x

fig = go.Figure()
fig.add_trace(go.Scatter(x=x, y=y, mode="lines", name='y = x^2 + C'))
fig.add_trace(
    go.Scatter(
        x=x,
        y=y_prime,
        mode="lines",
        name="y' = 2x",
        line=dict(dash="dash"),
    )
)

fig.update_layout(
    title="Entry #001: solution and derivative",
    xaxis_title="x",
    yaxis_title="value",
    template="plotly_white",
    hovermode="x unified",
)

fig.show()
