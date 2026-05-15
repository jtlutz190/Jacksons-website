import numpy as np
import plotly.graph_objects as go

HTML_OUTPUT = "007_simulation.html"

x = np.linspace(-3, 3, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = 2*x**3 - 4*np.log(np.abs(x))
    y_prime = 6*x**2 - 4/x


def mask(values, limit=100):
    return np.where(np.isfinite(values) & (np.abs(values) <= limit), values, np.nan)

y = mask(y)
y_prime = mask(y_prime)

fig = go.Figure()
fig.add_trace(go.Scatter(x=x, y=y, mode="lines", name='y = 2x^3 - 4ln|x| + C'))
fig.add_trace(
    go.Scatter(
        x=x,
        y=y_prime,
        mode="lines",
        name="y' = 6x^2 - 4x^-1",
        line=dict(dash="dash"),
    )
)

fig.update_layout(
    title="Entry #007: solution and derivative",
    xaxis_title="x",
    yaxis_title="value",
    template="plotly_white",
    hovermode="x unified",
)

fig.write_html(HTML_OUTPUT, include_plotlyjs="cdn", full_html=True)
fig.show()
