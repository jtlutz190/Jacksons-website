export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <span className="font-mono text-xs text-muted">Jackson T. Lutz</span>
        <span className="select-none font-mono text-[10px] text-border" aria-hidden="true">
          academic portfolio in progress
        </span>
        <div className="flex gap-4">
          <a href="https://github.com/jtlutz190" className="text-xs text-muted hover:text-accent">
            GitHub
          </a>
          <a href="https://github.com/jtlutz190/Jacksons-website" className="text-xs text-muted hover:text-accent">
            Site repository
          </a>
        </div>
      </div>
    </footer>
  );
}
