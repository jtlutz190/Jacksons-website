import FourierDivider from "@/components/FourierDivider";

export default function Hero() {
  return (
    <section id="about" className="pt-16 pb-12">
      {/* Profile card */}
      <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
        {/* Avatar placeholder */}
        <div className="shrink-0">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#1c1d20] border border-[#2a2b2f] flex items-center justify-center text-[#2a2b2f]">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              aria-hidden="true"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
          </div>
        </div>

        {/* Identity block */}
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#e8e9eb] tracking-tight">
            Jackson T. Lutz
          </h1>
          <p className="mt-1 text-[#7c9cbf] font-mono text-sm">
            Seeking what is true, building what is useful.
          </p>

          <p className="mt-4 text-[#9ca3af] text-sm leading-relaxed max-w-xl">
            AMEP student (Applied Math, Engineering &amp; Physics) with interests
            in electrical engineering, embedded systems, signals, and data science.
            Currently learning MATLAB, embedded C, and signal processing.
            Building things, reading deeply, and trying to understand how the
            world actually works.
          </p>

          {/* CTA buttons */}
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="/cv-placeholder.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded border border-[#2a2b2f] bg-[#151618] text-sm text-[#e8e9eb] hover:border-[#4a6a8a] hover:bg-[#1c1d20] transition-colors duration-150"
              aria-label="Download CV (placeholder)"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
              CV
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 rounded border border-[#2a2b2f] bg-[#151618] text-sm text-[#6b7280] hover:border-[#4a6a8a] hover:text-[#e8e9eb] hover:bg-[#1c1d20] transition-colors duration-150"
              aria-label="GitHub profile (placeholder)"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>

      <FourierDivider className="mt-14" />
    </section>
  );
}
