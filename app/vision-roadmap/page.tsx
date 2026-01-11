"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Rocket, Flag, Globe, Users, BarChart3, ArrowRight, Star } from "lucide-react";
import { useRef } from "react";

export default function VisionRoadmapPage() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const stars = [...Array(50)].map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2
    }));

    const roadmapPhases = [
        { phase: "Phase 1", title: "Foundation", date: "Q1 2026", desc: "Launch of Atrum platform, token deployment, and initial community building." },
        { phase: "Phase 2", title: "Expansion", date: "Q2 2026", desc: "Integration with major social platforms, mobile app beta release." },
        { phase: "Phase 3", title: "Ecosystem", date: "Q3 2026", desc: "Creator marketplace launch, staking pools active." },
        { phase: "Phase 4", title: "DAO", date: "Q4 2026", desc: "Community governance implementation, decentralized treasury." },
        { phase: "Phase 5", title: "Global", date: "2027+", desc: "Enterprise partnerships, cross-chain support, global adoption." }
    ];

    return (
        <main className="min-h-screen bg-[#050A30] overflow-hidden selection:bg-purple-500/30 text-atrum-silver font-body">
            <Navbar />

            {/* Cosmic Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {stars.map((star) => (
                    <motion.div
                        key={star.id}
                        className="absolute rounded-full bg-white"
                        style={{
                            top: star.top,
                            left: star.left,
                            width: star.size,
                            height: star.size
                        }}
                        animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
                        transition={{ duration: star.duration, repeat: Infinity, delay: star.delay }}
                    />
                ))}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-atrum-dark-start"></div>
            </div>

            {/* Hero Section */}
            <section className="relative pt-40 pb-32 px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 relative inline-block"
                >
                    <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-30 animate-pulse"></div>
                    <Rocket size={64} className="text-purple-400 relative z-10 mx-auto" />
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-5xl md:text-8xl font-display font-bold text-white mb-6 drop-shadow-lg"
                >
                    VISION & <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">ROADMAP</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl md:text-2xl text-purple-200/80 max-w-3xl mx-auto"
                >
                    Charting the course for a decentralized digital economy where every interaction creates value.
                </motion.p>
            </section>

            {/* Vision Cards */}
            <section className="py-20 px-6 relative z-10">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Creator Economy", icon: <Users className="text-pink-500" />, desc: "Empowering creators with direct monetization tools." },
                        { title: "Governance", icon: <Globe className="text-blue-500" />, desc: "A truly community-owned platform via DAO voting." },
                        { title: "Analytics", icon: <BarChart3 className="text-green-500" />, desc: "Deep insights into ecosystem growth and token velocity." }
                    ].map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="glass-card p-8 rounded-3xl border border-purple-500/20 hover:border-purple-500/50 transition-all group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-4xl group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(100,0,255,0.2)]">
                                {card.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                            <p className="text-atrum-silver/70">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Timeline Roadmap */}
            <section ref={targetRef} className="py-24 px-6 relative z-10 overflow-hidden">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white text-center mb-20">
                        THE <span className="text-purple-400">JOURNEY</span>
                    </h2>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-purple-500/20 transform md:-translate-x-1/2"></div>

                        {roadmapPhases.map((phase, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 relative ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,1)] transform -translate-x-1.5 md:-translate-x-1/2 mt-1.5 md:mt-0 z-20">
                                    <div className="absolute inset-0 rounded-full animate-ping bg-purple-500 opacity-75"></div>
                                </div>

                                {/* Content */}
                                <div className="ml-12 md:ml-0 md:w-1/2 px-4 md:px-12">
                                    <div className="glass p-6 rounded-2xl border border-purple-500/30 hover:bg-purple-500/10 transition-colors relative group">
                                        <span className="absolute -top-4 right-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                            {phase.date}
                                        </span>
                                        <h3 className="text-purple-400 font-bold mb-1 flex items-center gap-2">
                                            <Flag size={16} /> {phase.phase}
                                        </h3>
                                        <h4 className="text-xl font-bold text-white mb-2">{phase.title}</h4>
                                        <p className="text-sm text-gray-300">{phase.desc}</p>
                                    </div>
                                </div>

                                {/* Spacer for other side layout */}
                                <div className="hidden md:block md:w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 z-10 relative">
                <div className="max-w-4xl mx-auto text-center glass-card p-12 rounded-[3rem] border border-purple-500/30">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-block mb-6 p-4 rounded-full bg-purple-500/20"
                    >
                        <Star className="text-yellow-400 w-12 h-12 fill-current animate-pulse" />
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
                        JOIN THE <span className="text-purple-400">MOVEMENT</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Be part of the next generation of digital ownership. Start your journey with Atrum today.
                    </p>

                    <button className="group relative px-8 py-4 bg-white text-purple-900 font-bold text-lg rounded-full overflow-hidden hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all">
                        <span className="relative z-10 flex items-center gap-2">
                            Get Started for Free <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
