import Header from "@/components/custom/header";
import About from "@/components/landing/about";
import Hero from "@/components/landing/hero";
import Skills from "@/components/landing/skills";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <Hero />
        <About />
        <Skills />
      </main>
    </div>
  );
}
