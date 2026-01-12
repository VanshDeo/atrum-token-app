"use client";

import { motion } from "framer-motion";
import { Twitter, Youtube, Instagram, Facebook, Mail, ArrowRight, ChevronUp, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: Twitter, href: "https://x.com/atrum__official", color: "#1DA1F2" },
        { icon: Instagram, href: "https://www.instagram.com/atrumoffical/", color: "#E1306C" },
        { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61586502862044", color: "#4267B2" },
        { icon: Send, href: "https://web.telegram.org/k/#@atrumofficial", color: "#0088cc" }
    ];

    return (
        <footer className="relative bg-[#020518] pt-24 pb-12 px-6 overflow-hidden">
            {/* Animated Glow Border */}
            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-atrum-blue/50 to-transparent"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-atrum-blue/20 blur-xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="flex flex-col md:flex-row gap-12 mb-20 items-center md:items-start">
                    {/* Left: Brand & Logo */}
                    <div className="flex-1 flex flex-col items-center md:items-start">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            className="flex items-center gap-4 mb-8"
                        >
                            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-atrum-blue/30 shadow-[0_0_30px_rgba(26,159,255,0.3)]">
                                <Image
                                    src="/logo.jpg"
                                    alt="Atrum Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="font-display font-bold text-5xl md:text-6xl text-white tracking-wide">
                                ATRUM
                            </h2>
                        </motion.div>

                        <div className="flex items-center gap-4">
                            {socialLinks.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5, backgroundColor: social.color, color: "#fff", boxShadow: `0 0 20px ${social.color}80` }}
                                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 relative overflow-hidden group"
                                >
                                    <social.icon size={20} className="relative z-10" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Right: Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex-1 w-full bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm relative group overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-linear-to-br from-atrum-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <h3 className="font-display font-bold text-xl text-white mb-2 relative z-10">Stay Updated</h3>
                        <p className="text-gray-400 mb-6 relative z-10">
                            Be the first to know about airdrops, new exchange listings, and platform updates.
                        </p>

                        <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-atrum-blue transition-colors focus:shadow-[0_0_15px_rgba(26,159,255,0.3)]"
                                />
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 rounded-xl bg-atrum-blue hover:bg-atrum-blue-light text-black font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(26,159,255,0.4)]"
                            >
                                Subscribe
                            </motion.button>
                        </form>

                        <div className="mt-8 pt-6 border-t border-white/5">
                            <p className="text-sm text-gray-400 mb-2">Need Help?</p>
                            <a href="mailto:support@atrum.ac" className="flex items-center gap-2 text-atrum-cyan hover:text-white transition-colors font-bold group">
                                <Mail size={16} className="group-hover:animate-bounce" /> support@atrum.ac
                            </a>
                        </div>
                    </motion.div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-end justify-between text-sm text-gray-500 relative">
                    <div className="flex flex-col md:text-left text-center gap-2 max-w-lg">
                        <p className="text-white font-medium">&copy; 2026 Atrum Token. All rights reserved.</p>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            Atrum Token is a decentralized utility asset designed for the Atrum ecosystem.
                            Nothing on this website constitutes financial advice. Cryptocurrency investments carry market risks; please participate responsibly.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 mt-6 md:mt-0">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors relative group">
                            Privacy Policy
                            <span className="absolute left-0 bottom-0 w-0 h-px bg-atrum-cyan transition-all group-hover:w-full"></span>
                        </Link>
                        <Link href="/terms" className="hover:text-white transition-colors relative group">
                            Terms & Conditions
                            <span className="absolute left-0 bottom-0 w-0 h-px bg-atrum-pink transition-all group-hover:w-full"></span>
                        </Link>
                        <Link href="/tokenomics" className="hover:text-white transition-colors relative group">
                            Tokenomics
                            <span className="absolute left-0 bottom-0 w-0 h-px bg-green-400 transition-all group-hover:w-full"></span>
                        </Link>
                    </div>

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ y: -5, boxShadow: "0 0 20px rgba(26,159,255,0.5)" }}
                        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#020518] border border-atrum-blue/30 flex items-center justify-center text-atrum-blue hover:bg-atrum-blue hover:text-black transition-all z-20"
                    >
                        <ChevronUp size={24} />
                    </motion.button>
                </div>

            </div>
        </footer>
    );
}
