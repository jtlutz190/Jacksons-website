interface WritingCardProps {
  title: string;
  description: string;
  accentClass?: string;
}

export default function WritingCard({
  title,
  description,
  accentClass = "card-coral",
}: WritingCardProps) {
  return (
    <article className={`card ${accentClass} rounded-lg bg-surface p-5`}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <h3 className="max-w-2xl text-base font-medium leading-6 text-text">
          {title}
        </h3>
        <a
          href="#"
          className="w-fit font-mono text-xs text-gold hover:text-text"
        >
          placeholder
        </a>
      </div>
      <p className="mt-3 text-sm leading-6 text-text">{description}</p>
    </article>
  );
}
