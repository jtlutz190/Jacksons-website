import FourierDivider from "@/components/FourierDivider";
import Section from "@/components/Section";

export default function Hero() {
  return (
    <Section id="about" className="pt-12 sm:pt-16" labelledBy="profile-title">
      <article className="profile-card relative overflow-hidden rounded-lg border border-border bg-surface p-5 sm:p-8">
        <div
          className="absolute right-6 top-5 hidden font-mono text-xs text-border sm:block"
          aria-hidden="true"
        >
          f(x) = sum a_n sin(n omega x)
        </div>

        <div className="grid gap-7 md:grid-cols-[auto_1fr] md:items-center">
          <div className="mx-auto flex size-32 shrink-0 items-center justify-center rounded-full border border-border bg-surface-2 text-muted sm:mx-0 sm:size-36">
            <div className="grid size-24 place-items-center rounded-full border border-accent-dim/50 bg-bg">
              <span className="font-mono text-2xl text-accent" aria-hidden="true">
                JTL
              </span>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              AMEP student
            </p>
            <h1
              id="profile-title"
              className="mt-2 text-4xl font-semibold tracking-tight text-text sm:text-5xl"
            >
              Jackson T. Lutz
            </h1>
            <p className="mt-3 font-mono text-sm text-accent">
              Seeking what is true, building what is useful.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-7 text-soft">
              I&apos;m an AMEP student interested in mathematics, electrical
              engineering, embedded systems, signals, and data science. This
              site is a growing notebook for projects, technical writing, and
              things I&apos;m learning along the way.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
              AMEP stands for Applied Math, Engineering, and Physics. Current
              learning areas include MATLAB, embedded C, and signal processing.
              Over time, this site should support internships, research
              positions, clubs, and academic or technical networking.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/Jackson_Lutz_CV_placeholder.pdf"
                className="inline-flex min-h-10 items-center rounded-md border border-accent-dim bg-accent-dim/20 px-4 text-sm font-medium text-text hover:border-accent hover:bg-accent-dim/30"
              >
                CV placeholder
              </a>
              <a
                href="https://github.com/placeholder"
                className="inline-flex min-h-10 items-center rounded-md border border-border bg-bg px-4 text-sm font-medium text-soft hover:border-accent-dim hover:text-text"
              >
                Projects / GitHub
              </a>
            </div>
          </div>
        </div>
      </article>

      <FourierDivider className="mt-14" />
    </Section>
  );
}
