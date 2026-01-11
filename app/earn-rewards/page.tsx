"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Coins, Users, Trophy, Flame, TrendingUp, ShieldCheck, Gift, Star, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export default function EarnRewardsPage() {
    const [coins, setCoins] = useState<{ id: number; left: number; duration: number; delay: number }[]>([]);

    useEffect(() => {
        // Generate random coins for rain effect
        const newCoins = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            duration: Math.random() * 2 + 2,
            delay: Math.random() * 5,
        }));
        setCoins(newCoins);
    }, []);

    const cardVariants = {
        hidden: { rotateY: 90, opacity: 0 },
        visible: {
            rotateY: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const earningMethods = [
        { title: "Downloads", icon: <Coins size={32} />, desc: "Earn for every verified content download.", amount: "10 ATRUM" },
        { title: "Daily Streaks", icon: <Flame size={32} />, desc: "Login daily to multiply your earnings.", amount: "2x multiplier" },
        { title: "Referrals", icon: <Users size={32} />, desc: "Invite friends and earn a % of their activity.", amount: "500 ATRUM" },
        { title: "Engagement", icon: <Star size={32} />, desc: "Participate in community polls & events.", amount: "Various Prizes" }
    ];

    return (
        <main className="min-h-screen bg-linear-to-br from-atrum-dark-start to-atrum-dark-end overflow-hidden selection:bg-yellow-400/30 text-atrum-silver font-body">
            <Navbar />

            {/* Coin Rain Container */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden h-full w-full">
                {coins.map((coin) => (
                    <motion.div
                        key={coin.id}
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: "100vh", opacity: [0, 1, 1, 0] }}
                        transition={{
                            duration: coin.duration,
                            repeat: Infinity,
                            delay: coin.delay,
                            ease: "linear"
                        }}
                        className="absolute text-yellow-400"
                        style={{ left: `${coin.left}%` }}
                    >
                        <Coins size={24} fill="currentColor" className="opacity-40" />
                    </motion.div>
                ))}
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 text-center z-10">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring" as const, stiffness: 100 }}
                >
                    <div className="inline-block p-4 rounded-full bg-linear-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 mb-6 backdrop-blur-md">
                        <span className="text-yellow-400 font-bold uppercase tracking-wider flex items-center gap-2">
                            <Zap size={18} fill="currentColor" /> Monetize Your Time
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
                        START <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-500">EARNING</span> TODAY
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto text-atrum-silver/80">
                        Turn your daily digital habits into real assets. Multiple ways to earn, infinite potential to grow.
                    </p>
                </motion.div>
            </section>

            {/* Ways to Earn */}
            <section className="py-20 px-6 relative z-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {earningMethods.map((method, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 rounded-3xl border border-white/10 hover:border-yellow-400/50 transition-colors group"
                        >
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400/10 rounded-full blur-2xl group-hover:bg-yellow-400/20 transition-all"></div>

                            <div className="mb-6 text-yellow-400 p-4 bg-yellow-400/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                                {method.icon}
                            </div>

                            <h3 className="text-2xl font-display font-bold text-white mb-2">{method.title}</h3>
                            <p className="text-sm text-atrum-silver/70 mb-4 h-10">{method.desc}</p>

                            <div className="text-lg font-bold text-white bg-white/5 rounded-lg py-2 px-3 inline-block">
                                <span className="text-yellow-400">+</span> {method.amount}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Reward Boost & Leaderboard */}
            <section className="py-20 px-6 bg-black/30 relative z-10">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-display font-bold text-white mb-8">
                            REWARD <span className="text-atrum-pink">BOOST</span> SYSTEM
                        </h2>
                        <p className="text-lg text-atrum-silver/80 mb-8">
                            Climb the ranks and unlock exclusive multipliers. The active community members earn more.
                        </p>

                        <div className="space-y-4">
                            {[
                                { label: "Weekly Challenges", icon: <Trophy size={18} className="text-yellow-400" /> },
                                { label: "XP Badges", icon: <Star size={18} className="text-purple-400" /> },
                                { label: "Top 100 Bonus", icon: <Flame size={18} className="text-orange-400" /> }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 glass rounded-xl">
                                    {item.icon}
                                    <span className="font-bold text-white">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Mock Leaderboard UI */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="glass-card p-6 rounded-3xl border border-white/10"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-display font-bold text-xl text-white">Top Earners</h3>
                            <span className="text-xs uppercase bg-green-500/20 text-green-400 px-2 py-1 rounded">Live</span>
                        </div>

                        <div className="space-y-3">
                            {[1, 2, 3, 4, 5].map((pos) => (
                                <motion.div
                                    key={pos}
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ delay: pos * 0.2 }}
                                    className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                                >
                                    <span className={`font-mono font-bold w-6 ${pos === 1 ? 'text-yellow-400' : 'text-gray-400'}`}>#{pos}</span>
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600"></div>
                                    <div className="flex-1">
                                        <div className="h-2 w-24 bg-gray-700 rounded-full"></div>
                                    </div>
                                    <span className="font-mono text-atrum-cyan text-sm">{10000 - pos * 500} ATR</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Projected Growth Charts */}
            <section className="py-20 px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-16">
                        PROJECTED <span className="text-atrum-cyan">GROWTH</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="glass p-8 rounded-3xl text-left"
                        >
                            <h4 className="flex items-center gap-2 text-white font-bold mb-6">
                                <TrendingUp className="text-green-400" /> Token Value Potential
                            </h4>
                            {/* CSS Bar Chart */}
                            <div className="flex items-end gap-4 h-40">
                                {[30, 45, 60, 50, 80, 100].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${h}%` }}
                                        transition={{ duration: 1, delay: i * 0.1 }}
                                        className="flex-1 bg-linear-to-t from-atrum-blue/20 to-atrum-cyan rounded-t-lg relative group"
                                    >
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs text-white bg-black px-2 py-1 rounded transition-opacity">
                                            {h * 10}%
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="glass p-8 rounded-3xl text-left"
                        >
                            <h4 className="flex items-center gap-2 text-white font-bold mb-6">
                                <Users className="text-atrum-pink" /> User Growth
                            </h4>
                            {/* CSS Line Chart Mockup using SVG */}
                            <svg viewBox="0 0 100 40" className="w-full h-40 stroke-atrum-pink stroke-2 fill-none overflow-visible">
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                    d="M0 40 Q 20 35, 40 20 T 100 5"
                                />
                                <circle cx="0" cy="40" r="2" className="fill-atrum-pink" />
                                <circle cx="40" cy="20" r="2" className="fill-atrum-pink" />
                                <circle cx="100" cy="5" r="2" className="fill-atrum-pink" />
                            </svg>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Fairness & Verification */}
            <section className="py-20 px-6 bg-black/40 z-10 relative">
                <div className="max-w-3xl mx-auto text-center">
                    <ShieldCheck size={48} className="mx-auto text-green-400 mb-6" />
                    <h2 className="text-3xl font-display font-bold text-white mb-6">Token Distribution Fairness</h2>
                    <p className="text-atrum-silver/80">
                        We use advanced anti-abuse algorithms to ensure real users get rewarded.
                        Bots and fraudulent activities are automatically filtered to protect the ecosystem's value.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
