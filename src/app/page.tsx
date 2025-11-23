import Hero from "@/components/Hero";
import { BentoGridSection } from "@/components/BentoGridSection";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen">
      <div className="max-w-7xl w-full">
        <div id="home">
          <Hero />
        </div>
        <BentoGridSection />
      </div>
    </main>
  );
}
