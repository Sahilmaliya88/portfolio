"use client";

import { motion } from "framer-motion";
import { Lightbulb, Workflow, Cpu } from "lucide-react";

const saasIdeas = [
  {
    title: "AI-Powered Doctor Workflow",
    problem: "Doctors spend hours writing notes and finding patient history.",
    target: "Private Clinics, Telehealth platforms",
    tech: "Next.js + Spring AI + Whisper + Qdrant",
    monetization: "Tiered subscription per clinic / usage-based for AI transcription.",
    icon: Lightbulb,
    color: "text-blue-400"
  },
  {
    title: "TaskBook Pro",
    problem: "Context switching between chat apps and task boards causes delays.",
    target: "Dev teams, Remote agencies",
    tech: "React + Spring Boot + Redis PubSub + WebSockets",
    monetization: "Per-seat premium model for features like custom AI workflows.",
    icon: Workflow,
    color: "text-purple-400"
  },
  {
    title: "AI Dev Tools Platform",
    problem: "Developers lack internal code-base search combined with live docs.",
    target: "Enterprise engineering teams",
    tech: "Next.js + RAG + Spring AI + Open-source LLMs",
    monetization: "Enterprise licensing with on-prem deployment options.",
    icon: Cpu,
    color: "text-green-400"
  }
];

export function SaaSVisionSection() {
  return (
    <section id="vision" className="py-24 relative overflow-hidden bg-muted/10 border-y border-white/5">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 mb-4 bg-primary/10 rounded-full">
            <Lightbulb className="h-6 w-6 text-primary animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            SaaS <span className="text-primary">Vision</span>
          </h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto text-lg mb-8">
            Beyond building specs, I think about products. Here are a few SaaS concepts tailored to my technical strengths and market needs.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {saasIdeas.map((idea, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass p-8 rounded-2xl border border-white/10 hover:-translate-y-2 transition-transform duration-300 relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
              <div className="relative">
                <idea.icon className={`h-10 w-10 mb-6 ${idea.color}`} />
                <h3 className="text-2xl font-bold mb-4">{idea.title}</h3>
                
                <div className="space-y-4 text-sm mt-6">
                  <div>
                    <span className="font-semibold block text-foreground/80 mb-1">Problem it solves:</span>
                    <p className="text-muted-foreground">{idea.problem}</p>
                  </div>
                  <div>
                    <span className="font-semibold block text-foreground/80 mb-1">Target Users:</span>
                    <p className="text-muted-foreground">{idea.target}</p>
                  </div>
                  <div>
                    <span className="font-semibold block text-foreground/80 mb-1">Arch & Tech:</span>
                    <p className="text-muted-foreground font-mono text-xs p-2 bg-background/50 rounded-md border border-white/5">{idea.tech}</p>
                  </div>
                  <div>
                    <span className="font-semibold block text-green-400 mb-1">Monetization:</span>
                    <p className="text-muted-foreground">{idea.monetization}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
