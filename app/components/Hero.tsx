"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, FileText, Sparkles, CircleDollarSign, Zap, Rocket, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 px-6 perspective-1000">

            {/* Background Elements - Parallax & Particles */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div style={{ y: y1 }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-atrum-blue/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></motion.div>
                <motion.div style={{ y: y2 }} className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-atrum-pink/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow delay-1000"></motion.div>

                {/* Floating Cartoon Particles */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-atrum-cyan/30"
                        initial={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: 0,
                            scale: 0
                        }}
                        animate={{
                            top: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                            left: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                            opacity: [0, 0.8, 0],
                            scale: [0, 1, 0],
                            rotate: [0, 360]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {i % 3 === 0 ? <Star size={Math.random() * 20 + 10} /> :
                            i % 3 === 1 ? <div className="w-2 h-2 rounded-full bg-atrum-pink" /> :
                                <Zap size={Math.random() * 15 + 10} />}
                    </motion.div>
                ))}
            </div>

            <div className="absolute top-0 w-full h-full bg-linear-to-b from-transparent via-atrum-dark-start/50 to-atrum-dark-end/90 z-0 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

                {/* Left Text Content */}
                <div className="flex-1 text-center md:text-left z-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8"
                    >
                        <motion.span
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="inline-block py-1 px-3 rounded-full border border-atrum-cyan/30 bg-atrum-cyan/5 text-atrum-cyan text-xs sm:text-sm tracking-[0.2em] uppercase mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(130,233,255,0.3)]"
                        >
                            Social Media Utility Example
                        </motion.span>

                        <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl leading-none tracking-tight mb-6">
                            <motion.span
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="block text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                            >
                                EARN CRYPTO
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-gradient block"
                            >
                                WHILE YOU
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="text-gradient"
                            >
                                DOWNLOAD
                            </motion.span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg sm:text-xl text-atrum-silver-light/80 max-w-xl mx-auto md:mx-0 mb-12 leading-relaxed"
                    >
                        Atrum is built on a simple but powerful idea: users should earn value from their everyday digital actions. Millions of people download, share, and interact with social media content daily, yet traditional platforms offer no direct reward for this activity. Atrum changes this by combining a universal social media downloader with a blockchain-based reward system powered by Atrum Token.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start w-full sm:w-auto"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(26,159,255,0.6)" }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-4 rounded-full bg-linear-to-br from-atrum-blue to-atrum-cyan text-black font-bold text-lg uppercase tracking-widest overflow-hidden transition-all duration-300"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Contact Us to Join Beta <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        </motion.button>
                    </motion.div>
                </div>

                {/* Right Visual Illustration - Animated Mockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.4, type: "spring" }}
                    className="flex-1 relative w-full flex items-center justify-center"
                >
                    {/* Mockup Container */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        whileHover={{ scale: 1.02, rotate: 1 }}
                        transition={{
                            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                            scale: { duration: 0.3 },
                            rotate: { duration: 0.3 }
                        }}
                        className="relative z-10 w-[300px] md:w-[400px] lg:w-[500px] h-auto aspect-[9/16] bg-black rounded-[3rem] border-8 border-gray-800 shadow-[0_0_50px_rgba(6,11,61,0.5)] overflow-hidden backdrop-blur-xl"
                    >
                        {/* Screen Content Mockup */}
                        <div className="absolute inset-0 bg-black overflow-hidden rounded-[2.5rem]">
                            <video
                                src="/hero-video.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay Gradient for depth */}
                            <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/40 pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* Levitating Cartoon Elements */}
                    <motion.div
                        animate={{ y: [0, -25, 0], rotate: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-20 -right-8 bg-black/80 backdrop-blur-xl p-4 rounded-2xl border border-atrum-cyan/50 flex items-center gap-3 shadow-[0_0_30px_rgba(130,233,255,0.4)] z-20"
                    >
                        <div className="bg-atrum-cyan text-black p-2 rounded-full"><Rocket size={20} /></div>
                        <div>
                            <div className="text-xs text-atrum-silver">Speed</div>
                            <div className="text-sm font-bold text-white">Instant DL</div>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-40 -left-12 bg-black/80 backdrop-blur-xl p-4 rounded-2xl border border-atrum-pink/50 flex items-center gap-3 shadow-[0_0_30px_rgba(255,63,183,0.4)] z-20"
                    >
                        <div className="bg-atrum-pink text-white p-2 rounded-full"><CircleDollarSign size={20} /></div>
                        <div>
                            <div className="text-xs text-atrum-silver">Balance</div>
                            <div className="text-sm font-bold text-white">1,250 ATRUM</div>
                        </div>
                    </motion.div>

                    {/* Cartoon "Mascot" Coin (Abstract) */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-10 left-10 w-24 h-24 rounded-full border-4 border-dashed border-atrum-blue/30 z-0"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute -bottom-10 right-10 w-32 h-32 rounded-full border-4 border-dashed border-atrum-pink/30 z-0"
                    />

                </motion.div>

            </div>

        </section>
    );
}
