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
            these types of equations with direct integration, giving{" "}
            <Latex
              math={String.raw`y = \int f(x)\,dx`}
              className="latex-inline"
            />
            .
          </p>

          <p>
            Since antiderivatives are not unique, we include a constant of
            integration <Latex math="C" className="latex-inline" />, so the
            solution family is{" "}
            <Latex math={String.raw`y = F(x) + C`} className="latex-inline" />.
          </p>

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
              math={String.raw`\frac{d}{dx}[3f(x)] = 3f'(x)`}
              className="latex-inline"
            />
            , and taking derivatives kills constants. Thus, many different
            functions can collapse to the same derivative because constants
            disappear.
          </p>

          <p>
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

          <p>
            Applications from this form of ODE are not super useful yet.
            However, we do know that from this form of equation we can recover
            the function-derivative relationship from a given ODE. For example,
            if we knew a particle&apos;s velocity, we could recover how it might
            move over time. Unfortunately the big restriction here is that we
            are not given an initial condition yet, so we cannot get an exact
            answer. That comes in the next chapter.
          </p>
        </div>
      </article>
    </main>
  );
}
