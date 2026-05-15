import numpy as np
import plotly.graph_objects as go

x = np.linspace(-1.5, 1.5, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = (1/3)*np.exp(x**3)
    y_prime = x**2*np.exp(x**3)

fig = go.Figure()
fig.add_trace(go.Scatter(x=x, y=y, mode="lines", name='y = (1/3)e^(x^3) + C'))
fig.add_trace(
    go.Scatter(
        x=x,
        y=y_prime,
        mode="lines",
        name="y' = x^2e^(x^3)",
        line=dict(dash="dash"),
    )
)

fig.update_layout(
    title="Entry #024: solution and derivative",
    xaxis_title="x",
    yaxis_title="value",
    template="plotly_white",
    hovermode="x unified",
)

fig.show()
