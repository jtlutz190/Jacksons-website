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
            So far, these are extremely introductory ODEs that one can
            solve with direct integration.
          </p>

          <p>
            Notice that since the slope of the solution curve(s) only depend on{" "}
            <Latex math="x" className="latex-inline" />, the family of
            solutions are only shifted vertically by a constant.
          </p>

          <p>
            Some interesting entries so far include{" "}
            <Latex math="y' = e^x" className="latex-inline" /> (#008) since the
            solution is the function itself (plus a constant). This fact gives
            rise to plenty of interesting machinery to come regarding
            integrating factors, bases for linear, constant-coefficient
            ODEs and much more.
          </p>
        </div>
      </article>
    </main>
  );
}
