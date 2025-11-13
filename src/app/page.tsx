import Header from "@/components/custom/header";
import Hero from "@/components/landing/hero";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <Hero />
        <div>
          <h1 className="text-3xl font-bold underline">
            Hello
          </h1>
        </div>
      </main>
    </div>
  );
}
