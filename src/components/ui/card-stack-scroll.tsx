"use client";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import React, { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { CustomCursor } from "./custom-cursor";

// Define the interface for Card props
interface CardProps {
    i: number;
    title: string;
    description: string;
    techStack: { name: string; icon: string }[];
    link: string;
    content: React.ReactNode;
    color: string;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
}

// --- Card Component (Handles the scaling and internal parallax) ---

const Card: React.FC<CardProps> = ({
    i,
    title,
    description,
    techStack,
    link,
    content,
    color,
    progress,
    range,
    targetScale,
}) => {
    // Ref for the sticky container element (h-screen div)
    const container = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    // Track scroll progress as the individual card enters/leaves the viewport
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"], // 0 when card starts entering, 1 when it hits the top
    });

    // Apply parallax effect to the content inside the card
    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

    // Apply the stack/scale effect based on the overall scroll progress
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div
            ref={container}
            // Make the container sticky to the top of the viewport
            className="h-screen flex items-center justify-center sticky top-0"
            style={{
                // Stagger the sticky position slightly to create the initial stack look
                top: i * 20,
                // Ensure the background container (h-screen) is stacked correctly
                zIndex: 100 - i,
            }}
        >
            <motion.div
                style={{
                    backgroundColor: color,
                    scale, // The core stacking/scaling effect
                    zIndex: 100 - i, // Ensure cards are stacked in order for motion element
                }}
                // Apply a negative margin or translation to center the card on the screen
                // The 'relative' class in combination with h-[550px] helps center it visually
                className="flex flex-col relative h-[550px] w-[1200px] max-w-[90%] rounded-3xl p-10 origin-top border border-white/10 cursor-none"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <CustomCursor isHovering={isHovering} />
                <div className="flex h-full gap-10">
                    {/* Left side - Description */}
                    <div className="w-[40%] flex flex-col">
                        <h2 className="text-3xl font-semibold text-white mb-6 tracking-tight">{title}</h2>
                        <p className="text-sm text-white/80 leading-relaxed mb-6">{description}</p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-auto">
                            {techStack.map((tech, idx) => (
                                <div key={idx} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-white/80 flex items-center gap-1.5">
                                    <img src={tech.icon} alt={tech.name} className="w-3 h-3 opacity-70" />
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>

                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 mt-6 text-white/70 hover:text-white transition-colors"
                        >
                            <span className="text-sm underline">Visit Project</span>
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Right side - Project Preview - Full Height */}
                    <div className="relative w-[60%] h-full rounded-2xl overflow-hidden border border-white/10">
                        <motion.div className="w-full h-full" style={{ scale: imageScale }}>
                            {content}
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};


// --- CardStackScroll Component (Manages the overall scroll area) ---

export const CardStackScroll = ({
    projects,
}: {
    projects: {
        title: string;
        description: string;
        techStack: { name: string; icon: string }[];
        link: string;
        content: React.ReactNode;
        color: string;
    }[];
}) => {
    const container = useRef(null);

    // Track scroll progress for the *entire* container's scroll area
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    return (
        <div
            ref={container}
            className="relative"
            // CRITICAL FIX: Set the necessary height for the scroll animation to run.
            // (projects.length * 100vh) ensures enough scroll space for each card to be 'active'.
            style={{ height: `calc(${projects.length} * 100vh + 100vh)` }}
        >
            {projects.map((project, i) => {
                // Calculate the final scale for the card when it is 'completed'
                const targetScale = 1 - (projects.length - i) * 0.05;
                return (
                    <Card
                        key={`p_${i}`}
                        i={i}
                        {...project}
                        progress={scrollYProgress}
                        // Define the range of overall scroll progress (0 to 1) 
                        // over which this card's scaling effect should happen.
                        range={[i * 0.25, 1]}
                        targetScale={targetScale}
                    />
                );
            })}
        </div>
    );
};