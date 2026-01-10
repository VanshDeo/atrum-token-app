"use client";

import { motion } from "framer-motion";
import { Shield, Lock, EyeOff, CheckCircle } from "lucide-react";

export default function Security() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 bg-black">
                <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: 'linear-gradient(rgba(26, 159, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 159, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />
                {/* Glowing Orbs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-atrum-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center justify-center p-3 rounded-2xl bg-atrum-blue/10 text-atrum-blue mb-8 relative"
                >
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-2xl bg-atrum-blue/30 blur-xl"
                    />
                    <Shield size={40} className="relative z-10" />
                </motion.div>

                <h2 className="font-display font-bold text-4xl sm:text-5xl mb-6">
                    Security & <span className="text-gradient">Privacy</span>
                </h2>

                <p className="text-atrum-silver-light/80 text-lg leading-relaxed mb-12">
                    Atrum does not store downloaded media or require platform logins. Secure infrastructure, encryption, and transparent token logic ensure complete trust.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        whileHover={{ scale: 1.02, borderColor: "rgba(130,233,255,0.5)" }}
                        viewport={{ once: true }}
                        className="relative p-8 rounded-3xl bg-linear-to-b from-white/5 to-transparent border border-white/10 text-left overflow-hidden group"
                    >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                        <Lock className="text-atrum-cyan mb-4 group-hover:shake" size={32} />
                        <h3 className="font-bold text-white text-xl mb-2">No Data Storage</h3>
                        <p className="text-atrum-silver-light/60 text-sm">We process your downloads in real-time without saving any personal content to our servers.</p>
                    </motion.div>

                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        whileHover={{ scale: 1.02, borderColor: "rgba(255,63,183,0.5)" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative p-8 rounded-3xl bg-linear-to-b from-white/5 to-transparent border border-white/10 text-left overflow-hidden group"
                    >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 delay-100"></div>

                        <EyeOff className="text-atrum-pink mb-4" size={32} />
                        <h3 className="font-bold text-white text-xl mb-2">Anonymous Usage</h3>
                        <p className="text-atrum-silver-light/60 text-sm">No account required for basic features. Your social media activity remains private.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
