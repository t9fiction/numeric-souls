"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Terminal } from "lucide-react";
import AmbientBackground from "@/components/ui/AmbientBackground";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-background transition-colors duration-300">
      {/* Ambient Background & Grid */}
      <AmbientBackground />
      
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
      
      {/* 3D Floating Elements - Removed */}
      
      {/* Beam Effect - Adaptive */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-foreground/5 rounded-full blur-[100px] opacity-20 pointer-events-none" />

      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-mono font-medium tracking-widest uppercase border border-border text-muted-foreground bg-background"
        >
          <span className="w-1.5 h-1.5 bg-primary animate-pulse" />
          Enterprise Solutions
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="max-w-4xl mx-auto mb-6 text-6xl font-bold tracking-tighter md:text-8xl lg:text-9xl text-foreground"
        >
          Enterprise Software<br />EXCELLENCE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl mx-auto mb-10 text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Delivering mission-critical software solutions for Fortune 500 companies and emerging enterprises. Precision engineering meets business excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-0 sm:flex-row"
        >
          <Button size="lg" className="h-14 px-10 text-base font-semibold transition-all rounded-none bg-primary text-primary-foreground hover:opacity-90">
            Start Project <Terminal className="w-4 h-4 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-10 text-base transition-all border border-l-0 border-input rounded-none bg-background hover:bg-accent text-foreground">
            View Portfolio <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
      
      {/* Decorative Line */}
      <div className="absolute bottom-0 w-full h-px bg-border" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
    </section>
  );
};

export default Hero;
