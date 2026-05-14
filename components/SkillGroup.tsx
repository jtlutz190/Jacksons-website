interface SkillGroupProps {
  title: string;
  skills: string[];
  accentClass?: string;
}

export default function SkillGroup({
  title,
  skills,
  accentClass = "card-blue",
}: SkillGroupProps) {
  return (
    <article className={`card ${accentClass} flex flex-col gap-4 rounded-lg bg-surface px-5 py-4 sm:flex-row sm:items-center sm:justify-between`}>
      <h3 className="shrink-0 font-mono text-xs uppercase tracking-[0.18em] text-gold sm:w-52">
        {title}
      </h3>
      <ul className="flex flex-wrap gap-2 sm:justify-end">
        {skills.map((skill) => (
          <li
            key={skill}
            className="color-chip rounded border px-3 py-1.5 text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
