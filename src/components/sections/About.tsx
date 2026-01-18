"use client";

import React from "react";
import Image from "next/image";
import teamCollabImage from "@/assets/images/team-collab.png";
import { motion } from "framer-motion";
import { Users, CheckCircle2, Code, Zap, Shield } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import ParticleField to avoid SSR issues
const DynamicParticleField = dynamic(() => import("@/components/ui/ParticleField"), {
  ssr: false,
});

const stats = [
  { label: "Years of Excellence", value: "5+" },
  { label: "Projects Delivered", value: "200+" },
  { label: "Happy Clients", value: "150+" },
];

const values = [
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Innovation",
    description: "We embrace cutting-edge technologies to deliver forward-thinking solutions."
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Reliability",
    description: "Robust, secure solutions built to withstand the test of time."
  },
  {
    icon: <Code className="w-6 h-6 text-primary" />,
    title: "Excellence",
    description: "Uncompromising quality in every line of code we write."
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/10 relative overflow-hidden transition-colors duration-300">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium tracking-wide uppercase border border-primary/30 text-primary bg-primary/10 rounded-full"
          >
            <Users className="w-4 h-4" />
            Our Story
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4 text-foreground max-w-3xl mx-auto"
          >
            Pioneering Digital Innovation Since 2020
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto text-lg"
          >
            {'We blend technical expertise with creative vision to deliver transformative software solutions'}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-full overflow-hidden rounded-2xl border border-border shadow-xl">
              <Image
                src={teamCollabImage}
                alt="Numeric Souls engineers collaborating"
                fill
                className="object-cover"
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-primary/10 border border-border/30 backdrop-blur-sm"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-secondary border border-border/30 backdrop-blur-sm flex items-center justify-center">
              <span className="text-xl font-bold text-primary">50+</span>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Numeric Souls, we specialize in transforming complex business challenges into elegant, scalable software solutions. Our team of seasoned engineers, designers, and strategists collaborate to deliver products that not only meet today's needs but anticipate tomorrow's opportunities.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary tracking-tight">{stat.value}</div>
                  <div className="text-xs font-medium text-muted-foreground uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg mt-1">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
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
