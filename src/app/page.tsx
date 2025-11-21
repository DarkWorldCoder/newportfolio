import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen">
      <div className="max-w-7xl w-full">
        <div id="home">
          <Hero />
        </div>
        <section id="about" className="h-screen w-full flex items-center justify-center border-b border-white/10">
            <h1 className="text-4xl font-bold text-white">About Section</h1>
        </section>
        <Skills />
        <section id="work" className="h-screen w-full flex items-center justify-center border-b border-white/10">
            <h1 className="text-4xl font-bold text-white">About Section</h1>
        </section>
        <section id="work" className="h-screen w-full flex items-center justify-center border-b border-white/10">
            <h1 className="text-4xl font-bold text-white">Work Section</h1>
        </section>
        <section id="blog" className="h-screen w-full flex items-center justify-center border-b border-white/10">
            <h1 className="text-4xl font-bold text-white">Blog Section</h1>
        </section>
      </div>
    </main>
  );
}
