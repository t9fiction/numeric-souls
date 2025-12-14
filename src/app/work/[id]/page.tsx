"use client";

import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar, Tag, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Mock data - ideally shared or fetched
const projects = {
  "apex-finance": {
    title: "Apex Finance",
    category: "Fintech Platform",
    description: "A comprehensive real-time trading analytics dashboard designed for institutional investors. Features sub-millisecond data processing and advanced visualization modules.",
    year: "2024",
    client: "Apex Capital",
    role: "Full Stack Development",
    tags: ["Next.js", "D3.js", "WebSockets", "Node.js"],
    challenges: [
      "Process 50k+ events per second",
      "Ensure <50ms latency",
      "Regulatory compliance auditing"
    ],
    results: [
      "30% increase in trader efficiency",
      "Reduced system latency by 60%",
      "Awarded Best UX in Fintech 2024"
    ]
  },
  "vortex-commerce": {
    title: "Vortex Commerce",
    category: "E-Commerce",
    description: "A headless commerce solution built for high-volume fashion retailers. Seamlessly integrates inventory management with a bespoke frontend experience.",
    year: "2024",
    client: "Vortex Fashion Group",
    role: "Architecture & Development",
    tags: ["Shopify Plus", "React", "Tailwind", "Redis"],
    challenges: [
      "Handle Black Friday traffic spikes",
      "Sync inventory across 50+ stores",
      "Sub-second page loads"
    ],
    results: [
      "99.99% uptime during peak sales",
      "45% increase in mobile conversion",
      "Unified inventory system launched"
    ]
  },
  "nexus-ai": {
    title: "Nexus AI",
    category: "Machine Learning",
    description: "An intuitive interface for interacting with large-scale generative models. Allows non-technical teams to fine-tune and deploy custom models.",
    year: "2023",
    client: "Nexus Research",
    role: "ML Ops & Frontend",
    tags: ["Python", "TensorFlow", "FastAPI", "React"],
    challenges: [
      "Visualize high-dimensional data",
      "Manage GPU resource allocation",
      "Simplify complex ML workflows"
    ],
    results: [
      "Democratized AI access for 500+ users",
      "Reduced model training time by 20%",
      "Featured in TechCrunch"
    ]
  }
};

export default function ProjectPage() {
  const params = useParams();
  const id = params.id as string;
  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/#portfolio">
            <Button variant="outline">Back to Portfolio</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-background text-foreground pt-20">
      {/* Header / Hero */}
      <section className="relative py-24 border-b border-border overflow-hidden">
         <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px] pointer-events-none" />
         <div className="container mx-auto px-4 relative z-10">
            <Link href="/#portfolio" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
              <ArrowLeft size={20} className="mr-2" /> Back to Works
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                 <span className="text-primary font-mono text-sm tracking-widest uppercase">{project.category}</span>
                 <span className="inline-flex items-center px-3 py-1 rounded-full border border-border text-xs font-mono text-muted-foreground">
                    <Calendar size={14} className="mr-2" /> {project.year}
                 </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 max-w-4xl">
                {project.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                 {project.tags.map(tag => (
                   <span key={tag} className="px-4 py-2 bg-secondary/50 border border-border rounded-none text-sm font-medium flex items-center">
                     <Tag size={14} className="mr-2 opacity-50" /> {tag}
                   </span>
                 ))}
              </div>
            </motion.div>
         </div>
      </section>

      {/* Details Grid */}
      <section className="py-20">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
               
               {/* Sidebar */}
               <div className="space-y-8 lg:col-span-1">
                  <div className="p-6 border border-border bg-card">
                     <h3 className="font-bold text-lg mb-4 uppercase tracking-wide">Project Info</h3>
                     <div className="space-y-4 text-sm">
                        <div className="flex justify-between py-2 border-b border-border/50">
                           <span className="text-muted-foreground">Client</span>
                           <span className="font-medium">{project.client}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border/50">
                           <span className="text-muted-foreground">Role</span>
                           <span className="font-medium">{project.role}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border/50">
                           <span className="text-muted-foreground">Year</span>
                           <span className="font-medium">{project.year}</span>
                        </div>
                     </div>
                     <Button className="w-full mt-6 gap-2" size="lg">
                        Visit Live Site <ExternalLink size={16} />
                     </Button>
                  </div>
               </div>

               {/* Content */}
               <div className="lg:col-span-2 space-y-12">
                  
                  {/* Challenge */}
                  <div>
                    <h2 className="text-2xl font-bold mb-6">The Challenge</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      For {project.title}, we handled complex requirements requiring a deep understanding of domain-specific constraints. Key challenges included:
                    </p>
                    <ul className="space-y-3">
                      {project.challenges.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                           <div className="p-1 mt-1 bg-red-500/10 text-red-500 rounded-sm">
                              <ExternalLink size={14} className="rotate-180" /> {/* Just a visual indicator */}
                           </div>
                           <span className="text-foreground/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solution/Results */}
                  <div>
                    <h2 className="text-2xl font-bold mb-6">The Solution & Impact</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Our approach focused on scalability and precision. By leveraging modern architecture, we delivered measurable results:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.results.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 p-4 border border-border bg-secondary/20">
                           <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                           <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

               </div>
            </div>
         </div>
      </section>
    </article>
  );
}
