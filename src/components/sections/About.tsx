"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Rocket } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "10+" },
  { label: "Projects Delivered", value: "250+" },
  { label: "Team Members", value: "45" },
  { label: "Client Satisfaction", value: "99%" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-muted-foreground font-mono text-xs uppercase tracking-widest">About Us</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 text-foreground tracking-tighter">ARCHITECTS OF <br />THE FUTURE</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              At Lumina, we don't just write code; we engineer digital reality. Founded by technologists, we bridge the gap between complex algorithms and human experience.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our mission is to empower enterprises with infrastructure that is scalable, secure, and precisely executed.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="border-l border-foreground/50 pl-4">
                  <div className="text-3xl font-bold text-foreground tracking-tighter">{stat.value}</div>
                  <div className="text-xs font-mono text-muted-foreground uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square border-2 border-border overflow-hidden bg-muted/20">
              {/* Technical drawing elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-3/4 h-3/4 border border-foreground/10 rounded-full animate-[spin_10s_linear_infinite]" />
                 <div className="absolute w-1/2 h-1/2 border border-foreground/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                 <div className="absolute w-full h-px bg-foreground/10" />
                 <div className="absolute h-full w-px bg-foreground/10" />
              </div>
              
              <div className="absolute bottom-0 right-0 p-8 w-2/3 bg-background border-t border-l border-foreground/10 z-20">
                <div className="flex gap-4 mb-4 text-foreground">
                  <Rocket size={24} />
                  <Target size={24} />
                </div>
                <p className="text-sm font-mono text-muted-foreground">MISSION_TARGET: EXCELLENCE</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
