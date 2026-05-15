import numpy as np
import plotly.graph_objects as go

x = np.linspace(-6, 6, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = np.log(np.abs(x))
    y_prime = 1/x


def mask(values, limit=100):
    return np.where(np.isfinite(values) & (np.abs(values) <= limit), values, np.nan)

y = mask(y)
y_prime = mask(y_prime)

fig = go.Figure()
fig.add_trace(go.Scatter(x=x, y=y, mode="lines", name='y = ln|x| + C'))
fig.add_trace(
    go.Scatter(
        x=x,
        y=y_prime,
        mode="lines",
        name="y' = 1/x",
        line=dict(dash="dash"),
    )
)

fig.update_layout(
    title="Entry #018: solution and derivative",
    xaxis_title="x",
    yaxis_title="value",
    template="plotly_white",
    hovermode="x unified",
)

fig.show()
