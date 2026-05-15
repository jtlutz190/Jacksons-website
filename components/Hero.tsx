import Image from "next/image";
import Section from "@/components/Section";

export default function Hero() {
  const facts = [
    { label: "University", value: "UW-Madison" },
    { label: "Program", value: "AMEP, Class of 2029" },
    { label: "GPA", value: "3.60" },
    { label: "Focus", value: "Signals, embedded systems, data" },
  ];

  return (
    <Section id="about" className="pt-0 sm:pt-0" labelledBy="profile-title">
      <article className="relative left-1/2 w-screen -translate-x-1/2">
        <div className="notebook-rule relative h-52 border-b border-cobalt/30 bg-surface-2 sm:h-64 lg:h-80">
          <Image
            src="/images/kc-skyline.jpg"
            alt="Kansas City skyline at dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/34 to-bg/10" />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-white" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 pb-10 sm:px-6 sm:pb-14 lg:px-8">
          <div className="-mt-16 flex flex-col gap-5 sm:-mt-20 sm:flex-row sm:items-end sm:justify-between">
            <Image
              src="/images/jackson-profile.jpg"
              alt="Portrait of Jackson T. Lutz"
              width={320}
              height={320}
              priority
              className="relative z-20 size-32 rounded-full border-4 border-text bg-surface-2 object-cover object-[50%_40%] shadow-2xl shadow-cobalt/15 sm:size-40"
            />

            <div className="flex flex-wrap gap-3 sm:mb-3">
              <a
                href="https://github.com/jtlutz190"
                className="inline-flex min-h-10 items-center rounded-md border border-cyan/45 bg-cyan/10 px-4 text-sm font-medium text-text hover:border-cyan hover:bg-cyan/15"
              >
                GitHub profile
              </a>
              <a
                href="/Jackson_Lutz_CV_placeholder.pdf"
                className="inline-flex min-h-10 items-center rounded-md border border-cobalt/45 bg-cobalt/10 px-4 text-sm font-medium text-soft hover:border-cobalt hover:text-text"
              >
                CV placeholder
              </a>
            </div>
          </div>

          <div className="mt-5 w-full max-w-3xl min-w-0">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              Applied Math, Engineering, and Physics | UW-Madison
            </p>
            <h1
              id="profile-title"
              className="mt-2 text-4xl font-semibold tracking-tight text-text sm:text-5xl"
            >
              Jackson T. Lutz
            </h1>
            <p className="tagline-glow mt-3 max-w-full font-mono text-sm leading-6 text-accent">
              Seeking what is true, building what is useful.
            </p>

            <p className="mt-5 max-w-full text-base leading-7 text-soft">
              I&apos;m an AMEP student interested in mathematics, electrical
              engineering, embedded systems, signal processing, and data
              science. This portfolio collects the projects, technical writing,
              and coursework-driven explorations that show how I learn,
              document, and build.
            </p>
            <p className="mt-3 max-w-full text-sm leading-6 text-muted">
              Current learning areas include MATLAB, embedded C, numerical
              methods, and signal processing. I&apos;m especially interested in
              internship opportunities where careful math, clear communication,
              and practical engineering judgment matter.
            </p>

            <dl className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-md border border-border bg-surface/80 px-4 py-3"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium leading-5 text-text">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </article>
    </Section>
  );
}
