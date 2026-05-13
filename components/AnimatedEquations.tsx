"use client";

import { useEffect, useState, type CSSProperties } from "react";

const equations = [
  {
    text: "y' = 2x",
    top: "52%",
    left: "7%",
    delay: 0,
  },
  {
    text: "dy/dx + p(x)y = q(x)",
    top: "64%",
    left: "66%",
    delay: 5000,
  },
  {
    text: "x(t) = c1 e^(lambda t)",
    top: "81%",
    left: "12%",
    delay: 10000,
  },
  {
    text: "L[y''] + omega^2 y = 0",
    top: "43%",
    left: "58%",
    delay: 15000,
  },
  {
    text: "Y(s) = L{y(t)}",
    top: "72%",
    left: "39%",
    delay: 20000,
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
          await wait(randomBetween(8000, 15000));
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
              top: equation.top,
              left: equation.left,
            } as CSSProperties
          }
        >
          {traces[index].text}
        </span>
      ))}
    </div>
  );
}
