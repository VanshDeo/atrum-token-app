"use client";

import { motion } from "framer-motion";
import { Link2, Download, Coins } from "lucide-react";

export default function HowItWorks() {
    return (
        <section className="py-24 px-6 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "6rem" }}
                        className="h-1 bg-atrum-blue mx-auto rounded-full mb-6"
                    />
                    <h2 className="font-display font-bold text-4xl sm:text-5xl mb-6">
                        How It <span className="text-gradient">Works</span>
                    </h2>
                    <p className="text-atrum-silver-light/80 text-lg leading-relaxed max-w-3xl mx-auto">
                        Users paste a link, our system detects the platform and media type, processes the content securely in real time, and enables instant download. Atrum Tokens are automatically credited to the user wallet without any manual steps.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[100px] left-[16%] right-[16%] h-1 bg-white/10 z-0">
                        <motion.div
                            initial={{ scaleX: 0, originX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="h-full bg-gradient-to-r from-atrum-blue via-atrum-cyan to-atrum-pink rounded-full"
                        />
                    </div>

                    {[
                        {
                            step: "01",
                            title: "Paste a Link",
                            desc: "Copy a link from Instagram, TikTok, YouTube, or X and paste it into Atrum.",
                            icon: <Link2 size={32} />,
                            color: "text-atrum-blue",
                            bg: "bg-atrum-blue/10",
                            border: "border-atrum-blue/30"
                        },
                        {
                            step: "02",
                            title: "Download Instantly",
                            desc: "Our secure system processes the media in real-time for high-quality downloads.",
                            icon: <Download size={32} />,
                            color: "text-atrum-cyan",
                            bg: "bg-atrum-cyan/10",
                            border: "border-atrum-cyan/30"
                        },
                        {
                            step: "03",
                            title: "Earn Atrum Tokens",
                            desc: "Receive tokens automatically in your built-in wallet for every interaction.",
                            icon: <Coins size={32} />,
                            color: "text-atrum-pink",
                            bg: "bg-atrum-pink/10",
                            border: "border-atrum-pink/30"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, type: "spring" }}
                            whileHover={{ y: -10 }}
                            className={`relative z-10 h-full bg-black/40 backdrop-blur-md p-8 rounded-3xl border ${item.border} hover:bg-white/5 transition-all duration-300 group`}
                        >
                            <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(0,0,0,0.2)]`}>
                                {item.icon}
                            </div>

                            <div className="absolute top-8 right-8 font-display font-bold text-4xl text-white/5 group-hover:text-white/10 transition-colors">
                                {item.step}
                            </div>

                            <h3 className="font-bold text-xl text-white mb-3 group-hover:text-atrum-silver transition-colors">{item.title}</h3>
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
