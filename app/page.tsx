import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import Interests from "@/components/Interests";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pb-24">
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
