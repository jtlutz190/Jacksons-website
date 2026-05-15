"use client";

import { useEffect, useId, useMemo, useState } from "react";
import type { PointerEvent, WheelEvent } from "react";
import type { DiffeqGraph as DiffeqGraphData } from "@/data/diffeqEntries";
import { diffeqGraphFunctions } from "@/data/diffeqGraphFunctions";
import Latex from "@/components/Latex";

interface DiffeqGraphProps {
  graph: DiffeqGraphData;
}

const width = 720;
const height = 360;
const padding = 36;

interface ViewBox {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
}

interface DragState {
  graphX: number;
  graphY: number;
  view: ViewBox;
}

type Segment = Array<[number, number]>;

const curveColors = {
  solution: "#1d4ed8",
  derivative: "#dc2626",
} as const;

function niceStep(rawStep: number) {
  const exponent = Math.floor(Math.log10(rawStep));
  const fraction = rawStep / 10 ** exponent;

  if (fraction <= 1) {
    return 10 ** exponent;
  }

  if (fraction <= 2) {
    return 2 * 10 ** exponent;
  }

  if (fraction <= 5) {
    return 5 * 10 ** exponent;
  }

  return 10 * 10 ** exponent;
}

function createTicks(min: number, max: number, targetCount: number) {
  const step = niceStep((max - min) / targetCount);
  const start = Math.ceil(min / step) * step;
  const ticks: number[] = [];

  for (let value = start; value <= max + step * 0.5; value += step) {
    ticks.push(Number(value.toFixed(8)));
  }

  return ticks;
}

function clampRangeToView(
  [rangeMin, rangeMax]: [number, number],
  { xMin, xMax }: ViewBox,
) {
  const start = Math.max(rangeMin, xMin);
  const end = Math.min(rangeMax, xMax);

  return start < end ? ([start, end] as [number, number]) : null;
}

function sampleSegments({
  functionId,
  ranges,
  view,
  samples = 260,
}: {
  functionId: string;
  ranges?: Array<[number, number]>;
  view: ViewBox;
  samples?: number;
}) {
  const fn = diffeqGraphFunctions[functionId];

  if (!fn) {
    return [];
  }

  const sampleRanges = ranges
    ? ranges.flatMap((range) => {
        const clamped = clampRangeToView(range, view);
        return clamped ? [clamped] : [];
      })
    : [[view.xMin, view.xMax] as [number, number]];

  return sampleRanges.flatMap(([start, end]) => {
    let segment: Segment = [];
    const segments: Segment[] = [];

    for (let index = 0; index <= samples; index += 1) {
      const x = start + ((end - start) * index) / samples;
      const y = fn(x);

      if (y === null || !Number.isFinite(y) || Math.abs(y) > 1000000) {
        if (segment.length > 1) {
          segments.push(segment);
        }
        segment = [];
        continue;
      }

      segment.push([Number(x.toFixed(5)), Number(y.toFixed(5))]);
    }

    if (segment.length > 1) {
      segments.push(segment);
    }

    return segments;
  });
}

