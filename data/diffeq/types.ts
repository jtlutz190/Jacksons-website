import type { ConceptTag, LabTag, MethodTag } from "./tags";

export interface DiffeqEntryTags {
  method: readonly MethodTag[];
  concept: readonly ConceptTag[];
  lab: readonly LabTag[];
}

export interface DiffeqSimulation {
  title: string;
  language: "Python" | "MATLAB";
  downloadPath: string;
}

export interface DiffeqModelLab {
  status: "planned" | "active";
  title: string;
  category: string;
  description: string;
  anchor?: string;
  features?: readonly string[];
}

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
  tags: DiffeqEntryTags;
  takeaway: string;
  pdf: string;
  completed: boolean;
  featured?: boolean;
  simulation?: DiffeqSimulation;
  modelLab?: DiffeqModelLab;
}

export interface DiffeqEntryTemplate {
  slugSuffix: string;
  classification: string;
  method: string;
  category: string;
  takeaway: string;
  methodTags: readonly MethodTag[];
}

export interface DiffeqEntryDraft {
  number: number;
  equation: string;
  equationLatex: string;
  solution: string;
  solutionLatex: string;
  tags?: Partial<DiffeqEntryTags>;
  slug?: string;
  title?: string;
  classification?: string;
  method?: string;
  category?: string;
  takeaway?: string;
  pdf?: string;
  completed?: boolean;
  featured?: boolean;
  simulation?: DiffeqSimulation;
  modelLab?: DiffeqModelLab;
}
