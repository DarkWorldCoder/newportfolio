"use client";
import React from "react";
import { BentoGrid } from "./ui/bento-grid";
import { GridGlobe } from "./ui/grid-globe";
import { CollaborationGrid } from "./ui/collaboration-grid";
import { TechStackGrid } from "./ui/tech-stack-grid";
import { MagicCard } from "./ui/magic-card";
import { BlurFade } from "./ui/blur-fade";
import NumberTicker from "./ui/number-ticker";
import { CardSpotlight } from "./ui/card-spotlight";
import { Marquee } from "./ui/marquee";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Globe2,
  Users,
  Code2,
  LayoutTemplate,
  Server
} from "lucide-react";

// Using a serif font for headings to match the reference
const serifFont = "font-serif"; // Assuming a serif font is available or using default serif

// TechBadge component for inline use
function TechBadge({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center gap-2.5 px-4 py-2.5 mx-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default group">
      <div className="relative w-5 h-5 flex items-center justify-center flex-shrink-0">
        <img
          src={icon}
          alt={name}
          className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.textContent = name.slice(0, 2).toUpperCase();
              parent.className = 'w-5 h-5 flex items-center justify-center text-xs font-bold text-neutral-400';
            }
          }}
        />
      </div>
      <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export function BentoGridSection() {
  return (
    <section id="about" className="py-24 w-full max-w-7xl mx-auto px-4 relative overflow-hidden bg-transparent">

      <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem] gap-6">

        {/* Item 1: Collaboration (Top Left, Span 2) */}
        {/* Item 1: Collaboration (Top Left, Span 2) */}
        <div
          className={cn(
            "md:col-span-2 row-span-1 relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] p-0 group",
            "hover:border-white/20 transition-colors duration-500"
          )}
        >
          {/* Creative Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(59,130,246,0.15),transparent_70%)]" />

          <div className="absolute inset-0 h-full w-full z-10">
            <CollaborationGrid />
          </div>

          {/* Text Overlay with Glassmorphism */}
          <div className="absolute bottom-0 left-0 w-full p-8 pb-12 z-40">
            {/* Blur Backdrop for Text Only - Reduced height and blur */}
            <div className="absolute bottom-0 left-0 w-full h-[160px] bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent backdrop-blur-[1px]" />

            <div className="relative z-50 flex flex-col justify-end h-full transition-transform duration-500 group-hover:-translate-y-6">
              <h3 className={cn("text-3xl text-white mb-2 font-bold tracking-tight", serifFont)}>
                Global Collaboration
              </h3>
              <p className="text-neutral-300 text-base leading-relaxed max-w-lg">
                Orchestrating distributed teams and fostering open communication across time zones.
              </p>

              <div className="absolute -bottom-12 left-0 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex items-center gap-2 text-white text-sm font-medium cursor-pointer hover:text-blue-400 transition-colors group/btn">
                  Book a call <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Item 2: Tech Stack + Impact (Top Right, Span 1, Row Span 2 - Tall) */}
        <MagicCard
          className={cn(
            "md:col-span-1 md:row-span-2 relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md p-0 flex flex-col",
            "group hover:border-white/20 transition-colors duration-500"
          )}
          gradientColor="#262626"
        >
          <div className="flex flex-col h-full p-8 pb-6 relative overflow-hidden">
            {/* Header Section */}
            <div className="flex flex-col gap-4 mb-8">
              <h2 className="text-4xl font-serif text-white leading-tight tracking-tight">
                Building with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-bold">
                  modern tools
                </span>
              </h2>

              <p className="text-neutral-400 text-sm max-w-md leading-relaxed">
                Leveraging cutting-edge technologies to build scalable applications.
              </p>
            </div>

            {/* Tech Stack Marquees - 2 Rows */}
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-4 mb-8 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
              {/* Row 1: Languages, Frontend & Backend */}
              <Marquee pauseOnHover className="[--duration:50s]">
                {[
                  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                  { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
                  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
                  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
                  { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
                  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
                  { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
                ].map((tech) => (
                  <TechBadge key={tech.name} {...tech} />
                ))}
              </Marquee>

              {/* Row 2: Databases, DevOps & Cloud */}
              <Marquee reverse pauseOnHover className="[--duration:50s]">
                {[
                  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
                  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
                  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
                  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
                  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
                  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
                  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
                  { name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
                  { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
                ].map((tech) => (
                  <TechBadge key={tech.name} {...tech} />
                ))}
              </Marquee>

              {/* Fade Edges */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/40 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/40 to-transparent" />
            </div>

            {/* Professional Achievements Section */}
            <div className="mt-auto space-y-3 pt-6 border-t border-white/10">
              <div className="grid grid-cols-2 gap-3">
                <div className="group flex flex-col items-start p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/20 hover:scale-[1.02] transition-all duration-300 cursor-default">
                  <div className="w-full flex items-center justify-between mb-2">
                    <p className="text-3xl font-bold text-white transition-colors">4+</p>
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <svg className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-neutral-400 font-medium text-xs uppercase tracking-wider">Years Experience</p>
                </div>
                <div className="group flex flex-col items-start p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/20 hover:scale-[1.02] transition-all duration-300 cursor-default">
                  <div className="w-full flex items-center justify-between mb-2">
                    <p className="text-3xl font-bold text-white transition-colors">30%</p>
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <svg className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-neutral-400 font-medium text-xs uppercase tracking-wider">Faster Load Times</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="group flex flex-col items-start p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/20 hover:scale-[1.02] transition-all duration-300 cursor-default">
                  <div className="w-full flex items-center justify-between mb-2">
                    <p className="text-3xl font-bold text-white transition-colors">99.9%</p>
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <svg className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-neutral-400 font-medium text-xs uppercase tracking-wider">Uptime SLA</p>
                </div>
                <div className="group flex flex-col items-start p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/20 hover:scale-[1.02] transition-all duration-300 cursor-default">
                  <div className="w-full flex items-center justify-between mb-2">
                    <p className="text-3xl font-bold text-white transition-colors">85%</p>
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <svg className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-neutral-400 font-medium text-xs uppercase tracking-wider">Deploy Success</p>
                </div>
              </div>
            </div>
          </div>
        </MagicCard>

        {/* Item 3: Globe (Bottom Left, Span 1, Row Span 2 - Tall) */}
        <MagicCard
          className={cn(
            "md:col-span-1 md:row-span-2 relative overflow-visible rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md p-0 flex flex-col",
            "group hover:border-white/20 transition-colors duration-500"
          )}
          gradientColor="#262626"
        >
          <div className="p-8 z-10 relative">
            <h3 className={cn("text-3xl text-center text-white mb-6 leading-tight", serifFont)}>
              I&apos;m very flexible with time zone communications
            </h3>
            <div className="flex justify-center gap-3 mt-2 flex-wrap">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
                <span className="text-xs text-neutral-300">🌍 Worldwide</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
                <span className="text-xs text-neutral-300">🇳🇵 Nepal</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
                <span className="text-xs text-neutral-300">🇺🇸 USA</span>
              </div>
            </div>
          </div>
          <div className="flex-1 relative h-full min-h-[450px] z-20">
            <GridGlobe />
          </div>
          <div className="p-6 absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/95 to-transparent z-50 pointer-events-none">
            <div className="flex items-center gap-2">
              <Globe2 className="w-5 h-5 text-neutral-400" />
              <p className="text-neutral-400 text-sm font-mono uppercase tracking-wider font-semibold">Remote</p>
            </div>
            <p className="text-white font-bold text-2xl mt-2">Nepal</p>
          </div>
        </MagicCard>

        {/* Item 4: Contact (Center, Span 1) */}
        <CardSpotlight
          className={cn(
            "md:col-span-1 row-span-1 relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md p-8 flex flex-col items-center justify-center text-center",
            "group hover:border-white/20 transition-colors duration-500"
          )}
          color="#262626"
        >
          <h3 className={cn("text-3xl text-white mb-8 relative z-10", serifFont)}>
            Let&apos;s work together <br /> on your next project
          </h3>
          <a href="mailto:ayushniroula08@gmail.com" className="relative z-10 px-6 py-3 bg-white/5 border border-white/10 rounded-lg flex items-center gap-2 text-neutral-300 hover:bg-white/10 transition-colors cursor-pointer text-sm hover:text-white">
            <LayoutTemplate className="w-4 h-4" />
            ayushniroula08@gmail.com
          </a>
        </CardSpotlight>


        {/* Item 6: Expertise & Vision (Bottom, Span 2) */}
        <CardSpotlight
          className={cn(
            "md:col-span-2 row-span-1 relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md p-0",
            "group hover:border-white/20 transition-colors duration-500"
          )}
          color="#262626"
        >
          <div className="flex flex-col justify-end h-full relative">
            {/* Expertise Marquee at Top - Animated Scrolling Cards */}
            <div className="relative mb-8 overflow-hidden opacity-40 mask-linear-fade pt-8">
              <Marquee pauseOnHover className="[--duration:40s]">
                {[
                  { label: "Product Development", desc: "End-to-end product delivery" },
                  { label: "System Architecture", desc: "Scalable & resilient systems" },
                  { label: "AI/ML Engineering", desc: "Intelligent automation" },
                  { label: "Full-Stack Development", desc: "Frontend to backend mastery" },
                  { label: "Cloud Infrastructure", desc: "AWS, GCP & Kubernetes" },
                  { label: "DevOps & CI/CD", desc: "Automated deployments" },
                  { label: "Performance Optimization", desc: "Lightning-fast applications" },
                  { label: "Team Leadership", desc: "Building high-impact teams" },
                ].map((item, i) => (
                  <div key={i} className="min-w-[180px] h-24 bg-black/50 rounded-xl border border-white/5 p-4 flex flex-col gap-2 backdrop-blur-sm mx-2 hover:bg-black/60 hover:border-white/10 transition-all duration-300">
                    <p className="text-sm font-semibold text-neutral-300">{item.label}</p>
                    <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </Marquee>
            </div>

            {/* Text Content Below - Matching Reference Style */}
            <div className="flex items-start gap-4 p-8 pb-8 relative z-10">
              <div className="p-2.5 bg-white/5 rounded-xl border border-white/10">
                <Users className="w-7 h-7 text-neutral-400" />
              </div>
              <div>
                <p className="font-mono text-xs text-neutral-500 mb-2">Lead Engineer @ WiseAdmit • CEO @ Eterosoft</p>
                <h3 className="text-2xl font-bold text-white">
                  Building Innovative Products & Leading Engineering Teams
                </h3>
              </div>
            </div>
          </div>
        </CardSpotlight>

      </BentoGrid>
    </section>
  );
}
