"use client";

import { motion } from "framer-motion";
import { Twitter, Youtube, Instagram, Facebook, Mail, ArrowRight, ChevronUp, Send } from "lucide-react";

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

                <div className="flex flex-col md:flex-row gap-12 mb-20">
                    {/* Left: Brand & Message */}
                    <div className="flex-1">
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            className="font-display font-bold text-4xl text-white mb-6 tracking-wide"
                        >
                            ATRUM<span className="text-atrum-blue">TOKEN</span>
                        </motion.h2>
                        <p className="text-atrum-silver/70 text-lg mb-8 max-w-md leading-relaxed">
                            The first decentralized platform where your digital engagement creates real, ownable value.
                        </p>

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
                        className="flex-1 bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm relative group overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-linear-to-br from-atrum-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <h3 className="font-display font-bold text-xl text-white mb-2 relative z-10">Stay Updated</h3>
                        <p className="text-gray-400 mb-6 relative z-10">Get the latest ecosystem updates and airdrop alerts.</p>

                        <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-atrum-blue transition-colors focus:shadow-[0_0_15px_rgba(26,159,255,0.3)]"
                            />
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 rounded-xl bg-atrum-blue hover:bg-atrum-blue-light text-black font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(26,159,255,0.4)]"
                            >
                                Join Community <ArrowRight size={18} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 relative">
                    <p>&copy; 2026 Atrum Technologies Pvt Ltd. All rights reserved.</p>

                    <div className="flex flex-wrap justify-center gap-8 mt-6 md:mt-0">
                        <a href="/privacy-policy" className="hover:text-white transition-colors relative group">
                            Privacy Policy
                            <span className="absolute left-0 bottom-0 w-0 h-px bg-atrum-cyan transition-all group-hover:w-full"></span>
                        </a>
                        <a href="/terms" className="hover:text-white transition-colors relative group">
                            Terms & Conditions
                            <span className="absolute left-0 bottom-0 w-0 h-px bg-atrum-pink transition-all group-hover:w-full"></span>
                        </a>
                        <a href="/tokenomics" className="hover:text-white transition-colors relative group">
                            Tokenomics
                            <span className="absolute left-0 bottom-0 w-0 h-px bg-green-400 transition-all group-hover:w-full"></span>
                        </a>
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
