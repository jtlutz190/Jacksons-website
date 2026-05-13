import Link from "next/link";
import { notFound } from "next/navigation";
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
          <div className="card rounded-lg bg-surface p-5">
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

          <div className="card rounded-lg bg-surface p-5">
            <h2 className="text-lg font-medium text-text">Takeaway</h2>
            <p className="mt-3 text-sm leading-6 text-soft">
              Direct integration equations of the form{" "}
              <Latex math="y' = f(x)" className="latex-inline" /> tell us that
              the slope of the solution changes with respect to x only.
            </p>
          </div>
        </div>

        {entry.graph ? <DiffeqGraph graph={entry.graph} /> : null}

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
              className="inline-flex min-h-10 w-fit items-center rounded-md border border-accent-dim bg-accent-dim/20 px-4 text-sm font-medium text-text hover:border-accent hover:bg-accent-dim/30"
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
              className="card rounded-lg bg-surface p-4 text-left hover:bg-surface-2"
            >
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                &larr; Previous
              </span>
              <span className="mt-2 block text-lg font-medium text-text">
                #{formatEntryNumber(previousEntry.number)}
              </span>
              <span className="mt-1 block text-sm text-soft">
                {previousEntry.category}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          {nextEntry ? (
            <Link
              href={`/diffeq/${nextEntry.slug}`}
              className="card rounded-lg bg-surface p-4 text-left hover:bg-surface-2 sm:text-right"
            >
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                Next &rarr;
              </span>
              <span className="mt-2 block text-lg font-medium text-text">
                #{formatEntryNumber(nextEntry.number)}
              </span>
              <span className="mt-1 block text-sm text-soft">
                {nextEntry.category}
              </span>
            </Link>
          ) : null}
        </nav>
      </article>
    </main>
  );
}
