import Header from "@/components/custom/header";
import About from "@/components/landing/about";
import Hero from "@/components/landing/hero";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <Hero />
        <About />
        <div>
          <h1 className="text-3xl font-bold underline">
            Hello
          </h1>
        </div>
      </main>
    </div>
  );
}
