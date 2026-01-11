"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Download, Play, Coins, Wallet, ArrowRight, CheckCircle2, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export default function HowItWorksPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring" as const, stiffness: 100 }
        }
    };

    const steps = [
        {
            title: "Paste",
            icon: <Play className="w-8 h-8 text-white" />,
            desc: "Copy a link from your favorite platform.",
            color: "from-atrum-blue to-blue-600"
        },
        {
            title: "Process",
            icon: <CheckCircle2 className="w-8 h-8 text-white" />,
            desc: "Our system instantly prepares the file.",
            color: "from-atrum-cyan to-teal-400"
        },
        {
            title: "Download",
            icon: <Download className="w-8 h-8 text-white" />,
            desc: "Save high-quality content to your device.",
            color: "from-atrum-pink to-purple-500"
        },
        {
            title: "Earn",
            icon: <Coins className="w-8 h-8 text-white" />,
            desc: "Get ATRUM tokens for every download!",
            color: "from-yellow-400 to-orange-500"
        },
    ];

    const platforms = [
        { name: "Instagram", icon: <Instagram />, color: "text-pink-500" },
        { name: "TikTok", icon: <span className="font-bold text-lg">TT</span>, color: "text-black bg-white rounded-full px-1" }, // Custom approximate icon
        { name: "Facebook", icon: <Facebook />, color: "text-blue-600" },
        { name: "YouTube", icon: <Youtube />, color: "text-red-600" },
        { name: "Twitter", icon: <Twitter />, color: "text-blue-400" },
    ];

    return (
        <main className="min-h-screen bg-linear-to-br from-atrum-dark-start to-atrum-dark-end overflow-hidden selection:bg-atrum-pink/30 text-atrum-silver font-body">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    {/* Cartoonic background particles */}
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-atrum-blue/10 blur-xl"
                            style={{
                                width: Math.random() * 200 + 50,
                                height: Math.random() * 200 + 50,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -20, 0],
                                scale: [1, 1.1, 1],
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                                duration: Math.random() * 5 + 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-wide drop-shadow-[0_0_15px_rgba(26,159,255,0.6)]"
                    >
                        HOW IT <span className="text-transparent bg-clip-text bg-linear-to-r from-atrum-blue to-atrum-cyan">WORKS</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl md:text-2xl max-w-3xl mx-auto text-atrum-silver/80"
                    >
                        From simple downloads to earning crypto. The seamless journey to digital ownership.
                    </motion.p>
                </div>
            </section>

            {/* Step-by-Step Flow */}
            <section className="py-20 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="glass-card p-8 rounded-3xl relative overflow-hidden group border border-white/5"
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${step.color} opacity-10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:opacity-20 transition-opacity duration-500`}></div>

                                <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg shadow-white/5 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300`}>
                                    {step.icon}
                                </div>

                                <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                                    {step.title}
                                </h3>
                                <p className="text-atrum-silver/70 group-hover:text-atrum-silver transition-colors">
                                    {step.desc}
                                </p>

                                {/* Arrow connector for desktop */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20 text-atrum-blue/30">
                                        <ArrowRight size={24} />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Supported Platforms */}
            <section className="py-20 px-6 bg-black/20">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-3xl md:text-4xl font-display font-bold text-white mb-16"
                    >
                        SUPPORTED <span className="text-atrum-pink">PLATFORMS</span>
                    </motion.h2>

                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        {platforms.map((platform, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring" as const, stiffness: 200, delay: index * 0.1 }}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                className="flex flex-col items-center gap-4 cursor-pointer group"
                            >
                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full glass flex items-center justify-center text-4xl shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_30px_rgba(130,233,255,0.6)] transition-all duration-300 bg-white/5">
                                    <div className={`${platform.color}`}>{platform.icon}</div>
                                </div>
                                <span className="font-display text-sm md:text-base tracking-widest text-atrum-silver/60 group-hover:text-white transition-colors">
                                    {platform.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Behind the Scenes Pipeline */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                            BEHIND THE <span className="text-atrum-cyan">SCENES</span>
                        </h2>
                        <p className="text-lg text-atrum-silver/80 leading-relaxed max-w-md">
                            Our intelligent system instantly detects the platform, processes the media, and delivers the highest quality file to your device—all while verifying your action on the blockchain to dispense rewards.
                        </p>

                        <motion.div
                            className="mt-8 p-4 glass-card rounded-xl inline-block"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="flex items-center gap-3 text-atrum-blue-light font-bold">
                                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                                System Active & Processing
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] w-full glass rounded-3xl border border-white/5 p-8 flex flex-col justify-between"
                    >
                        {/* Animated Pipeline Graphic */}
                        <div className="absolute inset-0 overflow-hidden rounded-3xl">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute h-1 bg-gradient-to-r from-transparent via-atrum-blue to-transparent w-1/2"
                                    style={{ top: `${20 + i * 15}%`, left: '-50%' }}
                                    animate={{ left: '150%' }}
                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4, ease: "linear" }}
                                />
                            ))}
                        </div>

                        <div className="relative z-10 flex justify-between items-center h-full">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-16 h-16 rounded-xl bg-gray-800 flex items-center justify-center border border-gray-600">
                                    <Play className="text-gray-400" />
                                </div>
                                <span className="text-xs uppercase">Url Input</span>
                            </div>

                            <ArrowRight className="text-atrum-blue animate-pulse" />

                            <div className="flex flex-col items-center gap-2">
                                <div className="w-20 h-20 rounded-full border-2 border-atrum-cyan flex items-center justify-center relative shadow-[0_0_20px_rgba(130,233,255,0.4)] bg-black/40">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 rounded-full border-t-2 border-transparent border-t-atrum-pink"
                                    />
                                    <span className="font-display font-bold text-atrum-cyan">AI</span>
                                </div>
                                <span className="text-xs uppercase text-atrum-cyan">Processing</span>
                            </div>

                            <ArrowRight className="text-atrum-pink animate-pulse" />

                            <div className="flex flex-col items-center gap-2">
                                <div className="w-16 h-16 rounded-xl bg-linear-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-[0_0_20px_rgba(255,200,0,0.4)]">
                                    <Coins className="text-white fill-white" />
                                </div>
                                <span className="text-xs uppercase text-yellow-400">Reward Sent</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mini FAQ */}
            <section className="py-20 px-6 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-12">
                    QUICK <span className="text-atrum-pink">ANSWERS</span>
                </h2>

                <div className="space-y-4">
                    {[
                        {
                            q: "Is it free to use?",
                            a: "Yes! Creating an account and downloading content on Atrum is completely free. We believe users should earn value from their daily actions, so we never charge for basic access or downloads—instead, we reward you for participating in the ecosystem."
                        },
                        {
                            q: "How do I get paid?",
                            a: "Tokens are automatically credited to your built-in non-custodial wallet immediately after each valid action. Our system verifies your download or engagement in real-time on the blockchain, ensuring you receive your rewards instantly without any manual claim steps."
                        },
                        {
                            q: "Can I use any video link?",
                            a: "We widely support public links from major platforms like Instagram, TikTok, YouTube Shorts, and Facebook. Simply paste the public URL, and our system will detect the media type to process your high-quality download while ignoring private or restricted content."
                        },
                        {
                            q: "How does the built-in wallet work?",
                            a: "Atrum features a secure, non-custodial wallet designed for both beginners and crypto experts. It allows you to store and view your earnings safely, and in future updates, you'll be able to connect external wallets like MetaMask for complete control and flexibility over your assets."
                        },
                        {
                            q: "Is my personal data secure?",
                            a: "Absolutely. Privacy is our core foundation; we do not store your downloaded media or require unnecessary social media logins. We allow you to interact with content securely using encrypted data handling, ensuring your digital footprint remains private and protected at all times."
                        },
                        {
                            q: "What can I use Atrum Tokens for?",
                            a: "Atrum Tokens are functional utility assets, not just rewards. You can use them to unlock premium benefits like 4K resolution downloads, faster processing speeds, and higher daily limits, with future expansions into creator tools and partner platform services."
                        }
                    ].map((faq, i) => (
                        <motion.details
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group glass-card rounded-xl overflow-hidden cursor-pointer"
                        >
                            <summary className="p-6 text-lg font-bold text-white flex justify-between items-center list-none outline-hidden">
                                {faq.q}
                                <span className="text-atrum-blue text-2xl group-open:rotate-45 transition-transform duration-300">+</span>
                            </summary>
                            <div className="px-6 pb-6 text-atrum-silver font-light">
                                {faq.a}
                            </div>
                        </motion.details>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
