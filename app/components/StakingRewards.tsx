"use client";

import { motion } from "framer-motion";
import { TrendingUp, RefreshCw, Users, Star, Flame, Trophy } from "lucide-react";

export default function Earnings() {
    return (
        <section className="py-24 px-6 relative bg-gradient-to-b from-transparent to-black/40 overflow-hidden">

            {/* Raining Tokens Animation */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-8 bg-gradient-to-b from-transparent to-atrum-blue/50 rounded-full"
                        initial={{ top: -50, left: `${Math.random() * 100}%`, opacity: 0 }}
                        animate={{ top: "110%", opacity: [0, 0.5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 2, ease: "linear" }}
                    />
                ))}
            </div>

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-display font-bold text-4xl sm:text-5xl mb-6">
                        How Users <span className="text-gradient">Earn</span>
                    </h2>
                    <p className="text-atrum-silver-light/80 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
                        Users receive rewards for successful downloads, daily streaks, referrals, and engagement. Reward logic prevents abuse while supporting long-term growth.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Active Usage / Downloads */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative group bg-white/5 border border-white/10 rounded-3xl p-8 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-atrum-blue/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-atrum-blue/20 flex items-center justify-center text-atrum-blue mb-4 group-hover:rotate-12 transition-transform">
                                <TrendingUp size={32} />
                            </div>
                            <h3 className="font-bold text-2xl text-white mb-2">Downloads</h3>
                            <p className="text-atrum-silver-light/70">Earn tokens for every successful media download.</p>
                        </div>
                    </motion.div>

                    {/* Streaks */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative group bg-white/5 border border-white/10 rounded-3xl p-8 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-atrum-pink/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-atrum-pink/20 flex items-center justify-center text-atrum-pink mb-4 animate-pulse-slow">
                                <Flame size={32} className="group-hover:text-amber-400 transition-colors" />
                            </div>
                            <h3 className="font-bold text-2xl text-white mb-2">Daily Streaks</h3>
                            <p className="text-atrum-silver-light/70">Bonus rewards for consistent daily platform usage.</p>
                        </div>
                    </motion.div>

                    {/* Referrals */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative group bg-white/5 border border-white/10 rounded-3xl p-8 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-atrum-cyan/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-atrum-cyan/20 flex items-center justify-center text-atrum-cyan mb-4 group-hover:scale-110 transition-transform">
                                <Users size={32} />
                            </div>
                            <h3 className="font-bold text-2xl text-white mb-2">Referrals</h3>
                            <p className="text-atrum-silver-light/70">Invite friends and earn a percentage of their earnings.</p>
                        </div>
                    </motion.div>

                    {/* Engagement */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative group bg-white/5 border border-white/10 rounded-3xl p-8 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-atrum-purple/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-atrum-purple/20 flex items-center justify-center text-atrum-purple mb-4 group-hover:rotate-180 transition-transform duration-500">
                                <Trophy size={32} />
                            </div>
                            <h3 className="font-bold text-2xl text-white mb-2">Engagement</h3>
                            <p className="text-atrum-silver-light/70">Community participation and special events.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
