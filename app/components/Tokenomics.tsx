"use client";

import { motion } from "framer-motion";
import { Lock, Zap, BarChart3, Users } from "lucide-react";

export default function TokenUtility() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-atrum-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Neon Light Trails */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ x: [-1000, 2000], y: [0, 500] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 left-0 w-64 h-2 bg-atrum-blue/30 blur-xl rotate-12"
                />
                <motion.div
                    animate={{ x: [2000, -1000], y: [500, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-40 right-0 w-64 h-2 bg-atrum-pink/30 blur-xl -rotate-12"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    {/* 3D Spinning Token Effect */}
                    <div className="w-24 h-24 mx-auto mb-8 relative preserve-3d animate-spin-slow">
                        <div className="absolute inset-0 rounded-full border-4 border-atrum-blue bg-black/50 shadow-[0_0_30px_rgba(26,159,255,0.5)] flex items-center justify-center text-white font-bold text-xs">
                            ATRUM
                        </div>
                    </div>

                    <h2 className="font-display font-bold text-4xl sm:text-5xl mb-6">
                        Token <span className="text-gradient">Utility</span>
                    </h2>
                    <p className="text-atrum-silver-light/80 text-lg leading-relaxed mb-16 max-w-3xl mx-auto">
                        Tokens unlock premium features like higher limits, HD/4K downloads, fast lanes, and future partner tools.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: <Zap size={32} />, title: "Premium Access", desc: "Unlock higher download limits and faster processing speeds." },
                        { icon: <Lock size={32} />, title: "Exclusive Content", desc: "Access 4K/HD quality downloads and removing watermarks." },
                        { icon: <Users size={32} />, title: "Community Governance", desc: "Vote on future platform features and partnerships." },
                        { icon: <BarChart3 size={32} />, title: "Advanced Analytics", desc: "Get detailed insights into your social media performance." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50, rotateX: 90 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                            className="bg-layer-2 p-8 rounded-3xl border border-white/5 hover:border-atrum-blue/30 hover:shadow-[0_0_30px_rgba(6,11,61,0.3)] transition-all duration-300 group bg-glass"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-atrum-blue group-hover:text-black transition-colors duration-300 group-hover:rotate-[360deg] transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="font-bold text-xl text-white mb-3">{item.title}</h3>
                            <p className="text-atrum-silver-light/60 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
