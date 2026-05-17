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
    evidence: "Classification by ODE type and solution method",
  },
  {
    skill: "Technical writing",
    evidence: "Takeaways and explanations for each entry",
  },
  {
    skill: "Computational thinking",
    evidence: "Graphs, derivative checks, numerical simulation",
  },
  {
    skill: "Python / MATLAB",
    evidence: "Code-backed plots and simulations",
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
    "A handwritten and computational archive of one thousand ODEs, organized by structure, method, and mathematical idea.",
};

export default function DiffeqArchivePage() {
  const completedCount = diffeqEntries.filter((entry) => entry.completed).length;
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
              organized by structure, solution method, verification, graphical
              behavior, computational experiments, and key takeaways.
            </p>
            <p className="text-sm leading-6 text-muted">
              Problems are adapted from textbooks, course materials, and
              generative AI. All solutions and explanations are done by me
              unless noted otherwise.
            </p>
          </div>
          <div className="mt-6 grid gap-3 border-y border-border py-5 text-sm sm:grid-cols-3">
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
                Work, graph, simulation
              </strong>
            </p>
            <p>
              <span className="block font-mono text-xs uppercase tracking-[0.16em] text-muted">
                Current focus
              </span>
              <strong className="mt-1 block text-base text-text">
                Direct integration
              </strong>
            </p>
          </div>
          <div className="mt-5 max-w-3xl">
            <h2 className="text-lg font-semibold tracking-tight text-text">
              Project scope
            </h2>
            <p className="mt-3 text-base leading-7 text-soft">
              This is a technical project combining differential equations,
              mathematical writing, computational visualization, and web
              development. The goal is to build a searchable, computationally
              enriched reference system, not just a list of solved problems.
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
