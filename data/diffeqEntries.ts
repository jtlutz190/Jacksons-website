export interface DiffeqEntry {
  number: number;
  slug: string;
  title: string;
  equation: string;
  equationLatex: string;
  classification: string;
  method: string;
  category: string;
  solution: string;
  solutionLatex: string;
  tags: string[];
  takeaway: string;
  pdf: string;
  completed: boolean;
  graph?: DiffeqGraph;
}

export interface DiffeqGraph {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  curves: DiffeqGraphCurve[];
}

export interface DiffeqGraphCurve {
  label: string;
  latex: string;
  stroke: "solution" | "derivative";
  functionId: string;
  ranges?: Array<[number, number]>;
}

const directIntegrationTakeaway =
  "Direct integration equations of the form y' = f(x) tell us that the slope of the solution changes with respect to x only.";

interface DirectIntegrationGraphConfig {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  solutionLatex: string;
  derivativeLatex: string;
  solutionFunctionId: string;
  derivativeFunctionId: string;
  ranges?: Array<[number, number]>;
}

function directIntegrationGraph({
  xMin,
  xMax,
  yMin,
  yMax,
  solutionLatex,
  derivativeLatex,
  solutionFunctionId,
  derivativeFunctionId,
  ranges,
}: DirectIntegrationGraphConfig): DiffeqGraph {
  return {
    xMin,
    xMax,
    yMin,
    yMax,
    curves: [
      {
        label: "y",
        latex: solutionLatex,
        stroke: "solution",
        functionId: solutionFunctionId,
        ranges,
      },
      {
        label: "y'",
        latex: derivativeLatex,
        stroke: "derivative",
        functionId: derivativeFunctionId,
        ranges,
      },
    ],
  };
}

