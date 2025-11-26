"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface SafariProps extends React.HTMLAttributes<HTMLDivElement> {
    url?: string;
    src?: string;
    videoSrc?: string;
}

export function Safari({
    url = "wiseadmit.io",
    src,
    videoSrc,
    className,
    ...props
}: SafariProps) {
    return (
        <div
            className={cn(
                "relative min-h-[300px] w-full overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl",
                className
            )}
            {...props}
        >
            {/* Browser Header */}
            <div className="flex h-10 w-full items-center gap-2 border-b border-white/10 bg-neutral-900/50 px-4 backdrop-blur-md">
                <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                    <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                    <div className="h-3 w-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="flex h-6 w-full max-w-[300px] items-center justify-center rounded-md bg-white/5 px-3 text-xs text-neutral-400 font-mono">
                        {url}
                    </div>
                </div>
                <div className="w-14" /> {/* Spacer for balance */}
            </div>

            {/* Browser Content */}
            <div className="relative h-full w-full bg-neutral-900">
                {videoSrc ? (
                    <video
                        src={videoSrc}
                        className="h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                ) : src ? (
                    <Image
                        src={src}
                        alt="Browser Content"
                        fill
                        className="object-cover object-top"
                    />
                ) : (
                    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900">
                        <span className="text-neutral-500 font-serif italic">No Preview Available</span>
                    </div>
                )}
            </div>
        </div>
    );
}
