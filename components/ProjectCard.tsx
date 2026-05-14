interface ProjectCardProps {
  title: string;
  status: string;
  description: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
  featuredLink?: boolean;
  accentClass?: string;
}

export default function ProjectCard({
  title,
  status,
  description,
  tags,
  link,
  linkLabel,
  featuredLink = false,
  accentClass = "card-blue",
}: ProjectCardProps) {
  const cardContent = (
    <>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <h3 className="text-lg font-medium text-text">{title}</h3>
        <span className="w-fit rounded border border-border bg-bg px-2 py-1 font-mono text-xs text-gold">
          {status}
        </span>
      </div>

      <p className="mt-4 text-sm leading-6 text-text">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="color-chip rounded px-2.5 py-1 font-mono text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      {link && !featuredLink ? (
        <a
          href={link}
          className="mt-5 inline-flex text-sm font-medium text-accent hover:text-text"
        >
          {linkLabel ?? "Placeholder link"}
        </a>
      ) : null}

      {link && featuredLink ? (
        <span className="mt-5 inline-flex w-fit rounded border border-gold/55 bg-gold/10 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-text">
          Click to access
        </span>
      ) : null}
    </>
  );

  if (link && featuredLink) {
    return (
      <a
        href={link}
        className={`card ${accentClass} block rounded-lg bg-surface p-5 no-underline transition-colors hover:bg-surface-2 focus:outline-none focus:ring-2 focus:ring-accent-dim focus:ring-offset-2 focus:ring-offset-bg`}
        aria-label={`${title}: ${linkLabel ?? "Open project"}`}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <article className={`card ${accentClass} rounded-lg bg-surface p-5`}>
      {cardContent}
    </article>
  );
}
