import React from "react";
import { IconCloud } from "@/components/ui/icon-cloud";
import { Marquee } from "@/components/ui/marquee";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
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
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const Skills = () => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <section id="skills" className="py-20 w-full flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
        My <span className="text-purple-500">Tech Stack</span>
      </h2>

      <div className="relative flex h-full w-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
        <IconCloud images={images} />
      </div>

      <div className="w-full mt-10">
        <Marquee pauseOnHover className="[--duration:20s]">
            {["Frontend", "Backend", "DevOps", "Mobile", "UI/UX", "Cloud", "Testing", "Security"].map((item) => (
                <span key={item} className="mx-8 text-xl md:text-2xl font-semibold text-white/20 uppercase tracking-widest">
                    {item}
                </span>
            ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
