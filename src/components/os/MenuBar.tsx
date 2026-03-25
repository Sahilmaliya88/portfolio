"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Wifi, BatteryMedium, Search, Settings } from "lucide-react";

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 814 1000" fill="currentColor">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57.8-155.5-127.4c-58.3-81.4-105.6-207.6-105.6-327.4 0-192.8 125.3-295.3 248.7-295.3 65.6 0 120.1 43.3 161.4 43.3 39.4 0 100.8-46 175.1-46 28.2 0 130.1 2.6 197 99.8zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.2 32.4-55.1 83.6-55.1 135.5 0 7.8.7 15.6 1.3 18.1 2.6.3 6.5 1 10.4 1 45.3 0 103-30.6 139.3-71z"/>
    </svg>
  );
}

export function MenuBar({ activeApp }: { activeApp: string }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[25px] bg-white/50 backdrop-blur-2xl flex items-center justify-between px-4 text-[13px] font-medium z-[100] text-[#1d1d1f] select-none"
      style={{ borderBottom: "0.5px solid rgba(0,0,0,0.08)" }}
    >
      <div className="flex items-center gap-1">
        <div className="flex items-center hover:bg-black/5 px-2 py-0.5 rounded cursor-pointer transition-colors -ml-1">
          <AppleLogo className="h-[14px] w-[14px]" />
        </div>
        <div className="font-semibold hover:bg-black/5 px-2 py-0.5 rounded cursor-pointer transition-colors">
          {activeApp || "Finder"}
        </div>
        <div className="hidden sm:flex items-center gap-0">
          {["File", "Edit", "View", "Go", "Window", "Help"].map(item => (
            <span key={item} className="hover:bg-black/5 px-2 py-0.5 rounded cursor-pointer transition-colors text-[#1d1d1f]/90">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Settings className="h-[14px] w-[14px] opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
        <Search className="h-[14px] w-[14px] opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
        <Wifi className="h-[15px] w-[15px] opacity-80" />
        <BatteryMedium className="h-[16px] w-[16px] opacity-80" />
        <div className="text-[13px] font-medium opacity-90 tabular-nums">
          {format(time, "eee MMM d  h:mm a")}
        </div>
      </div>
    </div>
  );
}
