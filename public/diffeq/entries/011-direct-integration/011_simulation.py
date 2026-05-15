import numpy as np
import plotly.graph_objects as go

HTML_OUTPUT = "011_simulation.html"

x = np.linspace(-7, 7, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = -np.cos(x)
    y_prime = np.sin(x)

fig = go.Figure()
fig.add_trace(go.Scatter(x=x, y=y, mode="lines", name='y = -cos(x) + C'))
fig.add_trace(
    go.Scatter(
        x=x,
        y=y_prime,
        mode="lines",
        name="y' = sin(x)",
        line=dict(dash="dash"),
    )
)

fig.update_layout(
    title="Entry #011: solution and derivative",
    xaxis_title="x",
    yaxis_title="value",
    template="plotly_white",
    hovermode="x unified",
)

fig.write_html(HTML_OUTPUT, include_plotlyjs="cdn", full_html=True)
fig.show()
