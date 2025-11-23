"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./animated-beam";
import { AnimatedTooltip } from "./animated-tooltip";
import { User, Settings, PenTool, Globe, Code2, LayoutTemplate } from "lucide-react";

// Circle component for nodes
const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/10 bg-black p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:bg-black",
                className,
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

export function CollaborationGrid() {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null); // Central Node (Me)
    const div6Ref = useRef<HTMLDivElement>(null);
    const div7Ref = useRef<HTMLDivElement>(null);
    const div8Ref = useRef<HTMLDivElement>(null);
    const div9Ref = useRef<HTMLDivElement>(null);

    const people = [
        {
            id: 1,
            name: "Ayush Niroula",
            designation: "Lead Engineer",
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop",
        },
    ];

    return (
        <div
            className="relative flex h-full w-full items-center justify-center overflow-hidden bg-transparent pt-2 pb-64 px-6"
            ref={containerRef}
        >
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(59,130,246,0.05)_60deg,transparent_60deg)] animate-spin-slow rounded-full opacity-40" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-white/5 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full opacity-50" />
            </div>

            <div className="flex h-full w-full flex-col items-stretch justify-between gap-2 relative z-10">
                {/* Top Row */}
                <div className="flex flex-row items-start justify-between">
                    <div className="flex flex-col items-center gap-2 group opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <Circle ref={div1Ref} className="h-12 w-12 border-white/5 bg-white/5 backdrop-blur-sm shadow-none hover:scale-110 transition-transform duration-300">
                            <Settings className="h-5 w-5 text-neutral-300" />
                        </Circle>
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] font-bold text-neutral-200 uppercase tracking-wider">Engineering</span>
                            <span className="text-[9px] text-neutral-400">System Arch</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-2 group opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        <Circle ref={div2Ref} className="h-12 w-12 border-white/5 bg-white/5 backdrop-blur-sm shadow-none hover:scale-110 transition-transform duration-300">
                            <Globe className="h-5 w-5 text-neutral-300" />
                        </Circle>
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] font-bold text-neutral-200 uppercase tracking-wider">Global</span>
                            <span className="text-[9px] text-neutral-400">Clients</span>
                        </div>
                    </div>
                </div>

                {/* Middle Row - Central Node */}
                <div className="flex flex-row items-center justify-center ">
                    <div ref={div5Ref} className="relative z-30">
                        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
                        <div className="relative scale-110">
                            <AnimatedTooltip items={people} />
                        </div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-row items-end justify-between">
                    <div className="flex flex-col items-center gap-2 group opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                        <Circle ref={div3Ref} className="h-12 w-12 border-white/5 bg-white/5 backdrop-blur-sm shadow-none hover:scale-110 transition-transform duration-300">
                            <User className="h-5 w-5 text-neutral-300" />
                        </Circle>
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] font-bold text-neutral-200 uppercase tracking-wider">Product</span>
                            <span className="text-[9px] text-neutral-400">Strategy</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-2 group opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                        <Circle ref={div4Ref} className="h-12 w-12 border-white/5 bg-white/5 backdrop-blur-sm shadow-none hover:scale-110 transition-transform duration-300">
                            <PenTool className="h-5 w-5 text-neutral-300" />
                        </Circle>
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] font-bold text-neutral-200 uppercase tracking-wider">Design</span>
                            <span className="text-[9px] text-neutral-400">Creative</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Beams - Only visible on hover */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div5Ref} curvature={-20} gradientStartColor="#3b82f6" gradientStopColor="#8b5cf6" pathWidth={2} duration={2} />
                <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div5Ref} curvature={-15} gradientStartColor="#a855f7" gradientStopColor="#ec4899" reverse pathWidth={2} duration={2} />
                <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div5Ref} curvature={20} gradientStartColor="#22c55e" gradientStopColor="#10b981" pathWidth={2} duration={2} />
                <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div5Ref} curvature={15} gradientStartColor="#ef4444" gradientStopColor="#f97316" reverse pathWidth={2} duration={2} />

                {/* Satellite Beams */}
                <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div5Ref} curvature={-10} gradientStartColor="#f97316" gradientStopColor="#fbbf24" pathOpacity={0.1} pathWidth={1.5} duration={3} />
                <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div5Ref} curvature={10} gradientStartColor="#ec4899" gradientStopColor="#f472b6" reverse pathOpacity={0.1} pathWidth={1.5} duration={3} />
                <AnimatedBeam containerRef={containerRef} fromRef={div8Ref} toRef={div5Ref} curvature={-10} gradientStartColor="#06b6d4" gradientStopColor="#3b82f6" pathOpacity={0.1} pathWidth={1.5} duration={3} />
                <AnimatedBeam containerRef={containerRef} fromRef={div9Ref} toRef={div5Ref} curvature={10} gradientStartColor="#eab308" gradientStopColor="#f97316" reverse pathOpacity={0.1} pathWidth={1.5} duration={3} />
            </div>
        </div>
    );
}
