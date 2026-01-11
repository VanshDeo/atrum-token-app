"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Wallet, CreditCard, Lock, Zap, Globe, Key, ArrowRight, Shield, Download, Crown } from "lucide-react";

export default function WalletUtilityPage() {

    const benefits = [
        { title: "Unlock 4K Downloads", icon: <Download />, desc: "Access premium ultra-HD quality content only available to token holders." },
        { title: "Higher Daily Limits", icon: <Zap />, desc: "Remove caps on your daily download count instantly." },
        { title: "Early Access Tools", icon: <Key />, desc: "Be the first to try our new AI editing and generation features." },
        { title: "Priority Queue", icon: <Crown />, desc: "Skip the line. Faster processing speeds during peak hours." }
    ];

    return (
        <main className="min-h-screen bg-linear-to-br from-atrum-dark-start to-atrum-dark-end overflow-hidden selection:bg-atrum-blue/30 text-atrum-silver font-body">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-atrum-blue/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="md:w-1/2"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-atrum-blue/10 border border-atrum-blue/20 text-atrum-blue text-sm font-bold mb-6">
                            <Wallet size={14} /> Built-In Utility
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                            YOUR <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-atrum-blue to-atrum-cyan">WALLET</span> & <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-atrum-pink to-atrum-purple">UTILITY</span>
                        </h1>
                        <p className="text-xl text-atrum-silver/80 mb-8 max-w-lg">
                            More than just a token. It's your key to unlocking the full potential of the digital content ecosystem.
                        </p>
                    </motion.div>

                    {/* Animated Wallet Mascot */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="md:w-1/2 relative"
                    >
                        <div className="relative w-72 h-72 mx-auto">
                            {/* Wallet Body */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 bg-linear-to-br from-atrum-dark-end to-[#0F2A80] rounded-[3rem] border border-atrum-blue/30 shadow-[0_0_50px_rgba(26,159,255,0.2)] flex items-center justify-center z-10"
                            >
                                <div className="text-white text-center">
                                    <div className="text-4xl mb-2">💰</div>
                                    <div className="font-display font-bold text-2xl tracking-widest">WALLET</div>
                                    <div className="text-atrum-cyan font-mono mt-2">1,250 ATR</div>
                                </div>

                                {/* Wallet Eyes */}
                                <div className="absolute top-16 left-16 w-3 h-3 bg-white rounded-full animate-pulse"></div>
                                <div className="absolute top-16 right-16 w-3 h-3 bg-white rounded-full animate-pulse"></div>
                                <div className="absolute top-20 left-16 w-8 h-4 border-b-2 border-white/50 rounded-full"></div>
                            </motion.div>

                            {/* Coins Flying In */}
                            {[...Array(6)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-8 h-8 rounded-full bg-yellow-400 border-2 border-yellow-200 flex items-center justify-center shadow-lg z-20"
                                    initial={{ x: 200, y: -100, opacity: 0 }}
                                    animate={{
                                        x: [150, 0],
                                        y: [-50, 0],
                                        opacity: [0, 1, 0],
                                        scale: [1, 0.5]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.8,
                                        ease: "easeIn"
                                    }}
                                >
                                    <span className="text-yellow-700 font-bold text-xs">$</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* External Wallet Support */}
            <section className="py-16 px-6 bg-white/5">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-2xl font-display font-bold text-white mb-12 uppercase tracking-widest">Compatible With</h2>

                    <div className="flex flex-wrap justify-center gap-12 md:gap-24">
                        {[
                            { name: "MetaMask", color: "text-orange-500", letter: "M" },
                            { name: "TrustWallet", color: "text-blue-500", letter: "T" },
                            { name: "Coinbase", color: "text-blue-600", letter: "C" }
                        ].map((wallet, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                                className="flex flex-col items-center gap-4 group cursor-pointer"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-3xl font-black ${wallet.color}`}>
                                    {wallet.letter}
                                </div>
                                <span className="font-bold text-white group-hover:text-atrum-blue transition-colors">{wallet.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases Grid */}
            <section className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                            UNLOCK <span className="text-atrum-cyan">POWER</span>
                        </h2>
                        <p className="text-lg text-atrum-silver/70">Expend tokens to upgrade your experience.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="glass p-8 rounded-3xl flex items-start gap-6 group hover:bg-white/10 transition-all border border-transparent hover:border-atrum-blue/30"
                            >
                                <div className="w-14 h-14 rounded-full bg-linear-to-br from-atrum-blue/20 to-atrum-cyan/10 flex items-center justify-center text-atrum-cyan group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(130,233,255,0.2)]">
                                    {benefit.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-atrum-blue transition-colors">{benefit.title}</h3>
                                    <p className="text-atrum-silver/80 leading-relaxed">{benefit.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ecosystem & Ownership */}
            <section className="py-24 px-6 bg-black/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('/images/grid.png')] opacity-10"></div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="glass-card p-12 rounded-[3rem] border-t border-atrum-pink/50 shadow-[0_0_50px_rgba(255,63,183,0.1)]"
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
                            OWN YOUR <span className="text-atrum-pink">EARNINGS</span>
                        </h2>
                        <p className="text-xl text-atrum-silver mb-10 max-w-2xl mx-auto">
                            ATRUM is a non-custodial token. You hold the keys. You own the value.
                            Move your assets freely across the decentralized web.
                        </p>

                        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                            <button className="px-8 py-4 rounded-full bg-atrum-pink text-white font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(255,63,183,0.6)] hover:scale-105 transition-all">
                                Connect Wallet
                            </button>
                            <button className="px-8 py-4 rounded-full border border-atrum-silver/30 text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-all flex items-center gap-2">
                                Leran More <ArrowRight size={18} />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
