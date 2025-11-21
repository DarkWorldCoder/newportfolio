"use client";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import Image from "next/image";
import { IconCloud } from "./ui/icon-cloud";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail,
  ExternalLink
} from "lucide-react";

export function BentoGridSection() {
  return (
    <section id="about" className="py-20 w-full max-w-7xl mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-linear-to-b from-white to-white/40">
        Crafting Digital Excellence
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        {/* Main Hero Card */}
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Hi, I&apos;m Ayush Niroula
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              Full Stack Developer passionate about building scalable web applications and intuitive user experiences. 
              Specializing in Next.js, TypeScript, and Cloud Architecture.
            </p>
            <div className="flex gap-4 mt-6">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    <Github className="w-5 h-5 text-white" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    <Twitter className="w-5 h-5 text-white" />
                </a>
            </div>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop"
            width={500}
            height={500}
            alt="Ayush Niroula"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl opacity-50"
          />
        </WobbleCard>

        {/* Tech Stack Card */}
        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-neutral-900">
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white mb-4">
            Tech Stack
          </h2>
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
             <TechStackCloud />
          </div>
        </WobbleCard>

        {/* Projects Card */}
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Featured Project: SaaS Dashboard
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              A comprehensive dashboard for managing SaaS subscriptions, analytics, and user management. Built with Next.js, Supabase, and Stripe.
            </p>
            <a href="#" className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-white text-blue-900 rounded-lg font-semibold hover:bg-neutral-200 transition-colors">
                View Project <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
            width={500}
            height={500}
            alt="Project Demo"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl opacity-80"
          />
        </WobbleCard>
        
        {/* Contact / Socials */}
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-emerald-900 min-h-[300px]">
            <div className="max-w-md">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Let&apos;s work together
                </h2>
                <p className="mt-4 text-left text-base/6 text-neutral-200">
                    I&apos;m currently available for freelance projects and remote opportunities. 
                    Reach out to discuss your next big idea.
                </p>
                <div className="mt-6 flex items-center gap-2 text-white">
                    <Mail className="w-5 h-5" />
                    <span className="font-mono">ayushniroula08@gmail.com</span>
                </div>
            </div>
        </WobbleCard>

        {/* Global Reach */}
        <WobbleCard containerClassName="col-span-1 bg-purple-900 min-h-[300px]">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Global Reach
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
                Working with clients from UK, USA, and Nepal. Flexible with time zones.
            </p>
            <div className="mt-8 flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white border border-white/20">UTC-5</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white border border-white/20">UTC+0</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white border border-white/20">UTC+5:45</span>
            </div>
        </WobbleCard>

      </div>
    </section>
  );
}

const TechStackCloud = () => {
  const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "figma",
  ];

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <IconCloud images={images} />
  );
};

