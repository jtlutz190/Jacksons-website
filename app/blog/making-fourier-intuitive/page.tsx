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
                A sine wave and a square wave behave very differently. While
                both are periodic, the sine wave is smooth and curvy while the
                square wave has an "on and off" behavior.
              </p>

              <ArticleFigure
                src="/images/blog/fourier/blog1.png"
                alt="A sine wave and square wave plotted on the same axes."
                caption="Sine wave and square wave overlaid"
              />

              <p>
                With both shapes in mind, a natural question arises. Is there a
                way to use the periodicity of the sine wave in order to produce
                a square wave? This leads us to Fourier's trick, which has
                underpinned signal processing, circuits, image compression, and
                so much more since its discovery.
              </p>
            </div>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold tracking-tight text-text">
                Making The Square Wave
              </h2>
              <div className="mt-5 space-y-6 text-base leading-8 text-soft">
                <p>Let's start with the simplest approximation.</p>
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
                <Equation math="S_3(x)=\frac{4}{\pi}\left(\sin(x)+\frac{1}{3}\sin(3x)\right)" />
                <Equation math="S_5(x)=\frac{4}{\pi}\left(\sin(x)+\frac{1}{3}\sin(3x)+\frac{1}{5}\sin(5x)\right)" />
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
                <ArticleFigure
                  src="/images/blog/fourier/blog11.png"
                  alt="The first, third, and fifth sine harmonics crossing x equals pi from positive to negative."
                  caption="Odd harmonics cross together at the sign change"
                />
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
                  true, notice that for <InlineMath math="\sin(kx)" />, shifting
                  by <InlineMath math="\pi" /> gives{" "}
                  <InlineMath math="\sin(k(x+\pi))=(-1)^k\sin(kx)" />. Odd{" "}
                  <InlineMath math="k" /> terms flip sign, matching the square
                  wave's half-period sign flip, while even{" "}
                  <InlineMath math="k" /> terms do not.
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
                  the odd-harmonic sine sum converges to{" "}
                  <InlineMath math="\frac{\pi}{4}" /> on the positive plateau.
                  To scale the wave to jump between <InlineMath math="1" /> and{" "}
                  <InlineMath math="-1" />, we multiply by{" "}
                  <InlineMath math="\frac{4}{\pi}" />. Once you realize a wave
                  is controlled by its frequency recipe, the natural next move
                  is to start changing this recipe.
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
                  caption="known as Sawtooth wave"
                />
              </div>
            </section>

            <section className="mt-12 border-t border-cobalt/20 pt-10">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Part 2
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-text">
                Applications in Electronics
              </h2>
              <div className="mt-5 space-y-6 text-base leading-8 text-soft">
                <p>
                  In the first section, we built a square wave with smooth sine
                  waves. While this is surprising, it is not the overarching
                  idea behind Fourier approximations, especially in electronic
                  signaling.
                </p>
                <p>
                  The overarching idea is actually the other way around:
                  complicated signals can be broken down into frequency
                  components. This is where Fourier approximations can become
                  less math and more physics and engineering.
                </p>
                <p>
                  Let us start in the digital world. Here, a transmitter usually
                  sends information to a receiver by switching between 0s and
                  1s: 0 is low voltage, and 1 is high voltage. A clean way to
                  transmit this information would be with a square wave. The
                  highs would represent 1s, and the lows would represent 0s.
                  This is what would take place in a perfect, idealized digital
                  world.
                </p>
                <p>
                  Physically, however, something very different is happening.
                  These electrical signals interact with conductors, face
                  capacitance and resistance, interact with noise, and much
                  more. In reality, a signal can never be transmitted perfectly
                  to another device. Digital information is discrete in theory
                  but analog in reality. This creates a new way to interpret the
                  square wave from earlier.
                </p>
                <p>
                  From the first section, we know that the square wave's general
                  shape is made from low frequencies, while high frequencies
                  sharpen it out. However, due to real conditions, the higher
                  frequencies can get weakened, distorted, or reflected.
                  According to our approximations, a square wave without the
                  high frequencies would appear rounded and not very discrete.
                </p>
                <p>
                  This idea is known as <strong>bandwidth</strong>. Bandwidth is
                  the range of frequencies that are able to be transmitted to
                  another device. Ideally, infinite bandwidth would help us
                  produce perfect square waves at the receiver. But in reality,
                  the square waves can appear flat and smoothed out.
                </p>
                <p>
                  To sum up so far, signals can be broken down into frequency
                  components. However, because of real conditions like
                  capacitance, resistance, and noise, higher frequencies can be
                  distorted. Thus, square waves are going to appear more smooth
                  and rounded than an ideal square wave.
                </p>
                <p>
                  At low clock speeds, this low bandwidth is okay, since the
                  waves have enough time to rise and fall and thus be processed.
                  However, at high clock speeds, this can make or break a
                  system. If a smoothed-out wave does not have enough time to
                  drop before another wave comes in, the receiver cannot tell
                  when the lows and highs actually happened.
                </p>
                <p>
                  So, how does one increase bandwidth? You can start by reducing
                  what caused reduced bandwidth in the first place. That means
                  reducing capacitance, reducing length, having less
                  resistance/impedance to interact with, and using stronger
                  drivers that change voltage more quickly.
                </p>
                <p>
                  In this whole blog post, we have learned how signals are
                  approximated using sums of frequencies, and how the
                  applications of this helped us learn the limitations of
                  signals using bandwidth, as well as how to reduce those
                  limitations.
                </p>
                <p>
                  The deeper lesson is not just that sine waves can build a
                  square wave. It is that shape can be understood through
                  frequency. Once a signal is described by its frequency recipe,
                  questions about noise, filtering, bandwidth, and compression
                  become much more natural. This is where Fourier series stops
                  feeling like a trick and starts feeling like signal
                  processing.
                </p>
              </div>

              <ArticleFigure
                src="/images/blog/fourier/low-bandwidth-square-wave.gif"
                alt="Oscilloscope capture of a low bandwidth square wave with rounded rising and falling edges."
                caption={
                  <>
                    Low bandwidth square wave. Image adapted from Electronics
                    Stack Exchange user Zhenek, licensed under CC BY-SA.
                    Source:{" "}
                    <a
                      href="https://electronics.stackexchange.com/questions/455356/cheap-oscilloscope-showing-16-mhz-square-wave"
                      className="text-gold underline decoration-gold/40 underline-offset-4 hover:text-accent"
                    >
                      Electronics Stack Exchange
                    </a>
                    .
                  </>
                }
              />
            </section>

            <section className="mt-12 border-t border-cobalt/20 pt-10">
              <h2 className="text-2xl font-semibold tracking-tight text-text">
                Sources / Further Reading
              </h2>
              <div className="mt-5 space-y-4 text-base leading-8 text-soft">
                <p>
                  Daniel A. Russell's{" "}
                  <a
                    href="https://www.acs.psu.edu/drussell/demos/Fourier/Fourier.html"
                    className="text-gold underline decoration-gold/40 underline-offset-4 hover:text-accent"
                  >
                    Fourier Synthesis of Periodic Signals
                  </a>
                  , Keysight's{" "}
                  <a
                    href="https://www.keysight.com/used/us/en/knowledge/glossary/oscilloscopes/what-is-oscilloscope-bandwith"
                    className="text-gold underline decoration-gold/40 underline-offset-4 hover:text-accent"
                  >
                    oscilloscope bandwidth note
                  </a>
                  , and the standard reference on the{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Gibbs_phenomenon"
                    className="text-gold underline decoration-gold/40 underline-offset-4 hover:text-accent"
                  >
                    Gibbs phenomenon
                  </a>
                  .
                </p>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
