import Link from "next/link";
import DiffeqEntryBrowser from "@/components/DiffeqEntryBrowser";
import Latex from "@/components/Latex";
import {
  diffeqEntries,
  diffeqRoadmap,
} from "@/data/diffeqEntries";

const cardAccentClasses = [
  "card-cobalt",
  "card-gold",
  "card-mint",
  "card-coral",
  "card-violet",
  "card-rose",
  "card-lime",
  "card-cyan",
];

const demonstratedSkills = [
  {
    skill: "Mathematical modeling",
    evidence: "Classification by ODE type, solution method, and model behavior",
  },
  {
    skill: "Technical writing",
    evidence: "Takeaways and explanations for each entry",
  },
  {
    skill: "Computational thinking",
    evidence: "Graphs, derivative checks, computational visualization",
  },
  {
    skill: "Python / MATLAB",
    evidence: "Code-backed plots and planned interactive ODE models",
  },
  {
    skill: "Web development",
    evidence: "Interactive searchable archive",
  },
  {
    skill: "Long-term execution",
    evidence: "1,000-entry roadmap with completed-entry tracking",
  },
];

export const metadata = {
  title: "1000 Ordinary Differential Equations | Jackson T. Lutz",
  description:
    "A handwritten and computational archive of one thousand ODEs, with analytical solutions, visualization, and selected interactive model-lab entries.",
};

