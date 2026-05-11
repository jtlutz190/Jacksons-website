"use client";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Writing", href: "#writing" },
  { label: "Interests", href: "#interests" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#2a2b2f] bg-[#0e0f11]/90 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <span
          className="font-mono text-sm text-[#7c9cbf] tracking-wide select-none"
          aria-hidden="true"
        >
          jtl
        </span>

        <nav aria-label="Page sections">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3 py-1.5 rounded text-sm text-[#6b7280] hover:text-[#e8e9eb] hover:bg-[#1c1d20] transition-colors duration-150"
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
