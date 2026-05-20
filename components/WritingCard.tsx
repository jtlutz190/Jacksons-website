interface WritingCardProps {
  title: string;
  description: string;
  href?: string;
  cta?: string;
  status?: "Active" | "Drafting";
  accentClass?: string;
}

export default function WritingCard({
  title,
  description,
  href,
  cta,
  status = "Drafting",
  accentClass = "card-coral",
}: WritingCardProps) {
  const statusClass =
    status === "Active"
      ? "border-mint/40 bg-mint/10 text-mint"
      : "border-violet/35 bg-violet/10 text-cyan";

  return (
    <article className={`card ${accentClass} rounded-lg bg-surface p-5`}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <h3 className="max-w-2xl text-base font-medium leading-6 text-text">
          {href ? (
            <a href={href} className="no-underline hover:text-accent">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <span className={`w-fit rounded border px-2 py-1 font-mono text-xs ${statusClass}`}>
          {status}
        </span>
      </div>
      <p className="mt-3 text-sm leading-6 text-text">{description}</p>
      {href && cta ? (
        <a
          href={href}
          className="mt-4 inline-flex w-fit items-center rounded border border-cobalt/35 bg-cobalt/10 px-3 py-1.5 text-sm font-medium text-text no-underline hover:border-gold/60 hover:bg-gold/10"
        >
          {cta}
        </a>
      ) : null}
    </article>
  );
}
