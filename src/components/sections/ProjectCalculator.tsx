"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Code, Zap, Calendar, DollarSign } from "lucide-react";

const ProjectCalculator = () => {
  const [complexity, setComplexity] = useState(2); // 1-5 scale
  const [timeline, setTimeline] = useState(3); // 1-6 months
  const [features, setFeatures] = useState(5); // 1-10 features
  const [platforms, setPlatforms] = useState(1); // 1-3 platforms

  // Calculate estimated cost and timeline
  const calculateCost = () => {
    const baseCost = 5000;
    const complexityMultiplier = complexity * 1.5;
    const featureMultiplier = features * 0.8;
    const platformMultiplier = platforms * 1.2;
    
    return Math.round(baseCost * complexityMultiplier * featureMultiplier * platformMultiplier);
  };

  const calculateTimeline = () => {
    return Math.round(timeline * (1 + (complexity - 1) * 0.3));
  };

  return (
    <section className="py-24 bg-secondary/30 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium tracking-wide uppercase border border-primary/30 text-primary bg-primary/10 rounded-full"
          >
            <Calculator className="w-4 h-4" />
            Project Estimator
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4 text-foreground max-w-3xl mx-auto"
          >
            Estimate Your Project Cost
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto text-lg"
          >
            {'Get an instant estimate for your custom software project'}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6 text-foreground">Project Details</h3>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Zap className="w-4 h-4" /> Complexity
                  </label>
                  <span className="text-sm font-medium text-primary">{complexity}/5</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={complexity}
                  onChange={(e) => setComplexity(parseInt(e.target.value))}
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Simple</span>
                  <span>Complex</span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Timeline
                  </label>
                  <span className="text-sm font-medium text-primary">{timeline} months</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  value={timeline}
                  onChange={(e) => setTimeline(parseInt(e.target.value))}
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1 month</span>
                  <span>6 months</span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Code className="w-4 h-4" /> Features
                  </label>
                  <span className="text-sm font-medium text-primary">{features} features</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={features}
                  onChange={(e) => setFeatures(parseInt(e.target.value))}
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Basic</span>
                  <span>Advanced</span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Code className="w-4 h-4" /> Platforms
                  </label>
                  <span className="text-sm font-medium text-primary">{platforms} platform{platforms > 1 ? 's' : ''}</span>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {[1, 2, 3].map((num) => (
                    <button
                      key={num}
                      onClick={() => setPlatforms(num)}
                      className={`py-3 px-4 rounded-lg border transition-colors ${
                        platforms === num
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'bg-background border-border text-foreground hover:bg-accent'
                      }`}
                    >
                      {num === 1 ? 'Web' : num === 2 ? 'Web + Mobile' : 'Web + Mobile + Desktop'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary/10 to-secondary/20 border border-border rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6 text-foreground">Estimated Cost</h3>
            
            <div className="space-y-6">
              <div className="bg-card/50 border border-border rounded-xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">Development Cost</span>
                  <span className="text-2xl font-bold text-primary">${calculateCost().toLocaleString()}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Estimated based on {features} features, {complexity} complexity, and {platforms} platform{platforms > 1 ? 's' : ''}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card/50 border border-border rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-foreground">{calculateTimeline()} mo</div>
                  <div className="text-xs text-muted-foreground">Timeline</div>
                </div>
                <div className="bg-card/50 border border-border rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-foreground">{Math.round(calculateCost() / calculateTimeline() / 4)} devs</div>
                  <div className="text-xs text-muted-foreground">Team Size</div>
                </div>
              </div>
              
              <div className="pt-4">
                <button className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Get Detailed Quote
                </button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Prices are estimates only. Actual costs may vary based on specific requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCalculator;