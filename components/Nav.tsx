const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Writing", href: "#writing" },
  { label: "Interests", href: "#interests" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95">
      <div className="mx-auto flex min-h-16 max-w-5xl flex-col gap-3 px-4 py-3 sm:px-6 md:h-16 md:flex-row md:items-center md:justify-between md:gap-6 md:py-0 lg:px-8">
        <span
          className="select-none font-mono text-sm tracking-wide text-accent"
          aria-hidden="true"
        >
          jtl
        </span>

        <nav aria-label="Page sections">
          <ul className="flex flex-wrap items-center gap-1 rounded-md border border-border bg-surface p-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded px-3 py-1.5 text-sm text-muted hover:bg-surface-2 hover:text-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
