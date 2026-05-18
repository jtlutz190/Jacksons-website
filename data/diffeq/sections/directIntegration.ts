import { directIntegrationEntry } from "../helpers";

export const directIntegrationEntries = [
  directIntegrationEntry({
    number: 1,
    equation: "y' = 2x",
    equationLatex: "y' = 2x",
    solution: "y = x^2 + C",
    solutionLatex: "y = x^2 + C",
    tags: { method: ["direct-integration"], concept: ["power-rule"] },
  }),
  directIntegrationEntry({
    number: 2,
    equation: "y' = 3x^2",
    equationLatex: "y' = 3x^2",
    solution: "y = x^3 + C",
    solutionLatex: "y = x^3 + C",
    tags: { method: ["direct-integration"], concept: ["power-rule"] },
  }),
  directIntegrationEntry({
    number: 3,
    equation: "y' = 5x^4 - 2x + 7",
    equationLatex: "y' = 5x^4 - 2x + 7",
    solution: "y = x^5 - x^2 + 7x + C",
    solutionLatex: "y = x^5 - x^2 + 7x + C",
    tags: { method: ["direct-integration"], concept: ["power-rule"] },
  }),
  directIntegrationEntry({
    number: 4,
    equation: "y' = x^(-2)",
    equationLatex: "y' = x^{-2}",
    solution: "y = -1/x + C",
    solutionLatex: "y = -\\frac{1}{x} + C",
    tags: {
      method: ["direct-integration"],
      concept: ["power-rule", "domain-restriction", "singularity"],
    },
  }),
  directIntegrationEntry({
    number: 5,
    equation: "y' = 4sqrt(x)",
    equationLatex: "y' = 4\\sqrt{x}",
    solution: "y = (8/3)x^(3/2) + C",
    solutionLatex: "y = \\frac{8}{3}x^{3/2} + C",
    tags: { method: ["direct-integration"], concept: ["power-rule"] },
  }),
  directIntegrationEntry({
    number: 6,
    equation: "y' = 1/sqrt(x)",
    equationLatex: "y' = \\frac{1}{\\sqrt{x}}",
    solution: "y = 2sqrt(x) + C",
    solutionLatex: "y = 2\\sqrt{x} + C",
    tags: { method: ["direct-integration"], concept: ["power-rule"] },
  }),
  directIntegrationEntry({
    number: 7,
    equation: "y' = 6x^2 - 4x^-1",
    equationLatex: "y' = 6x^2 - 4x^{-1}",
    solution: "y = 2x^3 - 4ln|x| + C",
    solutionLatex: "y = 2x^3 - 4\\ln|x| + C",
    tags: {
      concept: [
        "power-rule",
        "logarithmic-antiderivative",
        "domain-restriction",
        "singularity",
      ],
    },
  }),
  directIntegrationEntry({
    number: 8,
    equation: "y' = e^x",
    equationLatex: "y' = e^x",
    solution: "y = e^x + C",
    solutionLatex: "y = e^x + C",
    tags: {
      concept: ["exponential-antiderivative"],
    },
  }),
  directIntegrationEntry({
    number: 9,
    equation: "y' = 2e^(2x)",
    equationLatex: "y' = 2e^{2x}",
    solution: "y = e^(2x) + C",
    solutionLatex: "y = e^{2x} + C",
    tags: {
      concept: ["exponential-antiderivative"],
    },
  }),
  directIntegrationEntry({
    number: 10,
    equation: "y' = e^(-3x)",
    equationLatex: "y' = e^{-3x}",
    solution: "y = -1/3*e^(-3x) + C",
    solutionLatex: "y = -\\frac{1}{3}e^{-3x} + C",
    tags: {
      concept: ["exponential-antiderivative"],
    },
  }),
  directIntegrationEntry({
    number: 11,
    equation: "y' = sin(x)",
    equationLatex: "y' = \\sin x",
    solution: "y = -cos(x) + C",
    solutionLatex: "y = -\\cos x + C",
    tags: {
      concept: ["trigonometric-antiderivative"],
    },
  }),
  directIntegrationEntry({
    number: 12,
    equation: "y' = 4cos(x)",
    equationLatex: "y' = 4\\cos x",
    solution: "y = 4sin(x) + C",
    solutionLatex: "y = 4\\sin x + C",
    tags: {
      concept: ["trigonometric-antiderivative"],
    },
  }),
  directIntegrationEntry({
    number: 13,
    equation: "y' = 3sec^2(x)",
    equationLatex: "y' = 3\\sec^2 x",
    solution: "y = 3tan(x) + C",
    solutionLatex: "y = 3\\tan x + C",
    tags: {
      concept: ["trigonometric-antiderivative"],
    },
  }),
  directIntegrationEntry({
    number: 14,
    equation: "y' = 2csc(x)cot(x)",
    equationLatex: "y' = 2\\csc x\\cot x",
    solution: "y = -2csc(x) + C",
    solutionLatex: "y = -2\\csc x + C",
    tags: {
      concept: [
        "trigonometric-antiderivative",
        "domain-restriction",
        "singularity",
      ],
    },
  }),
  directIntegrationEntry({
    number: 15,
    equation: "y' = x^3 + e^x",
    equationLatex: "y' = x^3 + e^x",
    solution: "y = x^4/4 + e^x + C",
    solutionLatex: "y = \\frac{x^4}{4} + e^x + C",
    tags: {
      concept: ["power-rule", "exponential-antiderivative"],
    },
  }),
  directIntegrationEntry({
    number: 16,
    equation: "y' = 2x - sin(x)",
    equationLatex: "y' = 2x - \\sin x",
    solution: "y = x^2 + cos(x) + C",
    solutionLatex: "y = x^2 + \\cos x + C",
    tags: {
      concept: ["power-rule", "trigonometric-antiderivative"],
    },
  }),
  directIntegrationEntry({
    number: 17,
    equation: "y' = x^2 + 3cos(x) - 4e^x",
    equationLatex: "y' = x^2 + 3\\cos x - 4e^x",
    solution: "y = x^3/3 + 3sin(x) - 4e^x + C",
    solutionLatex: "y = \\frac{x^3}{3} + 3\\sin x - 4e^x + C",
    tags: {
      concept: [
        "power-rule",
        "exponential-antiderivative",
        "trigonometric-antiderivative",
      ],
    },
  }),
  directIntegrationEntry({
    number: 18,
    equation: "y' = 1/x",
    equationLatex: "y' = \\frac{1}{x}",
    solution: "y = ln|x| + C",
    solutionLatex: "y = \\ln|x| + C",
    tags: {
      concept: [
        "logarithmic-antiderivative",
        "domain-restriction",
        "singularity",
      ],
    },
  }),
  directIntegrationEntry({
    number: 19,
    equation: "y' = 3/(2x + 1)",
    equationLatex: "y' = \\frac{3}{2x + 1}",
    solution: "y = (3/2)ln|2x + 1| + C",
    solutionLatex: "y = \\frac{3}{2}\\ln|2x + 1| + C",
    tags: {
      method: ["direct-integration"],
      concept: ["integration-substitution", "logarithmic-antiderivative"],
    },
  }),
  directIntegrationEntry({
    number: 20,
    equation: "y' = x/(x^2 + 1)",
    equationLatex: "y' = \\frac{x}{x^2 + 1}",
    solution: "y = (1/2)ln|x^2 + 1| + C",
    solutionLatex: "y = \\frac{1}{2}\\ln|x^2 + 1| + C",
    tags: {
      method: ["direct-integration"],
      concept: ["integration-substitution", "logarithmic-antiderivative"],
    },
  }),
  directIntegrationEntry({
    number: 21,
    equation: "y' = (2x)/(x^2 + 5)",
    equationLatex: "y' = \\frac{2x}{x^2 + 5}",
    solution: "y = ln|x^2 + 5| + C",
    solutionLatex: "y = \\ln|x^2 + 5| + C",
    tags: {
      method: ["direct-integration"],
      concept: ["integration-substitution", "logarithmic-antiderivative"],
    },
  }),
  directIntegrationEntry({
    number: 22,
    equation: "y' = 1/(1 + x^2)",
    equationLatex: "y' = \\frac{1}{1 + x^2}",
    solution: "y = arctan(x) + C",
    solutionLatex: "y = \\arctan x + C",
    tags: {
      concept: ["inverse-trig-pattern"],
    },
  }),
  directIntegrationEntry({
    number: 23,
    equation: "y' = 1/sqrt(1 - x^2)",
    equationLatex: "y' = \\frac{1}{\\sqrt{1 - x^2}}",
    solution: "y = arcsin(x) + C",
    solutionLatex: "y = \\arcsin x + C",
    tags: {
      concept: ["inverse-trig-pattern", "domain-restriction", "singularity"],
    },
  }),
  directIntegrationEntry({
    number: 24,
    equation: "y' = x^2e^(x^3)",
    equationLatex: "y' = x^2e^{x^3}",
    solution: "y = (1/3)e^(x^3) + C",
    solutionLatex: "y = \\frac{1}{3}e^{x^3} + C",
    tags: {
      concept: ["integration-substitution", "exponential-antiderivative"],
    },
  }),
  directIntegrationEntry({
    number: 25,
    equation: "y' = 2xcos(x^2)",
    equationLatex: "y' = 2x\\cos(x^2)",
    solution: "y = sin(x^2) + C",
    solutionLatex: "y = \\sin(x^2) + C",
    tags: {
      concept: ["integration-substitution", "trigonometric-antiderivative"],
    },
  }),
];
