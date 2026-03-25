"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    tech: [
      { name: "React", color: "from-[#61dafb] to-[#087ea4]" },
      { name: "React Native", color: "from-[#61dafb] to-[#087ea4]" },
      { name: "Vue", color: "from-[#42b883] to-[#35495e]" },
      { name: "Angular", color: "from-[#dd0031] to-[#c3002f]" },
      { name: "Next.js", color: "from-[#333] to-[#000]" },
      { name: "Tailwind CSS", color: "from-[#38bdf8] to-[#0284c7]" },
    ],
    dot: "bg-[#007aff]"
  },
  {
    category: "Backend",
    tech: [
      { name: "Spring Boot", color: "from-[#6db33f] to-[#3d8b37]" },
      { name: "Microservices", color: "from-[#4caf50] to-[#2e7d32]" },
      { name: "Event-Driven", color: "from-[#66bb6a] to-[#388e3c]" },
      { name: "REST APIs", color: "from-[#8bc34a] to-[#558b2f]" },
    ],
    dot: "bg-[#34c759]"
  },
  {
    category: "Database & Infra",
    tech: [
      { name: "MongoDB", color: "from-[#4caf50] to-[#3d8b37]" },
      { name: "Redis", color: "from-[#dc382d] to-[#a41e11]" },
      { name: "Qdrant", color: "from-[#7c4dff] to-[#651fff]" },
      { name: "PostgreSQL", color: "from-[#336791] to-[#1f4e6d]" },
      { name: "Docker", color: "from-[#2496ed] to-[#1976d2]" },
      { name: "Linux", color: "from-[#fcc624] to-[#e0a800]" },
    ],
    dot: "bg-[#ff9500]"
  },
  {
    category: "AI / ML",
    tech: [
      { name: "RAG Systems", color: "from-[#e040fb] to-[#aa00ff]" },
      { name: "Spring AI", color: "from-[#6db33f] to-[#aa00ff]" },
      { name: "Embeddings", color: "from-[#ce93d8] to-[#ab47bc]" },
      { name: "Chat Memory", color: "from-[#ba68c8] to-[#7b1fa2]" },
      { name: "AI Agents", color: "from-[#ea80fc] to-[#d500f9]" },
      { name: "LLMs", color: "from-[#f48fb1] to-[#ec407a]" },
    ],
    dot: "bg-[#af52de]"
  }
];

const gridVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring" as const, stiffness: 300, damping: 28 },
      opacity: { duration: 0.2 },
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -80 : 80,
    opacity: 0,
    transition: {
      x: { type: "spring" as const, stiffness: 300, damping: 28 },
      opacity: { duration: 0.12 },
    },
  }),
};

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleCategoryChange = (idx: number) => {
    setDirection(idx > activeCategory ? 1 : -1);
    setActiveCategory(idx);
  };

  return (
    <div className="h-full flex flex-col bg-[#f5f5f5]">
      {/* macOS Toolbar with segmented control */}
      <div className="macos-toolbar justify-center">
        <div className="macos-segmented-control relative">
          {skills.map((group, idx) => (
            <button
              key={idx}
              onClick={() => handleCategoryChange(idx)}
              className={`macos-segment relative z-10 ${activeCategory === idx ? "active" : ""}`}
            >
              {group.category}
              {activeCategory === idx && (
                <motion.div
                  layoutId="skills-tab-indicator"
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
          <motion.div
            key={activeCategory}
            custom={direction}
            variants={gridVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {/* Category Header */}
            <motion.div 
              className="flex items-center gap-2.5 mb-5"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              <div className={`w-3 h-3 rounded-full ${skills[activeCategory].dot}`} />
              <h3 className="text-[17px] font-semibold text-[#1d1d1f] tracking-tight">
                {skills[activeCategory].category}
              </h3>
              <span className="text-[12px] text-[#86868b] ml-1">
                {skills[activeCategory].tech.length} technologies
              </span>
            </motion.div>

            {/* Launchpad-style Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
              {skills[activeCategory].tech.map((tech, i) => (
                <motion.div
                  key={`${activeCategory}-${i}`}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    delay: i * 0.05, 
                    type: "spring", 
                    stiffness: 350, 
                    damping: 20 
                  }}
                  className="flex flex-col items-center gap-2 cursor-default group"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, y: -6, rotate: [-1, 1, 0] }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className={`w-14 h-14 rounded-[22.37%] bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.2)]`}
                  >
                    <span className="text-white font-bold text-[13px] drop-shadow-sm select-none">
                      {tech.name.slice(0, 2).toUpperCase()}
                    </span>
                  </motion.div>
                  <span className="text-[11px] text-[#1d1d1f] font-medium text-center leading-tight group-hover:text-[#007aff] transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All categories overview */}
        <div className="mt-8 pt-6 border-t border-[#e5e5e5]">
          <h4 className="text-[13px] font-semibold text-[#1d1d1f] mb-4">All Categories</h4>
          <div className="grid gap-2 md:grid-cols-2">
            {skills.map((group, idx) => (
              <motion.button
                key={idx}
                onClick={() => handleCategoryChange(idx)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`macos-card flex items-center gap-3 text-left transition-all duration-200 cursor-pointer ${
                  activeCategory === idx ? "ring-2 ring-[#007aff] ring-offset-1" : "hover:shadow-md"
                }`}
              >
                <div className={`w-2 h-8 rounded-full ${group.dot}`} />
                <div>
                  <p className="text-[13px] font-medium text-[#1d1d1f]">{group.category}</p>
                  <p className="text-[11px] text-[#86868b]">{group.tech.length} skills</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
