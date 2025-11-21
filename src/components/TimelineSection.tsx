"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineSection() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched several full-stack applications using Next.js,
            TypeScript, and AWS. Focused on scalable architecture and
            performance optimization.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-20 w-full rounded-lg bg-neutral-100 dark:bg-neutral-800 animate-pulse"></div>
            <div className="h-20 w-full rounded-lg bg-neutral-100 dark:bg-neutral-800 animate-pulse"></div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Started working as a Freelance Developer. Collaborated with clients
            globally to deliver custom web solutions.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-20 w-full rounded-lg bg-neutral-100 dark:bg-neutral-800 animate-pulse"></div>
            <div className="h-20 w-full rounded-lg bg-neutral-100 dark:bg-neutral-800 animate-pulse"></div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Graduated with a degree in Computer Science. Deep dived into modern
            web technologies and cloud computing.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
