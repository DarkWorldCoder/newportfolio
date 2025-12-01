"use client";
import { useRef } from "react";
import {
    LayoutDashboard,
    Users,
    Settings,
    BarChart3,
    Calendar,
    Search,
    Bell,
    MessageSquare,
    Code2,
    Cpu,
    Zap
} from "lucide-react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { useScroll } from "framer-motion";

const WiseAdmitMock = () => (
    <div className="flex h-full w-full bg-[#0F172A] text-slate-300 font-sans overflow-hidden">
        <div className="w-16 md:w-48 border-r border-slate-800 flex flex-col p-4 gap-6 bg-[#0F172A]">
            <div className="flex items-center gap-2 text-blue-500 font-bold text-xl">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-sm">W</div>
                <span className="hidden md:block">WiseAdmit</span>
            </div>
            <div className="flex flex-col gap-2">
                {[
                    { icon: LayoutDashboard, label: "Dashboard", active: true },
                    { icon: Users, label: "Students" },
                    { icon: Calendar, label: "Applications" },
                    { icon: BarChart3, label: "Analytics" },
                    { icon: MessageSquare, label: "Messages" },
                    { icon: Settings, label: "Settings" },
                ].map((item, i) => (
                    <div key={i} className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${item.active ? 'bg-blue-500/10 text-blue-400' : 'hover:bg-slate-800'}`}>
                        <item.icon className="w-4 h-4" />
                        <span className="hidden md:block text-xs font-medium">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>

        <div className="flex-1 flex flex-col">
            <div className="h-12 border-b border-slate-800 flex items-center justify-between px-6 bg-[#0F172A]">
                <div className="flex items-center gap-2 text-slate-400 bg-slate-900 px-3 py-1 rounded-md border border-slate-800 w-48">
                    <Search className="w-3 h-3" />
                    <span className="text-xs">Search students...</span>
                </div>
                <div className="flex items-center gap-4">
                    <Bell className="w-4 h-4 text-slate-400" />
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
                </div>
            </div>

            <div className="p-4 grid grid-cols-3 gap-4">
                {[
                    { label: "Total Applications", value: "1,248", change: "+12%", color: "bg-blue-500" },
                    { label: "Acceptance Rate", value: "64%", change: "+2.4%", color: "bg-emerald-500" },
                    { label: "Pending Review", value: "48", change: "-5%", color: "bg-orange-500" },
                ].map((stat, i) => (
                    <div key={i} className="bg-slate-900 p-3 rounded-xl border border-slate-800 col-span-3 md:col-span-1">
                        <p className="text-xs text-slate-500 mb-1">{stat.label}</p>
                        <div className="flex items-end justify-between">
                            <h3 className="text-xl font-bold text-white">{stat.value}</h3>
                            <span className={`text-xs px-1.5 py-0.5 rounded ${stat.change.startsWith('+') ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'}`}>{stat.change}</span>
                        </div>
                        <div className={`mt-2 h-1 w-full bg-slate-800 rounded-full overflow-hidden`}>
                            <div className={`h-full ${stat.color} w-[70%]`} />
                        </div>
                    </div>
                ))}

                <div className="col-span-3 bg-slate-900 rounded-xl border border-slate-800 h-32 p-3 flex items-end gap-1">
                    {[40, 65, 45, 80, 55, 70, 40, 65, 45, 80, 55, 70, 40, 65, 45, 80].map((h, i) => (
                        <div key={i} className="flex-1 bg-blue-500/20 hover:bg-blue-500/40 transition-colors rounded-t-sm" style={{ height: `${h}%` }} />
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const EterosoftMock = () => (
    <div className="flex h-full w-full bg-black text-white font-sans overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(76,29,149,0.2),transparent_70%)]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 blur-[100px]" />

        <div className="absolute top-0 w-full p-4 flex justify-between items-center z-10">
            <div className="text-lg font-bold tracking-tighter flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                ETEROSOFT
            </div>
            <div className="hidden md:flex gap-4 text-xs text-neutral-400">
                <span>Work</span>
                <span>Services</span>
                <span>About</span>
                <span className="text-white">Contact</span>
            </div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-4">
            <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300 mb-4">
                <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                Accepting new projects
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-3 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                Building the <br /> Digital Future
            </h1>
            <p className="text-neutral-400 text-xs max-w-md mb-6 leading-relaxed">
                We craft immersive digital experiences that redefine brands.
                Specializing in 3D web, AI integration, and scalable architecture.
            </p>
            <div className="flex gap-3">
                <div className="px-4 py-1.5 bg-white text-black rounded-full font-medium text-xs">Start Project</div>
                <div className="px-4 py-1.5 border border-white/20 rounded-full font-medium text-xs hover:bg-white/5">View Work</div>
            </div>

            <div className="absolute top-1/4 left-6 p-2 bg-black/50 border border-white/10 rounded-lg backdrop-blur-md">
                <Code2 className="w-4 h-4 text-blue-400" />
            </div>
            <div className="absolute bottom-1/4 right-6 p-2 bg-black/50 border border-white/10 rounded-lg backdrop-blur-md">
                <Cpu className="w-4 h-4 text-purple-400" />
            </div>
            <div className="absolute top-1/3 right-12 p-2 bg-black/50 border border-white/10 rounded-lg backdrop-blur-md">
                <Zap className="w-4 h-4 text-yellow-400" />
            </div>
        </div>
    </div>
);

const projects = [
    {
        title: "WiseAdmit",
        description: "A comprehensive university admission platform simplifying the application process for students and institutions. Features include real-time application tracking, document management, and direct communication channels.",
        techStack: [
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        ],
        link: "https://wiseadmit.io",
        color: "#000101",
        content: <WiseAdmitMock />,
    },
    {
        title: "Eterosoft",
        description: "A futuristic software agency website designed to showcase cutting-edge digital solutions. The site features 3D interactive elements, neon aesthetics, and smooth scroll animations to engage visitors.",
        techStack: [
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
            { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg" },
        ],
        link: "https://eterosoft.com",
        color: "#000101",
        content: <EterosoftMock />,
    },
    {
        title: "Project Alpha",
        description: "An experimental AI interface exploring the future of human-computer interaction. Utilizing generative models to create dynamic, personalized user experiences in real-time.",
        techStack: [
            { name: "OpenAI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg" },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        ],
        link: "#",
        color: "#000101",
        content: (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                <span className="text-white/50 font-mono text-sm">Coming Soon</span>
            </div>
        ),
    },
];

export function FeaturedWork() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    return (
        <section ref={container} className="w-full py-20 relative">
            <div className="relative z-10 mb-20 text-center max-w-7xl mx-auto px-4">
                <h2 className="w-full text-balance text-center font-serif text-5xl text-zinc-700 leading-tight opacity-90 md:text-6xl lg:text-7xl dark:text-zinc-100">
                    <span className="md:text-nowrap">Selected</span>
                    <br className="hidden md:block" />
                    <span className="bg-linear-to-b from-zinc-500 via-zinc-600 to-zinc-900 bg-clip-text font-serif text-transparent italic tracking-tight dark:from-zinc-700 dark:via-zinc-200 dark:to-zinc-50">
                        featured projects
                    </span>
                </h2>
                <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
                    A collection of projects that showcase my expertise in building <span className="text-white font-medium">scalable systems</span> and <span className="text-white font-medium">delightful user experiences</span>.
                </p>
            </div>

            <StickyScroll content={projects} />

            <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
            <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
        </section>
    );
}