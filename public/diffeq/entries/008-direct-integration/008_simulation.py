import numpy as np
import plotly.graph_objects as go

HTML_OUTPUT = "008_simulation.html"

x = np.linspace(-3, 3, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = np.exp(x)
    y_prime = np.exp(x)

fig = go.Figure()
fig.add_trace(go.Scatter(x=x, y=y, mode="lines", name='y = e^x + C'))
fig.add_trace(
    go.Scatter(
        x=x,
        y=y_prime,
        mode="lines",
        name="y' = e^x",
        line=dict(dash="dash"),
    )
)

fig.update_layout(
    title="Entry #008: solution and derivative",
    xaxis_title="x",
    yaxis_title="value",
    template="plotly_white",
    hovermode="x unified",
)

fig.write_html(HTML_OUTPUT, include_plotlyjs="cdn", full_html=True)
fig.show()
