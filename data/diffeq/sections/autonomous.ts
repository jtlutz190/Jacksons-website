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
      lab: ["simulated"],
    },
    modelLab: {
      status: "planned",
      title: "Exponential growth and decay baseline",
      category: "Autonomous systems",
      description:
        "A simple autonomous model for comparing initial conditions, equilibrium behavior, and exponential sensitivity over time.",
      anchor: "lab-051",
      features: [
        "Interactive simulation",
        "Plots",
        "Sliders",
        "Why this matters",
        "Model limitations",
      ],
    },
    takeaway: "",
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
    takeaway: "",
  }),
  autonomousEntry({
    number: 53,
    equation: "y' = 3y",
    equationLatex: "y' = 3y",
    solution: "y = Ce^(3x)",
    solutionLatex: "y = Ce^{3x}",
    tags: {
      concept: ["growth", "equilibrium"],
    },
    takeaway: "",
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
    takeaway: "",
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
    takeaway: "",
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
    takeaway: "",
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
    takeaway: "",
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
      lab: ["simulated"],
    },
    modelLab: {
      status: "planned",
      title: "Logistic growth phase-line model",
      category: "Population dynamics",
      description:
        "A planned logistic growth model focused on carrying capacity, stable equilibria, and qualitative interpretation of saturation.",
      anchor: "lab-058",
      features: [
        "Interactive simulation",
        "Plots",
        "Sliders",
        "Why this matters",
        "Model limitations",
      ],
    },
    takeaway: "",
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
    takeaway: "",
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
    takeaway: "",
  }),
];
