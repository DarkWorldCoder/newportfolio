"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, User, Briefcase, Rss } from "lucide-react";

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: <Briefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Articles",
      link: "/articles",
      icon: <Rss className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "More",
      link: "#",
      icon: <div />, // Icon handled in FloatingNav
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
