export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <span className="font-mono text-xs text-muted">Jackson T. Lutz - beta</span>
        <span className="select-none font-mono text-[10px] text-border" aria-hidden="true">
          hat(f)(xi) = integral f(x)e^(-2pi i xi x) dx
        </span>
        <div className="flex gap-4">
          <a href="https://github.com/placeholder" className="text-xs text-muted hover:text-accent">
            GitHub placeholder
          </a>
          <a href="mailto:placeholder@email.com" className="text-xs text-muted hover:text-accent">
            Email placeholder
          </a>
        </div>
      </div>
    </footer>
  );
}
