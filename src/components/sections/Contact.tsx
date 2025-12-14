"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-background transition-colors duration-300">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <span className="text-muted-foreground font-mono text-xs uppercase tracking-widest">TRANSMISSION</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 text-foreground tracking-tighter">INITIATE CONTACT</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Ready to deploy your next project? Establish a connection with our engineering team.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center border border-border text-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground uppercase tracking-wide text-sm">Email</h4>
                  <p className="text-muted-foreground font-mono text-sm">hello@lumina.tech</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center border border-border text-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground uppercase tracking-wide text-sm">Phone</h4>
                  <p className="text-muted-foreground font-mono text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 flex items-center justify-center border border-border text-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground uppercase tracking-wide text-sm">HQ</h4>
                  <p className="text-muted-foreground font-mono text-sm">100 Innovation Dr, Tech City</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="bg-background border border-border p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wide text-foreground">Name</label>
                    <input
                      id="name"
                      type="text"
                      className="w-full h-12 px-4 rounded-none border border-input bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
                      placeholder="ENTER NAME"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wide text-foreground">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="w-full h-12 px-4 rounded-none border border-input bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
                      placeholder="ENTER EMAIL"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wide text-foreground">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full h-12 px-4 rounded-none border border-input bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-muted-foreground/50"
                    placeholder="INQUIRY TYPE"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wide text-foreground">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-4 rounded-none border border-input bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none placeholder:text-muted-foreground/50"
                    placeholder="TRANSMIT MESSAGE..."
                  />
                </div>
                
                <Button size="lg" className="w-full gap-2 h-14 text-base font-bold bg-foreground text-background hover:bg-foreground/90">
                  TRANSMIT <Send size={18} />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
