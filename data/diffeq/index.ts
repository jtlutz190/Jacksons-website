import { directIntegrationEntries } from "./sections/directIntegration";
import { directIntegrationIvpEntries } from "./sections/directIntegrationIvp";
import { autonomousEntries } from "./sections/autonomous";

export type {
  DiffeqEntry,
  DiffeqEntryDraft,
  DiffeqEntryTags,
  DiffeqEntryTemplate,
  DiffeqModelLab,
  DiffeqSimulation,
} from "./types";

export { conceptTags, formatDiffeqTag, labTags, methodTags } from "./tags";
export type { ConceptTag, LabTag, MethodTag } from "./tags";
export {
  defineDiffeqEntry,
  autonomousEntry,
  autonomousTemplate,
  directIntegrationEntry,
  directIntegrationIvpEntry,
  directIntegrationIvpTemplate,
  directIntegrationTemplate,
  formatEntryNumber,
  getConventionalSimulation,
  getEntryPdfPath,
  getEntrySimulation,
  getEntrySlug,
} from "./helpers";
export { diffeqRoadmap } from "./roadmap";

export const diffeqEntries = [
  ...directIntegrationEntries,
  ...directIntegrationIvpEntries,
  ...autonomousEntries,
].sort((first, second) => first.number - second.number);
