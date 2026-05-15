import numpy as np
import plotly.graph_objects as go

HTML_OUTPUT = "016_simulation.html"

x = np.linspace(-4, 4, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = x**2 + np.cos(x)
    y_prime = 2*x - np.sin(x)

fig = go.Figure()
fig.add_trace(go.Scatter(x=x, y=y, mode="lines", name='y = x^2 + cos(x) + C'))
fig.add_trace(
    go.Scatter(
        x=x,
        y=y_prime,
        mode="lines",
        name="y' = 2x - sin(x)",
        line=dict(dash="dash"),
    )
)

fig.update_layout(
    title="Entry #016: solution and derivative",
    xaxis_title="x",
    yaxis_title="value",
    template="plotly_white",
    hovermode="x unified",
)

fig.write_html(HTML_OUTPUT, include_plotlyjs="cdn", full_html=True)
fig.show()
