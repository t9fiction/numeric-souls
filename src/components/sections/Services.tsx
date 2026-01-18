"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, Bot, Globe, Database, Blocks, Server, Palette, Zap, ChevronRight } from "lucide-react";
import AnimatedGrid from "@/components/ui/AnimatedGrid";
import Link from "next/link";

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored solutions designed to meet your unique business requirements and challenges.",
    icon: <Code size={24} />,
    color: "from-blue-500 to-cyan-500",
    slug: "custom-software-development",
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent systems that learn, predict, and automate decision-making processes.",
    icon: <Bot size={24} />,
    color: "from-purple-500 to-indigo-500",
    slug: "ai-machine-learning",
  },
  {
    title: "Web Applications",
    description: "Scalable, responsive web platforms built with modern frameworks and best practices.",
    icon: <Globe size={24} />,
    color: "from-emerald-500 to-teal-500",
    slug: "web-applications",
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps for iOS and Android ecosystems.",
    icon: <Smartphone size={24} />,
    color: "from-orange-500 to-amber-500",
    slug: "mobile-development",
  },
  {
    title: "Cloud Solutions",
    description: "Secure, scalable cloud infrastructure and migration services for your business.",
    icon: <Server size={24} />,
    color: "from-violet-500 to-purple-500",
    slug: "cloud-solutions",
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive and engaging digital experiences.",
    icon: <Palette size={24} />,
    color: "from-rose-500 to-pink-500",
    slug: "ui-ux-design",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30 relative border-t border-border transition-colors duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-grid-small-white/[0.05] pointer-events-none" />

      {/* 3D Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <AnimatedGrid />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium tracking-wide uppercase border border-primary/30 text-primary bg-primary/10 rounded-full"
          >
            <Zap className="w-4 h-4" />
            Our Expertise
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4 text-foreground max-w-3xl mx-auto"
          >
            Comprehensive Digital Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto text-lg"
          >
            {'We deliver end-to-end technology solutions that transform businesses and drive growth'}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative p-6 bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${service.color} text-white mb-6`} aria-hidden="true">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 tracking-tight text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                  <span>Learn more</span>
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

