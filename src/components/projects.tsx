"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Database, Layers, ShieldCheck, Sparkles, LayoutGrid, List, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "TaskBook",
    description: "Real-time task management system featuring live chat, customizable workflows, templates, and multi-user collaboration.",
    problem: "Teams struggled with scattered context between chat apps and task boards.",
    solution: "Unified real-time interface using WebSockets for instantaneous updates across both domains.",
    tech: ["React", "Spring Boot", "Redis", "WebSockets"],
    icon: Layers,
    color: "from-[#64b5f6] to-[#1565c0]",
  },
  {
    title: "Doctor Consultation",
    description: "End-to-end healthcare platform with video consultation, role-based access, document verification, and course selling.",
    problem: "Patients and doctors needed a secure, verified environment for remote tele-medicine.",
    solution: "Implemented secure WebRTC video, strict role-based access control, and automated document verification workflows.",
    tech: ["Next.js", "Java 17", "WebRTC", "PostgreSQL"],
    icon: ShieldCheck,
    color: "from-[#81c784] to-[#2e7d32]",
  },
  {
    title: "AI Chat & RAG",
    description: "Enterprise-grade AI chat integrations using Spring AI, vector databases, and semantic search capabilities.",
    problem: "LLMs lacked domain-specific knowledge and conversational memory.",
    solution: "Built a RAG pipeline using Qdrant and Redis for stateful context memory.",
    tech: ["Spring AI", "Qdrant", "Redis", "OpenAI"],
    icon: Sparkles,
    color: "from-[#ce93d8] to-[#7b1fa2]",
  },
  {
    title: "E-commerce System",
    description: "Scalable MERN stack e-commerce platform with Stripe integration and comprehensive admin analytics dashboard.",
    problem: "Needed a performant, SEO-friendly storefront with complex order state management.",
    solution: "Built a dynamic React frontend with a robust Express backend and MongoDB aggregation pipelines for analytics.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Stripe"],
    icon: Database,
    color: "from-[#ffb74d] to-[#e65100]",
  }
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [viewMode, setViewMode] = useState<"detail" | "grid">("detail");
  const project = projects[selectedProject];

  return (
    <div className="h-full flex flex-col bg-[#f5f5f5]">
      {/* Finder Toolbar */}
      <div className="macos-toolbar justify-between">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setViewMode("detail")}
            className={`p-1.5 rounded-md transition-colors ${viewMode === "detail" ? "bg-black/8" : "hover:bg-black/5"}`}
          >
            <List className="w-3.5 h-3.5 text-[#1d1d1f]/70" />
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`p-1.5 rounded-md transition-colors ${viewMode === "grid" ? "bg-black/8" : "hover:bg-black/5"}`}
          >
            <LayoutGrid className="w-3.5 h-3.5 text-[#1d1d1f]/70" />
          </button>
        </div>
        <span className="text-[12px] text-[#86868b]">{projects.length} items</span>
      </div>

      {viewMode === "detail" ? (
        <div className="flex flex-1 overflow-hidden">
          {/* Finder Sidebar */}
          <div className="w-[200px] min-w-[200px] macos-sidebar overflow-auto py-2 px-2">
            <div className="text-[10px] font-semibold text-[#86868b] uppercase tracking-wider px-3 py-1.5 mb-1">
              Favorites
            </div>
            {projects.map((p, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedProject(idx)}
                className={`macos-sidebar-item w-full ${selectedProject === idx ? "active" : ""}`}
              >
                <p.icon className="w-4 h-4 flex-shrink-0" />
                <span className="truncate text-[13px]">{p.title}</span>
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-auto p-5" style={{ borderLeft: "1px solid hsl(220 13% 88%)" }}>
            <motion.div
              key={selectedProject}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15 }}
            >
              {/* Project Header */}
              <div className="flex items-start gap-4 mb-5">
                <div className={`w-14 h-14 rounded-[22.37%] bg-gradient-to-br ${project.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                  <project.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-[20px] font-semibold text-[#1d1d1f] tracking-tight">{project.title}</h2>
                  <p className="text-[13px] text-[#86868b] mt-1 leading-relaxed">{project.description}</p>
                  <div className="flex gap-2 mt-3">
                    <a href="#" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#007aff] text-white text-[12px] font-medium hover:bg-[#0066d6] transition-colors shadow-sm">
                      <ExternalLink className="w-3 h-3" />
                      View Live
                    </a>
                    <a href="#" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white text-[#1d1d1f] text-[12px] font-medium hover:bg-[#f0f0f0] transition-colors border border-[#d5d5d5] shadow-sm">
                      <GitBranch className="w-3 h-3" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Problem / Solution */}
              <div className="space-y-3">
                <div className="macos-card">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#ff3b30]" />
                    <span className="text-[12px] font-semibold text-[#1d1d1f] uppercase tracking-wider">Problem</span>
                  </div>
                  <p className="text-[13px] text-[#86868b] leading-relaxed">{project.problem}</p>
                </div>
                <div className="macos-card">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#34c759]" />
                    <span className="text-[12px] font-semibold text-[#1d1d1f] uppercase tracking-wider">Solution</span>
                  </div>
                  <p className="text-[13px] text-[#86868b] leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mt-4">
                <div className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider mb-2">Tech Stack</div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="macos-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ) : (
        /* Grid View */
        <div className="flex-1 overflow-auto p-5">
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.06 }}
                onClick={() => { setSelectedProject(idx); setViewMode("detail"); }}
                className="macos-card cursor-pointer group hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-[22.37%] bg-gradient-to-br ${p.color} flex items-center justify-center shadow-sm`}>
                    <p.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[14px] font-semibold text-[#1d1d1f]">{p.title}</h3>
                    <p className="text-[11px] text-[#86868b] truncate">{p.tech.join(" · ")}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#c7c7cc] group-hover:text-[#007aff] transition-colors" />
                </div>
                <p className="text-[12px] text-[#86868b] leading-relaxed line-clamp-2">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
