import { ArrowLeft, CheckCircle2, Code, Zap, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WebArchitecturePage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <Link href="/#services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft size={16} />
            Back to Services
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Web Architecture
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Build modern, scalable web applications with cutting-edge technologies. Our enterprise-grade solutions leverage React, Next.js, and advanced architectural patterns to deliver exceptional performance and user experience.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">What We Build</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We create high-performance web applications that scale with your business. From single-page applications to complex enterprise platforms, our solutions are built with modern frameworks and best practices for optimal performance and maintainability.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <Code className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Modern Framework Development</h3>
                    <p className="text-muted-foreground text-sm">React, Next.js, and TypeScript applications with server-side rendering, static generation, and optimal performance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Performance Optimization</h3>
                    <p className="text-muted-foreground text-sm">Lightning-fast applications with code splitting, lazy loading, caching strategies, and Core Web Vitals optimization.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Enterprise Security</h3>
                    <p className="text-muted-foreground text-sm">Built-in security measures including authentication, authorization, data validation, and protection against common vulnerabilities.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 text-foreground">Core Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "React Applications",
                  "Next.js SSR/SSG",
                  "Progressive Web Apps",
                  "API Development",
                  "Microservices Architecture",
                  "Real-time Features",
                  "Performance Optimization",
                  "SEO & Accessibility"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-4 h-4" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-foreground">Technology Stack</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL", "Prisma", "Vercel", "AWS"].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-muted text-foreground text-sm border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-card p-6 border">
                <h3 className="text-lg font-bold mb-4 text-foreground">Application Types</h3>
                <ul className="space-y-2 text-muted-foreground text-sm mb-6">
                  <li>• Enterprise Web Applications</li>
                  <li>• E-commerce Platforms</li>
                  <li>• SaaS Applications</li>
                  <li>• Content Management Systems</li>
                  <li>• Real-time Dashboards</li>
                  <li>• Progressive Web Apps</li>
                </ul>
                
                <h4 className="font-bold text-foreground mb-2">Ready to Build?</h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  Create a modern web application that scales with your business.
                </p>
                <Link href="/#contact">
                  <Button className="w-full">
                    Start Web Project
                  </Button>
                </Link>
              </div>

              <div className="bg-secondary p-6 border">
                <h3 className="text-lg font-bold mb-3 text-foreground">Development Process</h3>
                <div className="space-y-3">
                  {[
                    "Architecture Planning & Design",
                    "Component System Development",
                    "API Integration & Testing",
                    "Performance Optimization",
                    "SEO & Accessibility Implementation",
                    "Deployment & Monitoring"
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
