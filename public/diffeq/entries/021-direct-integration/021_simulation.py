import numpy as np
import plotly.graph_objects as go

x = np.linspace(-6, 6, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = np.log(np.abs(x**2 + 5))
    y_prime = (2*x)/(x**2 + 5)

fig = go.Figure()
fig.add_trace(go.Scatter(x=x, y=y, mode="lines", name='y = ln|x^2 + 5| + C'))
fig.add_trace(
    go.Scatter(
        x=x,
        y=y_prime,
        mode="lines",
        name="y' = (2x)/(x^2 + 5)",
        line=dict(dash="dash"),
    )
)

fig.update_layout(
    title="Entry #021: solution and derivative",
    xaxis_title="x",
    yaxis_title="value",
    template="plotly_white",
    hovermode="x unified",
)

fig.show()
