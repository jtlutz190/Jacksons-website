"use client";

import { useMemo, useState } from "react";
import katex from "katex";
import Link from "next/link";
import type { ConceptTag, DiffeqEntry, MethodTag } from "@/data/diffeqEntries";
import { conceptTags, formatEntryNumber, methodTags } from "@/data/diffeqEntries";

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

function getChapterAccentClass(entryNumber: number) {
  if (entryNumber <= 100) {
    return cardAccentClasses[0];
  }

  if (entryNumber <= 280) {
    return cardAccentClasses[1];
  }

  if (entryNumber <= 460) {
    return cardAccentClasses[2];
  }

  if (entryNumber <= 610) {
    return cardAccentClasses[3];
  }

  if (entryNumber <= 760) {
    return cardAccentClasses[4];
  }

  if (entryNumber <= 900) {
    return cardAccentClasses[5];
  }

  if (entryNumber <= 970) {
    return cardAccentClasses[6];
  }

  return cardAccentClasses[7];
}

function formatTag(tag: string) {
  return tag.replaceAll("-", " ");
}

function FeaturedBadge({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className={
        compact
          ? "inline-flex items-center gap-1 rounded-full border border-gold bg-gold/15 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-gold"
          : "inline-flex items-center gap-2 rounded-full border border-gold bg-gold/15 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-gold"
      }
    >
      <span aria-hidden="true">{"\u2605"}</span>
      Featured
    </span>
  );
}

function LatexText({ math }: { math: string }) {
  const html = useMemo(
    () =>
      katex.renderToString(math, {
        displayMode: false,
        throwOnError: false,
        strict: false,
      }),
    [math],
  );

  return (
    <span
      className="latex-inline"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function TagCheckbox({
  tag,
  checked,
  onChange,
}: {
  tag: MethodTag | ConceptTag;
  checked: boolean;
  onChange: (tag: MethodTag | ConceptTag) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2 rounded border border-border bg-bg/70 px-3 py-2 text-sm text-soft hover:border-accent-dim hover:text-text">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChange(tag)}
        className="size-4 accent-cyan"
      />
      <span>{formatTag(tag)}</span>
    </label>
  );
}

interface DiffeqEntryBrowserProps {
  entries: DiffeqEntry[];
}

export default function DiffeqEntryBrowser({ entries }: DiffeqEntryBrowserProps) {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [activeMethodTags, setActiveMethodTags] = useState<MethodTag[]>([]);
  const [activeConceptTags, setActiveConceptTags] = useState<ConceptTag[]>([]);

  const activeTags = [...activeMethodTags, ...activeConceptTags];
  const filteredEntries = useMemo(() => {
    if (activeTags.length === 0) {
      return entries;
    }

    return entries.filter((entry) =>
      activeMethodTags.every((tag) => entry.tags.method.includes(tag)) &&
      activeConceptTags.every((tag) => entry.tags.concept.includes(tag)),
    );
  }, [activeConceptTags, activeMethodTags, activeTags.length, entries]);

  const toggleMethodTag = (tag: MethodTag | ConceptTag) => {
    const methodTag = tag as MethodTag;
    setActiveMethodTags((current) =>
      current.includes(methodTag)
        ? current.filter((item) => item !== methodTag)
        : [...current, methodTag],
    );
  };

  const toggleConceptTag = (tag: MethodTag | ConceptTag) => {
    const conceptTag = tag as ConceptTag;
    setActiveConceptTags((current) =>
      current.includes(conceptTag)
        ? current.filter((item) => item !== conceptTag)
        : [...current, conceptTag],
    );
  };

  const clearTags = () => {
    setActiveMethodTags([]);
    setActiveConceptTags([]);
  };

  return (
    <>
      <section className="py-10" aria-labelledby="tag-search-title">
        <div className="mb-8">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Search system
          </p>
          <div className="mt-2 flex items-center gap-4">
            <h2
              id="tag-search-title"
              className="text-2xl font-semibold tracking-tight text-text"
            >
              Tags
            </h2>
            <div className="section-divider h-px flex-1" />
          </div>
        </div>

        <details
          open={filtersOpen}
          onToggle={(event) => setFiltersOpen(event.currentTarget.open)}
          className="overflow-hidden rounded-lg border border-border bg-surface"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-text marker:hidden">
            <span>
              <span className="block text-lg font-medium">Filter entries</span>
              <span className="mt-1 block text-sm text-muted">
                {activeTags.length === 0
                  ? "No tags active"
                  : `${activeTags.length} active tag${activeTags.length === 1 ? "" : "s"}`}
              </span>
            </span>
            <span className="font-mono text-sm text-muted">
              {filtersOpen ? "Close" : "Open"}
            </span>
          </summary>

          <div className="border-t border-border p-5">
            <div className="grid gap-6 lg:grid-cols-2">
              <section aria-labelledby="method-tags-title">
                <h3
                  id="method-tags-title"
                  className="font-mono text-xs uppercase tracking-[0.18em] text-cyan"
                >
                  Method tags
                </h3>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {methodTags.map((tag) => (
                    <TagCheckbox
                      key={tag}
                      tag={tag}
                      checked={activeMethodTags.includes(tag)}
                      onChange={toggleMethodTag}
                    />
                  ))}
                </div>
              </section>

              <section aria-labelledby="concept-tags-title">
                <h3
                  id="concept-tags-title"
                  className="font-mono text-xs uppercase tracking-[0.18em] text-cyan"
                >
                  Concept tags
                </h3>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {conceptTags.map((tag) => (
                    <TagCheckbox
                      key={tag}
                      tag={tag}
                      checked={activeConceptTags.includes(tag)}
                      onChange={toggleConceptTag}
                    />
                  ))}
                </div>
              </section>
            </div>

            {activeTags.length > 0 ? (
              <button
                type="button"
                onClick={clearTags}
                className="mt-5 inline-flex min-h-10 items-center rounded-md border border-coral/45 bg-coral/10 px-4 text-sm font-medium text-text hover:border-coral hover:bg-coral/15"
              >
                Clear active tags
              </button>
            ) : null}
          </div>
        </details>
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
            <div className="section-divider h-px flex-1" />
          </div>
        </div>

        {filteredEntries.length > 0 ? (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {filteredEntries.map((entry) => (
              <article key={entry.slug}>
                <Link
                  href={`/diffeq/${entry.slug}`}
                  className={`card ${getChapterAccentClass(entry.number)} ${
                    entry.featured
                      ? "border-gold shadow-[0_0_0_1px_rgba(244,199,107,0.48),0_18px_44px_rgba(244,199,107,0.12)]"
                      : ""
                  } relative flex min-h-24 flex-col justify-between rounded-md bg-surface p-3 hover:bg-surface-2`}
                >
                  {entry.featured ? (
                    <span className="absolute right-3 top-3">
                      <FeaturedBadge compact />
                    </span>
                  ) : null}
                  <h3 className="font-mono text-sm font-semibold text-gold">
                    #{formatEntryNumber(entry.number)}
                  </h3>
                  <p className="mt-3 text-base leading-6 text-text">
                    <LatexText math={entry.equationLatex} />
                  </p>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-border bg-surface p-5 text-sm leading-6 text-muted">
            No entries match the active tags yet. Once tags are assigned to
            entries, matching cards will appear here.
          </div>
        )}
      </section>
    </>
  );
}
