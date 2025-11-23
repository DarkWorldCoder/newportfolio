"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";

export const StickyScroll = ({
  content,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
    techStack?: { name: string; icon: React.ReactNode }[];
    achievements?: string[];
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closest = cardsBreakpoints.reduce((prev, curr) => {
      return Math.abs(curr - latest) < Math.abs(prev - latest) ? curr : prev;
    });
    const index = cardsBreakpoints.indexOf(closest);
    setActiveCard(index);
  });

  const backgroundColors = [
    "var(--black)",
    "var(--neutral-900)",
    "var(--slate-900)",
  ];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-screen w-full overflow-y-auto bg-black no-scrollbar snap-y snap-mandatory"
      ref={ref}
    >
      {/* Full Width Scrolling Content */}
      <div className="relative flex items-start w-full">
        <div className="max-w-full w-full">
          {content.map((item, index) => (
            <div key={item.title + index} className="h-screen w-full flex items-center justify-center snap-start">
              {/* Constrain content to max-w-7xl like navbar */}
              <div className="max-w-7xl w-full mx-auto px-4 md:px-10">
                {item.content ?? null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
