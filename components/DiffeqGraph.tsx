import type { DiffeqGraph as DiffeqGraphData } from "@/data/diffeqEntries";
import Latex from "@/components/Latex";

interface DiffeqGraphProps {
  graph: DiffeqGraphData;
}

const width = 720;
const height = 360;
const padding = 36;

export default function DiffeqGraph({ graph }: DiffeqGraphProps) {
  const plotWidth = width - padding * 2;
  const plotHeight = height - padding * 2;

  const scaleX = (x: number) =>
    padding + ((x - graph.xMin) / (graph.xMax - graph.xMin)) * plotWidth;

  const scaleY = (y: number) =>
    padding + ((graph.yMax - y) / (graph.yMax - graph.yMin)) * plotHeight;

  const axisX = graph.yMin <= 0 && graph.yMax >= 0 ? scaleY(0) : height - padding;
  const axisY = graph.xMin <= 0 && graph.xMax >= 0 ? scaleX(0) : padding;

  return (
    <section className="mt-8" aria-labelledby="graph-title">
      <div className="mb-5">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
          Graph
        </p>
        <h2
          id="graph-title"
          className="mt-2 text-2xl font-semibold tracking-tight text-text"
        >
          Solution and Derivative
        </h2>
      </div>

      <div className="card rounded-lg bg-surface p-4">
        <div className="aspect-[2/1] overflow-hidden rounded border border-border bg-bg">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            role="img"
            aria-label="Graph of y equals x squared and y prime equals two x"
            className="h-full w-full"
          >
            <g stroke="rgba(43, 51, 61, 0.82)" strokeWidth="1">
              {[-2, -1, 1, 2].map((x) => (
                <line
                  key={`x-${x}`}
                  x1={scaleX(x)}
                  x2={scaleX(x)}
                  y1={padding}
                  y2={height - padding}
                />
              ))}
              {[-4, -2, 2, 4, 6, 8].map((y) => (
                <line
                  key={`y-${y}`}
                  x1={padding}
                  x2={width - padding}
                  y1={scaleY(y)}
                  y2={scaleY(y)}
                />
              ))}
            </g>

            <line
              x1={padding}
              x2={width - padding}
              y1={axisX}
              y2={axisX}
              stroke="rgba(184, 194, 204, 0.48)"
              strokeWidth="1.5"
            />
            <line
              x1={axisY}
              x2={axisY}
              y1={padding}
              y2={height - padding}
              stroke="rgba(184, 194, 204, 0.48)"
              strokeWidth="1.5"
            />

            {graph.curves.map((curve) => (
              <polyline
                key={curve.label}
                points={curve.points
                  .map(([x, y]) => `${scaleX(x).toFixed(2)},${scaleY(y).toFixed(2)}`)
                  .join(" ")}
                fill="none"
                stroke={
                  curve.stroke === "solution"
                    ? "rgba(237, 242, 247, 0.92)"
                    : "rgba(138, 180, 198, 0.92)"
                }
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
            ))}
          </svg>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-sm text-soft">
          {graph.curves.map((curve) => (
            <div key={curve.label} className="flex items-center gap-2">
              <span
                className={
                  curve.stroke === "solution"
                    ? "h-0.5 w-8 rounded bg-text"
                    : "h-0.5 w-8 rounded bg-accent"
                }
              />
              <Latex math={curve.latex} className="latex-inline" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
