import type { Metadata } from "next";
import type { ReactNode } from "react";
import Latex from "@/components/Latex";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "How Smooth Waves Build Sharp Corners: Making Fourier Series Intuitive | Jackson T. Lutz",
  description:
    "An intuitive visual explanation of how Fourier series use smooth sine waves to approximate sharp square waves.",
};

function Equation({ math }: { math: string }) {
  return (
    <div className="my-5 overflow-x-auto rounded-md border border-cobalt/25 bg-surface/85 px-4 py-4 text-text shadow-lg shadow-cobalt/5">
      <Latex math={math} display className="latex-display-inline" />
    </div>
  );
}

function ArticleFigure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: ReactNode;
}) {
  return (
    <figure className="my-8 rounded-lg border border-cobalt/25 bg-surface/78 p-3 shadow-xl shadow-black/20 sm:p-4">
      <div className="overflow-hidden rounded-md border border-border/70 bg-paper p-1">
        <img
          src={src}
          alt={alt}
          className="h-auto w-full rounded object-contain"
        />
      </div>
      <figcaption className="mt-3 text-center font-mono text-xs leading-5 text-accent">
        {caption}
      </figcaption>
    </figure>
  );
}

function InlineMath({ math }: { math: string }) {
  return <Latex math={math} className="latex-inline" />;
}

