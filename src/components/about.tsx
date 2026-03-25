"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, BrainCircuit, Rocket, User, MapPin, GraduationCap, Heart } from "lucide-react";

const tabs = [
  { id: "general", label: "General", icon: User },
  { id: "highlights", label: "Highlights", icon: Heart },
  { id: "education", label: "Education", icon: GraduationCap },
];

const tabContentVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring" as const, stiffness: 350, damping: 30 },
      opacity: { duration: 0.2 },
      scale: { duration: 0.2 },
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
    scale: 0.98,
    transition: {
      x: { type: "spring" as const, stiffness: 350, damping: 30 },
      opacity: { duration: 0.15 },
    },
  }),
};

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("general");
  const [direction, setDirection] = useState(0);

  const handleTabChange = (tabId: string) => {
    const currentIndex = tabs.findIndex(t => t.id === activeTab);
    const newIndex = tabs.findIndex(t => t.id === tabId);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveTab(tabId);
  };

  return (
    <div className="h-full flex flex-col bg-[#f5f5f5]">
      {/* macOS Toolbar */}
      <div className="macos-toolbar justify-center">
        <div className="macos-segmented-control relative">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`macos-segment flex items-center gap-1.5 relative z-10 ${activeTab === tab.id ? "active" : ""}`}
            >
              <tab.icon className="w-3 h-3" />
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="about-tab-indicator"
                  className="absolute inset-0 bg-white rounded-md shadow-sm"
                  style={{ zIndex: -1, boxShadow: "0 1px 3px rgba(0,0,0,0.08), 0 0 0 0.5px rgba(0,0,0,0.04)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-auto p-6 relative">
        <AnimatePresence mode="popLayout" custom={direction}>
          {activeTab === "general" && (
            <motion.div
              key="general"
              custom={direction}
              variants={tabContentVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {/* Profile Card */}
              <motion.div 
                className="macos-card flex items-center gap-6 mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#64b5f6] to-[#1976d2] flex items-center justify-center flex-shrink-0 shadow-md">
                  <User className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-semibold text-[#1d1d1f] tracking-tight">Sahil Maliya</h2>
                  <p className="text-[14px] text-[#86868b] mt-0.5">Full Stack Developer + AI Engineer</p>
                  <div className="flex items-center gap-1.5 mt-2 text-[12px] text-[#86868b]">
                    <MapPin className="w-3 h-3" />
                    <span>India</span>
                    <span className="mx-1">·</span>
                    <span className="macos-badge">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Available
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.p 
                className="text-[13px] text-[#86868b] leading-relaxed mb-6 macos-card"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                I&apos;m a Computer Engineering student dedicated to solving complex problems through elegant code and intelligent systems. I specialize in building robust backend architectures and integrating AI into real-world applications.
              </motion.p>

              {/* Feature Cards */}
              <div className="grid gap-3 md:grid-cols-3">
                {[
                  {
                    icon: Terminal,
                    title: "Backend Mindset",
                    desc: "Robust, scalable architectures using Spring Boot, Reactive WebFlux, and microservices.",
                    color: "bg-[#007aff]",
                  },
                  {
                    icon: BrainCircuit,
                    title: "AI Integration",
                    desc: "RAG systems with Qdrant, Spring AI tool integration, and dynamic chat memory.",
                    color: "bg-[#af52de]",
                  },
                  {
                    icon: Rocket,
                    title: "Problem Solver",
                    desc: "Clean system design focused on end-user impact and platform scalability.",
                    color: "bg-[#ff9500]",
                  }
                ].map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.12 + idx * 0.08, type: "spring", stiffness: 300, damping: 25 }}
                    className="macos-card group hover:shadow-md transition-all duration-200 cursor-default"
                  >
                    <div className={`w-9 h-9 rounded-xl ${feature.color} flex items-center justify-center mb-3 shadow-sm`}>
                      <feature.icon className="h-4.5 w-4.5 text-white" />
                    </div>
                    <h3 className="text-[14px] font-semibold text-[#1d1d1f] mb-1.5">{feature.title}</h3>
                    <p className="text-[12px] text-[#86868b] leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "highlights" && (
            <motion.div
              key="highlights"
              custom={direction}
              variants={tabContentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="space-y-3"
            >
              {[
                { label: "Spring Boot & Microservices", value: "Expert-level architecture design" },
                { label: "AI & RAG Systems", value: "Production-ready LLM integrations" },
                { label: "Frontend Frameworks", value: "React, Vue, Angular, Next.js" },
                { label: "Real-time Systems", value: "WebSockets, Redis PubSub, Event-Driven" },
                { label: "Infrastructure", value: "Docker, Linux, PostgreSQL, MongoDB" },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20, scale: 0.97 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: idx * 0.06, type: "spring", stiffness: 350, damping: 25 }}
                  className="macos-card flex items-center justify-between gap-4"
                >
                  <span className="text-[13px] font-medium text-[#1d1d1f]">{item.label}</span>
                  <span className="text-[12px] text-[#86868b] text-right">{item.value}</span>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "education" && (
            <motion.div
              key="education"
              custom={direction}
              variants={tabContentVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <motion.div 
                className="macos-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05, type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#34c759] to-[#30a14e] flex items-center justify-center shadow-sm">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold text-[#1d1d1f]">Computer Engineering</h3>
                    <p className="text-[13px] text-[#86868b]">Bachelor&apos;s Degree · In Progress</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-[#e5e5e5]">
                  <p className="text-[13px] text-[#86868b] leading-relaxed">
                    Focused on distributed systems, artificial intelligence, and modern software architecture patterns. Active contributor to open-source projects and hackathons.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
