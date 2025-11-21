import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 bg-black text-white/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-sm font-light">
            Copyright © {new Date().getFullYear()} Ayush Niroula
          </p>
          <p className="text-xs text-white/50">
            Built with Next.js, Tailwind & Aceternity UI
          </p>
        </div>

        <div className="flex gap-6 text-sm font-medium">
          <Link href="/#home" className="hover:text-purple-400 transition-colors">
            Home
          </Link>
          <Link href="/#about" className="hover:text-purple-400 transition-colors">
            About
          </Link>
          <Link href="/#work" className="hover:text-purple-400 transition-colors">
            Work
          </Link>
          <Link href="/#blog" className="hover:text-purple-400 transition-colors">
            Blog
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
