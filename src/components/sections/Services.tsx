"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, Bot, Globe, Database, Palette, Blocks } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Enterprise Software Development",
    description: "Custom enterprise applications built with modern frameworks and best practices.",
    icon: <Code size={24} />,
  },
  {
    title: "Cloud Architecture & DevOps",
    description: "Scalable cloud infrastructure with automated deployment and monitoring.",
    icon: <Database size={24} />,
  },
  {
    title: "Digital Transformation",
    description: "Legacy system modernization and digital workflow optimization.",
    icon: <Globe size={24} />,
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent automation and data-driven decision support systems.",
    icon: <Bot size={24} />,
  },
  {
    title: "Mobile Application Development",
    description: "Native and cross-platform mobile solutions for enterprise use.",
    icon: <Smartphone size={24} />,
  },
  {
    title: "System Integration",
    description: "Seamless integration of enterprise systems and third-party services.",
    icon: <Blocks size={24} />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-secondary relative border-t border-border transition-colors duration-300">
      <div className="absolute inset-0 bg-grid-small-white/[0.1] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-foreground">OUR SERVICES</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Comprehensive software solutions tailored for enterprise success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group p-10 bg-background hover:bg-muted/50 transition-colors relative overflow-hidden"
            >
              <div className="mb-8 w-10 h-10 flex items-center justify-center bg-transparent border border-foreground/20 text-foreground rounded-none group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 tracking-tight text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors">
                {service.description}
              </p>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
