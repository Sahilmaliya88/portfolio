"use client";

import * as React from "react";
import { Search, Command, FileText, Briefcase, Mail, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const commands = [
    { icon: FileText, label: "About Me", href: "#about" },
    { icon: Briefcase, label: "Projects", href: "#projects" },
    { icon: Sparkles, label: "SaaS Vision", href: "#vision" },
    { icon: Mail, label: "Contact", href: "#contact" },
  ];

  const filteredCommands = commands.filter((cmd) => 
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed left-1/2 top-[20%] z-50 w-full max-w-lg -translate-x-1/2 overflow-hidden rounded-xl border border-white/10 bg-background/95 shadow-2xl glass-panel"
          >
            <div className="flex items-center border-b border-white/10 px-4">
              <Search className="mr-3 h-5 w-5 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                className="flex h-12 w-full bg-transparent py-4 text-sm outline-none placeholder:text-muted-foreground"
                placeholder="Type a command or search..."
              />
              <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-white/10 bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">ESC</span>
              </kbd>
            </div>
            
            <div className="max-h-[300px] overflow-y-auto p-2">
              {filteredCommands.length === 0 ? (
                <div className="py-6 text-center text-sm text-muted-foreground p-4">
                  No results found.
                </div>
              ) : (
                <div className="flex flex-col gap-1">
                   {filteredCommands.map((cmd, i) => (
                    <a
                      key={i}
                      href={cmd.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm hover:bg-white/10 text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
                    >
                      <cmd.icon className="h-4 w-4 text-primary" />
                      {cmd.label}
                    </a>
                   ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
