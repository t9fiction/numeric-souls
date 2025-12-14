import { ArrowLeft, CheckCircle2, Cloud, Zap, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CloudInfrastructurePage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <Link href="/#services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft size={16} />
            Back to Services
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Cloud Infrastructure
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Transform your infrastructure with modern cloud-native solutions. Our serverless architectures and DevOps automation deliver scalable, cost-effective systems that automatically adapt to your business needs.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">What We Build</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We design and implement cloud-native infrastructures that eliminate server management overhead while providing enterprise-grade reliability, security, and performance. Our solutions automatically scale with demand and optimize costs.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <Cloud className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Serverless Architecture</h3>
                    <p className="text-muted-foreground text-sm">Event-driven, auto-scaling functions that run only when needed, eliminating idle costs and server management complexity.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">DevOps Automation</h3>
                    <p className="text-muted-foreground text-sm">Complete CI/CD pipelines with automated testing, deployment, and monitoring for rapid, reliable software delivery.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Enterprise Security</h3>
                    <p className="text-muted-foreground text-sm">Built-in security controls, compliance frameworks, and monitoring to protect your infrastructure and data.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 text-foreground">Core Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Serverless Functions",
                  "Container Orchestration",
                  "CI/CD Pipelines",
                  "Infrastructure as Code",
                  "Auto-scaling Solutions",
                  "Monitoring & Alerting",
                  "Security & Compliance",
                  "Cost Optimization"
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
                  {["AWS Lambda", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "CloudWatch", "Prometheus", "Grafana"].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-muted text-foreground text-sm border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-card p-6 border">
                <h3 className="text-lg font-bold mb-4 text-foreground">Solutions We Deliver</h3>
                <ul className="space-y-2 text-muted-foreground text-sm mb-6">
                  <li>• Serverless API Backends</li>
                  <li>• Microservices Architecture</li>
                  <li>• Container Orchestration</li>
                  <li>• Multi-Cloud Deployments</li>
                  <li>• Disaster Recovery Systems</li>
                  <li>• Performance Monitoring</li>
                </ul>
                
                <h4 className="font-bold text-foreground mb-2">Ready to Scale?</h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  Optimize your infrastructure with modern cloud solutions.
                </p>
                <Link href="/#contact">
                  <Button className="w-full">
                    Start Cloud Project
                  </Button>
                </Link>
              </div>

              <div className="bg-secondary p-6 border">
                <h3 className="text-lg font-bold mb-3 text-foreground">Implementation Process</h3>
                <div className="space-y-3">
                  {[
                    "Infrastructure Assessment & Strategy",
                    "Cloud Architecture Design",
                    "Migration Planning & Execution",
                    "DevOps Pipeline Implementation",
                    "Performance Optimization",
                    "24/7 Monitoring & Support"
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
