export type DiffeqGraphFunction = (x: number) => number | null;

export const diffeqGraphFunctions: Record<string, DiffeqGraphFunction> = {
  entry001Solution: (x) => x ** 2,
  entry001Derivative: (x) => 2 * x,

  entry002Solution: (x) => x ** 3,
  entry002Derivative: (x) => 3 * x ** 2,

  entry003Solution: (x) => x ** 5 - x ** 2 + 7 * x,
  entry003Derivative: (x) => 5 * x ** 4 - 2 * x + 7,

  entry004Solution: (x) => -1 / x,
  entry004Derivative: (x) => x ** -2,

  entry005Solution: (x) => (x < 0 ? null : (8 / 3) * x ** 1.5),
  entry005Derivative: (x) => (x < 0 ? null : 4 * Math.sqrt(x)),

  entry006Solution: (x) => (x < 0 ? null : 2 * Math.sqrt(x)),
  entry006Derivative: (x) => (x <= 0 ? null : 1 / Math.sqrt(x)),

  entry007Solution: (x) => 2 * x ** 3 - 4 * Math.log(Math.abs(x)),
  entry007Derivative: (x) => 6 * x ** 2 - 4 / x,

  entry008Solution: (x) => Math.exp(x),
  entry008Derivative: (x) => Math.exp(x),

  entry009Solution: (x) => Math.exp(2 * x),
  entry009Derivative: (x) => 2 * Math.exp(2 * x),

  entry010Solution: (x) => -(1 / 3) * Math.exp(-3 * x),
  entry010Derivative: (x) => Math.exp(-3 * x),

  entry011Solution: (x) => -Math.cos(x),
  entry011Derivative: (x) => Math.sin(x),

  entry012Solution: (x) => 4 * Math.sin(x),
  entry012Derivative: (x) => 4 * Math.cos(x),

  entry013Solution: (x) => 3 * Math.tan(x),
  entry013Derivative: (x) => 3 / Math.cos(x) ** 2,

  entry014Solution: (x) => -2 / Math.sin(x),
  entry014Derivative: (x) => (2 * Math.cos(x)) / Math.sin(x) ** 2,

  entry015Solution: (x) => x ** 4 / 4 + Math.exp(x),
  entry015Derivative: (x) => x ** 3 + Math.exp(x),

  entry016Solution: (x) => x ** 2 + Math.cos(x),
  entry016Derivative: (x) => 2 * x - Math.sin(x),

  entry017Solution: (x) => x ** 3 / 3 + 3 * Math.sin(x) - 4 * Math.exp(x),
  entry017Derivative: (x) => x ** 2 + 3 * Math.cos(x) - 4 * Math.exp(x),

  entry018Solution: (x) => Math.log(Math.abs(x)),
  entry018Derivative: (x) => 1 / x,

  entry019Solution: (x) => (3 / 2) * Math.log(Math.abs(2 * x + 1)),
  entry019Derivative: (x) => 3 / (2 * x + 1),

  entry020Solution: (x) => (1 / 2) * Math.log(Math.abs(x ** 2 + 1)),
  entry020Derivative: (x) => x / (x ** 2 + 1),

  entry021Solution: (x) => Math.log(Math.abs(x ** 2 + 5)),
  entry021Derivative: (x) => (2 * x) / (x ** 2 + 5),

  entry022Solution: (x) => Math.atan(x),
  entry022Derivative: (x) => 1 / (1 + x ** 2),

  entry023Solution: (x) => (Math.abs(x) > 1 ? null : Math.asin(x)),
  entry023Derivative: (x) =>
    Math.abs(x) >= 1 ? null : 1 / Math.sqrt(1 - x ** 2),

  entry024Solution: (x) => (1 / 3) * Math.exp(x ** 3),
  entry024Derivative: (x) => x ** 2 * Math.exp(x ** 3),

  entry025Solution: (x) => Math.sin(x ** 2),
  entry025Derivative: (x) => 2 * x * Math.cos(x ** 2),
};
