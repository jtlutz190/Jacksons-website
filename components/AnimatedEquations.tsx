"use client";

import { useEffect, useState, type CSSProperties } from "react";

const equations = [
  {
    text: "y' = 2x",
    top: "17%",
    left: "7%",
    delay: 0,
    opacity: 0.48,
    size: "1rem",
  },
  {
    text: "dy/dx + p(x)y = q(x)",
    top: "31%",
    left: "63%",
    delay: 9000,
    opacity: 0.34,
    size: "0.88rem",
  },
  {
    text: "x(t) = c1 e^(lambda t)",
    top: "79%",
    left: "10%",
    delay: 19000,
    opacity: 0.4,
    size: "0.95rem",
  },
  {
    text: "L[y''] + omega^2 y = 0",
    top: "47%",
    left: "55%",
    delay: 31000,
    opacity: 0.3,
    size: "0.86rem",
  },
  {
    text: "Y(s) = L{y(t)}",
    top: "68%",
    left: "37%",
    delay: 43000,
    opacity: 0.36,
    size: "0.9rem",
  },
];

type TraceState = {
  text: string;
  phase: "idle" | "writing" | "holding" | "fading";
};

const initialTraces = equations.map(() => ({
  text: "",
  phase: "idle" as const,
}));

function wait(milliseconds: number) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, milliseconds);
  });
}

function randomBetween(minimum: number, maximum: number) {
  return minimum + Math.random() * (maximum - minimum);
}

export default function AnimatedEquations() {
  const [traces, setTraces] = useState<TraceState[]>(initialTraces);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    let cancelled = false;

    const updateTrace = (index: number, nextTrace: TraceState) => {
      if (cancelled) {
        return;
      }

      setTraces((current) =>
        current.map((trace, traceIndex) =>
          traceIndex === index ? nextTrace : trace,
        ),
      );
    };

    equations.forEach((equation, index) => {
      const runTrace = async () => {
        await wait(equation.delay);

        while (!cancelled) {
          updateTrace(index, { text: "", phase: "writing" });

          for (let character = 1; character <= equation.text.length; character += 1) {
            await wait(randomBetween(45, 210));
            updateTrace(index, {
              text: equation.text.slice(0, character),
              phase: "writing",
            });
          }

          updateTrace(index, { text: equation.text, phase: "holding" });
          await wait(randomBetween(1300, 2300));

          updateTrace(index, { text: equation.text, phase: "fading" });
          await wait(1300);

          updateTrace(index, { text: "", phase: "idle" });
          await wait(randomBetween(26000, 46000));
        }
      };

      void runTrace();
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="equation-traces" aria-hidden="true">
      {equations.map((equation, index) => (
        <span
          key={equation.text}
          className="equation-trace"
          data-phase={traces[index].phase}
          style={
            {
              "--trace-opacity": equation.opacity,
              "--trace-hold-opacity": equation.opacity * 0.78,
              top: equation.top,
              left: equation.left,
              fontSize: equation.size,
            } as CSSProperties
          }
        >
          {traces[index].text}
        </span>
      ))}
    </div>
  );
}
