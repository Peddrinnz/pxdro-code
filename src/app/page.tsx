import Header from "@/components/custom/header";
import About from "@/components/landing/about";
import Hero from "@/components/landing/hero";
import Skills from "@/components/landing/skills";
import Experience from "@/components/landing/experience";
import Contact from "@/components/landing/contact";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
