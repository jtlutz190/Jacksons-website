import Link from "next/link";
import {
  diffeqEntries,
  diffeqRoadmap,
  formatEntryNumber,
} from "@/data/diffeqEntries";

export const metadata = {
  title: "1000 Ordinary Differential Equations | Jackson T. Lutz",
  description:
    "A handwritten and computational archive of one thousand ODEs, organized by structure, method, and mathematical idea.",
};

export default function DiffeqArchivePage() {
  const completedCount = diffeqEntries.filter((entry) => entry.completed).length;

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
            Growing archive
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            1000 Ordinary Differential Equations
          </h1>
          <p className="mt-5 text-base leading-7 text-soft">
            A handwritten and computational archive of one thousand ODEs,
            organized by structure, method, and mathematical idea.
          </p>
        </div>

        <div className="mt-8 max-w-xl rounded-lg border border-border bg-surface p-5">
          <div className="flex items-center justify-between gap-4">
            <p className="font-mono text-sm text-accent">
              Progress: {completedCount} / 1000 completed
            </p>
            <p className="text-sm text-muted">Only completed entries are listed below.</p>
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-bg">
            <div
              className="h-full rounded-full bg-accent"
              style={{ width: `${(completedCount / 1000) * 100}%` }}
            />
          </div>
        </div>
      </section>

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
            <div className="h-px flex-1 bg-border" />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {diffeqRoadmap.map((group) => (
            <article key={group.title} className="card rounded-lg bg-surface p-5">
              <h3 className="text-base font-medium text-text">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-soft">
                {group.ranges.map((range) => (
                  <li key={range}>{range}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="py-10" aria-labelledby="entries-title">
        <div className="mb-8">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Completed work
          </p>
          <div className="mt-2 flex items-center gap-4">
            <h2
              id="entries-title"
              className="text-2xl font-semibold tracking-tight text-text"
            >
              Entries
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {diffeqEntries.map((entry) => (
            <article key={entry.slug} className="card rounded-lg bg-surface p-4">
              <div>
                <p className="font-mono text-xs text-accent">{entry.category}</p>
                <h3 className="mt-1 text-lg font-medium text-text">
                  #{formatEntryNumber(entry.number)}
                </h3>
              </div>

              <dl className="mt-3 space-y-2 text-sm leading-6">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                    Equation
                  </dt>
                  <dd className="font-mono text-soft">{entry.equation}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                    Classification
                  </dt>
                  <dd className="text-soft">{entry.classification}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                    Method
                  </dt>
                  <dd className="text-soft">{entry.method}</dd>
                </div>
              </dl>

              {entry.tags.length > 0 ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-tag px-2.5 py-1 font-mono text-xs text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}

              <p className="mt-4 text-sm leading-6 text-muted">{entry.takeaway}</p>

              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href={`/diffeq/${entry.slug}`}
                  className="inline-flex min-h-10 items-center rounded-md border border-accent-dim bg-accent-dim/20 px-4 text-sm font-medium text-text hover:border-accent hover:bg-accent-dim/30"
                >
                  View Entry
                </Link>
                <a
                  href={entry.pdf}
                  className="inline-flex min-h-10 items-center rounded-md border border-border bg-bg px-4 text-sm font-medium text-soft hover:border-accent-dim hover:text-text"
                >
                  Download Handwritten PDF
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
