import { autonomousEntry } from "../helpers";

export const autonomousEntries = [
  autonomousEntry({
    number: 51,
    equation: "y' = y",
    equationLatex: "y' = y",
    solution: "y = Ce^x",
    solutionLatex: "y = Ce^x",
    tags: {
      concept: ["growth", "equilibrium"],
    },
    takeaway:
      "This is the basic exponential growth equation. The slope is proportional to the current value of y, so positive solutions grow upward and negative solutions move farther downward. The equilibrium y=0 is unstable because nearby nonzero solutions move away from it.",
  }),
  autonomousEntry({
    number: 52,
    equation: "y' = -2y",
    equationLatex: "y' = -2y",
    solution: "y = Ce^(-2x)",
    solutionLatex: "y = Ce^{-2x}",
    tags: {
      concept: ["decay", "equilibrium"],
    },
    takeaway:
      "This is exponential decay with rate 2. Positive solutions decrease toward 0, while negative solutions increase toward 0. The equilibrium y=0 is stable because nearby solutions approach it as x increases.",
  }),
  autonomousEntry({
    number: 53,
    equation: "y' = 3y",
    equationLatex: "y' = 3y",
    solution: "y = Ce^(3x)",
    solutionLatex: "y = Ce^{3x}",
    tags: {
      concept: ["growth", "equilibrium"],
      lab: ["simulated"],
    },
    modelLab: {
      status: "planned",
      title: "Exponential growth sensitivity",
      category: "Autonomous systems",
      description:
        "A simple autonomous model for comparing initial conditions, equilibrium behavior, and rapid exponential sensitivity over time.",
      anchor: "lab-053",
      features: [
        "Interactive simulation",
        "Plots",
        "Sliders",
        "Why this matters",
        "Model limitations",
      ],
    },
    takeaway:
      "This is exponential growth with a faster rate than y'=y. Positive solutions grow rapidly, while negative solutions decrease away from 0. The equilibrium y=0 is unstable because any nonzero initial value moves away from it.",
  }),
  autonomousEntry({
    number: 54,
    equation: "y' = y + 4",
    equationLatex: "y' = y + 4",
    solution: "y = Ce^x - 4",
    solutionLatex: "y = Ce^x - 4",
    tags: {
      concept: ["equilibrium", "growth", "decay"],
    },
    takeaway:
      "This equation behaves like exponential growth shifted downward by 4. The equilibrium occurs at y=-4. Solutions above -4 move upward, while solutions below -4 move downward, so y=-4 is unstable.",
  }),
  autonomousEntry({
    number: 55,
    equation: "y' = 5 - y",
    equationLatex: "y' = 5 - y",
    solution: "y = 5 - Ce^(-x)",
    solutionLatex: "y = 5 - Ce^{-x}",
    tags: {
      concept: ["equilibrium", "decay"],
    },
    takeaway:
      "This equation pushes solutions toward the equilibrium y=5. If y<5, the slope is positive, and if y>5, the slope is negative. Therefore y=5 is a stable equilibrium and acts like a target value.",
  }),
  autonomousEntry({
    number: 56,
    equation: "y' = y^2",
    equationLatex: "y' = y^2",
    solution: "y = 1/(-x + C)",
    solutionLatex: "y = \\frac{1}{-x + C}",
    tags: {
      method: ["separable"],
      concept: [
        "nonlinear",
        "equilibrium",
        "domain-restriction",
        "singularity",
      ],
    },
    takeaway:
      "This nonlinear equation has nonnegative slope everywhere except at y=0. Positive solutions increase faster as y grows and can blow up in finite time. Negative solutions increase toward 0 without crossing it, making y=0 semi-stable.",
  }),
  autonomousEntry({
    number: 57,
    equation: "y' = -y^2",
    equationLatex: "y' = -y^2",
    solution: "y = 1/(x + C)",
    solutionLatex: "y = \\frac{1}{x + C}",
    tags: {
      method: ["separable"],
      concept: [
        "nonlinear",
        "decay",
        "equilibrium",
        "domain-restriction",
        "singularity",
      ],
    },
    takeaway:
      "This is the sign-reversed version of y'=y^2. Slopes are nonpositive except at y=0. Positive solutions decrease toward 0, while negative solutions move downward away from 0, so y=0 is semi-stable.",
  }),
  autonomousEntry({
    number: 58,
    equation: "y' = y(1 - y)",
    equationLatex: "y' = y(1-y)",
    solution: "y = 1/(Ce^(-x) + 1)",
    solutionLatex: "y = \\frac{1}{Ce^{-x} + 1}",
    tags: {
      method: ["separable", "partial-fractions"],
      concept: ["nonlinear", "equilibrium", "growth"],
    },
    takeaway:
      "This is the standard logistic-style equation with equilibria at y=0 and y=1. Solutions between 0 and 1 increase toward 1, while solutions above 1 decrease toward 1. The equilibrium y=0 is unstable, and y=1 is stable.",
  }),
  autonomousEntry({
    number: 59,
    equation: "y' = 2y(3 - y)",
    equationLatex: "y' = 2y(3-y)",
    solution: "y = 3/(Ce^(-6x) + 1)",
    solutionLatex: "y = \\frac{3}{Ce^{-6x} + 1}",
    tags: {
      method: ["separable", "partial-fractions"],
      concept: ["nonlinear", "equilibrium", "growth"],
    },
    takeaway:
      "This is a logistic equation with carrying capacity 3 and a growth-rate scaling factor. The equilibria are y=0 and y=3. Solutions between 0 and 3 increase toward 3, while solutions above 3 decrease toward 3, making y=3 stable and y=0 unstable.",
  }),
  autonomousEntry({
    number: 60,
    equation: "y' = y(y - 4)",
    equationLatex: "y' = y(y-4)",
    solution: "y = 4/(1 - Ce^(4x))",
    solutionLatex: "y = \\frac{4}{1 - Ce^{4x}}",
    tags: {
      method: ["separable", "partial-fractions"],
      concept: ["nonlinear", "equilibrium", "singularity"],
    },
    takeaway:
      "This equation has equilibria at y=0 and y=4. Solutions between 0 and 4 move downward toward 0, solutions below 0 move upward toward 0, and solutions above 4 move upward away from 4. Therefore y=0 is stable, while y=4 is unstable.",
  }),
];
