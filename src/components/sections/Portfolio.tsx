"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const projects = [
  {
    id: "apex-finance",
    title: "Apex Finance",
    category: "Fintech Platform",
    description: "Real-time trading analytics dashboard with advanced charting capabilities and risk assessment tools.",
    year: "2024",
    tags: ["Next.js", "D3.js", "Node.js", "PostgreSQL"],
    image: "/portfolio-1.jpg",
    impact: "+40% increase in user engagement",
  },
  {
    id: "vortex-commerce",
    title: "Vortex Commerce",
    category: "E-Commerce",
    description: "Headless commerce solution with omnichannel capabilities and AI-driven personalization engine.",
    year: "2024",
    tags: ["Shopify", "React", "GraphQL", "Redis"],
    image: "/portfolio-2.jpg",
    impact: "3x faster checkout process",
  },
  {
    id: "nexus-ai",
    title: "Nexus AI",
    category: "Machine Learning",
    description: "Generative model interface with custom training pipeline and deployment infrastructure.",
    year: "2023",
    tags: ["Python", "TensorFlow", "FastAPI", "Docker"],
    image: "/portfolio-3.jpg",
    impact: "Reduced processing time by 60%",
  },
  {
    id: "secure-health",
    title: "SecureHealth",
    category: "Healthcare",
    description: "HIPAA-compliant patient management system with telemedicine capabilities and secure data exchange.",
    year: "2023",
    tags: ["React", "Node.js", "MongoDB", "WebRTC"],
    image: "/portfolio-4.jpg",
    impact: "Improved patient outcomes by 25%",
  },
  {
    id: "supply-chain",
    title: "SupplyChain Pro",
    category: "Logistics",
    description: "IoT-enabled supply chain tracking with real-time monitoring and predictive analytics.",
    year: "2024",
    tags: ["Vue.js", "IoT", "Machine Learning", "Azure"],
    image: "/portfolio-5.jpg",
    impact: "Reduced shipping delays by 45%",
  },
  {
    id: "edu-platform",
    title: "EduVerse",
    category: "Education",
    description: "Interactive learning platform with AR/VR capabilities and adaptive curriculum engine.",
    year: "2023",
    tags: ["React Native", "Three.js", "WebGL", "GraphQL"],
    image: "/portfolio-6.jpg",
    impact: "Increased student retention by 50%",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-background/50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium tracking-wide uppercase border border-primary/30 text-primary bg-primary/10 rounded-full"
          >
            <Code className="w-4 h-4" />
            Our Impact
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4 text-foreground max-w-3xl mx-auto"
          >
            Transforming Businesses Through Technology
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto text-lg"
          >
            {'Discover how we\'ve helped companies solve complex challenges and achieve measurable results'}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="md:flex">
                <div className="md:w-2/5 relative h-64 md:h-auto">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />
                </div>

                <div className="md:w-3/5 p-8">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono font-medium text-primary uppercase tracking-wider">{project.category}</span>
                    <span className="text-xs font-mono text-muted-foreground">{project.year}</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-primary">{project.impact}</div>

                    <div className="flex gap-2">
                      <Link
                        href={`/work/${project.id}`}
                        className="p-2 bg-secondary rounded-lg hover:bg-accent transition-colors"
                        aria-label="Case Study"
                      >
                        <ExternalLink className="w-4 h-4 text-foreground" />
                      </Link>
                      <Link
                        href="#"
                        className="p-2 bg-secondary rounded-lg hover:bg-accent transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-4 h-4 text-foreground" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" className="rounded-lg border border-border hover:bg-accent text-foreground">
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