export default function MakingFourierIntuitivePage() {
  return (
    <>
      <div className="home-background-grid" aria-hidden="true" />
      <header className="sticky top-0 z-50 border-b border-cobalt/25 bg-bg/90 backdrop-blur">
        <div className="mx-auto flex min-h-16 max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="/"
            className="text-sm font-semibold tracking-tight text-text no-underline hover:text-accent"
          >
            Jackson T. Lutz
          </a>
          <a
            href="/#writing"
            className="rounded border border-cobalt/30 bg-surface/90 px-3 py-1.5 text-sm text-soft no-underline hover:border-gold/60 hover:bg-gold/10 hover:text-text"
          >
            Writing
          </a>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-4xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <article className="overflow-hidden rounded-lg border border-text/30 bg-bg/82 shadow-2xl shadow-black/25">
          <section className="border-b border-cobalt/25 bg-surface/70 px-5 py-10 sm:px-8 lg:px-10">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Fourier series / May 20, 2026
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-text sm:text-4xl">
              How Smooth Waves Build Sharp Corners: Making Fourier Series
              Intuitive
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-soft">
              A square wave looks simple. But hidden inside is a stack of sine
              waves.
            </p>
          </section>

          <div className="px-5 py-10 sm:px-8 lg:px-10">
            <div className="space-y-6 text-base leading-8 text-soft">
              <p>
                It is obvious to see that a sine wave and a square wave behave
                differently. While both are periodic, the sine wave is smooth
                and curvy while the square wave has an "on and off" behavior.
              </p>

              <ArticleFigure
                src="/images/blog/fourier/blog1.png"
                alt="A sine wave and square wave plotted on the same axes."
                caption="Sine wave and square wave overlaid"
              />

              <p>
                Having both of these in mind, a natural question arises. Is
                there a way to use the periodicity of the sine wave in order to
                produce a square wave? This leads us to Fourier's trick, which
                has underpinned signal processing, circuits, image compression,
                and so much more since its discovery.
              </p>
            </div>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold tracking-tight text-text">
                Making The Square Wave
              </h2>
              <div className="mt-5 space-y-6 text-base leading-8 text-soft">
                <p>Let us make the first and most simple approach. Start with</p>
                <Equation math="S_1(x)=\frac{4}{\pi}\sin(x)" />
                <p>
                  This is our foundation. It does not look like a square wave
                  yet, but it gets the rough shape right:
                </p>
              </div>

              <ArticleFigure
                src="/images/blog/fourier/blog2.png"
                alt="The first sine approximation to a square wave."
                caption={
                  <Latex
                    math="f(x)=\frac{4}{\pi}\sin(x)"
                    className="latex-inline"
                  />
                }
              />

              <div className="space-y-6 text-base leading-8 text-soft">
                <p>
                  It rises where the square wave rises, and falls where the
                  square wave falls. However, it is still too curvy. For now,
                  think of <InlineMath math="\frac{4}{\pi}" /> as a scaling
                  factor that makes the height come out right.
                </p>
                <p>
                  Alright, let us add some more approximations by adding the odd
                  harmonics. A harmonic is just a sine wave whose frequency is
                  an integer multiple of the original:
                </p>
                <Equation math="S_3(x)=\frac{4}{\pi}\left(\sin(x)+\frac{\sin(3x)}{3}\right)" />
                <Equation math="S_5(x)=\frac{4}{\pi}\left(\sin(x)+\frac{\sin(3x)}{3}+\frac{\sin(5x)}{5}\right)" />
                <ArticleFigure
                  src="/images/blog/fourier/blog3.png"
                  alt="The third Fourier partial sum for the square wave."
                  caption={
                    <Latex math="S_3(x)" className="latex-inline" />
                  }
                />
                <ArticleFigure
                  src="/images/blog/fourier/blog4.png"
                  alt="The fifth Fourier partial sum for the square wave."
                  caption={
                    <Latex math="S_5(x)" className="latex-inline" />
                  }
                />
                <p>
                  Why are we adding just odd harmonics like this? Each odd
                  harmonic shares a common behavior across{" "}
                  <InlineMath math="x=\pi,2\pi,\ldots" />. More specifically,
                  each odd harmonic always crosses these points from positive
                  to negative at <InlineMath math="x=\pi" />, then from negative
                  to positive, and so forth. Therefore, when all functions are
                  summed, they constructively make a wave that goes from above
                  to below at such points.
                </p>
              </div>

              <div className="space-y-6 text-base leading-8 text-soft">
                <p>
                  The square wave itself flips sign halfway through its period,
                  so we want sine waves that also flip sign after shifting by{" "}
                  <InlineMath math="\pi" />. Notice here that all of the odd
                  harmonics go across <InlineMath math="x=\pi" /> from top to
                  bottom, which does not hold for even harmonics. So, in order
                  to constructively help make the square wave, we omit the even
                  harmonics and stick to odd. If you are wondering why this is
                  true, notice that <InlineMath math="f(x+\pi)=-f(x)" /> for odd
                  harmonics, but not even ones.
                </p>
                <p>Now, let us generalize the approximation:</p>
                <Equation math="S_N(x)=\frac{4}{\pi}\sum_{n=1}^{N}\frac{\sin((2n-1)x)}{2n-1}" />
                <p>And take <InlineMath math="N" /> to infinity.</p>
              </div>

              <ArticleFigure
                src="/images/blog/fourier/blog5.png"
                alt="The eleventh Fourier partial sum for the square wave."
                caption={<Latex math="S_{11}(x)" className="latex-inline" />}
              />
              <ArticleFigure
                src="/images/blog/fourier/blog6.png"
                alt="The twenty-fifth Fourier partial sum for the square wave."
                caption={<Latex math="S_{25}(x)" className="latex-inline" />}
              />
              <ArticleFigure
                src="/images/blog/fourier/blog7.png"
                alt="The ninety-ninth Fourier partial sum for the square wave."
                caption={<Latex math="S_{99}(x)" className="latex-inline" />}
              />

              <div className="space-y-6 text-base leading-8 text-soft">
                <p>
                  Beautiful. We have just recreated the square wave by summing
                  sine waves. Notice that the low frequency sine waves give rise
                  to the broad structure, and the high frequency waves give the
                  tiny corrections. However, since all of the odd harmonics
                  cross zero with the same behavior, they complement each other
                  and create the overall "on and off" behavior we were looking
                  for.
                </p>
                <p>
                  Notice something interesting in the images: the square wave
                  approximations overshoot the discontinuities slightly. This is
                  known as the Gibbs phenomenon. It is not a bug in Desmos or a
                  numerical error. Essentially, we are trying to create a sharp
                  vertical jump with smooth sine waves. So, there must be a
                  slight bump since sine cannot perfectly snap into place. As{" "}
                  <InlineMath math="N" /> increases, the overshoot bump gets
                  thinner, but it stays the same height. In fact, the height
                  approaches a fixed size of about 9% of the jump.
                </p>
                <p>
                  It is also important to note that the{" "}
                  <InlineMath math="\frac{4}{\pi}" /> included in the series is
                  important to normalize the function. Without the coefficient,
                  the sum would converge to <InlineMath math="\frac{\pi}{4}" />.
                  In order to make it jump from 1 to -1 and so on, we multiply
                  by <InlineMath math="\frac{4}{\pi}" />. Once you realize a
                  wave is controlled by its frequency recipe, the natural next
                  move is to start changing this recipe.
                </p>
              </div>
            </section>

            <section className="mt-12 border-t border-cobalt/20 pt-10">
              <h2 className="text-2xl font-semibold tracking-tight text-text">
                Changing The Recipe
              </h2>
              <div className="mt-5 space-y-6 text-base leading-8 text-soft">
                <p>
                  We have accomplished our original goal of recreating the
                  square wave. But there are plenty of other questions to be
                  asked. For example, what happens if we use even harmonics
                  instead? What about the other trigonometric functions? It
                  turns out, you can make a bunch of very interesting waves with
                  this same approach. Here are some of my favorites:
                </p>
                <Equation math="C_N(x)=\sum_{n=1}^{N}\frac{\cos((2n-1)x)}{2n-1}" />
                <ArticleFigure
                  src="/images/blog/fourier/blog8.png"
                  alt="Cosine with odd harmonics plotted on a coordinate grid."
                  caption="Cosine with odd harmonics"
                />
                <Equation math="G_N(x)=\sum_{n=1}^{N}\frac{\sin((2n-1)x)}{2n}" />
                <ArticleFigure
                  src="/images/blog/fourier/blog9.png"
                  alt="A sine series using odd harmonics with even coefficients in the denominator."
                  caption="Sine with odd harmonics inside sine but even coefficients in the denominator"
                />
                <Equation math="f_N(x)=2\sum_{n=1}^{N}(-1)^{n+1}\frac{\sin(nx)}{n}" />
                <ArticleFigure
                  src="/images/blog/fourier/blog10.png"
                  alt="A sawtooth wave approximation plotted on a coordinate grid."
                  caption={
                    <>
                      <Latex
                        math="2\sum_{n=1}^{70}(-1)^{n+1}\frac{\sin(nx)}{n}"
                        className="latex-inline"
                      />
                      , known as "Sawtooth wave"
                    </>
                  }
                />
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
