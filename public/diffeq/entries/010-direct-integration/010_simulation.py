import numpy as np
import plotly.graph_objects as go

HTML_OUTPUT = "010_simulation.html"

x = np.linspace(-2, 2, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = -(1/3)*np.exp(-3*x)
    y_prime = np.exp(-3*x)

fig = go.Figure()
fig.add_trace(go.Scatter(x=x, y=y, mode="lines", name='y = -1/3 e^(-3x) + C'))
fig.add_trace(
    go.Scatter(
        x=x,
        y=y_prime,
        mode="lines",
        name="y' = e^(-3x)",
        line=dict(dash="dash"),
    )
)

fig.update_layout(
    title="Entry #010: solution and derivative",
    xaxis_title="x",
    yaxis_title="value",
    template="plotly_white",
    hovermode="x unified",
)

fig.write_html(HTML_OUTPUT, include_plotlyjs="cdn", full_html=True)
fig.show()
