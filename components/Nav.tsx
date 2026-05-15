const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Writing", href: "#writing" },
  { label: "Interests", href: "#interests" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-cobalt/25 bg-bg/90 backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-5xl flex-col gap-3 px-4 py-3 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <a href="#about" className="text-sm font-semibold tracking-tight text-text no-underline">
          Jackson T. Lutz
          <span className="ml-2 font-mono text-xs font-normal text-muted">
            AMEP @ UW-Madison
          </span>
        </a>
        <nav aria-label="Page sections" className="w-full md:w-auto">
          <ul className="grid w-full grid-cols-3 gap-1 rounded-md border border-cobalt/25 bg-surface/90 p-1 shadow-lg shadow-cobalt/5 sm:flex sm:flex-wrap sm:items-center md:w-auto">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded px-2 py-1.5 text-center text-sm text-muted hover:bg-gold/10 hover:text-text sm:px-3"
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
