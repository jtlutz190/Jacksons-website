"use client";

import { useEffect, useState, type CSSProperties } from "react";

const equations = [
  {
    text: "y' = 2x",
    top: "17%",
    left: "7%",
    delay: 0,
    opacity: 0.7,
    size: "1rem",
  },
  {
    text: "dy/dx + p(x)y = q(x)",
    top: "31%",
    left: "63%",
    delay: 2400,
    opacity: 0.46,
    size: "0.88rem",
  },
  {
    text: "x(t) = c1 e^(lambda t)",
    top: "79%",
    left: "10%",
    delay: 5200,
    opacity: 0.58,
    size: "0.95rem",
  },
  {
    text: "L[y''] + omega^2 y = 0",
    top: "47%",
    left: "55%",
    delay: 7600,
    opacity: 0.38,
    size: "0.86rem",
  },
  {
    text: "Y(s) = L{y(t)}",
    top: "68%",
    left: "37%",
    delay: 10200,
    opacity: 0.62,
    size: "0.9rem",
  },
  {
    text: "int e^x dx = e^x + C",
    top: "22%",
    left: "73%",
    delay: 12800,
    opacity: 0.32,
    size: "0.82rem",
  },
  {
    text: "nabla dot E = rho/epsilon0",
    top: "39%",
    left: "9%",
    delay: 15400,
    opacity: 0.52,
    size: "0.92rem",
  },
  {
    text: "F(s) = int_0^inf f(t)e^(-st)dt",
    top: "58%",
    left: "70%",
    delay: 18100,
    opacity: 0.28,
    size: "0.78rem",
  },
  {
    text: "lambda v = Av",
    top: "86%",
    left: "68%",
    delay: 20700,
    opacity: 0.6,
    size: "0.94rem",
  },
  {
    text: "theta'' + sin(theta) = 0",
    top: "54%",
    left: "18%",
    delay: 23200,
    opacity: 0.36,
    size: "0.84rem",
  },
  {
    text: "sum a_n sin(n*pi*x/L)",
    top: "12%",
    left: "39%",
    delay: 4200,
    opacity: 0.44,
    size: "0.8rem",
  },
  {
    text: "x' = Ax",
    top: "73%",
    left: "4%",
    delay: 9100,
    opacity: 0.68,
    size: "1rem",
  },
  {
    text: "dQ/dt = k(Q_in - Q)",
    top: "35%",
    left: "33%",
    delay: 13600,
    opacity: 0.34,
    size: "0.86rem",
  },
  {
    text: "V = IR",
    top: "63%",
    left: "53%",
    delay: 18900,
    opacity: 0.74,
    size: "0.98rem",
  },
  {
    text: "y = C e^(kx)",
    top: "91%",
    left: "29%",
    delay: 22100,
    opacity: 0.42,
    size: "0.88rem",
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
