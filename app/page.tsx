import Blog from "@/components/Blog";
import AnimatedEquations from "@/components/AnimatedEquations";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Interests from "@/components/Interests";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <AnimatedEquations />
      <Nav />
      <main className="relative z-10 mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        <Hero />
        <Projects />
        <Skills />
        <Blog />
        <Interests />
      </main>
      <Footer />
    </>
  );
}
