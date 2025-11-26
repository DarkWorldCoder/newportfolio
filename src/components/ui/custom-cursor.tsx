"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export const CustomCursor = ({ isHovering }: { isHovering: boolean }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    if (!isHovering) return null;

    const text = "VIEW DETAILS     ·     VIEW DETAILS     ·     ";

    return (
        <motion.div
            className="fixed pointer-events-none z-[9999]"
            style={{
                left: mousePosition.x,
                top: mousePosition.y,
                transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: isHovering ? 1 : 0, opacity: isHovering ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            {/* Outer Circle Container */}
            <div className="relative w-[72px] h-[72px] rounded-full flex items-center justify-center">
                {/* Dark Background Circle */}
                <div className="absolute inset-0 rounded-full bg-[#1a1a2e] border-2 border-white/20" />

                {/* Rotating Text Container */}
                <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    <svg
                        viewBox="0 0 72 72"
                        className="w-full h-full"
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d="M 36, 36 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
                            />
                        </defs>
                        <text className="text-[8px] fill-white font-semibold tracking-wider uppercase">
                            <textPath href="#circlePath" startOffset="0%">
                                {text}
                            </textPath>
                        </text>
                    </svg>
                </motion.div>

                {/* Center Eye Icon with Background */}
                <div className="relative z-10 flex items-center justify-center w-7 h-7 rounded-full bg-[#252540]">
                    <Eye className="w-[14px] h-[14px] text-white" strokeWidth={2} />
                </div>
            </div>
        </motion.div>
    );
};
