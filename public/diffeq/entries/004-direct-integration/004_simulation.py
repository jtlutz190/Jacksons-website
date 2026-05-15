import numpy as np
import plotly.graph_objects as go

HTML_OUTPUT = "004_simulation.html"

x = np.linspace(-5, 5, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = -1/x
    y_prime = x**-2


def mask(values, limit=100):
    return np.where(np.isfinite(values) & (np.abs(values) <= limit), values, np.nan)

y = mask(y)
y_prime = mask(y_prime)

fig = go.Figure()
fig.add_trace(go.Scatter(x=x, y=y, mode="lines", name='y = -1/x + C'))
fig.add_trace(
    go.Scatter(
        x=x,
        y=y_prime,
        mode="lines",
        name="y' = x^(-2)",
        line=dict(dash="dash"),
    )
)

fig.update_layout(
    title="Entry #004: solution and derivative",
    xaxis_title="x",
    yaxis_title="value",
    template="plotly_white",
    hovermode="x unified",
)

fig.write_html(HTML_OUTPUT, include_plotlyjs="cdn", full_html=True)
fig.show()
