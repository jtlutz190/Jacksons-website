import { defineDiffeqEntry } from "../helpers";

const sectionTemplate = {
  slugSuffix: "section-slug",
  classification: "Section classification",
  method: "Primary method",
  category: "Archive category",
  takeaway: "Reusable section takeaway.",
  methodTags: ["direct-integration"],
} as const;

export const sectionEntries = [
  defineDiffeqEntry(sectionTemplate, {
    number: 51,
    equation: "y' = f(y)",
    equationLatex: "y' = f(y)",
    solution: "y = ...",
    solutionLatex: "y = ...",
    tags: {
      concept: ["equilibrium"],
    },
  }),
];
