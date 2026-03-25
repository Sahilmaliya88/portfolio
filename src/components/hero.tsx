"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, ChevronDown, Terminal, Database, Cpu } from "lucide-react";
import React from "react";
import Link from "next/link";

export function HeroSection() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-500, 500], [15, -15]);
  const rotateY = useTransform(x, [-500, 500], [-15, 15]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden w-full pt-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Animated Gradient */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[150px] mix-blend-screen" style={{ animation: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite" }} />
        
        {/* Subtle grid background */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"
        />
      </div>

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center">
        {/* Anti-gravity 3D Tilt Container */}
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="flex flex-col items-center text-center space-y-8"
        >
          {/* Floating Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="inline-flex glass-panel items-center rounded-full px-4 py-1.5 text-sm font-medium text-primary shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
            Full Stack Developer + AI Engineer
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight drop-shadow-2xl"
            style={{ transform: "translateZ(50px)" }}
          >
            Building Scalable <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary neon-text">
              Systems with AI.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-[42rem] mx-auto leading-relaxed"
            style={{ transform: "translateZ(30px)" }}
          >
            I engineer complex web applications, real-time architectures, and intelligent tools to solve hard problems with modern tech.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
            style={{ transform: "translateZ(40px)" }}
          >
            <Button size="lg" className="rounded-full h-12 px-8 text-base shadow-[0_0_20px_rgba(180,50,250,0.5)]" asChild>
              <Link href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full h-12 px-8 text-base bg-background/30" asChild>
               <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>

          {/* Floating Particles/Icons */}
          {[{Icon: Terminal, x: -120, y: -40, delay: 1}, {Icon: Database, x: 120, y: -80, delay: 1.2}, {Icon: Cpu, x: -80, y: 80, delay: 1.4}].map((item, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, scale: 0 }}
               animate={{ opacity: 0.4, scale: 1 }}
               transition={{ delay: item.delay, duration: 0.8 }}
               className="absolute hidden md:flex items-center justify-center w-12 h-12 rounded-2xl glass-panel shadow-lg"
               style={{ 
                 x: item.x, 
                 y: item.y, 
                 transform: `translateZ(${60 + idx * 20}px)` 
               }}
             >
               <item.Icon className="h-6 w-6 text-primary" />
             </motion.div>
          ))}

        </motion.div>
      </div>

      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1.5, duration: 1 }}
         className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
      >
        <Link href="#about" aria-label="Scroll down">
          <ChevronDown className="h-8 w-8 opacity-50 hover:opacity-100 transition-opacity cursor-pointer" />
        </Link>
      </motion.div>
    </section>
  );
}
