"use client";

import { motion } from "framer-motion";
import { Twitter, Youtube, Instagram, Facebook, Mail, ArrowRight, ChevronUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-black pt-20 pb-10 px-6 overflow-hidden">
            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="flex flex-col md:flex-row gap-12 mb-16">
                    {/* Left: Brand & Message */}
                    <div className="flex-1">
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            className="font-display font-bold text-3xl text-white mb-6"
                        >
                            ATRUM
                        </motion.h2>
                        <p className="text-atrum-silver-light/70 text-lg mb-8 max-w-md">
                            Be first to earn Atrum Tokens through real actions.
                        </p>

                        <div className="flex items-center gap-4">
                            {[Twitter, Youtube, Instagram, Facebook].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -5, backgroundColor: "#1A9FFF", color: "#000" }}
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 transition-colors duration-300"
                                >
                                    <Icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex-1 bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm"
                    >
                        <h3 className="font-display font-bold text-xl text-white mb-6">Join the Beta</h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-atrum-blue transition-colors"
                            />
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-3 rounded-xl bg-atrum-blue hover:bg-atrum-blue-light text-black font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(26,159,255,0.4)]"
                            >
                                Join Now <ArrowRight size={18} />
                            </motion.button>
                        </form>
                        <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                            <Mail size={16} /> contact@atrumtoken.io
                        </div>
                    </motion.div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600 relative">
                    <p>&copy; 2026 Atrum Token. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 sm:mt-0">
                        <a href="#" className="hover:text-atrum-silver">Privacy Policy</a>
                        <a href="#" className="hover:text-atrum-silver">Terms of Service</a>
                    </div>

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ y: -5 }}
                        className="absolute -top-6 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-atrum-blue hover:border-atrum-blue transition-all"
                    >
                        <ChevronUp size={20} />
                    </motion.button>
                </div>

            </div>
        </footer>
    );
}
