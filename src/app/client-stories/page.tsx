"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, MessageSquare } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { clientTestimonials } from "@/data/portfolio";

const PLATFORMS = ["All", "Fiverr", "Upwork", "Direct"];

export default function ClientStoriesPage() {
  const [selectedPlatform, setSelectedPlatform] = useState("All");

  const getPlatform = (role: string): string => {
    if (role.includes("Fiverr")) return "Fiverr";
    if (role.includes("Upwork")) return "Upwork";
    return "Direct";
  };

  const filteredTestimonials = selectedPlatform === "All"
    ? clientTestimonials
    : clientTestimonials.filter(t => getPlatform(t.role) === selectedPlatform);

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
              Client Success Stories
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-3xl"
          >
            Read testimonials from satisfied clients across Fiverr, Upwork, and direct collaborations. Discover how our blockchain expertise and development skills have made a difference.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <MessageSquare className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground">Filter by Platform:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {PLATFORMS.map((platform) => {
              const count = platform === "All"
                ? clientTestimonials.length
                : clientTestimonials.filter(t => getPlatform(t.role) === platform).length;

              return (
                <motion.button
                  key={platform}
                  onClick={() => setSelectedPlatform(platform)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedPlatform === platform
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {platform}
                  {count > 0 && (
                    <span className="ml-2 text-sm opacity-80">({count})</span>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredTestimonials.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  {/* Featured Badge */}
                  {testimonial.featured && (
                    <div className="absolute -top-3 right-6 px-3 py-1 text-xs font-bold bg-primary text-primary-foreground rounded-full">
                      Featured
                    </div>
                  )}

                  <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />

                  {/* Stars */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-lg text-foreground mb-8 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center pt-6 border-t border-border">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 flex-shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground text-lg">No testimonials found for this platform</p>
            </div>
          )}

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 text-center text-muted-foreground"
          >
            <p className="text-sm">Showing {filteredTestimonials.length} of {clientTestimonials.length} testimonials</p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-t border-border bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {clientTestimonials.length}+
              </div>
              <p className="text-muted-foreground">Satisfied Clients</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {clientTestimonials.filter(t => t.rating === 5).length}/{clientTestimonials.length}
              </div>
              <p className="text-muted-foreground">5-Star Ratings</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                3
              </div>
              <p className="text-muted-foreground">Platforms</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ready for Your Success Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our growing list of satisfied clients. Let's collaborate on your next blockchain or web project.
            </p>
            <Link href="/#contact">
              <Button size="lg" className="rounded-lg bg-primary text-primary-foreground hover:bg-primary/90">
                Start Your Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
