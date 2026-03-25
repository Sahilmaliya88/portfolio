"use client";

import { motion } from "framer-motion";
import { Send, GitBranch, Link, Globe, FileText } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [subject, setSubject] = useState("Hello from your portfolio!");
  const [body, setBody] = useState("");

  return (
    <div className="h-full flex flex-col bg-[#f5f5f5]">
      {/* Mail.app Toolbar */}
      <div className="macos-toolbar justify-between">
        <div className="flex items-center gap-2">
          <button className="p-1.5 rounded-md hover:bg-black/5 transition-colors" title="Attach">
            <FileText className="w-4 h-4 text-[#1d1d1f]/60" />
          </button>
        </div>
        <span className="text-[13px] font-semibold text-[#1d1d1f]">New Message</span>
        <div className="flex items-center gap-2">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-md hover:bg-black/5 transition-colors" title="GitHub">
            <GitBranch className="w-4 h-4 text-[#1d1d1f]/60" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-md hover:bg-black/5 transition-colors" title="LinkedIn">
            <Link className="w-4 h-4 text-[#1d1d1f]/60" />
          </a>
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-white overflow-hidden">
        {/* Mail Fields */}
        <div className="macos-field">
          <span className="macos-field-label">To:</span>
          <span className="text-[13px] text-[#1d1d1f]">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#e8f0fe] text-[#1a73e8] rounded-full text-[12px] font-medium">
              sayhello@sahilmaliya.dev
            </span>
          </span>
        </div>
        <div className="macos-field">
          <span className="macos-field-label">Cc:</span>
          <span className="text-[12px] text-[#86868b] italic">Add collaborators</span>
        </div>
        <div className="macos-field">
          <span className="macos-field-label">Subject:</span>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="flex-1 text-[13px] text-[#1d1d1f] bg-transparent outline-none placeholder:text-[#c7c7cc]"
            placeholder="Subject"
          />
        </div>

        {/* Mail Body */}
        <div className="flex-1 p-4 overflow-auto">
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full h-full min-h-[200px] text-[14px] text-[#1d1d1f] bg-transparent outline-none resize-none leading-relaxed placeholder:text-[#c7c7cc]"
            placeholder={`Hi Sahil,\n\nI came across your portfolio and I'd love to discuss an opportunity...\n\n(Type your message here)`}
          />
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-[#e5e5e5] bg-[#fafafa]">
          <div className="flex items-center gap-3">
            <motion.div
              className="macos-badge"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Available for Opportunities
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#007aff] text-white text-[13px] font-medium shadow-sm hover:bg-[#0066d6] transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
            Send
          </motion.button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 px-4 py-3 border-t border-[#e5e5e5] bg-[#f5f5f5]">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[12px] text-[#86868b] hover:text-[#1d1d1f] transition-colors font-medium">
            <GitBranch className="w-4 h-4" />
            GitHub
          </a>
          <span className="text-[#d5d5d5]">|</span>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[12px] text-[#86868b] hover:text-[#007aff] transition-colors font-medium">
            <Link className="w-4 h-4" />
            LinkedIn
          </a>
          <span className="text-[#d5d5d5]">|</span>
          <span className="text-[11px] text-[#c7c7cc]">
            © {new Date().getFullYear()} Sahil Maliya
          </span>
        </div>
      </div>
    </div>
  );
}
