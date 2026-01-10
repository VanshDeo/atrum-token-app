"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const contractAddress = "0x7c41b1cB7E221885Fb1786805F48794D0E55fA08";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(contractAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center w-full">
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
                    <span className="font-display font-bold text-xl sm:text-2xl tracking-widest text-white drop-shadow-[0_0_10px_rgba(26,159,255,0.5)]">
                        ATRUM<span className="text-atrum-blue">_TOKEN</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="#about" className="text-atrum-silver hover:text-white hover:drop-shadow-[0_0_5px_rgba(130,233,255,0.8)] transition-all duration-300 text-sm uppercase tracking-widest">About</Link>
                    <Link href="#tokenomics" className="text-atrum-silver hover:text-white hover:drop-shadow-[0_0_5px_rgba(130,233,255,0.8)] transition-all duration-300 text-sm uppercase tracking-widest">Tokenomics</Link>
                    <Link href="#roadmap" className="text-atrum-silver hover:text-white hover:drop-shadow-[0_0_5px_rgba(130,233,255,0.8)] transition-all duration-300 text-sm uppercase tracking-widest">Roadmap</Link>
                    <Link href="/whitepaper" className="px-6 py-2 rounded-full border border-atrum-pink/50 text-atrum-pink hover:bg-atrum-pink hover:text-white hover:shadow-[0_0_20px_rgba(255,63,183,0.6)] transition-all duration-300 text-sm uppercase tracking-widest font-bold">
                        Whitepaper
                    </Link>
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
                        <Link href="#about" onClick={() => setIsOpen(false)} className="text-atrum-silver hover:text-white text-lg uppercase tracking-widest">About</Link>
                        <Link href="#tokenomics" onClick={() => setIsOpen(false)} className="text-atrum-silver hover:text-white text-lg uppercase tracking-widest">Tokenomics</Link>
                        <Link href="#roadmap" onClick={() => setIsOpen(false)} className="text-atrum-silver hover:text-white text-lg uppercase tracking-widest">Roadmap</Link>
                        <Link href="/whitepaper" onClick={() => setIsOpen(false)} className="text-atrum-pink font-bold text-lg uppercase tracking-widest">Whitepaper</Link>
                        <button className="px-8 py-3 rounded-full bg-linear-to-r from-atrum-blue to-atrum-cyan text-black font-bold shadow-[0_0_20px_rgba(130,233,255,0.5)] uppercase tracking-widest">
                            Buy Token
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
