import numpy as np
import plotly.graph_objects as go

HTML_OUTPUT = "022_simulation.html"

x = np.linspace(-6, 6, 800)

with np.errstate(divide="ignore", invalid="ignore", over="ignore"):
    y = np.arctan(x)
    y_prime = 1/(1 + x**2)

fig = go.Figure()
fig.add_trace(go.Scatter(x=x, y=y, mode="lines", name='y = arctan(x) + C'))
fig.add_trace(
    go.Scatter(
        x=x,
        y=y_prime,
        mode="lines",
        name="y' = 1/(1 + x^2)",
        line=dict(dash="dash"),
    )
)

fig.update_layout(
    title="Entry #022: solution and derivative",
    xaxis_title="x",
    yaxis_title="value",
    template="plotly_white",
    hovermode="x unified",
)

fig.write_html(HTML_OUTPUT, include_plotlyjs="cdn", full_html=True)
fig.show()
