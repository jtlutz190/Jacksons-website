export default function Footer() {
  return (
    <footer className="border-t border-[#2a2b2f] mt-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-[#4a5568]">
          Jackson T. Lutz — beta
        </span>
        <span className="font-mono text-[10px] text-[#2a2b2f] select-none" aria-hidden="true">
          f̂(ξ) = ∫ f(x) e^(−2πiξx) dx
        </span>
        <div className="flex gap-4">
          <a
            href="#"
            className="text-xs text-[#4a5568] hover:text-[#7c9cbf] transition-colors font-mono"
          >
            github
          </a>
          <a
            href="mailto:placeholder@email.com"
            className="text-xs text-[#4a5568] hover:text-[#7c9cbf] transition-colors font-mono"
          >
            email
          </a>
        </div>
      </div>
    </footer>
  );
}
