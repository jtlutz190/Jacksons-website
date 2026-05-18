import type {
  DiffeqEntry,
  DiffeqEntryDraft,
  DiffeqEntryTemplate,
  DiffeqSimulation,
} from "./types";

const directIntegrationTakeaway =
  "Direct integration equations of the form y' = f(x) tell us that the slope of the solution changes with respect to x only.";
const directIntegrationIvpTakeaway =
  "An initial condition selects one curve from the direct integration solution family.";

export const directIntegrationTemplate = {
  slugSuffix: "direct-integration",
  classification: "Direct integration equation",
  method: "Antidifferentiation",
  category: "Direct integration equations",
  takeaway: directIntegrationTakeaway,
  methodTags: ["direct-integration"],
} satisfies DiffeqEntryTemplate;

export const directIntegrationIvpTemplate = {
  slugSuffix: "direct-integration-ivp",
  classification: "Direct integration initial value problem",
  method: "Antidifferentiation with initial condition",
  category: "Direct integration initial value problems",
  takeaway: directIntegrationIvpTakeaway,
  methodTags: ["direct-integration", "initial-value-problem"],
} satisfies DiffeqEntryTemplate;

export const autonomousTemplate = {
  slugSuffix: "autonomous",
  classification: "Autonomous equation",
  method: "Separation of variables and qualitative analysis",
  category: "Autonomous equations",
  takeaway: "",
  methodTags: ["autonomous", "separable"],
} satisfies DiffeqEntryTemplate;

export function formatEntryNumber(number: number) {
  return number.toString().padStart(3, "0");
}

export function getEntrySlug(
  entry: Pick<DiffeqEntryDraft, "number">,
  template: Pick<DiffeqEntryTemplate, "slugSuffix">,
) {
  return `${formatEntryNumber(entry.number)}-${template.slugSuffix}`;
}

export function getEntryPdfPath(entry: Pick<DiffeqEntry, "slug">) {
  return `/diffeq/entries/${entry.slug}/work.pdf`;
}

export function getConventionalSimulation(
  entry: Pick<DiffeqEntry, "number" | "slug">,
): DiffeqSimulation {
  const entryNumber = formatEntryNumber(entry.number);

  return {
    title: "Simulation",
    language: "Python",
    downloadPath: `/diffeq/entries/${entry.slug}/${entryNumber}_simulation.py`,
  };
}

export function getEntrySimulation(entry: DiffeqEntry): DiffeqSimulation {
  return entry.simulation ?? getConventionalSimulation(entry);
}

export function defineDiffeqEntry(
  template: DiffeqEntryTemplate,
  draft: DiffeqEntryDraft,
): DiffeqEntry {
  const slug = draft.slug ?? getEntrySlug(draft, template);

  return {
    number: draft.number,
    slug,
    title: draft.title ?? `#${formatEntryNumber(draft.number)}`,
    equation: draft.equation,
    equationLatex: draft.equationLatex,
    classification: draft.classification ?? template.classification,
    method: draft.method ?? template.method,
    category: draft.category ?? template.category,
    solution: draft.solution,
    solutionLatex: draft.solutionLatex,
    tags: {
      method: draft.tags?.method ?? template.methodTags,
      concept: draft.tags?.concept ?? [],
    },
    takeaway: draft.takeaway ?? template.takeaway,
    pdf: draft.pdf ?? getEntryPdfPath({ slug }),
    completed: draft.completed ?? true,
    featured: draft.featured,
    simulation: draft.simulation,
  };
}

export function directIntegrationEntry(draft: DiffeqEntryDraft) {
  const entry = defineDiffeqEntry(directIntegrationTemplate, draft);

  return {
    ...entry,
    tags: {
      ...entry.tags,
      concept: Array.from(
        new Set([...entry.tags.concept, "solution-family" as const]),
      ),
    },
  };
}

export function directIntegrationIvpEntry(draft: DiffeqEntryDraft) {
  const entry = defineDiffeqEntry(directIntegrationIvpTemplate, draft);

  return {
    ...entry,
    tags: {
      ...entry.tags,
      concept: Array.from(
        new Set([...entry.tags.concept, "initial-condition" as const]),
      ),
    },
  };
}

export function autonomousEntry(draft: DiffeqEntryDraft) {
  return defineDiffeqEntry(autonomousTemplate, draft);
}