export default function DiffeqArchivePage() {
  const completedCount = diffeqEntries.filter((entry) => entry.completed).length;
  const modelLabEntries = diffeqEntries.filter(
    (entry) => entry.tags.lab.includes("simulated") && entry.modelLab,
  );
  const renderRoadmapRange = (range: string) => {
    const formulas = ["y' = f(x)", "y' = f(y)", "y' = F(y/x)"];
    const formula = formulas.find((candidate) => range.includes(candidate));

    if (!formula) {
      return range;
    }

    const [before, after] = range.split(formula);

    return (
      <>
        {before}
        <Latex math={formula} className="latex-inline" />
        {after}
      </>
    );
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        href="/#projects"
        className="font-mono text-xs uppercase tracking-[0.18em] text-accent hover:text-text"
      >
        Back to projects
      </Link>

      <section className="py-12">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Working archive
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-text sm:text-5xl">
            1000 Ordinary Differential Equations
          </h1>
          <div className="mt-6 space-y-4 text-base leading-7 text-soft">
            <p>
              A long-term archive of 1,000 ordinary differential equations,
              organized by structure, analytical solution method, verification,
              graphical behavior, computational visualization, interactive ODE
              models, and application-oriented takeaways.
            </p>
            <p className="text-sm leading-6 text-muted">
              Problems are adapted from textbooks, course materials, and
              generative AI. All solutions and explanations are done by me
              unless noted otherwise.
            </p>
          </div>
          <div className="mt-6 grid gap-3 border-y border-border py-5 text-sm sm:grid-cols-2">
            <p>
              <span className="block font-mono text-xs uppercase tracking-[0.16em] text-muted">
                Status
              </span>
              <strong className="mt-1 block text-base text-text">
                {completedCount}/1000 Entries complete
              </strong>
            </p>
            <p>
              <span className="block font-mono text-xs uppercase tracking-[0.16em] text-muted">
                Format
              </span>
              <strong className="mt-1 block text-base text-text">
                Work, graph, model lab
              </strong>
            </p>
          </div>
          <div className="mt-5 max-w-3xl">
            <h2 className="text-lg font-semibold tracking-tight text-text">
              Project scope
            </h2>
            <p className="mt-3 text-base leading-7 text-soft">
              This is a technical project combining differential equations,
              analytical solutions, mathematical writing, computational
              visualization, and web development. The goal is to build a
              searchable, application-oriented reference system with selected
              interactive ODE models, not just a list of solved problems.
            </p>
          </div>
        </div>
      </section>

      <DiffeqEntryBrowser entries={diffeqEntries} />

      <section className="py-10" aria-labelledby="roadmap-title">
        <div className="mb-8">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Taxonomy
          </p>
          <div className="mt-2 flex items-center gap-4">
            <h2
              id="roadmap-title"
              className="text-2xl font-semibold tracking-tight text-text"
            >
              Roadmap
            </h2>
            <div className="section-divider h-px flex-1" />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {diffeqRoadmap.map((group, index) => (
            <article
              key={group.title}
              className={`card ${cardAccentClasses[index % cardAccentClasses.length]} rounded-lg bg-surface p-5`}
            >
              <h3 className="text-base font-medium text-text">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-soft">
                {group.ranges.map((range) => (
                  <li key={range}>{renderRoadmapRange(range)}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="py-10" aria-labelledby="skills-title">
        <div className="mb-8">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Capabilities
          </p>
          <div className="mt-2 flex items-center gap-4">
            <h2
              id="skills-title"
              className="text-2xl font-semibold tracking-tight text-text"
            >
              Skills Demonstrated
            </h2>
            <div className="section-divider h-px flex-1" />
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-surface text-text">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Skill
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Evidence in archive
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-bg text-soft">
              {demonstratedSkills.map((item) => (
                <tr key={item.skill}>
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-text"
                  >
                    {item.skill}
                  </th>
                  <td className="px-4 py-3">{item.evidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="ode-model-lab" className="py-10" aria-labelledby="model-lab-title">
        <div className="mb-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-gold">
                Computational showcase
              </p>
              <h2
                id="model-lab-title"
                className="mt-2 text-2xl font-semibold tracking-tight text-text"
              >
                ODE Model Lab
              </h2>
            </div>
            <p className="inline-flex w-fit rounded-full border border-gold/55 bg-gold/10 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-gold">
              {modelLabEntries.length} model-lab entries planned
            </p>
          </div>
          <p className="mt-4 max-w-3xl text-base leading-7 text-soft">
            Selected entries are not only solved and archived &mdash; they are
            turned into interactive models with plots, sliders, and system-level
            explanations.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {modelLabEntries.map((entry) => {
            const modelLab = entry.modelLab;

            if (!modelLab) {
              return null;
            }

            const features = modelLab.features ?? [
              "Interactive simulation",
              "Plots",
              "Sliders",
              "Why this matters",
              "Model limitations",
            ];

            return (
              <article
                key={entry.slug}
                id={modelLab.anchor}
                className="card card-gold rounded-lg border-gold/55 bg-surface p-5 shadow-[0_0_0_1px_rgba(244,199,107,0.20),0_18px_44px_rgba(244,199,107,0.10)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-gold">
                      #{entry.number.toString().padStart(3, "0")}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold leading-6 text-text">
                      {modelLab.title}
                    </h3>
                  </div>
                  <span className="shrink-0 rounded-full border border-border bg-bg/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                    {modelLab.status === "active"
                      ? "Active model"
                      : "Planned model"}
                  </span>
                </div>

                <div className="mt-4 rounded-md border border-border bg-bg/65 p-3">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                    Equation
                  </p>
                  <p className="mt-2 text-base text-text">
                    <Latex math={entry.equationLatex} className="latex-inline" />
                  </p>
                </div>

                <div className="mt-4 grid gap-3 text-sm">
                  <p>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                      Model status
                    </span>
                    <span className="mt-1 block text-soft">
                      {modelLab.status === "active"
                        ? "Interactive model active"
                        : "Planned interactive model"}
                    </span>
                  </p>
                  <p>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                      Model category
                    </span>
                    <span className="mt-1 block text-soft">
                      {modelLab.category}
                    </span>
                  </p>
                </div>

                <p className="mt-4 text-sm leading-6 text-soft">
                  {modelLab.description}
                </p>

                <div className="mt-5 overflow-hidden rounded-md border border-gold/35 bg-bg/80">
                  <div className="flex items-center justify-between border-b border-border px-3 py-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-gold">
                      Simulation placeholder
                    </span>
                    <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                      Coming soon
                    </span>
                  </div>
                  <div className="relative min-h-36 p-4">
                    <div className="absolute inset-x-4 bottom-8 h-px bg-border" />
                    <div className="absolute bottom-4 left-10 top-4 w-px bg-border" />
                    <div className="absolute left-10 right-5 top-12 h-16 rounded-[50%] border-t-2 border-gold/70" />
                    <div className="absolute left-16 right-8 top-20 h-10 rounded-[50%] border-t border-accent/60" />
                    <div className="relative flex h-28 items-center justify-center text-center font-mono text-xs uppercase tracking-[0.14em] text-muted">
                      interactive model surface
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-md border border-border bg-bg/70 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="pt-6 pb-12 text-sm leading-6 text-muted">
        <p>
          &ldquo;Once you learn the concept of a differential equation, you see
          differential equations all over, no matter what you do.&rdquo;
        </p>
        <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em]">
          Gian-Carlo Rota
        </p>
      </section>
    </main>
  );
}
