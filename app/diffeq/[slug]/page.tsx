import Link from "next/link";
import { notFound } from "next/navigation";
import { readFile } from "node:fs/promises";
import path from "node:path";
import DiffeqGraph from "@/components/DiffeqGraph";
import Latex from "@/components/Latex";
import {
  diffeqEntries,
  formatEntryNumber,
} from "@/data/diffeqEntries";

interface DiffeqEntryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return diffeqEntries.map((entry) => ({
    slug: entry.slug,
  }));
}

async function getSimulationCode(downloadPath: string) {
  try {
    const relativePath = downloadPath.replace(/^\//, "");
    return await readFile(path.join(process.cwd(), "public", relativePath), "utf8");
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: DiffeqEntryPageProps) {
  const { slug } = await params;
  const entry = diffeqEntries.find((candidate) => candidate.slug === slug);

  if (!entry) {
    return {
      title: "Differential Equation Entry | Jackson T. Lutz",
    };
  }

  return {
    title: `#${formatEntryNumber(entry.number)} | Jackson T. Lutz`,
    description: entry.takeaway,
  };
}

export default async function DiffeqEntryPage({ params }: DiffeqEntryPageProps) {
  const { slug } = await params;
  const entryIndex = diffeqEntries.findIndex((candidate) => candidate.slug === slug);
  const entry = diffeqEntries[entryIndex];

  if (!entry) {
    notFound();
  }

  const previousEntry = entryIndex > 0 ? diffeqEntries[entryIndex - 1] : null;
  const nextEntry =
    entryIndex < diffeqEntries.length - 1 ? diffeqEntries[entryIndex + 1] : null;
  const simulationCode = entry.simulation
    ? await getSimulationCode(entry.simulation.downloadPath)
    : null;

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        href="/diffeq"
        className="font-mono text-xs uppercase tracking-[0.18em] text-accent hover:text-text"
      >
        Back to archive
      </Link>

      <article className="py-12">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
          {entry.category}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          #{formatEntryNumber(entry.number)}
        </h1>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="card card-plain rounded-lg bg-surface p-5">
            <dl className="space-y-5 text-sm leading-6">
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                  Equation
                </dt>
                <dd className="mt-1 text-lg text-text">
                  <Latex math={entry.equationLatex} className="latex-display-inline" />
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                  Classification
                </dt>
                <dd className="mt-1 text-soft">{entry.classification}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                  Method
                </dt>
                <dd className="mt-1 text-soft">{entry.method}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                  Solution
                </dt>
                <dd className="mt-1 text-text">
                  <Latex math={entry.solutionLatex} className="latex-display-inline" />
                </dd>
              </div>
            </dl>
          </div>

          <div className="card card-plain rounded-lg bg-surface p-5">
            <h2 className="text-lg font-medium text-text">Takeaway</h2>
            <p className="mt-3 text-sm leading-6 text-soft">
              Direct integration equations of the form{" "}
              <Latex math="y' = f(x)" className="latex-inline" /> tell us that
              the slope of the solution changes with respect to x only.
            </p>
          </div>
        </div>

        {entry.graph ? <DiffeqGraph graph={entry.graph} /> : null}

        {entry.simulation ? (
          <section className="mt-8" aria-labelledby="simulation-title">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Computational simulation
                </p>
                <h2
                  id="simulation-title"
                  className="mt-2 text-2xl font-semibold tracking-tight text-text"
                >
                  {entry.simulation.title}
                </h2>
              </div>
              <a
                href={entry.simulation.downloadPath}
                download
                className="inline-flex min-h-10 w-fit items-center rounded-md border border-mint/45 bg-mint/10 px-4 text-sm font-medium text-text hover:border-mint hover:bg-mint/15"
              >
                Download .py file
              </a>
            </div>

            <div className="overflow-hidden rounded-lg border border-border bg-[#071018]">
              {simulationCode ? (
                <pre className="max-h-[38rem] overflow-x-auto overflow-y-auto p-4 text-xs leading-6 text-soft sm:text-sm">
                  <code>{simulationCode}</code>
                </pre>
              ) : (
                <div className="p-4 text-sm text-muted">
                  Simulation code preview unavailable. Use the download link to
                  view the {entry.simulation.language} file.
                </div>
              )}
            </div>
          </section>
        ) : null}

        <section className="mt-8" aria-labelledby="handwritten-work-title">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2
              id="handwritten-work-title"
              className="text-2xl font-semibold tracking-tight text-text"
            >
              Handwritten Work
            </h2>
            <a
              href={entry.pdf}
              className="inline-flex min-h-10 w-fit items-center rounded-md border border-cobalt/45 bg-cobalt/10 px-4 text-sm font-medium text-text hover:border-cobalt hover:bg-cobalt/15"
            >
              Download full PDF
            </a>
          </div>

          <div className="aspect-[4/3] overflow-hidden rounded-lg border border-border bg-bg">
            <object
              data={entry.pdf}
              type="application/pdf"
              className="h-full w-full"
              aria-label={`Handwritten work for #${formatEntryNumber(entry.number)}`}
            >
              <div className="flex h-full items-center justify-center p-4 text-center text-sm text-muted">
                PDF preview unavailable. Use the download link above to view the
                handwritten work.
              </div>
            </object>
          </div>
        </section>

        <nav
          className="mt-8 grid gap-4 sm:grid-cols-2"
          aria-label="Differential equation entry navigation"
        >
          {previousEntry ? (
            <Link
              href={`/diffeq/${previousEntry.slug}`}
              className="card card-plain rounded-lg bg-surface p-4 text-left hover:bg-surface-2"
            >
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                &larr; Previous
              </span>
              <span className="mt-2 block text-lg font-medium text-text">
                #{formatEntryNumber(previousEntry.number)}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          {nextEntry ? (
            <Link
              href={`/diffeq/${nextEntry.slug}`}
              className="card card-plain rounded-lg bg-surface p-4 text-left hover:bg-surface-2 sm:text-right"
            >
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                Next &rarr;
              </span>
              <span className="mt-2 block text-lg font-medium text-text">
                #{formatEntryNumber(nextEntry.number)}
              </span>
            </Link>
          ) : null}
        </nav>
      </article>
    </main>
  );
}
