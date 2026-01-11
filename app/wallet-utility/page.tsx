"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Wallet, Shield, Zap, Lock, CreditCard, ChevronRight, Coins, Crown, BarChart2, Flame, Gift, Award, Repeat, Megaphone } from "lucide-react";
import { useState } from "react";

export default function WalletUtilityPage() {
    const [activeTab, setActiveTab] = useState("earn");

    const utilityCards = [
        { title: "4K & HD Access", icon: <Zap size={32} className="text-yellow-400" />, desc: "Unlock premium ultra-high definition downloads." },
        { title: "Priority Queue", icon: <Crown size={32} className="text-purple-400" />, desc: "Skip processing wait times during peak hours." },
        { title: "Power Boosters", icon: <Flame size={32} className="text-orange-500" />, desc: "Multiply your earning rates for 24-hour windows." },
        { title: "Feature Voting", icon: <Megaphone size={32} className="text-blue-400" />, desc: "Use tokens to vote on the next platform features." },
    ];

    const gamifiedFeatures = [
        { title: "Daily Streaks", value: "+15%", desc: "Consecutive daily downloads boost your base reward rate." },
        { title: "Weekly Quests", value: "500 ATRUM", desc: "Complete specific challenges like 'Download from 3 platforms'." },
        { title: "Leaderboards", value: "Top 100", desc: "Weekly reset for top earners with massive token prize pools." },
        { title: "NFT Badges", value: "Identity", desc: "Earn permanent on-chain badges for milestone achievements." }
    ];

    return (
        <main className="min-h-screen bg-[#020518] text-atrum-silver font-body overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-6 text-center overflow-hidden">
                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-atrum-blue/20 rounded-full blur-xl"
                            style={{
                                width: Math.random() * 50 + 20,
                                height: Math.random() * 50 + 20,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                            animate={{ y: [0, -100, 0], opacity: [0, 0.5, 0] }}
                            transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: "linear" }}
                        />
                    ))}
                </div>

                <div className="relative z-10 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, rotate: 360 }}
                        transition={{ type: "spring", stiffness: 50, damping: 20 }}
                        className="inline-block mb-10 relative"
                    >
                        <div className="absolute inset-0 bg-atrum-blue blur-[60px] opacity-40 animate-pulse"></div>
                        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-linear-to-br from-atrum-blue to-purple-600 flex items-center justify-center shadow-[0_0_60px_rgba(26,159,255,0.6)] border-4 border-white/20">
                            <Coins size={64} className="text-white md:w-24 md:h-24" />
                        </div>
                        {/* Orbiting Coin */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0"
                        >
                            <div className="absolute -top-4 left-1/2 w-8 h-8 bg-yellow-400 rounded-full shadow-[0_0_20px_rgba(250,204,21,0.8)]"></div>
                        </motion.div>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-5xl md:text-8xl font-display font-bold text-white mb-6"
                    >
                        UTILITY & <span className="text-atrum-blue">VALUE</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10">
                        Atrum tokens represent usable value — not just speculation. Unlock premium features, boost your earnings, and own your digital footprint.
                    </p>
                </div>
            </section>

            {/* Core Utility Cards - Flip Effect */}
            <section className="py-20 px-6 bg-white/5 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">CORE <span className="text-purple-400">UTILITIES</span></h2>
                        <p className="text-gray-400">Real-world use cases active from Day 1.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {utilityCards.map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group perspective-1000 h-64"
                            >
                                <div className="relative w-full h-full duration-500 preserve-3d group-hover:rotate-y-180 transition-transform">
                                    {/* Front */}
                                    <div className="absolute inset-0 glass-card rounded-2xl p-8 flex flex-col items-center justify-center border border-white/10 backface-hidden">
                                        <div className="mb-6 p-4 rounded-full bg-white/5 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                                            {card.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                    </div>
                                    {/* Back */}
                                    <div className="absolute inset-0 bg-linear-to-br from-atrum-blue to-purple-900 rounded-2xl p-8 flex flex-col items-center justify-center rotate-y-180 backface-hidden border border-white/20">
                                        <p className="text-center text-white font-medium text-lg">{card.desc}</p>
                                        <button className="mt-4 text-xs font-bold uppercase tracking-widest text-atrum-cyan">Learn More</button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Economy Model */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
                            THE <span className="text-green-400">EARN</span> & <span className="text-pink-500">SPEND</span> CYCLES
                        </h2>
                        <div className="space-y-8">
                            <div className="flex gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-green-400/20 flex items-center justify-center text-green-400 shrink-0 group-hover:scale-110 transition-transform">
                                    <Repeat size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Sustainable Velocity</h3>
                                    <p className="text-gray-400">Tokens are earned through actions and spent on valuable upgrades. This circulation keeps the economy healthy, unlike tokens that just sit idle.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-500 shrink-0 group-hover:scale-110 transition-transform">
                                    <CreditCard size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Spend to Earn More</h3>
                                    <p className="text-gray-400">Smart users reinvest their tokens into Power Boosters, permanently increasing their daily earning potential.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="glass p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden"
                    >
                        {/* Animated Graph/Cycle visual */}
                        <div className="absolute inset-0 bg-linear-to-br from-green-500/10 to-pink-500/10"></div>
                        <div className="relative z-10 space-y-6">
                            <div className="flex justify-between items-center bg-black/40 p-4 rounded-xl border border-white/5">
                                <span className="text-sm uppercase tracking-widest text-gray-400">Action</span>
                                <span className="text-green-400 font-mono font-bold">+10 ATRUM</span>
                            </div>
                            <div className="flex justify-center">
                                <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                                    <div className="w-0.5 h-8 bg-white/20"></div>
                                </motion.div>
                            </div>
                            <div className="flex justify-between items-center bg-atrum-blue/20 p-4 rounded-xl border border-atrum-blue/50 shadow-[0_0_15px_rgba(26,159,255,0.2)]">
                                <span className="text-sm uppercase tracking-widest text-white font-bold">Wallet Balance</span>
                                <span className="text-atrum-cyan font-mono font-bold text-xl">1,250.00</span>
                            </div>
                            <div className="flex justify-center">
                                <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 1 }}>
                                    <div className="w-0.5 h-8 bg-white/20"></div>
                                </motion.div>
                            </div>
                            <div className="flex justify-between items-center bg-black/40 p-4 rounded-xl border border-white/5 opacity-80">
                                <span className="text-sm uppercase tracking-widest text-gray-400">Upgrade (4K)</span>
                                <span className="text-pink-500 font-mono font-bold">-50 ATRUM</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Gamification Grid */}
            <section className="py-24 px-6 bg-linear-to-t from-atrum-dark-start to-[#020518]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center text-4xl md:text-5xl font-display font-bold text-white mb-16">
                        GAMIFIED <span className="text-yellow-400">ENGAGEMENT</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {gamifiedFeatures.map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)" }}
                                className="bg-[#0A1028] p-8 rounded-3xl border border-white/5 relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Award size={64} />
                                </div>
                                <h3 className="text-atrum-blue font-bold tracking-widest text-sm uppercase mb-2">{item.title}</h3>
                                <div className="text-4xl font-mono font-bold text-white mb-4">{item.value}</div>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                                <div className="w-full h-1 bg-white/10 mt-6 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "70%" }}
                                        transition={{ duration: 1, delay: i * 0.2 }}
                                        className="h-full bg-linear-to-r from-atrum-blue to-purple-500"
                                    ></motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Future Layers */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-display font-bold text-white mb-10">FUTURE VALUE LAYERS</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Creator Tipping", desc: "Send tokens directly to your favorite content creators." },
                            { title: "Partner API", desc: "Use Atrum to pay for services on hundreds of partner apps." },
                            { title: "AI Tagging", desc: "Unlock premium AI-assisted content organization tools." }
                        ].map((layer, i) => (
                            <div key={i} className="glass p-8 rounded-2xl border border-white/5 hover:bg-white/5 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-2">{layer.title}</h3>
                                <p className="text-gray-400 text-sm">{layer.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Governance Banner */}
            <section className="py-12 px-6 mb-20">
                <div className="max-w-6xl mx-auto bg-linear-to-r from-purple-900 to-blue-900 rounded-[3rem] p-12 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
                    <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-20 bg-center"></div>
                    <div className="relative z-10 max-w-xl">
                        <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-4">DAO COMING SOON</div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">YOUR VOICE MATTERS</h2>
                        <p className="text-purple-200 text-lg">
                            Token holders aren't just users—they're owners. Propose features, vote on treasury allocations, and shape the future of Atrum.
                        </p>
                    </div>
                    <button className="relative z-10 px-8 py-4 bg-white text-purple-900 font-bold rounded-full hover:scale-105 transition-transform shadow-lg whitespace-nowrap">
                        Read Governance Paper
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
