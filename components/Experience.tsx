"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Brain, Cpu } from "lucide-react";

const EXPERIENCES = [
    {
        title: "Graduate Research & Teaching Assistant",
        company: "Texas State University",
        location: "San Marcos, TX",
        period: "Jan 2024 – Dec 2025",
        icon: GraduationCap,
        achievements: [
            "Architected a CUDA-accelerated simulation pipeline in Isaac Sim, implementing memory optimization and distributed batching across dual-GPU clusters.",
            "Accelerated training by 45% and increased hardware utilization from 68% to 94%, enabling 200-hour stress tests without memory degradation.",
            "Delivered technical instruction for 70+ CS students in Data Structures & Algorithms, building automated Python grading rubrics that cut turnaround time by 40%."
        ]
    },
    {
        title: "Senior Software Engineer (Platform AI & Microservices)",
        company: "Innova Solutions (Client: Clinithink Ltd)",
        location: "London, UK / Alpharetta, GA",
        period: "Jun 2021 – Dec 2023",
        icon: Briefcase,
        achievements: [
            "Architected enterprise LLM serving, evaluation, and retrieval pipelines using AWS Bedrock and LLaMA with prompt-safety guards, driving $200K ARR.",
            "Decomposed legacy monoliths into domain-driven REST/gRPC microservices in Go, Python, and C#/.NET, serving 50+ enterprise accounts with 99.2% SLA uptime and <200ms latency.",
            "Engineered real-time streaming conversational interfaces using TypeScript, React, and Server-Sent Events (SSE) with token streaming.",
            "Hardened enterprise security with certificate-based OAuth 2.0 (private_key_jwt) and mTLS authentication under strict compliance standards."
        ]
    },
    {
        title: "Deep Learning Research Engineer",
        company: "Unisys / Vidya Jyothi Institute of Technology",
        location: "Hyderabad, India",
        period: "Jun 2019 – Mar 2021",
        icon: Brain,
        achievements: [
            "Led a team of 4 engineers designing CNN image classification pipelines in Python and C++, elevating model accuracy from 72% to 85%.",
            "Built GPU-accelerated image preprocessing and batch data transformation pipelines, reducing end-to-end preprocessing latency by 40%."
        ]
    },
    {
        title: "MLOps Intern",
        company: "Verzeo",
        location: "Hyderabad, India",
        period: "Feb 2020 – Apr 2020",
        icon: Cpu,
        achievements: [
            "Automated end-to-end Python model training pipelines with Bayesian hyperparameter optimization, lifting downstream accuracy by 16%.",
            "Integrated vector database similarity retrieval using FAISS, profiling retrieval bottlenecks to reduce semantic search latency."
        ]
    }
];

export const Experience: React.FC = () => {
    return (
        <section id="experience" className="w-full bg-background py-24 md:py-32">
            <div className="mx-auto max-w-4xl px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-16 md:mb-24"
                >
                    <span className="mb-4 block text-xs font-semibold tracking-widest text-primary uppercase">
                        Career
                    </span>
                    <h2 className="font-display text-4xl font-bold tracking-tight text-text-primary md:text-6xl">
                        Experience
                    </h2>
                </motion.div>

                <div className="relative border-l border-border/40 ml-4 md:ml-6 space-y-16">
                    {EXPERIENCES.map((exp, i) => (
                        <motion.div
                            key={exp.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="relative pl-8 md:pl-12"
                        >
                            <span className="absolute -left-6 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-primary shadow-lg ring-8 ring-background">
                                <exp.icon className="h-5 w-5" />
                            </span>

                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                                <h3 className="font-display text-2xl font-semibold text-text-primary">
                                    {exp.title}
                                </h3>
                                <span className="font-mono text-sm text-text-muted mt-1 md:mt-0 whitespace-nowrap">
                                    {exp.period}
                                </span>
                            </div>

                            <div className="flex flex-wrap items-center gap-3 mb-6 text-sm text-muted">
                                <span className="font-medium text-text-primary">{exp.company}</span>
                                <span className="h-1 w-1 rounded-full bg-border"></span>
                                <span>{exp.location}</span>
                            </div>

                            <ul className="space-y-4 text-text-muted font-sans leading-relaxed">
                                {exp.achievements.map((achievement, j) => (
                                    <li key={j} className="relative pl-5">
                                        <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-primary/40"></span>
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
