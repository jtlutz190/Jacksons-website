import { directIntegrationEntry } from "../helpers";

function directIntegrationTakeaway(
  slopeFunction: string,
  solutionFamily: string,
  extra = "",
) {
  const base = `This equation says the solution's slope is controlled entirely by ${slopeFunction}. After integrating, the solution family becomes ${solutionFamily}, meaning every solution has the same overall shape but may be shifted vertically by the constant C.`;

  return extra ? `${base} ${extra}` : base;
}

export const directIntegrationEntries = [
  directIntegrationEntry({
    number: 1,
    equation: "y' = 2x",
    equationLatex: "y' = 2x",
    solution: "y = x^2 + C",
    solutionLatex: "y = x^2 + C",
    takeaway: directIntegrationTakeaway("2x", "y = x^2 + C"),
    tags: { method: ["direct-integration"], concept: ["power-rule"] },
  }),
  directIntegrationEntry({
    number: 2,
    equation: "y' = 3x^2",
    equationLatex: "y' = 3x^2",
    solution: "y = x^3 + C",
    solutionLatex: "y = x^3 + C",
    takeaway: directIntegrationTakeaway("3x^2", "y = x^3 + C"),
    tags: { method: ["direct-integration"], concept: ["power-rule"] },
  }),
  directIntegrationEntry({
    number: 3,
    equation: "y' = 5x^4 - 2x + 7",
    equationLatex: "y' = 5x^4 - 2x + 7",
    solution: "y = x^5 - x^2 + 7x + C",
    solutionLatex: "y = x^5 - x^2 + 7x + C",
    takeaway: directIntegrationTakeaway(
      "5x^4 - 2x + 7",
      "y = x^5 - x^2 + 7x + C",
    ),
    tags: { method: ["direct-integration"], concept: ["power-rule"] },
  }),
  directIntegrationEntry({
    number: 4,
    equation: "y' = x^(-2)",
    equationLatex: "y' = x^{-2}",
    solution: "y = -1/x + C",
    solutionLatex: "y = -\\frac{1}{x} + C",
    takeaway: directIntegrationTakeaway(
      "x^(-2)",
      "y = -1/x + C",
      "This function has a singularity at x=0, so the differential equation is not defined there.",
    ),
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
    takeaway: directIntegrationTakeaway(
      "4sqrt(x)",
      "y = (8/3)x^(3/2) + C",
      "This function only takes on positive values, so the solution is increasing everywhere on its domain.",
    ),
    tags: { method: ["direct-integration"], concept: ["power-rule"] },
  }),
  directIntegrationEntry({
    number: 6,
    equation: "y' = 1/sqrt(x)",
    equationLatex: "y' = \\frac{1}{\\sqrt{x}}",
    solution: "y = 2sqrt(x) + C",
    solutionLatex: "y = 2\\sqrt{x} + C",
    takeaway: directIntegrationTakeaway(
      "1/sqrt(x)",
      "y = 2sqrt(x) + C",
      "This function only takes on positive values. Also, y' blows up at x=0, meaning the solution develops a vertical-tangent-type behavior near that point.",
    ),
    tags: {
      method: ["direct-integration"],
      concept: ["power-rule", "domain-restriction"],
    },
  }),
  directIntegrationEntry({
    number: 7,
    equation: "y' = 6x^2 - 4x^-1",
    equationLatex: "y' = 6x^2 - 4x^{-1}",
    solution: "y = 2x^3 - 4ln|x| + C",
    solutionLatex: "y = 2x^3 - 4\\ln|x| + C",
    takeaway: directIntegrationTakeaway(
      "6x^2 - 4x^-1",
      "y = 2x^3 - 4ln|x| + C",
      "The slope tends to +infinity from the left side of x=0 and -infinity from the right side. This makes the solution rise sharply and then drop sharply near the singularity at x=0.",
    ),
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
    takeaway: directIntegrationTakeaway(
      "e^x",
      "y = e^x + C",
      "This function is equal to its own derivative, so the nonconstant part of the solution has the same form as the original slope function.",
    ),
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
    takeaway: directIntegrationTakeaway(
      "2e^(2x)",
      "y = e^(2x) + C",
      "This function grows at a rate proportional to itself; more specifically, its derivative is one-half of the original exponential form.",
    ),
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
    takeaway: directIntegrationTakeaway(
      "e^(-3x)",
      "y = -1/3*e^(-3x) + C",
    ),
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
    takeaway: directIntegrationTakeaway(
      "sin(x)",
      "y = -cos(x) + C",
      "This is the first trigonometric example: the oscillatory slope gives rise to an oscillatory solution.",
    ),
    tags: {
      concept: ["trigonometric-antiderivative", "oscillation"],
    },
  }),
  directIntegrationEntry({
    number: 12,
    equation: "y' = 4cos(x)",
    equationLatex: "y' = 4\\cos x",
    solution: "y = 4sin(x) + C",
    solutionLatex: "y = 4\\sin x + C",
    takeaway: directIntegrationTakeaway(
      "4cos(x)",
      "y = 4sin(x) + C",
    ),
    tags: {
      concept: ["trigonometric-antiderivative", "oscillation"],
    },
  }),
  directIntegrationEntry({
    number: 13,
    equation: "y' = 3sec^2(x)",
    equationLatex: "y' = 3\\sec^2 x",
    solution: "y = 3tan(x) + C",
    solutionLatex: "y = 3\\tan x + C",
    takeaway: directIntegrationTakeaway(
      "3sec^2(x)",
      "y = 3tan(x) + C",
      "This function has periodic singularities at x=pi/2 + pi k, where k is an integer, due to the undefined values of tan x.",
    ),
    tags: {
      concept: [
        "trigonometric-antiderivative",
        "domain-restriction",
        "singularity",
      ],
    },
  }),
  directIntegrationEntry({
    number: 14,
    equation: "y' = 2csc(x)cot(x)",
    equationLatex: "y' = 2\\csc x\\cot x",
    solution: "y = -2csc(x) + C",
    solutionLatex: "y = -2\\csc x + C",
    takeaway: directIntegrationTakeaway(
      "2csc(x)cot(x)",
      "y = -2csc(x) + C",
      "This function has more interesting periodic singularities, similar to #013, coming from the undefined values of the cosecant and cotangent factors.",
    ),
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
    takeaway: directIntegrationTakeaway(
      "x^3 + e^x",
      "y = x^4/4 + e^x + C",
    ),
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
    takeaway: directIntegrationTakeaway(
      "2x - sin(x)",
      "y = x^2 + cos(x) + C",
    ),
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
    takeaway: directIntegrationTakeaway(
      "x^2 + 3cos(x) - 4e^x",
      "y = x^3/3 + 3sin(x) - 4e^x + C",
    ),
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
    takeaway: directIntegrationTakeaway(
      "1/x",
      "y = ln|x| + C",
      "This is a simple example of a singularity at x=0, where the differential equation is undefined.",
    ),
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
    takeaway: directIntegrationTakeaway(
      "3/(2x + 1)",
      "y = (3/2)ln|2x + 1| + C",
    ),
    tags: {
      method: ["direct-integration", "integration-substitution"],
      concept: ["logarithmic-antiderivative"],
    },
  }),
  directIntegrationEntry({
    number: 20,
    equation: "y' = x/(x^2 + 1)",
    equationLatex: "y' = \\frac{x}{x^2 + 1}",
    solution: "y = (1/2)ln|x^2 + 1| + C",
    solutionLatex: "y = \\frac{1}{2}\\ln|x^2 + 1| + C",
    takeaway: directIntegrationTakeaway(
      "x/(x^2 + 1)",
      "y = (1/2)ln|x^2 + 1| + C",
    ),
    tags: {
      method: ["direct-integration", "integration-substitution"],
      concept: ["logarithmic-antiderivative"],
    },
  }),
  directIntegrationEntry({
    number: 21,
    equation: "y' = (2x)/(x^2 + 5)",
    equationLatex: "y' = \\frac{2x}{x^2 + 5}",
    solution: "y = ln|x^2 + 5| + C",
    solutionLatex: "y = \\ln|x^2 + 5| + C",
    takeaway: directIntegrationTakeaway(
      "(2x)/(x^2 + 5)",
      "y = ln|x^2 + 5| + C",
    ),
    tags: {
      method: ["direct-integration", "integration-substitution"],
      concept: ["logarithmic-antiderivative"],
    },
  }),
  directIntegrationEntry({
    number: 22,
    equation: "y' = 1/(1 + x^2)",
    equationLatex: "y' = \\frac{1}{1 + x^2}",
    solution: "y = arctan(x) + C",
    solutionLatex: "y = \\arctan x + C",
    takeaway: directIntegrationTakeaway(
      "1/(1 + x^2)",
      "y = arctan(x) + C",
    ),
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
    takeaway: directIntegrationTakeaway(
      "1/sqrt(1 - x^2)",
      "y = arcsin(x) + C",
    ),
    tags: {
      concept: ["inverse-trig-pattern", "domain-restriction"],
    },
  }),
  directIntegrationEntry({
    number: 24,
    equation: "y' = x^2e^(x^3)",
    equationLatex: "y' = x^2e^{x^3}",
    solution: "y = (1/3)e^(x^3) + C",
    solutionLatex: "y = \\frac{1}{3}e^{x^3} + C",
    takeaway: directIntegrationTakeaway(
      "x^2e^(x^3)",
      "y = (1/3)e^(x^3) + C",
    ),
    tags: {
      method: ["direct-integration", "integration-substitution"],
      concept: ["exponential-antiderivative"],
    },
  }),
  directIntegrationEntry({
    number: 25,
    equation: "y' = 2xcos(x^2)",
    equationLatex: "y' = 2x\\cos(x^2)",
    solution: "y = sin(x^2) + C",
    solutionLatex: "y = \\sin(x^2) + C",
    takeaway: directIntegrationTakeaway(
      "2xcos(x^2)",
      "y = sin(x^2) + C",
    ),
    tags: {
      method: ["direct-integration", "integration-substitution"],
      concept: ["trigonometric-antiderivative"],
    },
  }),
];
