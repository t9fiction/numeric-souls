"use client";

import React from "react";
import Image from "next/image";
import teamCollabImage from "@/assets/images/team-collab.png";
import { motion } from "framer-motion";
import { Users, Target, CheckCircle2 } from "lucide-react";

const stats = [
  { label: "Combined Experience", value: "50+ Years" },
  { label: "Global Clients", value: "200+" },
  { label: "Code Commits", value: "1M+" },
];

const About = () => {
  return (
    <section id="about" className="py-32 bg-secondary relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-full overflow-hidden rounded-sm border border-border">
              <Image
                src={teamCollabImage}
                alt="Lumina engineers collaborating"
                fill
                className="object-cover"
                placeholder="blur"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border p-6 shadow-sm max-w-xs hidden md:block">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Human-Centric Tech</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    We believe in building software that doesn&apos;t just work—it evolves. Our philosophy is rooted in precision engineering and user-centric design.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Who We Are</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6 text-foreground tracking-tight">
              Innovators by Nature. <br /> Builders by Trade.
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Lumina was founded on a simple premise: Enterprise software doesn't have to be boring. We bridge the gap between heavy-duty engineering and intuitive, human experience.
            </p>
            
            <ul className="space-y-4 mb-8">
              {["Strategic Consulting", "Full-Cycle Development", "Long-Term Scalability"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl font-bold text-foreground tracking-tight">{stat.value}</div>
                  <div className="text-xs font-medium text-muted-foreground uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
