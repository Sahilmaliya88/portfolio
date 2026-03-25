"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, MapPin, ChevronRight } from "lucide-react";

const experiences = [
 {
  role: "Frontend Developer",
  company: "Vivansh Infotech",
  period: "2025 - Present",
  location: "Onsite",
  color: "bg-[#007aff]",
  highlights: [
    "Developed responsive and high-performance web applications using React.js and Vue.js.",
    "Built reusable UI components and optimized rendering performance for scalable frontend architectures.",
    "Implemented form handling, validation, and state management using React Hook Form, Zustand, and modern best practices.",
    "Worked on cross-platform mobile applications using React Native.",
    "Integrated REST APIs and handled real-time updates using WebSockets for dynamic user experiences.",
    "Collaborated with backend teams and designers in agile environments to deliver user-centric features on time."
  ]
}
];

export function ExperienceSection() {
  return (
    <div className="h-full flex flex-col bg-[#f5f5f5]">
      {/* macOS Toolbar */}
      <div className="macos-toolbar">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[#ff3b30]" />
          <span className="text-[13px] font-semibold text-[#1d1d1f]">Career Timeline</span>
        </div>
        <div className="flex-1" />
        <span className="text-[12px] text-[#86868b]">{experiences.length} position{experiences.length !== 1 ? "s" : ""}</span>
      </div>

      <div className="flex-1 overflow-auto p-6">
        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-6 bottom-6 w-[2px] bg-[#e5e5e5] rounded-full" />
          
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative flex gap-4 mb-6"
            >
              {/* Timeline Dot */}
              <div className="relative z-10 flex-shrink-0">
                <div className={`w-10 h-10 rounded-full ${exp.color} flex items-center justify-center shadow-md`}>
                  <Building2 className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Experience Card */}
              <div className="flex-1 macos-card">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#1d1d1f] tracking-tight">{exp.role}</h3>
                    <p className="text-[14px] text-[#007aff] font-medium mt-0.5">{exp.company}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="macos-badge">Current</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4 text-[12px] text-[#86868b]">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </div>
                </div>

                <div className="border-t border-[#e5e5e5] pt-3 space-y-0">
                  {exp.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.15 + i * 0.05 }}
                      className="flex items-start gap-2.5 py-2 group"
                    >
                      <ChevronRight className="w-3 h-3 text-[#007aff] mt-0.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      <p className="text-[13px] text-[#3d3d3d] leading-relaxed">{highlight}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          {[
            { label: "Duration", value: "1+ Years" },
            { label: "Focus Area", value: "Frontend + AI" },
            { label: "Architecture", value: "Scalable Web Apps and Mobile Apps" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.08 }}
              className="macos-card text-center"
            >
              <p className="text-[18px] font-bold text-[#1d1d1f]">{stat.value}</p>
              <p className="text-[11px] text-[#86868b] mt-0.5 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
