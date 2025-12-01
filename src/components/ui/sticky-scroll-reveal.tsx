"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight, ExternalLink } from "lucide-react";

// TechBadge component (reused from BentoGridSection)
function TechBadge({ name, icon }: { name: string; icon: string }) {
    return (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default group">
            <div className="relative w-4 h-4 flex items-center justify-center flex-shrink-0">
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
                            parent.className = 'w-4 h-4 flex items-center justify-center text-[10px] font-bold text-neutral-400';
                        }
                    }}
                />
            </div>
            <span className="text-xs font-medium text-neutral-300 group-hover:text-white transition-colors whitespace-nowrap">
                {name}
            </span>
        </div>
    );
}

export const StickyScroll = ({
    content,
    contentClassName,
}: {
    content: {
        title: string;
        description: string;
        techStack?: { name: string; icon: string }[];
        link?: string;
        content?: React.ReactNode | any;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );
        setActiveCard(closestBreakpointIndex);
    });

    return (
        <motion.div
            className="h-[50rem] overflow-y-auto flex justify-center relative space-x-14 rounded-3xl p-10 no-scrollbar"
            ref={ref}
        >
            <div className="div relative flex items-start px-4 w-full">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-40">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                className="text-5xl font-bold text-white font-serif mb-8 tracking-tight"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                className="text-xl text-neutral-300 max-w-lg mt-6 leading-relaxed"
                            >
                                {item.description}
                            </motion.p>

                            {/* Tech Stack */}
                            {item.techStack && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                    className="flex flex-wrap gap-3 mt-10 max-w-lg"
                                >
                                    {item.techStack.map((tech) => (
                                        <TechBadge key={tech.name} {...tech} />
                                    ))}
                                </motion.div>
                            )}

                            {/* Link Button */}
                            {item.link && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                    className="mt-10"
                                >
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all duration-300 group text-sm font-medium"
                                    >
                                        Visit Project
                                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </a>
                                </motion.div>
                            )}
                        </div>
                    ))}
                    <div className="h-60" />
                </div>
            </div>

            {/* Sticky Image Container with 3D Effect */}
            <div
                className={cn(
                    "hidden lg:block h-[35rem] w-full max-w-3xl rounded-3xl sticky top-24 overflow-hidden border border-white/10 bg-black/50 backdrop-blur-xl shadow-2xl",
                    contentClassName
                )}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20 pointer-events-none z-20" />

                {/* Subtle glow effect */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none z-10" />
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none z-10" />

                {content[activeCard].content ?? null}
            </div>
        </motion.div>
    );
};
