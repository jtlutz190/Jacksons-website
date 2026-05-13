export interface DiffeqEntry {
  number: number;
  slug: string;
  title: string;
  equation: string;
  classification: string;
  method: string;
  tags: string[];
  takeaway: string;
  preview: string;
  pdf: string;
  completed: boolean;
}

export const diffeqEntries: DiffeqEntry[] = [
  {
    number: 1,
    slug: "001-direct-integration",
    title: "Direct Integration ODE",
    equation: "dy/dx = f(x)",
    classification: "First-order directly integrable ordinary differential equation",
    method: "Antidifferentiation / direct integration",
    tags: ["first-order", "direct integration", "antiderivative", "beginner"],
    takeaway:
      "When y' depends only on x, the solution is an antiderivative plus a constant.",
    preview: "/diffeq/entries/001-direct-integration/preview.png",
    pdf: "/diffeq/entries/001-direct-integration/work.pdf",
    completed: true,
  },
];

export const diffeqRoadmap = [
  {
    title: "I. Direct Integration and Basic First-Order ODEs",
    ranges: [
      "001-025: Direct integration equations, y' = f(x)",
      "026-050: Direct integration initial value problems",
      "051-080: Autonomous equations, y' = f(y)",
      "081-100: Equilibrium solutions and phase-line analysis",
    ],
  },
  {
    title: "II. Separable and Substitution-Based First-Order ODEs",
    ranges: [
      "101-150: Separable equations",
      "151-180: Separable initial value problems",
      "181-210: Homogeneous first-order equations, y' = F(y/x)",
      "211-235: Bernoulli equations",
      "236-260: Riccati equations with known particular solutions",
      "261-280: Miscellaneous substitution methods",
    ],
  },
  {
    title: "III. Linear and Exact First-Order ODEs",
    ranges: [
      "281-330: First-order linear equations",
      "331-360: First-order linear initial value problems",
      "361-410: Exact equations",
      "411-435: Integrating factors for non-exact equations",
      "436-460: Clairaut, Lagrange, and special first-order equations",
    ],
  },
  {
    title: "IV. First-Order Modeling",
    ranges: [
      "461-485: Exponential growth and decay",
      "486-510: Logistic growth",
      "511-535: Newton cooling/heating",
      "536-565: Mixing problems",
      "566-590: Falling objects and drag",
      "591-610: RC and RL circuits",
    ],
  },
  {
    title: "V. Second-Order Linear Homogeneous ODEs",
    ranges: [
      "611-650: Distinct real characteristic roots",
      "651-680: Repeated characteristic roots",
      "681-720: Complex characteristic roots",
      "721-745: Second-order initial value problems",
      "746-760: Boundary value problems",
    ],
  },
  {
    title: "VI. Second-Order Linear Nonhomogeneous ODEs",
    ranges: [
      "761-800: Undetermined coefficients, polynomial/exponential forcing",
      "801-835: Undetermined coefficients, sinusoidal forcing",
      "836-865: Mixed forcing and resonance",
      "866-900: Variation of parameters",
    ],
  },
  {
    title: "VII. Cauchy-Euler, Reduction of Order, and Higher-Order ODEs",
    ranges: [
      "901-925: Cauchy-Euler equations",
      "926-945: Reduction of order",
      "946-970: Higher-order linear constant-coefficient ODEs",
    ],
  },
  {
    title: "VIII. Systems, Laplace, Numerical, and Boss Fights",
    ranges: [
      "971-980: Linear systems of ODEs",
      "981-988: Matrix exponentials and eigenvalue methods",
      "989-993: Laplace transform methods",
      "994-997: Numerical methods: Euler and Runge-Kutta",
      "998-1000: Nonlinear/boss-fight equations",
    ],
  },
];

export function formatEntryNumber(number: number) {
  return number.toString().padStart(3, "0");
}
