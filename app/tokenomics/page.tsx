"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Coins, Lock, Users, Zap, Megaphone, Flame, Shield, ArrowUpRight, CheckCircle, PieChart } from "lucide-react";
import { useEffect, useState } from "react";

export default function TokenomicsPage() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    const [counts, setCounts] = useState({ supply: 0, liquidity: 0 });

    // Simple counter animation effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCounts(prev => ({
                supply: prev.supply < 15 ? prev.supply + 1 : 15,
                liquidity: prev.liquidity < 18 ? prev.liquidity + 1 : 18
            }));
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const sections = [
        {
            title: "Initial Circulating Supply — 15%",
            subtitle: "(75 Billion Tokens)",
            color: "text-atrum-blue",
            border: "border-atrum-blue",
            icon: <Coins size={32} className="text-atrum-blue" />,
            content: [
                "Atrum strategically launches with a small circulating supply to support price discovery and organic value growth.",
                "Only 15% of total minted supply enters the economy in early phases, ensuring users, early adopters, and beta participants receive tokens without oversaturating the market.",
                "Unlike inflationary tokens, Atrum’s launch plan avoids “market flooding,” allowing real usage demand to shape price rather than speculation or excessive distribution.",
                "This controlled rollout strengthens long-term token confidence and encourages smart accumulation among early believers."
            ]
        },
        {
            title: "Liquidity Pool (DEX + CEX) — 18%",
            subtitle: "(90 Billion Tokens)",
            color: "text-green-400",
            border: "border-green-400",
            icon: <ArrowUpRight size={32} className="text-green-400" />,
            content: [
                "This allocation is dedicated to securing strong trading foundations across decentralized and centralized exchanges.",
                "Liquidity will initially be deployed on PancakeSwap, enabling open trading from day one, with additional liquidity deployed to partnering CEXs as the community grows.",
                "Funds are locked between 24–36 months to guarantee trading integrity, prevent liquidity pull events, and build user trust.",
                "This ensures transparent, stable buying and selling conditions while Atrum scales adoption."
            ]
        },
        {
            title: "Team & Founders — 10%",
            subtitle: "(50 Billion Tokens)",
            color: "text-purple-400",
            border: "border-purple-400",
            icon: <Users size={32} className="text-purple-400" />,
            content: [
                "Reserved for the builders shaping Atrum’s long-term success.",
                "Tokens unlock over a 36-month vesting schedule, featuring a 6-month cliff where no tokens are released.",
                "This prevents early sell pressure and aligns founders with users—tokens gain value only when the product, community, and ecosystem thrive.",
                "Monthly unlock mechanics reward continued innovation and retention of top contributors."
            ]
        },
        {
            title: "Ecosystem / Utility / Staking — 17%",
            subtitle: "(85 Billion Tokens)",
            color: "text-atrum-cyan",
            border: "border-atrum-cyan",
            icon: <Zap size={32} className="text-atrum-cyan" />,
            content: [
                "This pool powers Atrum’s core utility and long-term sustainability.",
                "Tokens are distributed through:",
                "– Staking rewards",
                "– Download-to-earn payouts",
                "– Governance and voting",
                "– Platform feature unlocks",
                "– Special user campaigns and loyalty tiers",
                "This allocation rewards real engagement and strengthens the internal economy, ensuring tokens continually circulate among active participants rather than staying idle."
            ]
        },
        {
            title: "Marketing & Partnerships — 8%",
            subtitle: "(40 Billion Tokens)",
            color: "text-pink-500",
            border: "border-pink-500",
            icon: <Megaphone size={32} className="text-pink-500" />,
            content: [
                "Designed to fuel expansion and adoption, this pool covers:",
                "– Influencer campaigns",
                "– Social media pushes",
                "– Key exchange listing fees",
                "– Strategic brand partnerships",
                "– Web3 event activations",
                "Marketing tokens will be released only when milestones are achieved, keeping usage disciplined and ROI-focused.",
                "This helps attract creators, traders, and project collaborations that boost Atrum visibility."
            ]
        },
        {
            title: "Burn & Deflation Reserve 🔥 — 22%",
            subtitle: "(110 Billion Tokens)",
            color: "text-orange-500",
            border: "border-orange-500",
            icon: <Flame size={32} className="text-orange-500" />,
            content: [
                "Atrum strongly emphasizes token scarcity through built-in deflation mechanisms.",
                "This reserve supports:",
                "– Monthly scheduled burns",
                "– Revenue-based buyback & burn initiatives",
                "– High-volume burn triggers tied to platform activity",
                "As more users download content, more tokens leave circulation, strengthening holder value over time.",
                "This structure creates a self-reinforcing scarcity loop, increasing token appeal as adoption grows."
            ]
        },
        {
            title: "Treasury / Future Growth — 10%",
            subtitle: "(50 Billion Tokens)",
            color: "text-yellow-400",
            border: "border-yellow-400",
            icon: <Shield size={32} className="text-yellow-400" />,
            content: [
                "Treasury funds support operational resilience and future innovation.",
                "Token usage includes:",
                "– Emergency liquidity support",
                "– Core infrastructure scaling",
                "– Legal, compliance & regulatory requirements",
                "– New feature development (creator monetization, analytics, tokens-for-tools marketplace)",
                "This allocation guarantees Atrum has the capital to grow responsibly and expand into emerging Web3 opportunities."
            ]
        }
    ];

    const distributionData = [
        { label: "Public", value: 15, color: "#1A9FFF" },
        { label: "Liquidity", value: 18, color: "#4ade80" },
        { label: "Team", value: 10, color: "#a855f7" },
        { label: "Ecosystem", value: 17, color: "#82E9FF" },
        { label: "Marketing", value: 8, color: "#ec4899" },
        { label: "Burn", value: 22, color: "#f97316" },
        { label: "Treasury", value: 10, color: "#facc15" }
    ];

    return (
        <main className="min-h-screen bg-linear-to-b from-[#020518] to-atrum-dark-start overflow-hidden text-atrum-silver font-body">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                {/* Floating Background Particles */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-atrum-blue/10 rounded-full blur-xl"
                            style={{
                                width: Math.random() * 100 + 50,
                                height: Math.random() * 100 + 50,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -50, 0],
                                scale: [1, 1.2, 1],
                                opacity: [0.2, 0.5, 0.2]
                            }}
                            transition={{
                                duration: Math.random() * 10 + 5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    ))}
                </div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 100 }}
                        className="inline-block mb-8"
                    >
                        <div className="w-24 h-24 rounded-full bg-linear-to-br from-atrum-blue to-atrum-purple flex items-center justify-center shadow-[0_0_50px_rgba(26,159,255,0.5)]">
                            <PieChart size={48} className="text-white" />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-5xl md:text-8xl font-display font-bold text-white mb-6"
                    >
                        TOKEN<span className="text-transparent bg-clip-text bg-linear-to-r from-atrum-blue to-atrum-pink">OMICS</span>
                    </motion.h1>
                    <p className="text-xl max-w-2xl mx-auto text-atrum-silver/80 mb-12">
                        A transparent, sustainable, and growth-oriented distribution model designed for the long term.
                    </p>

                    {/* Marquee Strip */}
                    <div className="w-full overflow-hidden bg-atrum-blue/5 border-y border-atrum-blue/10 backdrop-blur-sm py-4 mb-16">
                        <motion.div
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="flex items-center gap-12 whitespace-nowrap"
                        >
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="flex items-center gap-12">
                                    <span className="text-atrum-cyan font-bold uppercase tracking-widest flex items-center gap-2"><Lock size={16} /> Liquidity Locked 36 Months</span>
                                    <span className="text-atrum-pink font-bold uppercase tracking-widest flex items-center gap-2"><Flame size={16} /> Deflationary Burns</span>
                                    <span className="text-green-400 font-bold uppercase tracking-widest flex items-center gap-2"><CheckCircle size={16} /> No Hidden Mint</span>
                                    <span className="text-yellow-400 font-bold uppercase tracking-widest flex items-center gap-2"><Shield size={16} /> Audited Contract</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Interactive Charts Section */}
            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    {/* Donut Chart Visualization */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-square max-w-md mx-auto"
                    >
                        <div className="relative w-full h-full rounded-full border-[20px] border-white/5 flex items-center justify-center p-8">
                            {/* Animated segments would be complex with CSS, using a conceptual representation with glows */}
                            <div className="absolute inset-0 rounded-full border-[20px] border-atrum-blue border-t-transparent border-r-transparent rotate-45 opacity-80 blur-sm"></div>
                            <div className="absolute inset-0 rounded-full border-[20px] border-pink-500 border-b-transparent border-l-transparent -rotate-12 opacity-80 blur-sm"></div>

                            <div className="text-center z-10">
                                <span className="text-6xl font-display font-bold text-white block">100%</span>
                                <span className="text-atrum-silver uppercase tracking-widest text-sm">Total Supply</span>
                                <div className="mt-2 text-atrum-cyan font-mono">500 BILLION</div>
                            </div>

                            {/* Orbiting Icons */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0"
                            >
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black p-2 rounded-full border border-atrum-blue text-atrum-blue shadow-[0_0_15px_rgba(26,159,255,0.8)]"><Coins size={20} /></div>
                                <div className="absolute top-1/2 -right-4 -translate-y-1/2 bg-black p-2 rounded-full border border-pink-500 text-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.8)]"><Megaphone size={20} /></div>
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black p-2 rounded-full border border-green-400 text-green-400 shadow-[0_0_15px_rgba(74,222,128,0.8)]"><ArrowUpRight size={20} /></div>
                                <div className="absolute top-1/2 -left-4 -translate-y-1/2 bg-black p-2 rounded-full border border-orange-500 text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.8)]"><Flame size={20} /></div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Legend / Breakdown */}
                    <div className="space-y-4">
                        {distributionData.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.02, x: 10 }}
                                className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/20 transition-all cursor-default"
                            >
                                <div className="w-4 h-4 rounded-full shadow-[0_0_10px]" style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}` }}></div>
                                <span className="font-bold text-white flex-1">{item.label}</span>
                                <span className="font-mono" style={{ color: item.color }}>{item.value}%</span>

                                {/* Animated Bar */}
                                <div className="w-24 h-2 bg-gray-800 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${item.value}%` }}
                                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                                        className="h-full rounded-full"
                                        style={{ backgroundColor: item.color }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Sections */}
            <section className="py-20 px-6 relative z-10">
                <div className="max-w-4xl mx-auto space-y-12">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5 }}
                            className={`glass-card p-8 md:p-12 rounded-[2rem] border-l-4 ${section.border} hover:bg-white/5 transition-colors group relative overflow-hidden`}
                        >
                            {/* Background Glow */}
                            <div className={`absolute -right-20 -top-20 w-64 h-64 bg-current opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity ${section.color}`}></div>

                            <div className="flex flex-col md:flex-row gap-6 md:items-start relative z-10">
                                <div className={`p-4 rounded-2xl bg-white/5 w-fit h-fit ${section.color} shadow-[0_0_20px_rgba(0,0,0,0.3)]`}>
                                    {section.icon}
                                </div>
                                <div>
                                    <h2 className={`text-3xl font-display font-bold text-white mb-1`}>
                                        {section.title}
                                    </h2>
                                    <p className={`text-lg font-mono mb-6 ${section.color}`}>
                                        {section.subtitle}
                                    </p>

                                    <div className="space-y-4">
                                        {section.content.map((paragraph, pIndex) => (
                                            <p key={pIndex} className="leading-relaxed text-atrum-silver/90">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Total Supply Final Block */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="bg-linear-to-r from-atrum-blue/20 to-purple-900/20 p-12 rounded-[3rem] border border-atrum-blue/30 text-center backdrop-blur-xl relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-10"></div>

                        <div className="relative z-10">
                            <div className="inline-block px-4 py-1 rounded-full bg-atrum-blue text-white text-sm font-bold mb-6 shadow-[0_0_15px_rgba(26,159,255,0.5)]">
                                VERIFIED SUPPLY
                            </div>
                            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
                                TOTAL SUPPLY: <span className="text-atrum-cyan">100%</span>
                            </h2>
                            <div className="text-5xl md:text-7xl font-mono font-bold text-white mb-12 tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                                500,000,000,000
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                                {[
                                    "Fixed supply. No hidden mint function.",
                                    "No stealth allocation.",
                                    "No backdoor token creation.",
                                    "Value driven by utility & deflation."
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm font-bold text-white">
                                        <CheckCircle className="text-green-400 shrink-0" size={20} />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
