"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700", "900"], variable: "--font-orbitron" });

import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const pathname = usePathname();
    const contractAddress = "0x7c41b1cB7E221885Fb1786805F48794D0E55fA08";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(contractAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const isActive = (path: string) => pathname === path;

    const navLinks = [
        { href: "/how-it-works", label: "How It Works" },
        { href: "/tokenomics", label: "Tokenomics" },
        { href: "/earn-rewards", label: "Rewards" },
        { href: "/wallet-utility", label: "Utility" },
        { href: "/vision-roadmap", label: "Roadmap" },
    ];

    return (
        <div className="absolute top-0 left-0 right-0 z-50 flex flex-col items-center w-full">
            {/* Contract Address Bar */}
            <div className="w-full bg-linear-to-r from-atrum-dark-start to-atrum-blue/20 backdrop-blur-md border-b border-atrum-blue/10 py-2 text-center text-xs sm:text-sm text-atrum-silver tracking-wider shadow-lg z-51">
                <span className="opacity-70 mr-2">Contract Address:</span>
                <span className="font-mono text-atrum-cyan mr-2 select-all">{contractAddress}</span>
                <button onClick={copyToClipboard} className="hover:text-white transition-colors cursor-pointer inline-flex items-center align-middle">
                    {copied ? <Check size={12} /> : <Copy size={12} />}
                </button>
            </div>

            {/* Main Navbar */}
            <nav className="w-full glass px-6 py-4 flex items-center justify-between mt-0 transition-all duration-300">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 overflow-hidden rounded-full border border-atrum-blue/30 shadow-[0_0_15px_rgba(26,159,255,0.3)] group-hover:shadow-[0_0_25px_rgba(26,159,255,0.6)] transition-shadow duration-500">
                        <Image
                            src="/images/logo.jpg"
                            alt="ATRUM Token Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className={`font-orbitron font-bold text-xl sm:text-2xl tracking-widest text-white ${orbitron.className} drop-shadow-[0_0_10px_rgba(26,159,255,0.5)]`}>
                        ATRUM<span className="text-atrum-blue"></span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`transition-all duration-300 text-sm uppercase tracking-widest ${isActive(link.href)
                                ? "text-white drop-shadow-[0_0_8px_rgba(130,233,255,0.8)] font-bold border-b border-atrum-cyan pb-1"
                                : "text-atrum-silver hover:text-white hover:drop-shadow-[0_0_5px_rgba(130,233,255,0.8)]"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}


                    <button className="px-6 py-2 rounded-full bg-linear-to-r from-atrum-blue to-atrum-cyan text-black font-bold hover:shadow-[0_0_20px_rgba(130,233,255,0.8)] transition-all duration-300 text-sm uppercase tracking-widest transform hover:scale-105">
                        Buy Token
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-atrum-cyan hover:text-white transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-[calc(100%_-_1px)] left-0 w-full glass flex flex-col items-center py-8 gap-6 md:hidden z-40"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`text-lg uppercase tracking-widest ${isActive(link.href)
                                    ? "text-white font-bold drop-shadow-[0_0_5px_rgba(130,233,255,0.8)]"
                                    : "text-atrum-silver hover:text-white"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}

                        <button className="px-8 py-3 rounded-full bg-linear-to-r from-atrum-blue to-atrum-cyan text-black font-bold shadow-[0_0_20px_rgba(130,233,255,0.5)] uppercase tracking-widest">
                            Buy Token
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
