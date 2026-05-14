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
};
