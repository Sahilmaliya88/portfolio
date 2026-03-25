# 🖥️ Sahil Maliya — macOS-Themed Developer Portfolio

> A premium, interactive portfolio that replicates the macOS Sonoma desktop experience — built entirely with AI-powered development using **Antigravity + Opus 4.6** and the **Ruby MCP Server**.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0080?style=for-the-badge&logo=framer)

---

## ✨ Features

- **macOS Sonoma Desktop UI** — Full desktop environment with menu bar, dock, and draggable/resizable windows
- **Dock with Magnification** — Physics-based hover magnification using Framer Motion spring animations
- **Draggable Windows** — OS-style windows with close, minimize, and focus management
- **Genie Minimize Animation** — Smooth macOS-inspired minimize/restore effects
- **Command Palette** — Spotlight-style quick navigation (⌘+K)
- **Staggered Entrance Animations** — Desktop icons animate in with spring physics
- **Tab Switching Transitions** — Directional layout-aware tab indicators
- **Dark Mode** — Fully themed with `next-themes`
- **Responsive Design** — Adapts gracefully across screen sizes

---

## 🏗️ Built With AI: Antigravity + Opus 4.6 + Ruby MCP Server

This entire portfolio was designed and developed using an AI-powered workflow:

### 🤖 Antigravity (Agentic Coding Assistant)

[Antigravity](https://deepmind.google/) is an advanced agentic AI coding assistant by Google DeepMind. It acts as an autonomous pair programmer — capable of planning, writing, debugging, and refactoring code across an entire codebase. Key capabilities used in this project:

- **Multi-file code generation** — Scaffolded the full component architecture (OS-level UI, sections, layouts) in a single session
- **Iterative refinement** — Continuously improved animations, responsiveness, and visual polish through conversational feedback loops
- **Contextual awareness** — Maintained deep understanding of the project structure, dependencies, and design goals across conversations

### 🧠 Opus 4.6 (AI Model)

Opus 4.6 powered the intelligence behind Antigravity for this project, providing:

- **Production-quality code generation** — Clean, idiomatic TypeScript/React with modern patterns (hooks, Zustand, Framer Motion)
- **Design sensibility** — Generated pixel-perfect macOS-style UI including squircle icons, glassmorphism dock, and system-authentic animations
- **Complex reasoning** — Handled multi-step implementation challenges like window z-index management, drag constraints, and spring physics tuning

### 💎 Ruby MCP Server

The [Ruby MCP (Model Context Protocol) Server](https://modelcontextprotocol.io/) extended the AI's capabilities by providing:

- **Direct filesystem access** — Read, write, and modify project files without manual copy-paste
- **Terminal execution** — Ran dev servers, installed dependencies, and executed builds directly
- **Browser interaction** — Previewed and validated the running application in real-time
- **Codebase search** — Navigated the project structure intelligently to make targeted edits

### 🔄 The AI-Powered Development Workflow

```
┌─────────────────────────────────────────────────────┐
│                   Developer (You)                    │
│              Describes vision & gives feedback       │
└──────────────────────┬──────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────┐
│              Antigravity + Opus 4.6                  │
│     Plans architecture → Generates code → Debugs    │
└──────────────────────┬──────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────┐
│               Ruby MCP Server                        │
│   File I/O • Terminal • Browser • Search             │
└──────────────────────┬──────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────┐
│              Live Portfolio App                       │
│         http://localhost:3000                         │
└─────────────────────────────────────────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **Yarn** (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Sahilmaliya88/portfolio.git
cd portfolio

# Install dependencies
yarn install

# Start the development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

---

## ⚙️ MCP Server Configuration

To replicate this AI-powered development setup, configure the **Ruby MCP Server** in your IDE:

### VS Code / Cursor — `.vscode/settings.json`

```json
{
  "mcpServers": {
    "ruby": {
      "command": "npx",
      "args": ["-y", "@anthropic/ruby-mcp-server@latest"],
      "env": {}
    }
  }
}
```

### Global MCP Config — `~/.config/mcp/settings.json`

```json
{
  "mcpServers": {
    "ruby": {
      "command": "npx",
      "args": ["-y", "@anthropic/ruby-mcp-server@latest"],
      "env": {}
    }
  }
}
```

### What the MCP Server Provides

| Capability           | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| **File Operations**  | Read, write, create, and delete files directly in the project |
| **Terminal Access**   | Execute shell commands (install deps, run dev server, build) |
| **Browser Control**  | Open, navigate, and interact with the running application    |
| **Search & Navigate**| Grep, find files, and explore directory structures           |
| **Code Intelligence**| Context-aware edits across multiple files simultaneously     |

> **Note:** The Ruby MCP Server acts as the bridge between Antigravity (AI agent) and your local development environment, enabling fully autonomous coding sessions.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts & theme
│   ├── page.tsx            # Main desktop — window & app management
│   └── globals.css         # Global styles & CSS variables
├── components/
│   ├── os/
│   │   ├── MenuBar.tsx     # macOS-style top menu bar
│   │   ├── Dock.tsx        # Animated dock with magnification
│   │   └── Window.tsx      # Draggable, resizable OS windows
│   ├── about.tsx           # About Me section
│   ├── skills.tsx          # Skills & technologies
│   ├── projects.tsx        # Project showcase
│   ├── experience.tsx      # Work experience timeline
│   ├── contact.tsx         # Contact form
│   ├── command-palette.tsx # Spotlight-style command palette
│   └── theme-provider.tsx  # Dark/light theme provider
├── components/ui/
│   └── button.tsx          # Reusable button component
└── lib/
    └── utils.ts            # Utility functions (cn, etc.)
```

---

## 🛠️ Tech Stack

| Category       | Technology                          |
| -------------- | ----------------------------------- |
| Framework      | Next.js 16 (App Router)            |
| Language       | TypeScript 5                        |
| UI Library     | React 19                            |
| Styling        | Tailwind CSS 4                      |
| Animations     | Framer Motion 12                    |
| State          | Zustand 5                           |
| Forms          | React Hook Form + Zod validation    |
| Theming        | next-themes                         |
| Icons          | Lucide React                        |
| UI Primitives  | Radix UI                            |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  <b>Designed & Developed with 🤖 AI + ❤️ Human Creativity</b><br/>
  <sub>Powered by Antigravity + Opus 4.6 + Ruby MCP Server</sub>
</p>
