interface ProjectCardProps {
  title: string;
  status: string;
  description: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
}

export default function ProjectCard({
  title,
  status,
  description,
  tags,
  link,
  linkLabel,
}: ProjectCardProps) {
  return (
    <article className="card rounded-lg bg-surface p-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <h3 className="text-lg font-medium text-text">{title}</h3>
        <span className="w-fit rounded border border-border bg-bg px-2 py-1 font-mono text-xs text-accent">
          {status}
        </span>
      </div>

      <p className="mt-4 text-sm leading-6 text-soft">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded bg-tag px-2.5 py-1 font-mono text-xs text-accent"
          >
            {tag}
          </span>
        ))}
      </div>

      {link ? (
        <a
          href={link}
          className="mt-5 inline-flex text-sm font-medium text-accent hover:text-text"
        >
          {linkLabel ?? "Placeholder link"}
        </a>
      ) : null}
    </article>
  );
}
