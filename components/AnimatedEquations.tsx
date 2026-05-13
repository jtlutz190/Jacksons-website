import type { CSSProperties } from "react";

const equations = [
  {
    text: "y' = 2x",
    top: "52%",
    left: "7%",
    width: "8ch",
    delay: "0s",
  },
  {
    text: "dy/dx + p(x)y = q(x)",
    top: "64%",
    left: "66%",
    width: "24ch",
    delay: "5s",
  },
  {
    text: "x(t) = c1 e^(lambda t)",
    top: "81%",
    left: "12%",
    width: "25ch",
    delay: "10s",
  },
  {
    text: "L[y''] + omega^2 y = 0",
    top: "43%",
    left: "58%",
    width: "24ch",
    delay: "15s",
  },
  {
    text: "Y(s) = L{y(t)}",
    top: "72%",
    left: "39%",
    width: "15ch",
    delay: "20s",
  },
];

export default function AnimatedEquations() {
  return (
    <div className="equation-traces" aria-hidden="true">
      {equations.map((equation) => (
        <span
          key={equation.text}
          className="equation-trace"
          style={
            {
              "--trace-width": equation.width,
              top: equation.top,
              left: equation.left,
              animationDelay: equation.delay,
            } as CSSProperties
          }
        >
          {equation.text}
        </span>
      ))}
    </div>
  );
}
