import numpy as np
import plotly.graph_objects as go

x = np.linspace(-7, 7, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = 4*np.sin(x)
    y_prime = 4*np.cos(x)

fig = go.Figure()
fig.add_trace(go.Scatter(x=x, y=y, mode="lines", name='y = 4sin(x) + C'))
fig.add_trace(
    go.Scatter(
        x=x,
        y=y_prime,
        mode="lines",
        name="y' = 4cos(x)",
        line=dict(dash="dash"),
    )
)

fig.update_layout(
    title="Entry #012: solution and derivative",
    xaxis_title="x",
    yaxis_title="value",
    template="plotly_white",
    hovermode="x unified",
)

fig.show()
