"use client";
import React from "react";
import { ArrowRight, Copy, ChevronRight, MapPin } from "lucide-react";
import { SparklesCore } from "./ui/sparkles";
import { Meteors } from "./ui/meteors";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("ayushniroula08@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      className="relative flex h-screen max-h-[1000px] min-h-[800px] w-full flex-col items-center justify-center overflow-hidden py-20"
      id="hero-section"
    >
      {/* Background Blur */}
      <div
        aria-hidden="true"
        className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 z-0 h-[500px] w-[800px] rounded-full bg-indigo-700/20 blur-[150px] dark:bg-[#0b0218]"
      ></div>

      {/* Live Particles (Sparkles) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={5}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Meteors Effect */}
      <Meteors number={10} />

      <div className="container relative z-20 mx-auto mb-40 flex w-full flex-col items-center justify-center gap-y-4 px-4">
        {/* Status & Location - Top Placement */}
        <div className="flex items-center justify-center gap-3 text-xs font-medium text-zinc-500 dark:text-zinc-400 animate-fadeInUp">
           <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100/50 dark:bg-zinc-800/50 border border-zinc-200/50 dark:border-zinc-700/50 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500/80"></span>
              </span>
              Available for work
           </div>
           <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100/50 dark:bg-zinc-800/50 border border-zinc-200/50 dark:border-zinc-700/50 backdrop-blur-md">
              <MapPin className="h-3 w-3" />
              Based in Nepal
           </div>
        </div>

        {/* Coming Soon Badge */}
        <Link
          href="/projects"
          className="group flex cursor-pointer items-center rounded-full border border-black/0 hover:bg-black/10 text-sm backdrop-blur-xs transition-all duration-300 ease-in lg:text-base dark:border-white/0 dark:hover:bg-white/5 dark:hover:border-white/15 animate-fadeInDown"
        >
          <span className="mx-1 rounded-full bg-blue-700 px-1.5 text-white text-xs leading-relaxed">
            New
          </span>
          <span
            className="relative text-black/65 dark:text-white/90 px-1 py-0.5"
            style={{
              maskImage:
                "linear-gradient(-75deg,var(--primary) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),var(--primary) calc(var(--x) + 100%))",
              textShadow:
                "rgba(255, 255, 255, 0.3) 0px 0px 10px, rgba(255, 255, 255, 0.2) 0px 0px 20px, rgba(255, 255, 255, 0.1) 0px 0px 30px",
              // @ts-expect-error -- CSS variable
              "--x": "-100%",
            }}
          >
            Check out my latest work
          </span>
          <ChevronRight
            className="mr-1 size-4 text-black transition-transform duration-300 ease-in-out hover:duration-300 group-hover:translate-x-0.5 dark:text-neutral-100/70"
            aria-hidden="true"
          />
        </Link>

        {/* Main Headline */}
        <h2 className="w-full animate-fadeInUp text-balance text-center font-serif text-5xl text-zinc-700 leading-tight opacity-90 md:text-6xl lg:text-7xl dark:text-zinc-100">
          <span className="md:text-nowrap">Building intelligent</span>
          <br className="hidden md:block" />
          <span className="bg-linear-to-b from-zinc-500 via-zinc-600 to-zinc-900 bg-clip-text font-serif text-transparent italic tracking-tight dark:from-zinc-700 dark:via-zinc-200 dark:to-zinc-50">
            digital experiences
          </span>
        </h2>

        {/* Subheadline with Inline Avatar */}
        <div className="relative z-20 flex animate-fadeInUp flex-col items-center justify-center text-center text-lg tracking-tight md:text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mt-6">
          <div className="leading-relaxed inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <span>I&apos;m</span>
            <div className="relative h-9 w-24 overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm inline-block align-middle group">
               <Image
                alt="Ayush Niroula"
                width={100}
                height={100}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
              />
            </div>
            <span className="font-semibold text-black dark:text-white">Ayush Niroula</span>.
            <span>A Lead Full Stack Engineer architecting <span className="font-semibold text-zinc-900 dark:text-zinc-100 decoration-blue-500/40 underline decoration-2 underline-offset-4 hover:decoration-blue-500 transition-all duration-300">scalable systems</span> and designing <span className="font-semibold text-zinc-900 dark:text-zinc-100 decoration-purple-500/40 underline decoration-2 underline-offset-4 hover:decoration-purple-500 transition-all duration-300">intelligent solutions</span> that drive innovation.</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="z-30 mt-4 flex animate-fadeInUp flex-col items-center justify-center gap-6 sm:flex-row md:gap-10">
          <a href="#contact">
            <button className="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-black/30 bg-black/20 py-[3px] pr-[3px] pl-2 font-medium text-base opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pr-1 md:pl-3 dark:border-white/10 dark:bg-white/10">
              <span className="z-10 px-3 text-black transition-colors duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
                Let&apos;s Connect
              </span>
              <span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-black opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 dark:bg-white"></span>
              <span className="z-10 flex items-center justify-center overflow-hidden rounded-full bg-black p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5 dark:bg-white">
                <ArrowRight className="text-white transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0 dark:text-black w-4 h-4" />
                <ArrowRight className="-translate-x-5 absolute text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 dark:text-black w-4 h-4" />
              </span>
            </button>
          </a>

          <button
            onClick={copyEmail}
            className="flex items-center gap-2 py-2 font-light text-base text-black outline-hidden transition-all duration-300 dark:text-white/75 cursor-pointer hover:text-black/60 dark:hover:text-white/90"
            type="button"
          >
            <Copy className="w-5 h-5" />
            {copied ? "Copied!" : "ayushniroula08@gmail.com"}
          </button>
        </div>
      </div>

      {/* Bottom Glow Effect - Live Earth */}
      <div className="absolute inset-x-0 bottom-0 h-56 pointer-events-none">
        <div aria-hidden="true" className="relative h-60 w-full z-10 mt-4">
          <div className="absolute bottom-0 left-1/2 z-0 -translate-x-1/2 transform h-[500px] w-[1200px] mask-[linear-gradient(to_right,transparent,black_30%,black_70%,transparent)]">
            {/* Animated Gradient - The "Live" Light */}
            <div
              className="absolute bottom-[120px] left-1/2 -translate-x-1/2 transform h-[90px] w-[500px] blur-[50px] bg-[linear-gradient(90deg,#a5f3fc,#c4b5fd,#a5b4fc,#7dd3fc,#a5f3fc)] bg-size-[300%_100%] animate-gradient"
              style={{
                transform: "translateX(-2.56323px) scaleX(1.09744)",
                backgroundPosition: "48.7184% 50%",
              }}
            ></div>
            {/* Atmosphere Particles */}
            <div className="absolute bottom-0 left-0 w-full h-full z-20 opacity-50">
               <SparklesCore
                id="earth-particles"
                background="transparent"
                minSize={1}
                maxSize={3}
                particleDensity={30}
                className="w-full h-full"
                particleColor="#ffffff"
                speed={2}
              />
            </div>
            <div className="absolute -bottom-[753px] -left-[454px] -right-[432px] h-[955px] rounded-[100%] bg-linear-to-b from-indigo-500/40 to-transparent dark:from-white"></div>
            <div
              className="absolute -bottom-[759px] -left-[532px] -right-[510px] h-[956px] aspect-[2.346/1] rounded-[100%] bg-white dark:bg-black shadow-[inset_0_2px_20px_#4f46e510,0_-10px_50px_1px_#4f46e520] dark:shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff7d]"
              style={{
                boxShadow:
                  "rgb(255, 255, 255) 0px 2px 23.5081px inset, rgba(255, 255, 255, 0.54) 0px -10px 53.508px 1px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
