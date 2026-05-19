import Link from "next/link";
import Latex from "@/components/Latex";

export const metadata = {
  title: "Direct Integration Initial Value Problems Notes | Jackson T. Lutz",
  description:
    "Notes on direct integration initial value problems in the differential equations archive.",
};

export default function DirectIntegrationInitialValueProblemsNotesPage() {
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
          Direct integration initial value problems notes
        </h1>

        <div className="mt-10 space-y-6 border-t border-border pt-6 text-base leading-8 text-soft">
          <p>
            Direct integration with initial value problems is the next step in
            complexity from direct integration ODEs. We have essentially added a
            constraint to the ODE by defining a point on the solution curve:
          </p>

          <p className="text-center text-lg text-text">
            <Latex math="y' = f(x),\\quad y(x_0)=a" display />
          </p>

          <p>
            In order to solve this differential equation, we start by finding
            the general solution family, as in the Direct Integration notes. We
            get the form <Latex math="y = F(x) + C" className="latex-inline" />.
          </p>

          <p>
            Then, we use our other constraint to pin the answer:
          </p>

          <p className="text-center text-lg text-text">
            <Latex
              math="y(x_0) = F(x_0) + C,\\quad C = y(x_0) - F(x_0)"
              display
            />
          </p>

          <p>
            Notice how, given this extra constraint, we do not have a solution
            family unlike the first chapter. In other words, the initial value
            removes the freedom of the solution family.
          </p>

          <p>
            This is a first, and very simple, look at the Picard-Lindelof
            Theorem, which in plain language states that there exists a unique
            solution to <Latex math="y' = f(t,y)" className="latex-inline" />{" "}
            given a condition{" "}
            <Latex math="y(t_0)=y_0" className="latex-inline" /> when{" "}
            <Latex
              math="\\frac{\\partial f}{\\partial y}"
              className="latex-inline"
            />{" "}
            is continuous around this point. We will observe more uses of this
            theorem in later chapters.
          </p>

          <p>
            There are also plenty of useful applications in this chapter.
            Calculus tells us that solutions of this form satisfy a function and
            rate-of-change relationship. For example, say we have the initial
            position of a runner and we are given his speed. We are able to pin
            where the runner ends after a certain period. This can be applied to
            a plethora of situations, like a leaking bucket, current from
            charge, and much more.
          </p>
        </div>
      </article>
    </main>
  );
}
