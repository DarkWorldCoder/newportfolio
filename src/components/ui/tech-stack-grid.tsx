"use client";
import React from "react";
import { Marquee } from "./marquee";
import { cn } from "@/lib/utils";

const techStackRow1 = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
];

const techStackRow2 = [
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

export function TechStackGrid() {
    return (
        <div className="flex flex-col h-full w-full p-8 pb-6 relative overflow-hidden">
            <div className="flex flex-col gap-4 mb-6">
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

            <div className="relative flex w-full flex-col items-center justify-center overflow-visible gap-4 flex-1">
                <Marquee pauseOnHover className="[--duration:40s]">
                    {techStackRow1.map((tech) => (
                        <TechBadge key={tech.name} {...tech} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:40s]">
                    {techStackRow2.map((tech) => (
                        <TechBadge key={tech.name} {...tech} />
                    ))}
                </Marquee>

                {/* Fade Edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
            </div>
        </div>
    );
}

function TechBadge({ name, icon }: { name: string; icon: string }) {
    return (
        <div className="flex items-center gap-2.5 px-4 py-2.5 mx-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default group">
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
