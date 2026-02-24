"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code, ChevronLeft, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { portfolioProjects } from "@/data/portfolio";

const CATEGORIES = ["All", "Blockchain Dapp", "Solana Dapp", "Token Manager", "Telegram App", "ECommerce Store", "Decentralized Exchange", "Blockchain Bridge"];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === selectedCategory);

  return (
    <main className="relative min-h-screen bg-background transition-colors duration-300">
      {/* Header Section */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <Link href="/" className="p-2 hover:bg-secondary rounded-lg transition-colors">
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Complete Project Portfolio
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-3xl"
          >
            Explore all {portfolioProjects.length} projects showcasing expertise in blockchain development, DApps, smart contracts, and modern web technologies.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Filter className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground">Filter by Category:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
                {category !== "All" && (
                  <span className="ml-2 text-sm opacity-80">
                    ({portfolioProjects.filter(p => p.category === category).length})
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
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
                        <span className="text-xs font-mono font-medium text-primary uppercase tracking-wider">
                          {project.category}
                        </span>
                        <span className="text-xs font-mono text-muted-foreground">{project.year}</span>
                      </div>

                      <h3 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{project.description}</p>

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
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-secondary rounded-lg hover:bg-accent transition-colors"
                            aria-label="View Project"
                          >
                            <ExternalLink className="w-4 h-4 text-foreground" />
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-secondary rounded-lg hover:bg-accent transition-colors"
                            aria-label="GitHub Repository"
                          >
                            <Github className="w-4 h-4 text-foreground" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Code className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground text-lg">No projects found in this category</p>
            </div>
          )}

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 text-center text-muted-foreground"
          >
            <p className="text-sm">Showing {filteredProjects.length} of {portfolioProjects.length} projects</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Interested in Working Together?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can help bring your Web3 project to life.
            </p>
            <Link href="/#contact">
              <Button size="lg" className="rounded-lg bg-primary text-primary-foreground hover:bg-primary/90">
                Get In Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
