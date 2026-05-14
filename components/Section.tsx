import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}

export default function Section({
  id,
  title,
  eyebrow,
  children,
  className = "",
  labelledBy,
}: SectionProps) {
  const headingId = title ? `${id}-title` : labelledBy;

  return (
    <section
      id={id}
      className={`py-12 ${className}`}
      aria-labelledby={headingId}
    >
      {title ? (
        <div className="mb-8">
          {eyebrow ? (
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              {eyebrow}
            </p>
          ) : null}
          <div className="mt-2 flex items-center gap-4">
            <h2
              id={headingId}
              className="text-2xl font-semibold tracking-tight text-text"
            >
              {title}
            </h2>
            <div className="section-divider h-px flex-1" />
          </div>
        </div>
      ) : null}
      {children}
    </section>
  );
}
