"use client";

import { useState } from "react";
import { MenuBar } from "@/components/os/MenuBar";
import { Dock, APPS } from "@/components/os/Dock";
import { OSWindow } from "@/components/os/Window";
import { motion, AnimatePresence } from "framer-motion";

import { AboutSection } from "@/components/about";
import { SkillsSection } from "@/components/skills";
import { ProjectsSection } from "@/components/projects";
import { ContactSection } from "@/components/contact";
import { ExperienceSection } from "@/components/experience";

export default function Home() {
  const [openApps, setOpenApps] = useState<string[]>([]);
  const [activeApp, setActiveApp] = useState<string | null>(null);

  const handleOpenApp = (id: string) => {
    if (!openApps.includes(id)) {
      setOpenApps([...openApps, id]);
    }
    setActiveApp(id);
  };

  const handleCloseApp = (id: string) => {
    setOpenApps(openApps.filter((appId) => appId !== id));
    if (activeApp === id) {
      const remainingApps = openApps.filter((appId) => appId !== id);
      setActiveApp(remainingApps.length > 0 ? remainingApps[remainingApps.length - 1] : null);
    }
  };

  const handleFocusApp = (id: string) => {
    setActiveApp(id);
  };

  return (
    <main className="h-screen w-screen overflow-hidden text-foreground selection:bg-primary/30 relative">
      <MenuBar activeApp={activeApp ? APPS.find(a => a.id === activeApp)?.label || "Finder" : "Finder"} />
      
      {/* Desktop Area */}
      <div 
        className="absolute inset-0 pt-[25px] pb-20 z-0 p-4 flex flex-col items-end gap-4 overflow-hidden"
        onClick={() => setActiveApp(null)}
      >
        <div className="flex flex-col flex-wrap h-full gap-6 justify-start content-end pr-2 pt-3">
          {APPS.map((app, index) => (
            <motion.div 
              key={app.id} 
              className="flex flex-col items-center gap-1 w-[76px] cursor-pointer group select-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20, 
                delay: index * 0.08 
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onDoubleClick={(e) => {
                e.stopPropagation();
                handleOpenApp(app.id);
              }}
            >
              <div className="w-[60px] h-[60px] rounded-[22.37%] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.2)] flex items-center justify-center group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.25)] transition-shadow">
                {app.icon}
              </div>
              <span className="text-white text-[11px] font-medium px-1.5 py-0.5 rounded-md text-center leading-tight [text-shadow:0_1px_3px_rgba(0,0,0,0.6)] group-hover:bg-[#007aff]/90 transition-colors">
                {app.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Windows */}
      <AnimatePresence>
        {openApps.includes("about") && (
          <OSWindow
            id="about"
            title="About Me — System Preferences"
            isOpen={true}
            isActive={activeApp === "about"}
            onClose={() => handleCloseApp("about")}
            onFocus={() => handleFocusApp("about")}
            defaultPosition={{ x: 120, y: 60 }}
            defaultSize={{ width: 780, height: 560 }}
          >
            <AboutSection />
          </OSWindow>
        )}

        {openApps.includes("skills") && (
          <OSWindow
            id="skills"
            title="Skills — Launchpad"
            isOpen={true}
            isActive={activeApp === "skills"}
            onClose={() => handleCloseApp("skills")}
            onFocus={() => handleFocusApp("skills")}
            defaultPosition={{ x: 160, y: 80 }}
            defaultSize={{ width: 850, height: 620 }}
          >
            <SkillsSection />
          </OSWindow>
        )}

        {openApps.includes("projects") && (
          <OSWindow
            id="projects"
            title="Projects — Finder"
            isOpen={true}
            isActive={activeApp === "projects"}
            onClose={() => handleCloseApp("projects")}
            onFocus={() => handleFocusApp("projects")}
            defaultPosition={{ x: 100, y: 50 }}
            defaultSize={{ width: 920, height: 600 }}
          >
            <ProjectsSection />
          </OSWindow>
        )}

        {openApps.includes("experience") && (
          <OSWindow
            id="experience"
            title="Experience — Calendar"
            isOpen={true}
            isActive={activeApp === "experience"}
            onClose={() => handleCloseApp("experience")}
            onFocus={() => handleFocusApp("experience")}
            defaultPosition={{ x: 200, y: 70 }}
            defaultSize={{ width: 800, height: 620 }}
          >
            <ExperienceSection />
          </OSWindow>
        )}

        {openApps.includes("contact") && (
          <OSWindow
            id="contact"
            title="Contact — Mail"
            isOpen={true}
            isActive={activeApp === "contact"}
            onClose={() => handleCloseApp("contact")}
            onFocus={() => handleFocusApp("contact")}
            defaultPosition={{ x: 250, y: 90 }}
            defaultSize={{ width: 720, height: 560 }}
          >
            <ContactSection />
          </OSWindow>
        )}
      </AnimatePresence>

      <Dock 
        openApps={openApps} 
        activeApp={activeApp} 
        onOpenApp={handleOpenApp} 
      />
    </main>
  );
}
