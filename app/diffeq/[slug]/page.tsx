import Link from "next/link";
import { notFound } from "next/navigation";
import { readFile } from "node:fs/promises";
import path from "node:path";
import type { ReactNode } from "react";
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

function EntrySection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-border py-6">
      <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
        {title}
      </h2>
      <div className="mt-3 text-base leading-7 text-soft">{children}</div>
    </section>
  );
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

        <div className="mt-10">
          <EntrySection title="Problem">
            <Latex math={entry.equationLatex} className="latex-display-inline text-xl text-text" />
          </EntrySection>

          <EntrySection title="Classification">
            <p>{entry.classification}</p>
          </EntrySection>

          <EntrySection title="Method">
            <p>{entry.method}</p>
          </EntrySection>

          <EntrySection title="Solution">
            <Latex math={entry.solutionLatex} className="latex-display-inline text-xl text-text" />
          </EntrySection>

          <EntrySection title="Behavior / interpretation">
            <p>
              Since the derivative only depends on{" "}
              <Latex math="x" className="latex-inline" />, every solution curve
              is only a vertical shift of an antiderivative.
            </p>
          </EntrySection>
        </div>

        {entry.graph ? <DiffeqGraph graph={entry.graph} /> : null}

        <section className="mt-8" aria-labelledby="code-title">
          <h2
            id="code-title"
            className="text-2xl font-semibold tracking-tight text-text"
          >
            Code
          </h2>

          <details className="mt-5 overflow-hidden rounded-lg border border-border bg-surface">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-text marker:hidden">
              <span>
                <span className="block font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Computational work
                </span>
                <span className="mt-2 block text-2xl font-semibold tracking-tight">
                  {entry.simulation?.title ?? "Simulation code"}
                </span>
              </span>
              <span className="font-mono text-sm text-muted">Open</span>
            </summary>

            <div className="border-t border-border p-5">
              {entry.simulation?.imagePath ? (
                <div className="mb-5 overflow-hidden rounded-lg border border-border bg-white">
                  <img
                    src={entry.simulation.imagePath}
                    alt={`Simulation plot for #${formatEntryNumber(entry.number)}`}
                    className="h-auto w-full"
                  />
                </div>
              ) : null}

              {entry.simulation ? (
                <a
                  href={entry.simulation.downloadPath}
                  download
                  className="mb-4 inline-flex min-h-10 w-fit items-center rounded-md border border-mint/45 bg-mint/10 px-4 text-sm font-medium text-text hover:border-mint hover:bg-mint/15"
                >
                  Download .py file
                </a>
              ) : null}

              <div className="overflow-hidden rounded-lg border border-border bg-[#071018]">
                {simulationCode ? (
                  <pre className="max-h-[38rem] overflow-x-auto overflow-y-auto p-4 text-xs leading-6 text-soft sm:text-sm">
                    <code>{simulationCode}</code>
                  </pre>
                ) : (
                  <div className="p-4 text-sm text-muted">
                    Simulation code has not been added for this entry yet.
                  </div>
                )}
              </div>
            </div>
          </details>
        </section>

        <section className="mt-8" aria-labelledby="handwritten-work-title">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2
              id="handwritten-work-title"
              className="text-2xl font-semibold tracking-tight text-text"
            >
              Handwritten derivation
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

        <section className="mt-8 border-t border-border pt-6" aria-labelledby="takeaway-title">
          <h2
            id="takeaway-title"
            className="text-2xl font-semibold tracking-tight text-text"
          >
            Takeaway
          </h2>
          <p className="mt-3 text-base leading-7 text-soft">{entry.takeaway}</p>
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