export const diffeqEntries: DiffeqEntry[] = [
  {
    number: 1,
    slug: "001-direct-integration",
    title: "#001",
    equation: "y' = 2x",
    equationLatex: "y' = 2x",
    classification: "Direct integration equation",
    method: "Antidifferentiation",
    category: "Direct integration equations",
    solution: "y = x^2 + C",
    solutionLatex: "y = x^2 + C",
    tags: [],
    takeaway: directIntegrationTakeaway,
    pdf: "/diffeq/entries/001-direct-integration/work.pdf",
    completed: true,
    graph: directIntegrationGraph({
      xMin: -3,
      xMax: 3,
      yMin: -6,
      yMax: 9,
      solutionLatex: "y = x^2",
      derivativeLatex: "y' = 2x",
      solutionFunctionId: "entry001Solution",
      derivativeFunctionId: "entry001Derivative",
    }),
  },
  {
    number: 2,
    slug: "002-direct-integration",
    title: "#002",
    equation: "y' = 3x^2",
    equationLatex: "y' = 3x^2",
    classification: "Direct integration equation",
    method: "Antidifferentiation",
    category: "Direct integration equations",
    solution: "y = x^3 + C",
    solutionLatex: "y = x^3 + C",
    tags: [],
    takeaway: directIntegrationTakeaway,
    pdf: "/diffeq/entries/002-direct-integration/work.pdf",
    completed: true,
    graph: directIntegrationGraph({
      xMin: -3,
      xMax: 3,
      yMin: -30,
      yMax: 30,
      solutionLatex: "y = x^3",
      derivativeLatex: "y' = 3x^2",
      solutionFunctionId: "entry002Solution",
      derivativeFunctionId: "entry002Derivative",
    }),
  },
  {
    number: 3,
    slug: "003-direct-integration",
    title: "#003",
    equation: "y' = 5x^4 - 2x + 7",
    equationLatex: "y' = 5x^4 - 2x + 7",
    classification: "Direct integration equation",
    method: "Antidifferentiation",
    category: "Direct integration equations",
    solution: "y = x^5 - x^2 + 7x + C",
    solutionLatex: "y = x^5 - x^2 + 7x + C",
    tags: [],
    takeaway: directIntegrationTakeaway,
    pdf: "/diffeq/entries/003-direct-integration/work.pdf",
    completed: true,
    graph: directIntegrationGraph({
      xMin: -2,
      xMax: 2,
      yMin: -60,
      yMax: 90,
      solutionLatex: "y = x^5 - x^2 + 7x",
      derivativeLatex: "y' = 5x^4 - 2x + 7",
      solutionFunctionId: "entry003Solution",
      derivativeFunctionId: "entry003Derivative",
    }),
  },
  {
    number: 4,
    slug: "004-direct-integration",
    title: "#004",
    equation: "y' = x^(-2)",
    equationLatex: "y' = x^{-2}",
    classification: "Direct integration equation",
    method: "Antidifferentiation",
    category: "Direct integration equations",
    solution: "y = -1/x + C",
    solutionLatex: "y = -\\frac{1}{x} + C",
    tags: [],
    takeaway: directIntegrationTakeaway,
    pdf: "/diffeq/entries/004-direct-integration/work.pdf",
    completed: true,
    graph: directIntegrationGraph({
      xMin: -5,
      xMax: 5,
      yMin: -8,
      yMax: 18,
      solutionLatex: "y = -\\frac{1}{x}",
      derivativeLatex: "y' = x^{-2}",
      solutionFunctionId: "entry004Solution",
      derivativeFunctionId: "entry004Derivative",
      ranges: [
        [-10, -0.05],
        [0.05, 10],
      ],
    }),
  },
  {
    number: 5,
    slug: "005-direct-integration",
    title: "#005",
    equation: "y' = 4sqrt(x)",
    equationLatex: "y' = 4\\sqrt{x}",
    classification: "Direct integration equation",
    method: "Antidifferentiation",
    category: "Direct integration equations",
    solution: "y = (8/3)x^(3/2) + C",
    solutionLatex: "y = \\frac{8}{3}x^{3/2} + C",
    tags: [],
    takeaway: directIntegrationTakeaway,
    pdf: "/diffeq/entries/005-direct-integration/work.pdf",
    completed: true,
    graph: directIntegrationGraph({
      xMin: -0.5,
      xMax: 6,
      yMin: -1,
      yMax: 42,
      solutionLatex: "y = \\frac{8}{3}x^{3/2}",
      derivativeLatex: "y' = 4\\sqrt{x}",
      solutionFunctionId: "entry005Solution",
      derivativeFunctionId: "entry005Derivative",
      ranges: [[0, 12]],
    }),
  },
  {
    number: 6,
    slug: "006-direct-integration",
    title: "#006",
    equation: "y' = 1/sqrt(x)",
    equationLatex: "y' = \\frac{1}{\\sqrt{x}}",
    classification: "Direct integration equation",
    method: "Antidifferentiation",
    category: "Direct integration equations",
    solution: "y = 2sqrt(x) + C",
    solutionLatex: "y = 2\\sqrt{x} + C",
    tags: [],
    takeaway: directIntegrationTakeaway,
    pdf: "/diffeq/entries/006-direct-integration/work.pdf",
    completed: true,
    graph: directIntegrationGraph({
      xMin: -0.5,
      xMax: 9,
      yMin: -1,
      yMax: 12,
      solutionLatex: "y = 2\\sqrt{x}",
      derivativeLatex: "y' = \\frac{1}{\\sqrt{x}}",
      solutionFunctionId: "entry006Solution",
      derivativeFunctionId: "entry006Derivative",
      ranges: [[0.03, 18]],
    }),
  },
  {
    number: 7,
    slug: "007-direct-integration",
    title: "#007",
    equation: "y' = 6x^2 - 4x^-1",
    equationLatex: "y' = 6x^2 - 4x^{-1}",
    classification: "Direct integration equation",
    method: "Antidifferentiation",
    category: "Direct integration equations",
    solution: "y = 2x^3 - 4ln|x| + C",
    solutionLatex: "y = 2x^3 - 4\\ln|x| + C",
    tags: [],
    takeaway: directIntegrationTakeaway,
    pdf: "/diffeq/entries/007-direct-integration/work.pdf",
    completed: true,
    graph: directIntegrationGraph({
      xMin: -3,
      xMax: 3,
      yMin: -40,
      yMax: 60,
      solutionLatex: "y = 2x^3 - 4\\ln|x|",
      derivativeLatex: "y' = 6x^2 - 4x^{-1}",
      solutionFunctionId: "entry007Solution",
      derivativeFunctionId: "entry007Derivative",
      ranges: [
        [-6, -0.05],
        [0.05, 6],
      ],
    }),
  },
  {
    number: 8,
    slug: "008-direct-integration",
    title: "#008",
    equation: "y' = e^x",
    equationLatex: "y' = e^x",
    classification: "Direct integration equation",
    method: "Antidifferentiation",
    category: "Direct integration equations",
    solution: "y = e^x + C",
    solutionLatex: "y = e^x + C",
    tags: [],
    takeaway: directIntegrationTakeaway,
    pdf: "/diffeq/entries/008-direct-integration/work.pdf",
    completed: true,
    graph: directIntegrationGraph({
      xMin: -3,
      xMax: 3,
      yMin: -1,
      yMax: 22,
      solutionLatex: "y = e^x",
      derivativeLatex: "y' = e^x",
      solutionFunctionId: "entry008Solution",
      derivativeFunctionId: "entry008Derivative",
    }),
  },
  {
    number: 9,
    slug: "009-direct-integration",
    title: "#009",
    equation: "y' = 2e^(2x)",
    equationLatex: "y' = 2e^{2x}",
    classification: "Direct integration equation",
    method: "Antidifferentiation",
    category: "Direct integration equations",
    solution: "y = e^(2x) + C",
    solutionLatex: "y = e^{2x} + C",
    tags: [],
    takeaway: directIntegrationTakeaway,
    pdf: "/diffeq/entries/009-direct-integration/work.pdf",
    completed: true,
    graph: directIntegrationGraph({
      xMin: -2,
      xMax: 2,
      yMin: -1,
      yMax: 120,
      solutionLatex: "y = e^{2x}",
      derivativeLatex: "y' = 2e^{2x}",
      solutionFunctionId: "entry009Solution",
      derivativeFunctionId: "entry009Derivative",
    }),
  },
  {
    number: 10,
    slug: "010-direct-integration",
    title: "#010",
    equation: "y' = e^(-3x)",
    equationLatex: "y' = e^{-3x}",
    classification: "Direct integration equation",
    method: "Antidifferentiation",
    category: "Direct integration equations",
    solution: "y = -1/3*e^(-3x) + C",
    solutionLatex: "y = -\\frac{1}{3}e^{-3x} + C",
    tags: [],
    takeaway: directIntegrationTakeaway,
    pdf: "/diffeq/entries/010-direct-integration/work.pdf",
    completed: true,
    graph: directIntegrationGraph({
      xMin: -2,
      xMax: 2,
      yMin: -150,
      yMax: 430,
      solutionLatex: "y = -\\frac{1}{3}e^{-3x}",
      derivativeLatex: "y' = e^{-3x}",
      solutionFunctionId: "entry010Solution",
      derivativeFunctionId: "entry010Derivative",
    }),
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
