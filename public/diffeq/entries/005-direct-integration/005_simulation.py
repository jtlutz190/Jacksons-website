import numpy as np
import plotly.graph_objects as go

HTML_OUTPUT = "005_simulation.html"

x = np.linspace(0, 6, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = (8/3)*np.power(x, 1.5)
    y_prime = 4*np.sqrt(x)

fig = go.Figure()
fig.add_trace(go.Scatter(x=x, y=y, mode="lines", name='y = (8/3)x^(3/2) + C'))
fig.add_trace(
    go.Scatter(
        x=x,
        y=y_prime,
        mode="lines",
        name="y' = 4sqrt(x)",
        line=dict(dash="dash"),
    )
)

fig.update_layout(
    title="Entry #005: solution and derivative",
    xaxis_title="x",
    yaxis_title="value",
    template="plotly_white",
    hovermode="x unified",
)

fig.write_html(HTML_OUTPUT, include_plotlyjs="cdn", full_html=True)
fig.show()
