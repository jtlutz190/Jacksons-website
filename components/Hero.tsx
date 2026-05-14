import Image from "next/image";
import Section from "@/components/Section";

export default function Hero() {
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
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-cobalt via-cyan to-violet" />
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
                href="/Jackson_Lutz_CV_placeholder.pdf"
                className="inline-flex min-h-10 items-center rounded-md border border-cyan/45 bg-cyan/10 px-4 text-sm font-medium text-text hover:border-cyan hover:bg-cyan/15"
              >
                CV placeholder
              </a>
              <a
                href="https://github.com/placeholder"
                className="inline-flex min-h-10 items-center rounded-md border border-cobalt/45 bg-cobalt/10 px-4 text-sm font-medium text-soft hover:border-cobalt hover:text-text"
              >
                Projects / GitHub
              </a>
            </div>
          </div>

          <div className="mt-5 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              AMEP student | UW-Madison 2029 | 3.598 GPA
            </p>
            <h1
              id="profile-title"
              className="mt-2 text-4xl font-semibold tracking-tight text-text sm:text-5xl"
            >
              Jackson T. Lutz
            </h1>
            <p className="tagline-glow mt-3 w-fit font-mono text-sm text-accent">
              Seeking what is true, building what is useful.
            </p>

            <p className="mt-5 text-base leading-7 text-soft">
              I&apos;m an AMEP student interested in mathematics, electrical
              engineering, embedded systems, signals, and data science. This
              site is a growing notebook for projects, technical writing, and
              things I&apos;m learning along the way.
            </p>
            <p className="mt-3 text-sm leading-6 text-muted">
              AMEP stands for Applied Math, Engineering, and Physics. Current
              learning areas include MATLAB, embedded C, and signal processing.
              Over time, this site should support internships, research
              positions, clubs, and academic or technical networking.
            </p>
          </div>
        </div>
      </article>
    </Section>
  );
}
