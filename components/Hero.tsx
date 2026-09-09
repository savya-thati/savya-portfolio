"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[94vh] w-full flex flex-col items-center justify-center overflow-hidden bg-background px-6 pt-28 pb-16 text-center">
            {/* Cosmic Deep Space Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <Image
                    src="/galaxy.webp"
                    alt="Deep space cosmic galaxy background"
                    fill
                    priority
                    quality={95}
                    className="object-cover object-center opacity-50 scale-105"
                />
                {/* Layered atmospheric vignettes for depth & high text legibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/40 to-background" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_var(--bg-base)_75%)] opacity-90" />
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
            </div>

            {/* Hero Content Container */}
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex max-w-4xl flex-col items-center"
            >
                {/* Avatar Badge with Glowing Rings */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative mb-8"
                >
                    {/* Glowing outer aura */}
                    <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-primary via-accent to-primary opacity-50 blur-lg group-hover:opacity-80 transition duration-700 animate-pulse" />

                    {/* Crisp circular frame */}
                    <div className="relative h-36 w-36 sm:h-44 sm:w-44 rounded-full overflow-hidden border-2 border-white/20 bg-surface shadow-[0_0_40px_rgba(0,0,0,0.8)] backdrop-blur-md ring-4 ring-black/40">
                        <Image
                            src="/porfolio.webp"
                            alt="Savyasachi Thati"
                            fill
                            priority
                            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                    </div>

                    {/* Status Pill Badge */}
                    <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-2 rounded-full border border-emerald-500/30 bg-[#0d1512]/90 px-3.5 py-1 text-xs font-medium text-emerald-400 backdrop-blur-md shadow-xl">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <span>Open to SWE III & AI Roles</span>
                    </div>
                </motion.div>

                {/* Name & Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center space-y-4"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-text-muted backdrop-blur-md">
                        <Sparkles className="h-3.5 w-3.5 text-primary" />
                        <span>AI Systems &bull; High Performance Computing &bull; Distributed Scale</span>
                    </div>

                    <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-text-primary text-balance">
                        Savyasachi Thati
                    </h1>

                    <h2 className="font-sans text-xl sm:text-2xl md:text-3xl text-text-muted font-normal text-balance max-w-3xl">
                        HPC, AI, LLM Agents/RAG & <span className="text-primary font-semibold">Distributed Systems.</span>
                    </h2>

                    <p className="max-w-2xl font-sans text-base sm:text-lg text-text-muted/90 text-balance leading-relaxed pt-2">
                        Architecting autonomous multi-agent orchestration, speculative decoding, and low-latency distributed microservices. Graduate Researcher & Teaching Assistant at Texas State University.
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 w-full sm:w-auto"
                >
                    <Button
                        size="lg"
                        className="w-full sm:w-auto gap-2 text-base font-semibold shadow-lg shadow-primary/20"
                        onClick={() => {
                            document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <span>View Selected Projects</span>
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="lg"
                        className="w-full sm:w-auto gap-2 text-base border border-border/80 hover:border-primary/40 bg-white/[0.02] backdrop-blur-sm"
                        onClick={() => window.open('https://medium.com/@savyasachi.thati', '_blank')}
                    >
                        <BookOpen className="h-4 w-4 text-text-muted" />
                        <span>Read My Writing</span>
                    </Button>
                </motion.div>

                {/* Subtle Scroll Indicator */}
                <motion.a
                    href="#skills"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="group mt-14 flex flex-col items-center gap-2 text-text-muted hover:text-text-primary transition-colors cursor-pointer"
                >
                    <span className="text-[11px] uppercase tracking-widest font-mono text-muted/70 group-hover:text-primary transition-colors">
                        Scroll to Explore
                    </span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                    </motion.div>
                </motion.a>
            </motion.div>
        </section>
    );
};
