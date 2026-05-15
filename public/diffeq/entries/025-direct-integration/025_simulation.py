import numpy as np
import plotly.graph_objects as go

HTML_OUTPUT = "025_simulation.html"

x = np.linspace(-4, 4, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = np.sin(x**2)
    y_prime = 2*x*np.cos(x**2)

fig = go.Figure()
fig.add_trace(go.Scatter(x=x, y=y, mode="lines", name='y = sin(x^2) + C'))
fig.add_trace(
    go.Scatter(
        x=x,
        y=y_prime,
        mode="lines",
        name="y' = 2xcos(x^2)",
        line=dict(dash="dash"),
    )
)

fig.update_layout(
    title="Entry #025: solution and derivative",
    xaxis_title="x",
    yaxis_title="value",
    template="plotly_white",
    hovermode="x unified",
)

fig.write_html(HTML_OUTPUT, include_plotlyjs="cdn", full_html=True)
fig.show()
