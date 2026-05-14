interface InterestCardProps {
  title: string;
  description: string;
  accentClass?: string;
}

export default function InterestCard({
  title,
  description,
  accentClass = "card-violet",
}: InterestCardProps) {
  return (
    <article className={`card ${accentClass} rounded-lg bg-surface p-5`}>
      <h3 className="text-base font-medium text-text">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-text">{description}</p>
    </article>
  );
}
