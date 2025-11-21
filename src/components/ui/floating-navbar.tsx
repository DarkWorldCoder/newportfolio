"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ChevronDown, Command, Link as LinkIcon, Book, CreditCard } from "lucide-react";
import Image from "next/image";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const pathname = usePathname();

  return (
    <div className={cn("fixed top-4 inset-x-0 z-[5000] flex justify-center items-center pointer-events-none", className)}>
      <nav className="container flex items-center justify-between py-1.5 max-w-7xl mx-auto sm:px-10 px-5 pointer-events-auto">
        {/* Logo */}
        <Link href="/" className="hidden md:block" aria-label="Homepage">
           <svg className="size-[35px]" viewBox="0 0 5350 5350" xmlns="http://www.w3.org/2000/svg"><path className="fill-black dark:fill-white" d="M265 4069c-70-20-71-59-4-197 29-59 78-161 109-227 32-66 85-178 119-248 77-159 167-347 236-492 29-60 81-168 115-240 34-71 79-166 100-210 21-44 62-132 93-195 30-63 101-212 157-330 240-504 311-652 373-780 35-74 101-210 145-303 90-186 96-193 186-184 58 5 76 23 124 121 341 693 462 946 462 968 0 10 3 18 8 18 4 0 17 19 29 42 27 52 229 469 288 593 23 50 88 182 143 295 55 113 165 340 245 505 80 165 188 389 241 499 53 109 103 214 112 235 18 44 11 91-17 117-20 18-41 19-303 19-281 0-281 0-344-29-110-51-132-84-347-521-106-214-303-613-437-886-135-273-251-499-257-503-19-12-39 11-73 83-17 36-85 176-151 311-66 135-134 277-152 315-18 39-65 138-105 220-82 169-166 344-250 520-153 323-181 373-230 419-73 68-112 76-369 75-119 0-229-5-246-10z"></path><path className="fill-black dark:fill-white" d="M3922 3999c-42-21-47-29-134-208-143-293-148-310-107-347 19-17 43-20 253-24 274-7 308-16 406-107 209-193 166-551-82-696-100-58-168-67-520-67-344 0-370-3-403-53-9-14-54-107-101-206-92-200-101-237-59-269 24-19 45-20 373-24 347-4 347-4 422-39 137-65 210-175 210-317 0-176-102-308-267-348-46-10-182-13-642-14-584 0-584 0-618-38-30-32-93-155-234-460-37-80-38-124-3-151 26-21 33-21 788-21 708 0 769 1 876 20 238 40 409 119 565 262 120 109 221 278 266 443 45 169 34 388-28 557-30 81-104 197-157 247-20 19-36 43-36 52 0 10 32 40 78 72 309 217 445 544 388 927-66 435-413 770-851 820-49 5-146 10-215 10-108 0-131-3-168-21z"></path></svg>
        </Link>

        {/* Center Pill */}
        <div className="relative flex justify-center mx-auto">
          <ul className="relative flex min-h-10 items-center justify-center rounded-[22px] bg-black/30 dark:bg-white/10 px-1 py-1 shadow-border backdrop-blur-2xl">
             <div className="flex items-center gap-1">
                {navItems.map((item, idx) => {
                   if (item.name === "More") {
                      return (
                        <li key={idx} className="relative list-none">
                           <HoverCard openDelay={0} closeDelay={0}>
                              <HoverCardTrigger asChild>
                                 <button className="group rounded-full focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 flex cursor-pointer select-none items-center px-4 py-1.5 font-light text-sm text-white transition hover:text-white dark:text-white/70">
                                    More <ChevronDown className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180" />
                                 </button>
                              </HoverCardTrigger>
                              <HoverCardContent className="w-[600px] p-4 bg-[#111] border-white/10 text-white rounded-xl shadow-2xl">
                                <div className="grid grid-cols-3 gap-4">
                                  {/* Snippets/Code Card */}
                                  <a href="/snippets" className="col-span-1 group relative overflow-hidden rounded-lg bg-neutral-900 aspect-square flex flex-col justify-end p-4 transition-all hover:scale-[1.02]">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                    <Image 
                                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
                                      alt="Code Snippets" 
                                      fill 
                                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="relative z-20">
                                      <h3 className="font-semibold text-white">Code Snippets</h3>
                                      <p className="text-xs text-neutral-400">Reusable code & tips</p>
                                    </div>
                                  </a>

                                  {/* Bookmarks/Resources Card */}
                                  <a href="/resources" className="col-span-1 group relative overflow-hidden rounded-lg bg-neutral-900 aspect-square flex flex-col justify-end p-4 transition-all hover:scale-[1.02]">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                    <Image 
                                      src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2128&auto=format&fit=crop" 
                                      alt="Resources" 
                                      fill 
                                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="relative z-20">
                                      <h3 className="font-semibold text-white">Resources</h3>
                                      <p className="text-xs text-neutral-400">Learning materials</p>
                                    </div>
                                  </a>

                                  {/* Links Column */}
                                  <div className="col-span-1 flex flex-col gap-2">
                                    <a href="/stack" className="flex items-center gap-3 p-3 rounded-lg bg-neutral-900/50 hover:bg-neutral-800 transition-colors">
                                      <div className="p-2 rounded-md bg-neutral-800 text-white">
                                        <LinkIcon className="h-4 w-4" />
                                      </div>
                                      <div>
                                        <h3 className="text-sm font-medium text-white">Tech Stack</h3>
                                        <p className="text-[10px] text-neutral-400">Tools I use daily</p>
                                      </div>
                                    </a>
                                    <a href="/gear" className="flex items-center gap-3 p-3 rounded-lg bg-neutral-900/50 hover:bg-neutral-800 transition-colors">
                                      <div className="p-2 rounded-md bg-neutral-800 text-white">
                                        <Book className="h-4 w-4" />
                                      </div>
                                      <div>
                                        <h3 className="text-sm font-medium text-white">My Gear</h3>
                                        <p className="text-[10px] text-neutral-400">Setup & equipment</p>
                                      </div>
                                    </a>
                                    <a href="/resume" className="flex items-center gap-3 p-3 rounded-lg bg-neutral-900/50 hover:bg-neutral-800 transition-colors">
                                      <div className="p-2 rounded-md bg-neutral-800 text-white">
                                        <CreditCard className="h-4 w-4" />
                                      </div>
                                      <div>
                                        <h3 className="text-sm font-medium text-white">Resume</h3>
                                        <p className="text-[10px] text-neutral-400">Download my CV</p>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </HoverCardContent>
                           </HoverCard>
                        </li>
                      )
                   }
                   const isActive = pathname === item.link || (item.link !== "/" && item.link !== "#" && pathname.startsWith(item.link));
                   return (
                     <li key={idx} className="relative list-none">
                        {isActive && (
                           <>
                             {/* Top indicator line */}
                             <div className="absolute -top-[9px] left-1/2 -translate-x-1/2 h-[3px] w-10 rounded-full bg-white z-50">
                                <div className="absolute -top-1 left-1/2 -translate-x-1/2 h-4 w-12 rounded-full bg-white/20 blur-md"></div>
                             </div>
                             {/* Background pill */}
                             <span className="absolute inset-0 w-full rounded-full bg-white/10 backdrop-blur-sm"></span>
                           </>
                        )}
                        <Link href={item.link} className={cn("block px-4 py-1.5 font-light text-sm transition hover:text-white relative z-10", isActive ? "text-white" : "text-white/70 dark:text-white/70")}>
                           {item.name}
                        </Link>
                     </li>
                   )
                })}
                <li className="ml-1 list-none">
                   <button className="shrink-0 items-center justify-center gap-2 outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 shadow-xs has-[>svg]:px-3 relative inline-block h-full cursor-pointer whitespace-nowrap rounded-full bg-white/10 px-4 py-1.5 font-light text-sm text-white transition-all duration-300 hover:bg-white/15 hover:text-white/90 dark:text-white/70">
                      Book a Call
                      <div aria-hidden="true" className="-translate-x-4 absolute bottom-0 h-1/3 w-full rounded-full bg-white opacity-30 blur-sm"></div>
                   </button>
                </li>
             </div>
          </ul>
        </div>

        {/* Right Command Icon */}
        <div className="hidden items-center gap-2 delay-200 md:flex">
           <button className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap font-medium text-sm outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 hover:text-accent-foreground dark:hover:bg-accent/50 size-9 group rounded-2xl hover:bg-white/5">
              <Command className="mx-0 hidden size-5 md:block text-white" />
           </button>
        </div>
      </nav>
    </div>
  );
};
