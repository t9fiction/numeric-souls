import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const serviceData = {
  "agentic-ai-automation": {
    title: "Agentic AI & Automation",
    description: "LLMs, autonomous agents, and intelligent workflow automation.",
    overview: "We build AI agents that think and act autonomously using cutting-edge LLM technology.",
    features: ["Custom LLM Integration", "AI Agents", "Workflow Automation", "NLP Solutions"],
    technologies: ["OpenAI", "LangChain", "Python", "FastAPI"]
  },
  "blockchain-solutions": {
    title: "Blockchain Solutions", 
    description: "Smart contracts, dApps, and Web3 integration.",
    overview: "Build decentralized applications and smart contracts for the Web3 future.",
    features: ["Smart Contracts", "DeFi Protocols", "NFT Platforms", "Web3 Integration"],
    technologies: ["Solidity", "Ethereum", "Web3.js", "IPFS"]
  },
  "web-architecture": {
    title: "Web Architecture",
    description: "Enterprise web applications with React and Next.js.",
    overview: "Modern, scalable web applications built with the latest technologies.",
    features: ["React Applications", "Next.js SSR", "API Development", "Performance Optimization"],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  "cloud-infrastructure": {
    title: "Cloud Infrastructure",
    description: "Serverless architecture and DevOps automation.",
    overview: "Scalable cloud solutions that automatically scale and reduce costs.",
    features: ["Serverless Functions", "Container Orchestration", "CI/CD Pipelines", "Auto-scaling"],
    technologies: ["AWS Lambda", "Docker", "Kubernetes", "Terraform"]
  },
  "mobile-ecosystems": {
    title: "Mobile Ecosystems",
    description: "Cross-platform solutions for iOS and Android.",
    overview: "Native-performance mobile apps that work across all platforms.",
    features: ["Cross-Platform Apps", "Native Performance", "Push Notifications", "App Store Optimization"],
    technologies: ["React Native", "Expo", "Firebase", "Redux"]
  },
  "design-systems": {
    title: "Design Systems",
    description: "Pixel-perfect UI/UX that scales with your brand.",
    overview: "Cohesive design systems that ensure consistency across all products.",
    features: ["Component Libraries", "Design Tokens", "Brand Guidelines", "Responsive Design"],
    technologies: ["Figma", "Storybook", "Tailwind CSS", "Framer"]
  }
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug as keyof typeof serviceData];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <Link href="/#services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft size={16} />
            Back to Services
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            {service.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {service.description}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">What We Do</h2>
              <p className="text-muted-foreground text-lg mb-8">
                {service.overview}
              </p>

              <h3 className="text-xl font-bold mb-4 text-foreground">Key Features</h3>
              <div className="space-y-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Technologies</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {service.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-muted text-foreground text-sm border">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="bg-card p-6 border">
                <h3 className="text-lg font-bold mb-4 text-foreground">Ready to Start?</h3>
                <p className="text-muted-foreground mb-4">
                  Let&apos;s discuss your {service.title.toLowerCase()} needs.
                </p>
                <Link href="/#contact">
                  <Button className="w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { slug: "agentic-ai-automation" },
    { slug: "blockchain-solutions" },
    { slug: "web-architecture" },
    { slug: "cloud-infrastructure" },
    { slug: "mobile-ecosystems" },
    { slug: "design-systems" }
  ];
}
