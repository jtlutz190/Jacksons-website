import numpy as np
import plotly.graph_objects as go

x = np.linspace(-6, 6, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = 0.5*np.log(np.abs(x**2 + 1))
    y_prime = x/(x**2 + 1)

fig = go.Figure()
fig.add_trace(go.Scatter(x=x, y=y, mode="lines", name='y = (1/2)ln|x^2 + 1| + C'))
fig.add_trace(
    go.Scatter(
        x=x,
        y=y_prime,
        mode="lines",
        name="y' = x/(x^2 + 1)",
        line=dict(dash="dash"),
    )
)

fig.update_layout(
    title="Entry #020: solution and derivative",
    xaxis_title="x",
    yaxis_title="value",
    template="plotly_white",
    hovermode="x unified",
)

fig.show()
