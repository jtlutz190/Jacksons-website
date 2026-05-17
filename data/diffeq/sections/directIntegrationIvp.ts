import { directIntegrationIvpEntry } from "../helpers";

export const directIntegrationIvpEntries = [
  directIntegrationIvpEntry({
    number: 26,
    equation: "y' = 2x, y(0) = 3",
    equationLatex: "y' = 2x,\\quad y(0)=3",
    solution: "y = x^2 + 3",
    solutionLatex: "y = x^2 + 3",
    tags: {
      concept: ["power-rule"],
    },
  }),
  directIntegrationIvpEntry({
    number: 27,
    equation: "y' = 3x^2, y(1) = 5",
    equationLatex: "y' = 3x^2,\\quad y(1)=5",
    solution: "y = x^3 + 4",
    solutionLatex: "y = x^3 + 4",
    tags: {
      concept: ["power-rule"],
    },
  }),
  directIntegrationIvpEntry({
    number: 28,
    equation: "y' = 5x^4 - 2x + 7, y(0) = -1",
    equationLatex: "y' = 5x^4 - 2x + 7,\\quad y(0)=-1",
    solution: "y = x^5 - x^2 + 7x - 1",
    solutionLatex: "y = x^5 - x^2 + 7x - 1",
    tags: {
      concept: ["power-rule"],
    },
  }),
  directIntegrationIvpEntry({
    number: 29,
    equation: "y' = x^(-2), y(1) = 0",
    equationLatex: "y' = x^{-2},\\quad y(1)=0",
    solution: "y = -1/x + 1",
    solutionLatex: "y = -\\frac{1}{x} + 1",
    tags: {
      concept: ["power-rule", "domain-restriction"],
    },
  }),
  directIntegrationIvpEntry({
    number: 30,
    equation: "y' = 4sqrt(x), y(0) = 2",
    equationLatex: "y' = 4\\sqrt{x},\\quad y(0)=2",
    solution: "y = (8/3)x^(3/2) + 2",
    solutionLatex: "y = \\frac{8}{3}x^{3/2} + 2",
    tags: {
      concept: ["power-rule"],
    },
  }),
  directIntegrationIvpEntry({
    number: 31,
    equation: "y' = 1/sqrt(x), y(1) = 4",
    equationLatex: "y' = \\frac{1}{\\sqrt{x}},\\quad y(1)=4",
    solution: "y = 2sqrt(x) + 2",
    solutionLatex: "y = 2\\sqrt{x} + 2",
    tags: {
      concept: ["power-rule"],
    },
  }),
  directIntegrationIvpEntry({
    number: 32,
    equation: "y' = 6x^2 - 4x^-1, y(1) = 0",
    equationLatex: "y' = 6x^2 - 4x^{-1},\\quad y(1)=0",
    solution: "y = 2x^3 - 4ln|x| - 2",
    solutionLatex: "y = 2x^3 - 4\\ln|x| - 2",
    tags: {
      concept: ["power-rule", "logarithmic-antiderivative"],
    },
  }),
  directIntegrationIvpEntry({
    number: 33,
    equation: "y' = e^x, y(0) = 1",
    equationLatex: "y' = e^x,\\quad y(0)=1",
    solution: "y = e^x",
    solutionLatex: "y = e^x",
    tags: {
      concept: ["exponential-antiderivative"],
    },
  }),
  directIntegrationIvpEntry({
    number: 34,
    equation: "y' = 2e^(2x), y(0) = 3",
    equationLatex: "y' = 2e^{2x},\\quad y(0)=3",
    solution: "y = e^(2x) + 2",
    solutionLatex: "y = e^{2x} + 2",
    tags: {
      concept: ["exponential-antiderivative"],
    },
  }),
  directIntegrationIvpEntry({
    number: 35,
    equation: "y' = e^(-3x), y(0) = 0",
    equationLatex: "y' = e^{-3x},\\quad y(0)=0",
    solution: "y = -1/3*e^(-3x) + 1/3",
    solutionLatex: "y = -\\frac{1}{3}e^{-3x} + \\frac{1}{3}",
    tags: {
      concept: ["exponential-antiderivative"],
    },
  }),
  directIntegrationIvpEntry({
    number: 36,
    equation: "y' = sin(x), y(0) = 2",
    equationLatex: "y' = \\sin x,\\quad y(0)=2",
    solution: "y = -cos(x) + 3",
    solutionLatex: "y = -\\cos x + 3",
    tags: {
      concept: ["trigonometric-antiderivative"],
    },
  }),
  directIntegrationIvpEntry({
    number: 37,
    equation: "y' = 4cos(x), y(0) = -1",
    equationLatex: "y' = 4\\cos x,\\quad y(0)=-1",
    solution: "y = 4sin(x) - 1",
    solutionLatex: "y = 4\\sin x - 1",
    tags: {
      concept: ["trigonometric-antiderivative"],
    },
  }),
  directIntegrationIvpEntry({
    number: 38,
    equation: "y' = 3sec^2(x), y(0) = 0",
    equationLatex: "y' = 3\\sec^2 x,\\quad y(0)=0",
    solution: "y = 3tan(x)",
    solutionLatex: "y = 3\\tan x",
    tags: {
      concept: ["trigonometric-antiderivative", "singularity"],
    },
  }),
  directIntegrationIvpEntry({
    number: 39,
    equation: "y' = 2csc(x)cot(x), y(pi/2) = 1",
    equationLatex: "y' = 2\\csc x\\cot x,\\quad y(\\pi/2)=1",
    solution: "y = -2csc(x) + 3",
    solutionLatex: "y = -2\\csc x + 3",
    tags: {
      concept: ["trigonometric-antiderivative", "singularity"],
    },
  }),
  directIntegrationIvpEntry({
    number: 40,
    equation: "y' = 4x^3 - 6x + 2, y(1) = 0",
    equationLatex: "y' = 4x^3 - 6x + 2,\\quad y(1)=0",
    solution: "y = x^4 - 3x^2 + 2x",
    solutionLatex: "y = x^4 - 3x^2 + 2x",
    tags: {
      concept: ["power-rule"],
    },
  }),
  directIntegrationIvpEntry({
    number: 41,
    equation: "y' = 3sqrt(x) + 2e^x, y(0) = 5",
    equationLatex: "y' = 3\\sqrt{x} + 2e^x,\\quad y(0)=5",
    solution: "y = 2x^(3/2) + 2e^x + 3",
    solutionLatex: "y = 2x^{3/2} + 2e^x + 3",
    tags: {
      concept: ["power-rule", "exponential-antiderivative"],
    },
  }),
  directIntegrationIvpEntry({
    number: 42,
    equation: "y' = 2x/(x^2 + 4), y(0) = 1",
    equationLatex: "y' = \\frac{2x}{x^2 + 4},\\quad y(0)=1",
    solution: "y = ln|x^2 + 4| + 1 - ln(4)",
    solutionLatex: "y = \\ln|x^2 + 4| + 1 - \\ln 4",
    tags: {
      concept: [
        "u-substitution",
        "logarithmic-antiderivative",
      ],
    },
  }),
  directIntegrationIvpEntry({
    number: 43,
    equation: "y' = 1/(x + 2), y(0) = 0",
    equationLatex: "y' = \\frac{1}{x + 2},\\quad y(0)=0",
    solution: "y = ln|x + 2| - ln(2)",
    solutionLatex: "y = \\ln|x + 2| - \\ln 2",
    tags: {
      concept: ["logarithmic-antiderivative", "domain-restriction"],
    },
  }),
  directIntegrationIvpEntry({
    number: 44,
    equation: "y' = 5cos(5x), y(0) = 2",
    equationLatex: "y' = 5\\cos(5x),\\quad y(0)=2",
    solution: "y = sin(5x) + 2",
    solutionLatex: "y = \\sin(5x) + 2",
    tags: {
      concept: ["trigonometric-antiderivative"],
    },
  }),
  directIntegrationIvpEntry({
    number: 45,
    equation: "y' = 2xsin(x^2), y(0) = 3",
    equationLatex: "y' = 2x\\sin(x^2),\\quad y(0)=3",
    solution: "y = -cos(x^2) + 4",
    solutionLatex: "y = -\\cos(x^2) + 4",
    tags: {
      concept: ["u-substitution", "trigonometric-antiderivative"],
    },
  }),
  directIntegrationIvpEntry({
    number: 46,
    equation: "y' = x^2e^(x^3), y(0) = 0",
    equationLatex: "y' = x^2e^{x^3},\\quad y(0)=0",
    solution: "y = (1/3)e^(x^3) - 1/3",
    solutionLatex: "y = \\frac{1}{3}e^{x^3} - \\frac{1}{3}",
    tags: {
      concept: ["u-substitution", "exponential-antiderivative"],
    },
  }),
  directIntegrationIvpEntry({
    number: 47,
    equation: "y' = 1/(1 + 4x^2), y(0) = -1",
    equationLatex: "y' = \\frac{1}{1 + 4x^2},\\quad y(0)=-1",
    solution: "y = (1/2)arctan(2x) - 1",
    solutionLatex: "y = \\frac{1}{2}\\arctan(2x) - 1",
    tags: {
      concept: ["inverse-trig-pattern", "u-substitution"],
    },
  }),
  directIntegrationIvpEntry({
    number: 48,
    equation: "y' = 3/sqrt(1 - 9x^2), y(0) = 4",
    equationLatex: "y' = \\frac{3}{\\sqrt{1 - 9x^2}},\\quad y(0)=4",
    solution: "y = arcsin(3x) + 4",
    solutionLatex: "y = \\arcsin(3x) + 4",
    tags: {
      concept: ["inverse-trig-pattern", "u-substitution", "domain-restriction"],
    },
  }),
  directIntegrationIvpEntry({
    number: 49,
    equation: "y' = e^x + cos(x) + 2x, y(0) = 0",
    equationLatex: "y' = e^x + \\cos x + 2x,\\quad y(0)=0",
    solution: "y = e^x + sin(x) + x^2 - 1",
    solutionLatex: "y = e^x + \\sin x + x^2 - 1",
    tags: {
      concept: [
        "exponential-antiderivative",
        "trigonometric-antiderivative",
        "power-rule",
      ],
    },
  }),
  directIntegrationIvpEntry({
    number: 50,
    equation: "y' = x/sqrt(x^2 + 1), y(0) = 2",
    equationLatex: "y' = \\frac{x}{\\sqrt{x^2 + 1}},\\quad y(0)=2",
    solution: "y = sqrt(x^2 + 1) + 1",
    solutionLatex: "y = \\sqrt{x^2 + 1} + 1",
    tags: {
      concept: ["u-substitution", "power-rule"],
    },
  }),
];
