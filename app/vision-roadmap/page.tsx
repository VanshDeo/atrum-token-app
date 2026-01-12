"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Rocket, Flag, Globe, Users, BarChart3, ArrowRight, Star, Cpu, Shield, Zap, Layers } from "lucide-react";
import { useRef } from "react";

export default function VisionRoadmapPage() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const transformations = useTransform(scrollYProgress, [0, 1], [0, -50]);

    const stars = [...Array(50)].map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2
    }));

    const missionPillars = [
        {
            title: "Democratize Digital Value",
            icon: <Globe size={32} className="text-atrum-cyan" />,
            desc: "Shift power from platforms to people. Users should own the value their data and attention generate."
        },
        {
            title: "Reward Daily Actions",
            icon: <Zap size={32} className="text-yellow-400" />,
            desc: "Turn everyday habits—liking, sharing, downloading—into a tangible earning stream."
        },
        {
            title: "Bridge Web2 to Web3",
            icon: <Layers size={32} className="text-pink-500" />,
            desc: "A seamless gateway where familiar Web2 actions unlock true Web3 ownership without friction."
        },
        {
            title: "Empower Creators",
            icon: <Users size={32} className="text-purple-400" />,
            desc: "Direct monetization tools that bypass traditional ad-revenue gatekeepers."
        },
        {
            title: "Beyond Platforms",
            icon: <Rocket size={32} className="text-green-400" />,
            desc: "Building a protocol where your digital identity and earnings travel with you across the web."
        }
    ];

    const roadmapPhases = [
        {
            phase: "Phase 1",
            title: "Launch & Core Platform",
            date: "Q1 2026",
            items: [
                "Launch of high-speed Download Engine prototype",
                "Support for IG Reels, YouTube Shorts, TikTok",
                "Internal token ledger & reward tracking verification",
                "Early user reward distribution pool active",
                "Comprehensive bug bounty & internal security audits"
            ]
        },
        {
            phase: "Phase 2",
            title: "Mobile Apps & Tokenization",
            date: "Q2 2026",
            items: [
                "Official iOS & Android App Store releases",
                "Token-to-user wallet direct integration",
                "Referral system with streak reward boosters",
                "High-speed video processing optimization",
                "Exploration of Fiat onramp partners"
            ]
        },
        {
            phase: "Phase 3",
            title: "Exchange Listings & Liquidity",
            date: "Q3 2026",
            items: [
                "PancakeSwap liquidity pool deployment",
                "1–2 Strategic Centralized Exchange (CEX) listings",
                "Traffic optimization for high-growth regions",
                "Global language support (ES, IN, BR)",
                "Launch of User Engagement Analytics Dashboard"
            ]
        },
        {
            phase: "Phase 4",
            title: "Ecosystem & Creator Tools",
            date: "Q4 2026",
            items: [
                "Direct creator monetization via token tipping",
                "Sponsored bounty campaigns for content interactions",
                "User profiles with NFT identity badges",
                "Marketplace for token-based premium upgrades",
                "DAO-lite governance experiments for community voting"
            ]
        },
        {
            phase: "Phase 5",
            title: "Global DeFi Layer",
            date: "2027+",
            items: [
                "Staking nodes & yield farming opportunities",
                "Cross-chain token liquidity pools",
                "Open APIs for partner platform integration",
                "Earn-to-own Web3 identity vault",
                "Bridge to AI engines & Web3 automation tools"
            ]
        }
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

                {/* Floating Elements */}
                <motion.div
                    animate={{ y: [-20, 20, -20], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 right-10 opacity-20 text-purple-500 hidden md:block"
                >
                    <Rocket size={120} />
                </motion.div>
                <motion.div
                    animate={{ y: [20, -20, 20], rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/4 left-10 opacity-20 text-blue-500 hidden md:block"
                >
                    <Globe size={120} />
                </motion.div>
            </div>

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-6 text-center z-10">
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

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    <p className="text-xl md:text-2xl text-white font-bold">
                        Atrum is building a world where users are rewarded for participating in digital culture, not just consuming it.
                    </p>
                    <p className="text-lg text-purple-200/80">
                        Every download, every tap, every link shared creates measurable value — and Atrum captures that value in tokens users own and control.
                    </p>
                </motion.div>
            </section>

            {/* Mission Pillars */}
            <section className="py-20 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-center text-white mb-16">
                        OUR <span className="text-atrum-cyan">MISSION</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                        {missionPillars.map((pillar, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="glass-card p-8 rounded-3xl border border-white/10 hover:border-atrum-cyan/50 hover:bg-white/5 transition-all group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform">
                                    {pillar.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                                <p className="text-atrum-silver/80 leading-relaxed">{pillar.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Roadmap */}
            <section ref={targetRef} className="py-24 px-6 relative z-10 overflow-hidden">
                <div className="max-w-5xl mx-auto">
                    <motion.div style={{ y: transformations }} className="text-center mb-24">
                        <div className="inline-block px-4 py-1 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold text-sm mb-4 shadow-lg">
                            THE PATH FORWARD
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white">
                            PROJECT <span className="text-purple-400">TIMELINE</span>
                        </h2>
                    </motion.div>

                    <div className="relative">
                        {/* Animated Vertical Line */}
                        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-purple-900/30 transform md:-translate-x-1/2 rounded-full overflow-hidden">
                            <motion.div
                                style={{ height: scrollYProgress, scaleY: scrollYProgress }}
                                className="w-full bg-linear-to-b from-atrum-cyan via-purple-500 to-pink-500 origin-top"
                            />
                        </div>

                        {roadmapPhases.map((phase, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col md:flex-row items-start md:items-center gap-8 mb-20 relative ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-6 md:left-1/2 w-6 h-6 rounded-full bg-black border-4 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)] transform -translate-x-1/2 mt-1.5 md:mt-0 z-20"></div>

                                {/* Content */}
                                <div className="ml-16 md:ml-0 md:w-1/2 px-4 md:px-12 w-full">
                                    <div className="glass p-8 rounded-3xl border border-purple-500/20 hover:border-purple-500/60 hover:bg-purple-900/20 transition-all duration-300 relative group">
                                        {/* Connector Line for Mobile */}
                                        <div className="md:hidden absolute top-6 -left-10 w-10 h-0.5 bg-purple-500/50"></div>

                                        <span className="absolute -top-4 right-8 bg-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg border border-white/20">
                                            {phase.date}
                                        </span>

                                        <h3 className="text-purple-400 font-bold mb-2 flex items-center gap-2 tracking-wider text-sm uppercase">
                                            <Flag size={14} /> {phase.phase}
                                        </h3>
                                        <h4 className="text-2xl font-bold text-white mb-6 group-hover:text-atrum-cyan transition-colors">{phase.title}</h4>

                                        <ul className="space-y-3">
                                            {phase.items.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-sm text-gray-300 group-hover:text-white transition-colors">
                                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 shadow-[0_0_5px_rgba(192,132,252,0.8)]"></div>
                                                    <span className="leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
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
                <div className="max-w-5xl mx-auto text-center glass-card p-12 md:p-20 rounded-[3rem] border border-purple-500/30 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-purple-500 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-purple-500 to-transparent"></div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-block mb-8 p-6 rounded-full bg-purple-500/10 border border-purple-500/30"
                    >
                        <Star className="text-yellow-400 w-16 h-16 fill-current animate-pulse" />
                    </motion.div>

                    <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-8">
                        JOIN THE <span className="text-purple-400">MOVEMENT</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                        Be part of the next generation of digital ownership. Start your journey with Atrum today and turn your engagement into equity.
                    </p>

                    <a href="https://linktr.ee/atrumofficial" target="_blank" rel="noopener noreferrer" className="inline-block">
                        <button className="group relative px-10 py-5 bg-white text-purple-900 font-bold text-xl rounded-full overflow-hidden hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all transform hover:-translate-y-1">
                            <span className="relative z-10 flex items-center gap-3">
                                Launch App <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
