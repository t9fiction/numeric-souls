"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code, Zap, Shield } from "lucide-react";
import AmbientBackground from "@/components/ui/AmbientBackground";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-background transition-colors duration-300">
      {/* Ambient Background & Grid */}
      <AmbientBackground />

      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/10 pointer-events-none" />

      {/* Beam Effect - Adaptive */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-100 bg-primary/10 rounded-full blur-[100px] opacity-50 pointer-events-none" />

      <div className="container relative z-10 px-4 mx-auto flex items-center justify-between">
        <div className="text-left max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium tracking-wide uppercase border border-primary/30 text-primary bg-primary/10 rounded-full"
          >
            <Zap className="w-4 h-4" />
            Premium Software Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="max-w-4xl mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground"
            aria-label="Transforming Ideas Into Digital Excellence">
            Transforming Ideas Into <span className="text-primary">Digital Excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl mb-10 text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            We craft cutting-edge software solutions that drive innovation and growth for businesses worldwide. Our expertise spans from enterprise systems to AI-powered applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="h-12 px-8 text-base font-semibold transition-all rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 flex items-center">
              <Code className="w-4 h-4 mr-2" />
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base transition-all border border-border rounded-lg hover:bg-accent text-foreground flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              View Case Studies
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 flex flex-wrap gap-6"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                <span className="text-primary font-bold">50+</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
                <p className="text-sm font-medium">Across Industries</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                <span className="text-primary font-bold">98%</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                <p className="text-sm font-medium">Guaranteed</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                <span className="text-primary font-bold">24/7</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Support Available</p>
                <p className="text-sm font-medium">Always</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="hidden lg:block"
        >
          <div className="relative w-96 h-96 rounded-2xl overflow-hidden border border-border/50 shadow-xl">
            <Image
              src="/images/hero-bg.jpg"
              alt="Professional software development workspace"
              fill
              className="object-cover"
              priority
            />
            {/* <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" /> */}

            {/* Floating elements */}
            {/* <div className="absolute top-6 right-6 w-12 h-8 rounded-lg bg-primary/10 backdrop-blur-sm border border-border/30 flex items-center justify-center">
              <Code className="w-8 h-8 text-primary" />
            </div> */}
            <div className="absolute bottom-6 left-6 w-32 h-16 rounded-lg bg-secondary/50 backdrop-blur-sm border border-border/30 flex items-center justify-center">
              <span className="text-sm font-medium">AI Integration</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 w-full h-px bg-border" />
    </section>
  );
};

export default Hero;
