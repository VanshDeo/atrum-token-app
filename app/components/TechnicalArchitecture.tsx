"use client";

import { motion } from "framer-motion";
import { Wallet, Zap, Smartphone, ShieldCheck, CreditCard } from "lucide-react";

export default function Features() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Background circuit pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #82E9FF 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-card p-10 md:p-16 rounded-[3rem] border border-atrum-blue/30 shadow-[0_0_50px_rgba(6,11,61,0.5)] transform hover:scale-[1.01] transition-transform duration-500"
                >
                    <div className="flex flex-col md:flex-row gap-16 items-center">

                        {/* Left: Text Content */}
                        <div className="flex-1 text-center md:text-left order-2 md:order-1">
                            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6">
                                Integrated <br /><span className="text-gradient-silver">Wallet System</span>
                            </h2>
                            <p className="text-atrum-silver-light/80 text-base leading-relaxed mb-6">
                                Atrum includes a built-in non-custodial wallet system that allows users to securely store, view, and manage their Atrum Tokens. Wallet creation is simple and designed for both crypto beginners and experienced users.
                            </p>
                            <p className="text-atrum-silver-light/60 text-sm leading-relaxed mb-8">
                                Users can connect external wallets in future versions, enabling flexibility, transparency, and full ownership of earned tokens.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 bg-white/5 px-5 py-3 rounded-xl border border-white/10 hover:bg-atrum-blue/20 transition-colors">
                                    <Wallet className="text-atrum-blue" size={24} />
                                    <span className="text-sm font-bold text-white">Built-in Wallet</span>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 bg-white/5 px-5 py-3 rounded-xl border border-white/10 hover:bg-atrum-cyan/20 transition-colors">
                                    <ShieldCheck className="text-atrum-cyan" size={24} />
                                    <span className="text-sm font-bold text-white">Non-Custodial</span>
                                </motion.div>
                            </div>
                        </div>

                        {/* Right: Phone Visual Mockup - Animated */}
                        <div className="flex-1 w-full flex justify-center order-1 md:order-2">
                            <motion.div
                                initial={{ rotateY: -10 }}
                                whileInView={{ rotateY: 0 }}
                                transition={{ duration: 1 }}
                                className="relative w-[280px] h-[550px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden perspective-1000"
                            >
                                {/* Screen */}
                                <div className="absolute inset-0 bg-gradient-to-b from-atrum-dark-start to-black p-6 flex flex-col items-center pt-12">
                                    <div className="w-full flex justify-between items-center mb-8">
                                        <div className="w-8 h-8 rounded-full bg-white/10"></div>
                                        <div className="w-24 h-4 rounded-full bg-white/10"></div>
                                    </div>

                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="w-full bg-linear-to-br from-atrum-blue to-atrum-blue-light rounded-2xl p-6 mb-8 text-black shadow-[0_0_20px_rgba(26,159,255,0.4)] cursor-pointer relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 p-2 opacity-50"><CreditCard size={40} /></div>
                                        <div className="text-xs font-bold opacity-70 mb-1">Total Balance</div>
                                        <div className="text-3xl font-bold">2,450.00</div>
                                        <div className="text-sm font-medium opacity-80 mt-1">ATRUM</div>

                                        {/* Shine effect */}
                                        <motion.div
                                            animate={{ x: [-200, 300] }}
                                            transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                                            className="absolute top-0 left-0 w-20 h-full bg-white/30 skew-x-12 blur-md"
                                        />
                                    </motion.div>

                                    <div className="w-full space-y-3">
                                        {[1, 2, 3].map((i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ x: 50, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{ delay: i * 0.2 }}
                                                className="w-full h-16 bg-white/5 rounded-xl flex items-center px-4 gap-3 hover:bg-white/10 transition-colors"
                                            >
                                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                                    <div className="w-6 h-6 rounded-full bg-atrum-blue/50"></div>
                                                </div>
                                                <div className="flex-1 space-y-2">
                                                    <div className="h-2 w-24 rounded-full bg-white/10"></div>
                                                    <div className="h-2 w-16 rounded-full bg-white/10 opacity-50"></div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Floating Icon / Coins */}
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute z-10 -right-4 top-40 bg-atrum-pink p-3 rounded-xl shadow-lg border-2 border-white/20"
                                    >
                                        <Zap className="text-white" size={24} />
                                    </motion.div>

                                    {/* Coins Raining/Falling */}
                                    {[...Array(5)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute w-4 h-4 rounded-full bg-atrum-yellow border border-yellow-200"
                                            initial={{ top: -20, left: Math.random() * 100 + "%", opacity: 0 }}
                                            animate={{ top: "100%", opacity: [0, 1, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </motion.div>

                {/* Additional Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                    {[
                        { icon: <Wallet size={32} className="text-atrum-blue" />, title: "Secure Storage", desc: "Your tokens are stored safely with industry standard encryption." },
                        { icon: <Zap size={32} className="text-yellow-400" />, title: "Instant Credit", desc: "Rewards are processed and credited immediately after download." },
                        { icon: <Smartphone size={32} className="text-atrum-pink" />, title: "Mobile Friendly", desc: "Optimized for seamless experience on all mobile devices." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.1)" }}
                            className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center transition-colors group cursor-default"
                        >
                            <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                            <h3 className="font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-sm text-atrum-silver-light/70">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
