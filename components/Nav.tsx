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
      <div className="mx-auto flex min-h-16 max-w-5xl items-center justify-end px-4 py-3 sm:px-6 lg:px-8">
        <nav aria-label="Page sections">
          <ul className="flex flex-wrap items-center gap-1 rounded-md border border-cobalt/25 bg-surface/90 p-1 shadow-lg shadow-cobalt/5">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded px-3 py-1.5 text-sm text-muted hover:bg-gold/10 hover:text-text"
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
