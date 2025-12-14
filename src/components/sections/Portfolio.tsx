"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "apex-finance",
    title: "Apex Finance",
    category: "Fintech Platform",
    description: "Real-time trading analytics dashboard.",
    year: "2024",
    tags: ["Next.js", "D3.js"],
  },
  {
    id: "vortex-commerce",
    title: "Vortex Commerce",
    category: "E-Commerce",
    description: "Headless commerce solution.",
    year: "2024",
    tags: ["Shopify", "React"],
  },
  {
    id: "nexus-ai",
    title: "Nexus AI",
    category: "Machine Learning",
    description: "Generative model interface.",
    year: "2023",
    tags: ["Python", "TensorFlow"],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 bg-background transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-border pb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-2 text-foreground">CASE STUDIES</h2>
            <p className="text-muted-foreground font-mono text-sm">ARCHIVE_ACCESS: GRANTED</p>
          </div>
          <Button variant="outline" className="rounded-none border-input hover:bg-foreground hover:text-background transition-colors">
            View All Work
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-l border-border">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative bg-background border-r border-b border-border p-8 hover:bg-muted/30 transition-colors"
            >
              <div className="flex justify-between w-full mb-12">
                 <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
                 <Link href={`/work/${project.id}`}>
                    <ArrowUpRight className="text-muted-foreground group-hover:text-foreground transition-colors cursor-pointer hover:scale-110" size={20} />
                 </Link>
              </div>
              
              <div className="mt-auto">
                <span className="text-xs font-mono font-medium text-muted-foreground/80 uppercase tracking-wider">{project.category}</span>
                <h3 className="text-2xl font-bold mt-2 text-foreground group-hover:translate-x-2 transition-transform duration-300">{project.title}</h3>
                <p className="text-muted-foreground text-sm mt-4 leading-relaxed group-hover:text-foreground/80">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
