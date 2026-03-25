"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { User, Terminal, Briefcase, Mail, Code } from "lucide-react";
import { cn } from "@/lib/utils";

interface DockIconProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  mouseX: any;
  isActive: boolean;
}

function DockIcon({ icon, label, onClick, mouseX, isActive }: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [48, 72, 48]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const [isBouncing, setIsBouncing] = useState(false);

  const handleClick = () => {
    setIsBouncing(true);
    onClick();
    setTimeout(() => setIsBouncing(false), 600);
  };

  return (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      onClick={handleClick}
      animate={isBouncing ? {
        y: [0, -20, 0, -10, 0],
        transition: { duration: 0.5, ease: "easeInOut" }
      } : { y: 0 }}
      className="relative flex items-center justify-center cursor-pointer group"
    >
      <div className={cn(
        "w-full h-full overflow-hidden flex items-center justify-center transition-all",
        "rounded-[22.37%]", // macOS squircle
        "shadow-[0_2px_8px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.25)]",
        "hover:shadow-[0_4px_16px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.3)]",
        "hover:brightness-105",
      )}>
        {icon}
      </div>

      {isActive && (
        <motion.div 
          className="absolute -bottom-1.5 w-1 h-1 rounded-full bg-[#1d1d1f]/50"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 25 }}
        />
      )}

      {/* Tooltip */}
      <div className="absolute -top-9 opacity-0 group-hover:opacity-100 transition-opacity bg-[#333] text-white px-3 py-1 rounded-md text-[12px] font-medium pointer-events-none whitespace-nowrap shadow-lg"
        style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
      >
        {label}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-[#333] rotate-45" />
      </div>
    </motion.div>
  );
}

function DockSeparator() {
  return (
    <div className="w-px h-8 bg-white/20 mx-1 self-center" />
  );
}

export const APPS = [
  { id: "about", label: "About Me", icon: <div className="w-full h-full bg-gradient-to-br from-[#64b5f6] to-[#1976d2] flex items-center justify-center"><User className="w-[45%] h-[45%] text-white drop-shadow-sm" /></div> },
  { id: "skills", label: "Skills", icon: <div className="w-full h-full bg-gradient-to-br from-[#ce93d8] to-[#9c27b0] flex items-center justify-center"><Code className="w-[45%] h-[45%] text-white drop-shadow-sm" /></div> },
  { id: "projects", label: "Projects", icon: <div className="w-full h-full bg-gradient-to-br from-[#ffb74d] to-[#f57c00] flex items-center justify-center"><Terminal className="w-[45%] h-[45%] text-white drop-shadow-sm" /></div> },
  { id: "experience", label: "Experience", icon: <div className="w-full h-full bg-gradient-to-br from-[#81c784] to-[#388e3c] flex items-center justify-center"><Briefcase className="w-[45%] h-[45%] text-white drop-shadow-sm" /></div> },
  { id: "contact", label: "Contact", icon: <div className="w-full h-full bg-gradient-to-br from-[#4dd0e1] to-[#0097a7] flex items-center justify-center"><Mail className="w-[45%] h-[45%] text-white drop-shadow-sm" /></div> },
];

export function Dock({ openApps, activeApp, onOpenApp }: { openApps: string[], activeApp: string | null, onOpenApp: (id: string) => void }) {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed bottom-2 left-1/2 -translate-x-1/2 z-[100]">
      {/* Dock reflection glow */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-white/8 blur-lg rounded-full" />
      
      <motion.div 
        className="flex items-end gap-2 px-3 pb-2 pt-2 rounded-2xl bg-white/20 backdrop-blur-2xl shadow-[0_0_0_0.5px_rgba(255,255,255,0.3),0_10px_40px_rgba(0,0,0,0.15)]"
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        {APPS.map((app, index) => (
          <div key={app.id} className="flex items-end">
            <DockIcon
              icon={app.icon}
              label={app.label}
              onClick={() => onOpenApp(app.id)}
              mouseX={mouseX}
              isActive={openApps.includes(app.id)}
            />
            {/* Separator after Projects (index 2) */}
            {index === 2 && <DockSeparator />}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
