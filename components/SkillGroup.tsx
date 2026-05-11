interface SkillGroupProps {
  title: string;
  skills: string[];
}

export default function SkillGroup({ title, skills }: SkillGroupProps) {
  return (
    <article className="card rounded-lg bg-surface p-5">
      <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
        {title}
      </h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded border border-border bg-bg px-3 py-1.5 text-sm text-soft"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
