interface SkillGroupProps {
  title: string;
  skills: string[];
}

export default function SkillGroup({ title, skills }: SkillGroupProps) {
  return (
    <article className="card flex flex-col gap-4 rounded-lg bg-surface px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
      <h3 className="shrink-0 font-mono text-xs uppercase tracking-[0.18em] text-text sm:w-52">
        {title}
      </h3>
      <ul className="flex flex-wrap gap-2 sm:justify-end">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded border border-text/35 bg-bg px-3 py-1.5 text-sm text-text"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