export default function DiffeqGraph({ graph }: DiffeqGraphProps) {
  const clipPathId = useId();
  const [view, setView] = useState<ViewBox>({
    xMin: graph.xMin,
    xMax: graph.xMax,
    yMin: graph.yMin,
    yMax: graph.yMax,
  });
  const [dragState, setDragState] = useState<DragState | null>(null);
  const plotWidth = width - padding * 2;
  const plotHeight = height - padding * 2;

  useEffect(() => {
    setView({
      xMin: graph.xMin,
      xMax: graph.xMax,
      yMin: graph.yMin,
      yMax: graph.yMax,
    });
    setDragState(null);
  }, [graph.xMin, graph.xMax, graph.yMin, graph.yMax]);

  const xTicks = useMemo(() => createTicks(view.xMin, view.xMax, 8), [view]);
  const yTicks = useMemo(() => createTicks(view.yMin, view.yMax, 6), [view]);
  const sampledCurves = useMemo(
    () =>
      graph.curves.map((curve) => ({
        ...curve,
        segments: sampleSegments({
          functionId: curve.functionId,
          ranges: curve.ranges,
          view,
        }),
      })),
    [graph.curves, view],
  );

  const scaleX = (x: number) =>
    padding + ((x - view.xMin) / (view.xMax - view.xMin)) * plotWidth;

  const scaleY = (y: number) =>
    padding + ((view.yMax - y) / (view.yMax - view.yMin)) * plotHeight;

  const axisX = view.yMin <= 0 && view.yMax >= 0 ? scaleY(0) : null;
  const axisY = view.xMin <= 0 && view.xMax >= 0 ? scaleX(0) : null;

  const pointsToString = (points: Array<[number, number]>) =>
    points.map(([x, y]) => `${scaleX(x).toFixed(2)},${scaleY(y).toFixed(2)}`).join(" ");

  const clientPointToGraph = (
    clientX: number,
    clientY: number,
    svg: SVGSVGElement,
    sourceView = view,
  ) => {
    const rect = svg.getBoundingClientRect();
    const svgX = ((clientX - rect.left) / rect.width) * width;
    const svgY = ((clientY - rect.top) / rect.height) * height;

    return {
      x: sourceView.xMin + ((svgX - padding) / plotWidth) * (sourceView.xMax - sourceView.xMin),
      y: sourceView.yMax - ((svgY - padding) / plotHeight) * (sourceView.yMax - sourceView.yMin),
    };
  };

  const zoom = (factor: number, centerX?: number, centerY?: number) => {
    setView((current) => {
      const xCenter = centerX ?? (current.xMin + current.xMax) / 2;
      const yCenter = centerY ?? (current.yMin + current.yMax) / 2;
      const nextWidth = (current.xMax - current.xMin) * factor;
      const nextHeight = (current.yMax - current.yMin) * factor;

      return {
        xMin: xCenter - nextWidth / 2,
        xMax: xCenter + nextWidth / 2,
        yMin: yCenter - nextHeight / 2,
        yMax: yCenter + nextHeight / 2,
      };
    });
  };

  const resetView = () => {
    setView({
      xMin: graph.xMin,
      xMax: graph.xMax,
      yMin: graph.yMin,
      yMax: graph.yMax,
    });
  };

  const handleWheel = (event: WheelEvent<SVGSVGElement>) => {
    event.preventDefault();
    const point = clientPointToGraph(event.clientX, event.clientY, event.currentTarget);
    zoom(event.deltaY > 0 ? 1.18 : 0.85, point.x, point.y);
  };

  const handlePointerDown = (event: PointerEvent<SVGSVGElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    const point = clientPointToGraph(event.clientX, event.clientY, event.currentTarget);
    setDragState({ graphX: point.x, graphY: point.y, view });
  };

  const handlePointerMove = (event: PointerEvent<SVGSVGElement>) => {
    if (!dragState) {
      return;
    }

    const point = clientPointToGraph(
      event.clientX,
      event.clientY,
      event.currentTarget,
      dragState.view,
    );
    const deltaX = point.x - dragState.graphX;
    const deltaY = point.y - dragState.graphY;

    setView({
      xMin: dragState.view.xMin - deltaX,
      xMax: dragState.view.xMax - deltaX,
      yMin: dragState.view.yMin - deltaY,
      yMax: dragState.view.yMax - deltaY,
    });
  };

  const handlePointerUp = (event: PointerEvent<SVGSVGElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    setDragState(null);
  };

  return (
    <section className="mt-8" aria-labelledby="graph-title">
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Visualization
          </p>
          <h2
            id="graph-title"
            className="mt-2 text-2xl font-semibold tracking-tight text-text"
          >
            Solution and derivative
          </h2>
        </div>

        <div className="flex w-fit overflow-hidden rounded-md border border-border bg-bg">
          <button
            type="button"
            onClick={() => zoom(0.75)}
            className="grid h-10 w-10 place-items-center border-r border-border text-lg text-text hover:bg-surface-2"
            aria-label="Zoom in"
            title="Zoom in"
          >
            +
          </button>
          <button
            type="button"
            onClick={() => zoom(1.35)}
            className="grid h-10 w-10 place-items-center border-r border-border text-lg text-text hover:bg-surface-2"
            aria-label="Zoom out"
            title="Zoom out"
          >
            -
          </button>
          <button
            type="button"
            onClick={resetView}
            className="h-10 px-3 text-sm font-medium text-soft hover:bg-surface-2 hover:text-text"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="card rounded-lg bg-surface p-4">
        <div className="aspect-[2/1] overflow-hidden rounded border border-border bg-white">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            role="img"
            aria-label="Interactive graph of y and y prime"
            className="h-full w-full cursor-grab touch-none active:cursor-grabbing"
            onWheel={handleWheel}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            <defs>
              <clipPath id={clipPathId}>
                <rect
                  x={padding}
                  y={padding}
                  width={plotWidth}
                  height={plotHeight}
                />
              </clipPath>
            </defs>

            <rect width={width} height={height} fill="#ffffff" />

            <g stroke="#e5e7eb" strokeWidth="1">
              {xTicks.map((x) => (
                <line
                  key={`x-${x}`}
                  x1={scaleX(x)}
                  x2={scaleX(x)}
                  y1={padding}
                  y2={height - padding}
                />
              ))}
              {yTicks.map((y) => (
                <line
                  key={`y-${y}`}
                  x1={padding}
                  x2={width - padding}
                  y1={scaleY(y)}
                  y2={scaleY(y)}
                />
              ))}
            </g>

            {axisX === null ? null : (
              <line
                x1={padding}
                x2={width - padding}
                y1={axisX}
                y2={axisX}
                stroke="#4b5563"
                strokeWidth="1.5"
              />
            )}
            {axisY === null ? null : (
              <line
                x1={axisY}
                x2={axisY}
                y1={padding}
                y2={height - padding}
                stroke="#4b5563"
                strokeWidth="1.5"
              />
            )}

            <g clipPath={`url(#${clipPathId})`}>
              {sampledCurves.flatMap((curve) =>
                curve.segments.map((segment, index) => (
                  <polyline
                    key={`${curve.label}-${index}`}
                    points={pointsToString(segment)}
                    fill="none"
                    stroke={curveColors[curve.stroke]}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                )),
              )}
            </g>

            <rect
              x={padding}
              y={padding}
              width={plotWidth}
              height={plotHeight}
              fill="none"
              stroke="#9ca3af"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-sm text-soft">
          {graph.curves.map((curve) => (
            <div key={curve.label} className="flex items-center gap-2">
              <span
                className={
                  curve.stroke === "solution"
                    ? "h-0.5 w-8 rounded bg-[#1d4ed8]"
                    : "h-0.5 w-8 rounded bg-[#dc2626]"
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
