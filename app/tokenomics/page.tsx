"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Coins, Lock, Users, Zap, Megaphone, Flame, Shield, ArrowUpRight, CheckCircle, PieChart, BarChart3, TrendingUp, Anchor } from "lucide-react";
import { useEffect, useState } from "react";

export default function TokenomicsPage() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    // Counter targets
    const TARGET_SUPPLY = 15;
    const TARGET_LIQUIDITY = 20;

    const [counts, setCounts] = useState({ supply: 0, liquidity: 0 });

    // Counter animation effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCounts(prev => ({
                supply: prev.supply < TARGET_SUPPLY ? prev.supply + 1 : TARGET_SUPPLY,
                liquidity: prev.liquidity < TARGET_LIQUIDITY ? prev.liquidity + 1 : TARGET_LIQUIDITY
            }));
        }, 50);
        return () => clearInterval(interval);
    }, []);

    const sections = [
        {
            title: "Initial Circulating Supply — 15%",
            subtitle: "(750 Million Tokens)",
            color: "text-atrum-blue",
            accent: "bg-atrum-blue",
            border: "border-atrum-blue",
            icon: <Coins size={32} className="text-white" />,
            content: [
                "Atrum launches with intentionally low initial circulating supply to preserve scarcity and support natural price appreciation.",
                "Only 750 million tokens will enter the economy during early rollout phases — enough to power rewards and onboarding, but not enough to create inflationary pressure.",
                "This allocation prioritizes fair access for real users while protecting early believers from oversupply shock.",
                "A small initial float encourages gradual price discovery, controlled distribution, stronger buying pressure, and more stable growth.",
                "The remaining supply enters only through controlled streams governed by transparent mechanisms."
            ]
        },
        {
            title: "Liquidity Pool — 20%",
            subtitle: "(1 Billion Tokens) — Locked 24–36 Months",
            color: "text-green-400",
            accent: "bg-green-400",
            border: "border-green-400",
            icon: <Anchor size={32} className="text-white" />,
            content: [
                "Token liquidity forms the foundation of a tradable ecosystem.",
                "Atrum allocates 1 billion tokens to exchange liquidity to make sure users can always freely trade without extreme volatility.",
                "Liquidity is locked for 24–36 months, protecting users from rug pulls and liquidity exits.",
                "This ensures a stable entry/exit price range, trusted trading foundation, and confidence from exchanges.",
                "Over time, liquidity will expand across additional AMMs and centralized exchanges — increasing market depth and accessibility."
            ],
            extraIcon: <Lock size={20} className="text-green-400 animate-pulse" />
        },
        {
            title: "Team & Founders — 10%",
            subtitle: "(500 Million Tokens) — 6-Month Cliff + 36-Month Vesting",
            color: "text-purple-400",
            accent: "bg-purple-400",
            border: "border-purple-400",
            icon: <Users size={32} className="text-white" />,
            content: [
                "Tokens allocated to team and founders represent long-term commitment, not short-term profit.",
                "A strict unlock structure prevents token dumping and aligns development incentives with community success.",
                "❗ No tokens unlock for the team for the first 6 months (Cliff).",
                "After that, vesting unlocks are smooth, gradual, and predictable across 36 months.",
                "This ensures the team is rewarded only as the platform grows, guaranteeing no sudden market oversupply and building transparency."
            ]
        },
        {
            title: "Ecosystem / Utility / Staking — 20%",
            subtitle: "(1 Billion Tokens) — Monthly Release",
            color: "text-atrum-cyan",
            accent: "bg-atrum-cyan",
            border: "border-atrum-cyan",
            icon: <Zap size={32} className="text-white" />,
            content: [
                "This allocation powers the download-to-earn engine and token utility system that drives Atrum forward.",
                "Tokens are distributed gradually as they are earned—creating a circular value loop rather than inflation.",
                "Tokens support staking rewards, feature unlocks (HD/4K downloads, queue priority), community governance, and special events.",
                "Because distribution is tied to real platform activity, token emissions map directly to platform growth — not speculation.",
                "Slow, continuous release ensures supply matches usage, not market selling."
            ]
        },
        {
            title: "Marketing & Partnerships — 8%",
            subtitle: "(400 Million Tokens) — Milestone Unlock",
            color: "text-pink-500",
            accent: "bg-pink-500",
            border: "border-pink-500",
            icon: <Megaphone size={32} className="text-white" />,
            content: [
                "This pool is fuel for adoption, awareness, and community growth.",
                "Funds are unlocked only when milestones are achieved — meaning Atrum will scale responsibly and avoid irresponsible spending.",
                "Funds go toward key influencer partnerships, strategic integrations, crypto education campaigns, and event sponsorships.",
                "No hype pumps. No marketing dumps. Timing aligns marketing spend with user growth and measurable ROI."
            ]
        },
        {
            title: "Burn & Deflation Reserve 🔥 — 17%",
            subtitle: "(850 Million Tokens) — Monthly Burns",
            color: "text-orange-500",
            accent: "bg-orange-500",
            border: "border-orange-500",
            icon: <Flame size={32} className="text-white" />,
            content: [
                "Atrum actively reduces long-term token supply through a structured deflation model.",
                "Tokens in this reserve are burned monthly to permanently remove supply from circulation.",
                "Mechanics include revenue-based buyback & burn, volume-triggered burns, and seasonal mega-burn events.",
                "By creating mathematical scarcity over time, Atrum places upward pressure on the token’s long-term price potential as adoption grows."
            ],
            extraIcon: <Flame size={20} className="text-orange-500 animate-bounce" />
        },
        {
            title: "Treasury / Future Growth — 10%",
            subtitle: "(500 Million Tokens) — DAO/Multi-Sig",
            color: "text-yellow-400",
            accent: "bg-yellow-400",
            border: "border-yellow-400",
            icon: <Shield size={32} className="text-white" />,
            content: [
                "Treasury tokens support stability and long-term runway for Atrum.",
                "Funds remain secured behind multi-signature governance or DAO voting.",
                "Capital may be used for emergency market stabilization, infrastructure scaling, exchange listings, and legal/compliance.",
                "This treasury ensures Atrum remains operational, adaptable, and expansion-ready even in changing market conditions."
            ]
        }
    ];

    const distributionData = [
        { label: "Public", value: 15, color: "#1A9FFF", tokens: "750M" },
        { label: "Liquidity", value: 20, color: "#4ade80", tokens: "1B" },
        { label: "Team", value: 10, color: "#a855f7", tokens: "500M" },
        { label: "Ecosystem", value: 20, color: "#82E9FF", tokens: "1B" },
        { label: "Marketing", value: 8, color: "#ec4899", tokens: "400M" },
        { label: "Burn", value: 17, color: "#f97316", tokens: "850M" },
        { label: "Treasury", value: 10, color: "#facc15", tokens: "500M" }
    ];

    return (
        <main className="min-h-screen bg-black overflow-hidden text-atrum-silver font-body selection:bg-atrum-blue/30 selection:text-white">
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
                                opacity: [0.1, 0.3, 0.1]
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
                        <div className="w-24 h-24 rounded-full bg-linear-to-br from-atrum-blue to-atrum-purple flex items-center justify-center shadow-[0_0_50px_rgba(26,159,255,0.5)] relative overflow-hidden group">
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            <PieChart size={48} className="text-white relative z-10" />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-5xl md:text-8xl font-display font-bold text-white mb-6"
                    >
                        TOKEN<span className="text-gradient">OMICS</span>
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
                                    <span className="text-green-400 font-bold uppercase tracking-widest flex items-center gap-2"><Shield size={16} /> Rug-Pull Protected</span>
                                    <span className="text-yellow-400 font-bold uppercase tracking-widest flex items-center gap-2"><TrendingUp size={16} /> Real Demand Utility</span>
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
                        <div className="relative w-full h-full rounded-full border-[20px] border-white/5 flex items-center justify-center p-8 group">
                            {/* Animated Pulse Ring */}
                            <div className="absolute inset-0 rounded-full border border-atrum-blue/30 scale-100 animate-ping opacity-20"></div>

                            {/* Conceptual Segments (Visual representation) */}
                            <div className="absolute inset-0 rounded-full border-[20px] border-atrum-blue border-t-transparent border-r-transparent rotate-45 opacity-60 blur-sm"></div>
                            <div className="absolute inset-0 rounded-full border-[20px] border-pink-500 border-b-transparent border-l-transparent -rotate-12 opacity-60 blur-sm"></div>

                            <div className="text-center z-10 relative">
                                <span className="text-6xl font-display font-bold text-white block drop-shadow-lg">100%</span>
                                <span className="text-atrum-silver uppercase tracking-widest text-sm">Total Supply</span>
                                <div className="mt-2 text-atrum-cyan font-mono text-xl">5 BILLION</div>
                            </div>

                            {/* Floating Mascots Orbiting */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 pointer-events-none"
                            >
                                <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black p-3 rounded-full border border-atrum-blue text-atrum-blue shadow-[0_0_20px_rgba(26,159,255,0.6)] z-20"><Coins size={24} /></motion.div>
                                <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 -right-6 -translate-y-1/2 bg-black p-3 rounded-full border border-pink-500 text-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.6)] z-20"><Megaphone size={24} /></motion.div>
                                <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black p-3 rounded-full border border-green-400 text-green-400 shadow-[0_0_20px_rgba(74,222,128,0.6)] z-20"><Shield size={24} /></motion.div>
                                <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 -left-6 -translate-y-1/2 bg-black p-3 rounded-full border border-orange-500 text-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.6)] z-20"><Flame size={24} /></motion.div>
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
                                className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-white/20 transition-all cursor-default group"
                            >
                                <div className="w-4 h-4 rounded-full shadow-[0_0_10px]" style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}` }}></div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-bold text-white">{item.label}</span>
                                        <div className="text-right">
                                            <span className="font-bold block" style={{ color: item.color }}>{item.value}%</span>
                                            <span className="text-xs text-atrum-silver font-mono">{item.tokens}</span>
                                        </div>
                                    </div>

                                    {/* Animated Bar */}
                                    <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${item.value}%` }}
                                            transition={{ duration: 1.5, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                                            className="h-full rounded-full relative"
                                            style={{ backgroundColor: item.color }}
                                        >
                                            <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Sections */}
            <section className="py-20 px-6 relative z-10">
                <div className="max-w-5xl mx-auto space-y-16">
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
                            <div className={`absolute -right-20 -top-20 w-80 h-80 bg-current opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-700 ${section.color}`}></div>

                            {/* Hover Flip Box Effect (Subtle highlight) */}
                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                            <div className="flex flex-col md:flex-row gap-8 md:items-start relative z-10">
                                <div className="shrink-0 flex flex-col items-center gap-4">
                                    <div className={`p-6 rounded-2xl bg-gradient-to-br w-20 h-20 flex items-center justify-center shadow-lg ${section.accent} shadow-[0_0_20px_rgba(0,0,0,0.3)]`}>
                                        {section.icon}
                                    </div>
                                    {section.extraIcon && (
                                        <div className="bg-black/50 p-2 rounded-full border border-white/10 backdrop-blur-md">
                                            {section.extraIcon}
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <h2 className={`text-3xl md:text-4xl font-display font-bold text-white mb-2 flex items-center gap-3`}>
                                        {section.title}
                                    </h2>
                                    <p className={`text-lg font-mono mb-8 ${section.color} font-bold tracking-wide`}>
                                        {section.subtitle}
                                    </p>

                                    <div className="space-y-4">
                                        {section.content.map((paragraph, pIndex) => (
                                            <motion.div
                                                key={pIndex}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.2 + (pIndex * 0.1) }}
                                                className="flex items-start gap-3"
                                            >
                                                <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${section.accent}`}></div>
                                                <p className="leading-relaxed text-atrum-silver/90 text-lg">
                                                    {paragraph}
                                                </p>
                                            </motion.div>
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

                        {/* Animated Border Gradient */}
                        <div className="absolute inset-0 rounded-[3rem] border border-white/10"></div>

                        <div className="relative z-10">
                            <div className="inline-block px-6 py-2 rounded-full bg-atrum-blue text-white text-sm font-bold mb-8 shadow-[0_0_15px_rgba(26,159,255,0.5)] tracking-widest uppercase">
                                Verified Supply Cap
                            </div>

                            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
                                TOTAL SUPPLY: <span className="text-atrum-cyan">100%</span>
                            </h2>

                            <div className="flex justify-center items-center gap-2 mb-12">
                                <div className="text-5xl md:text-8xl font-mono font-bold text-white tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                                    5,000,000,000
                                </div>
                                <span className="text-2xl text-atrum-silver font-bold self-end mb-4">TOKENS</span>
                            </div>


                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                                {[
                                    "Fixed supply. No minting.",
                                    "No stealth allocation.",
                                    "No backdoor token creation.",
                                    "Value linked to utility."
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-center gap-3 text-sm font-bold text-white bg-black/40 p-4 rounded-xl border border-white/10 backdrop-blur-sm"
                                    >
                                        <CheckCircle className="text-green-400 shrink-0" size={20} />
                                        {item}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom decorative bar */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-atrum-cyan to-transparent opacity-50"></div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
