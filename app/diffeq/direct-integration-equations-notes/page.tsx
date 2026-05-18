import Link from "next/link";
import Latex from "@/components/Latex";

export const metadata = {
  title: "Direct Integration Equations Notes | Jackson T. Lutz",
  description:
    "Notes on the introductory direct integration equations in the differential equations archive.",
};

export default function DirectIntegrationEquationsNotesPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        href="/diffeq"
        className="font-mono text-xs uppercase tracking-[0.18em] text-accent hover:text-text"
      >
        Back to archive
      </Link>

      <article className="py-12">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
          Section notes
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          Direct integration equations notes
        </h1>

        <div className="mt-10 space-y-6 border-t border-border pt-6 text-base leading-8 text-soft">
          <p>
            Direct integration is one of the simplest types of differential
            equation solving, taking on the form{" "}
            <Latex math="y' = f(x)" className="latex-inline" />. One can solve
            these types of equations with direct integration:
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 text-center text-xl text-text">
            <Latex math="y = \\int f(x)\\,dx" display />
          </div>

          <p>
            Since antiderivatives are not unique, we include a constant of
            integration <Latex math="C" className="latex-inline" />:
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 text-center text-xl text-text">
            <Latex math="y = F(x) + C" display />
          </div>

          <p>
            This is consistent since the slope of the solution curve only
            depends on <Latex math="x" className="latex-inline" />, not{" "}
            <Latex math="y" className="latex-inline" />. As a result, the
            solution family only differs by a vertical shift, represented by{" "}
            <Latex math="+C" className="latex-inline" />. In essence, since we
            are only given the slope of <Latex math="y" className="latex-inline" />,
            we are able to recover the overall shape of the solution, but not
            the initial height. That comes in the next chapter.
          </p>

          <p>
            It is important to note that solution families like this will show
            up everywhere in the rest of the archive. This is because
            differentiation is homogeneous, for example{" "}
            <Latex
              math="\\frac{d}{dx}[3f(x)] = 3f'(x)"
              className="latex-inline"
            />
            , and taking derivatives kills constants. Thus, many different
            functions can collapse to the same derivative because constants
            disappear. Take note of the{" "}
            <span className="color-chip rounded border px-2.5 py-1 font-mono text-xs">
              solution family
            </span>{" "}
            tag.
          </p>

          <section className="rounded-lg border border-cyan/35 bg-cyan/10 p-5">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">
              Interesting entry
            </h2>
            <p className="mt-4 text-base leading-8 text-soft">
              One interesting entry to note is{" "}
              <Latex math="y' = e^x" className="latex-inline" />{" "}
              <Link
                href="/diffeq/008-direct-integration"
                className="font-mono text-sm text-accent hover:text-text"
              >
                #008
              </Link>
              . Since the non-constant solution is the function itself, this
              function gives rise to plenty of interesting machinery to come,
              including integrating factors, bases for linear
              constant-coefficient ODEs, and much more.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
