"use client";

import React from "react";
import Image from "next/image";
import teamCollabImage from "@/assets/images/team-collab.png";
import { motion } from "framer-motion";
import { Users, Target, CheckCircle2 } from "lucide-react";
import ParticleField from "@/components/ui/ParticleField";

const stats = [
  { label: "Combined Experience", value: "50+ Years" },
  { label: "Global Clients", value: "200+" },
  { label: "Code Commits", value: "1M+" },
];

const About = () => {
  return (
    <section id="about" className="py-32 bg-secondary relative overflow-hidden transition-colors duration-300">
      {/* 3D Particle Field */}
      <div className="absolute inset-0 opacity-20">
        <ParticleField />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
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
                alt="Numeric Souls engineers collaborating"
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
                  <h4 className="font-bold text-foreground mb-1">Enterprise Excellence</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    We deliver robust, scalable solutions that meet the highest standards of enterprise software development and security compliance.
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
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Company</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6 text-foreground tracking-tight">
              Trusted Technology Partner. <br /> Proven Results.
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Numeric Souls delivers enterprise-grade software solutions with a focus on scalability, security, and performance. Our team of senior engineers and architects brings decades of experience in building mission-critical systems for global organizations.
            </p>
            
            <ul className="space-y-4 mb-8">
              {["Enterprise Architecture & Consulting", "Custom Software Development", "Digital Transformation Solutions"].map((item, i) => (
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
