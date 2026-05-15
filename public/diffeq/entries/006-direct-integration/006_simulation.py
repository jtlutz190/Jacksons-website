import numpy as np
import plotly.graph_objects as go

x = np.linspace(0.03, 9, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = 2*np.sqrt(x)
    y_prime = 1/np.sqrt(x)

fig = go.Figure()
fig.add_trace(go.Scatter(x=x, y=y, mode="lines", name='y = 2sqrt(x) + C'))
fig.add_trace(
    go.Scatter(
        x=x,
        y=y_prime,
        mode="lines",
        name="y' = 1/sqrt(x)",
        line=dict(dash="dash"),
    )
)

fig.update_layout(
    title="Entry #006: solution and derivative",
    xaxis_title="x",
    yaxis_title="value",
    template="plotly_white",
    hovermode="x unified",
)

fig.show()
