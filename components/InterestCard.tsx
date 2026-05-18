interface InterestCardProps {
  title: string;
  description: string;
  link?: string;
  accentClass?: string;
}

export default function InterestCard({
  title,
  description,
  link,
  accentClass = "card-violet",
}: InterestCardProps) {
  const cardContent = (
    <>
      <h3 className="text-base font-medium text-text">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-text">{description}</p>
    </>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={`card ${accentClass} block rounded-lg bg-surface p-5 no-underline transition-colors hover:bg-surface-2 focus:outline-none focus:ring-2 focus:ring-accent-dim focus:ring-offset-2 focus:ring-offset-bg`}
        aria-label={`${title}: open link`}
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
