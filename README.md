# 🖥️ Sahil Maliya — macOS-Themed Developer Portfolio

> A premium, interactive portfolio that replicates the macOS Sonoma desktop experience — built entirely with AI-powered development using **Antigravity + Opus 4.6** and **Rube**.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0080?style=for-the-badge&logo=framer)

---

## ✨ Features

* **macOS Sonoma Desktop UI** — Full desktop environment with menu bar, dock, and draggable/resizable windows.
* **Dock with Magnification** — Physics-based hover magnification using Framer Motion spring animations.
* **Draggable Windows** — OS-style windows with close, minimize, and focus management.
* **Genie Minimize Animation** — Smooth macOS-inspired minimize/restore effects.
* **Command Palette** — Spotlight-style quick navigation (⌘+K).
* **Staggered Entrance Animations** — Desktop icons animate in with spring physics.
* **Tab Switching Transitions** — Directional layout-aware tab indicators.
* **Dark Mode** — Fully themed with `next-themes`.
* **Responsive Design** — Adapts gracefully across screen sizes.

---

## 🏗️ Built With AI: Antigravity + Opus 4.6 + Rube

This entire portfolio was designed and developed using an AI-powered workflow:

### 🤖 Antigravity (Agentic Coding Assistant)
[Antigravity](https://deepmind.google/) is an advanced agentic AI coding assistant by Google DeepMind. It acts as an autonomous pair programmer — capable of planning, writing, debugging, and refactoring code across an entire codebase. Key capabilities used in this project:
* **Multi-file code generation:** Scaffolded the full component architecture (OS-level UI, sections, layouts) in a single session.
* **Iterative refinement:** Continuously improved animations, responsiveness, and visual polish through conversational feedback loops.
* **Contextual awareness:** Maintained deep understanding of the project structure, dependencies, and design goals across conversations.

### 🧠 Opus 4.6 (AI Model)
Opus 4.6 powered the intelligence behind Antigravity for this project, providing:
* **Production-quality code generation:** Clean, idiomatic TypeScript/React with modern patterns (hooks, Zustand, Framer Motion).
* **Design sensibility:** Generated pixel-perfect macOS-style UI including squircle icons, glassmorphism dock, and system-authentic animations.
* **Complex reasoning:** Handled multi-step implementation challenges like window z-index management, drag constraints, and spring physics tuning.

### 💎 Rube (MCP Server)
[Rube](https://modelcontextprotocol.io/) extended the AI's capabilities by providing:
* **Direct filesystem access:** Read, write, and modify project files without manual copy-paste.
* **Terminal execution:** Ran dev servers, installed dependencies, and executed builds directly.
* **Browser interaction:** Previewed and validated the running application in real-time.
* **Codebase search:** Navigated the project structure intelligently to make targeted edits.

### 🔄 The AI-Powered Development Workflow

```text
┌─────────────────────────────────────────────────────┐
│                   Developer (You)                   │
│          Describes vision & gives feedback          │
└──────────────────────┬──────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────┐
│              Antigravity + Opus 4.6                 │
│    Plans architecture → Generates code → Debugs     │
└──────────────────────┬──────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────┐
│                       Rube                          │
│      File I/O • Terminal • Browser • Search         │
└──────────────────────┬──────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────┐
│                Live Portfolio App                   │
│               http://localhost:3000                 │
└─────────────────────────────────────────────────────┘
