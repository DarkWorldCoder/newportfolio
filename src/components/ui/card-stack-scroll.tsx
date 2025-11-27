import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import React, { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { CustomCursor } from "./custom-cursor";

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
    const container = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div
            ref={container}
            className="h-screen flex items-center justify-center sticky"
            style={{
                top: `calc(-5vh + ${i * 25}px)`,
            }}
        >
            <motion.div
                style={{
                    backgroundColor: color,
                    scale,
                }}
                className="flex flex-col relative h-[500px] w-[1000px] max-w-[90%] rounded-3xl p-10 origin-top border border-white/10 cursor-none shadow-2xl shadow-black/50"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <CustomCursor isHovering={isHovering} />
                <div className="flex h-full gap-10">
                    <div className="w-[40%] flex flex-col">
                        <h2 className="text-3xl font-semibold text-white mb-6 tracking-tight">{title}</h2>
                        <p className="text-sm text-white/80 leading-relaxed mb-6">{description}</p>

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

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    return (
        <div ref={container} className="relative">
            {projects.map((project, i) => {
                const targetScale = 1 - (projects.length - i) * 0.05;
                return (
                    <Card
                        key={`p_${i}`}
                        i={i}
                        {...project}
                        progress={scrollYProgress}
                        range={[i * 0.25, 1]}
                        targetScale={targetScale}
                    />
                );
            })}
        </div>
    );
};
