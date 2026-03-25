"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useState, useCallback, useEffect, useRef } from "react";
import { Maximize2, Minus, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface WindowProps {
  id: string;
  title: string;
  isOpen: boolean;
  isActive: boolean;
  onClose: () => void;
  onFocus: () => void;
  children: ReactNode;
  defaultPosition?: { x: number; y: number };
  defaultSize?: { width: number | string; height: number | string };
}

export function OSWindow({
  id,
  title,
  isOpen,
  isActive,
  onClose,
  onFocus,
  children,
  defaultPosition = { x: 50, y: 50 },
  defaultSize = { width: 800, height: 600 }
}: WindowProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimizing, setIsMinimizing] = useState(false);
  const prevActiveRef = useRef(isActive);

  // Restore when isActive transitions false → true while minimized (dock click)
  useEffect(() => {
    if (isActive && !prevActiveRef.current && isMinimized) {
      setIsMinimized(false);
    }
    prevActiveRef.current = isActive;
  }, [isActive, isMinimized]);

  const handleMinimize = useCallback(() => {
    setIsMinimizing(true);
    setTimeout(() => {
      setIsMinimized(true);
      setIsMinimizing(false);
    }, 400);
  }, []);

  const handleRestore = useCallback(() => {
    setIsMinimized(false);
  }, []);

  if (!isOpen) return null;

  // When minimized, show nothing (window is "in the dock")
  if (isMinimized && !isMinimizing) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`window-${id}-${isMinimized ? "min" : "open"}`}
        id={`window-${id}`}
        drag={!isMaximized && !isMinimizing}
        dragMomentum={false}
        initial={{ 
          opacity: 0, 
          scale: 0.88, 
          y: 30,
          ...(!isMaximized && defaultPosition) 
        }}
        animate={isMinimizing ? {
          // macOS "genie" minimize: scale down and move to dock position
          opacity: 0,
          scale: 0.15,
          y: 800,
          x: 460,
          transition: { 
            duration: 0.4, 
            ease: [0.4, 0, 0.2, 1],
          }
        } : { 
          opacity: 1, 
          scale: 1, 
          zIndex: isActive ? 50 : 10,
          ...(isMaximized 
            ? { x: 0, y: 28, width: "100%", height: "calc(100vh - 28px)" } 
            : defaultPosition
          ),
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 28,
            mass: 0.8,
          }
        }}
        exit={{ 
          opacity: 0, 
          scale: 0.88, 
          y: 20,
          transition: { duration: 0.2, ease: "easeIn" }
        }}
        style={!isMaximized ? defaultSize : {}}
        onMouseDown={onFocus}
        className={cn(
          "absolute flex flex-col overflow-hidden bg-[#f5f5f5]/95 backdrop-blur-[60px]",
          isMaximized ? "rounded-none" : "rounded-[10px]",
          isActive 
            ? "shadow-[0_10px_40px_rgba(0,0,0,0.25),0_0_0_0.5px_rgba(0,0,0,0.12)]" 
            : "shadow-[0_5px_20px_rgba(0,0,0,0.12),0_0_0_0.5px_rgba(0,0,0,0.08)] opacity-[0.97]"
        )}
      >
        {/* macOS Title Bar — 28px */}
        <div 
          className={cn(
            "window-drag-handle h-[28px] min-h-[28px] flex items-center px-3 cursor-default select-none relative",
            isActive 
              ? "bg-gradient-to-b from-[#e8e8e8] to-[#d4d4d4]" 
              : "bg-[#f6f6f6]"
          )}
          style={{ borderBottom: "1px solid rgba(0,0,0,0.09)" }}
          onDoubleClick={() => setIsMaximized(!isMaximized)}
        >
          {/* Traffic Light Buttons */}
          <div className="flex items-center gap-[6px] group/btns z-10">
            <button 
              onClick={(e) => { e.stopPropagation(); onClose(); }}
              className={cn(
                "w-3 h-3 rounded-full flex items-center justify-center transition-colors",
                isActive ? "bg-[#ff5f57] border border-[#e0443e]" : "bg-[#ddd] border border-[#ccc]"
              )}
            >
              <X className="w-[7px] h-[7px] text-[#4d0000] opacity-0 group-hover/btns:opacity-100 transition-opacity stroke-[2.5]" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); handleMinimize(); }}
              className={cn(
                "w-3 h-3 rounded-full flex items-center justify-center transition-colors",
                isActive ? "bg-[#febc2e] border border-[#e1a116]" : "bg-[#ddd] border border-[#ccc]"
              )}
            >
              <Minus className="w-[7px] h-[7px] text-[#995700] opacity-0 group-hover/btns:opacity-100 transition-opacity stroke-[2.5]" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); setIsMaximized(!isMaximized); }}
              className={cn(
                "w-3 h-3 rounded-full flex items-center justify-center transition-colors",
                isActive ? "bg-[#28c840] border border-[#17ab2a]" : "bg-[#ddd] border border-[#ccc]"
              )}
            >
              <Maximize2 className="w-[6px] h-[6px] text-[#006500] opacity-0 group-hover/btns:opacity-100 transition-opacity stroke-[2.5]" />
            </button>
          </div>
          
          {/* Centered Title */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className={cn(
              "text-[13px] font-medium tracking-[-0.01em]",
              isActive ? "text-[#4d4d4d]" : "text-[#999]"
            )}>
              {title}
            </span>
          </div>
        </div>

        {/* Window Content */}
        <div className="flex-1 overflow-auto bg-[#f5f5f5] relative">
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
