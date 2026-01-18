"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO, TechNova",
    content: "Numeric Souls transformed our legacy systems into a modern, scalable platform. Their attention to detail and technical expertise exceeded our expectations.",
    rating: 5,
    avatar: "/avatar-1.jpg",
    companyLogo: "/company-logo-1.png"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Director, InnovateX",
    content: "The team delivered our AI-powered analytics platform ahead of schedule. Their innovative approach to problem-solving was impressive.",
    rating: 5,
    avatar: "/avatar-2.jpg",
    companyLogo: "/company-logo-2.png"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "CEO, HealthSync",
    content: "Working with Numeric Souls was a game-changer for our healthcare platform. They understood our compliance requirements perfectly.",
    rating: 5,
    avatar: "/avatar-3.jpg",
    companyLogo: "/company-logo-3.png"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Engineering Lead, FinSecure",
    content: "Their fintech solution increased our transaction processing speed by 40%. The code quality and documentation were exceptional.",
    rating: 5,
    avatar: "/avatar-4.jpg",
    companyLogo: "/company-logo-4.png"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary/20 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium tracking-wide uppercase border border-primary/30 text-primary bg-primary/10 rounded-full"
          >
            <Star className="w-4 h-4" />
            Client Stories
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4 text-foreground max-w-3xl mx-auto"
          >
            Trusted by Industry Leaders
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto text-lg"
          >
            {'Hear from businesses that have transformed their operations with our solutions'}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-8 relative overflow-hidden"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
              
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-lg text-foreground mb-8 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
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
        
        <div className="mt-16 flex flex-col items-center">
          <div className="flex items-center justify-center gap-8 mb-12">
            {["/client-logo-1.svg", "/client-logo-2.svg", "/client-logo-3.svg", "/client-logo-4.svg", "/client-logo-5.svg"].map((logo, index) => (
              <div key={index} className="opacity-60 hover:opacity-100 transition-opacity">
                <Image 
                  src={logo} 
                  alt={`Client logo ${index + 1}`} 
                  width={120} 
                  height={40} 
                  className="grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-3 rounded-full bg-card border border-border hover:bg-accent transition-colors">
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <div className="flex gap-2">
              {[1, 2, 3].map((num) => (
                <div 
                  key={num} 
                  className={`w-3 h-3 rounded-full ${num === 1 ? 'bg-primary' : 'bg-border'}`}
                ></div>
              ))}
            </div>
            <button className="p-3 rounded-full bg-card border border-border hover:bg-accent transition-colors">
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;