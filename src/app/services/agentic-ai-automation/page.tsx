import { ArrowLeft, CheckCircle2, Brain, Zap, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AgenticAIPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <Link href="/#services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft size={16} />
            Back to Services
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Agentic AI & Automation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Transform your business with intelligent AI agents that think, learn, and act autonomously. Our cutting-edge solutions leverage large language models and advanced AI technologies to create systems that revolutionize how you operate.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">What We Build</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We create sophisticated AI agents that can understand context, make decisions, and execute complex workflows without human intervention. Our solutions integrate seamlessly with your existing systems while providing unprecedented automation capabilities.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <Brain className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Intelligent Decision Making</h3>
                    <p className="text-muted-foreground text-sm">AI agents that analyze data, understand context, and make informed decisions based on your business rules and objectives.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Autonomous Execution</h3>
                    <p className="text-muted-foreground text-sm">Self-operating systems that handle complex workflows, from customer service to data processing, without human oversight.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Enterprise Security</h3>
                    <p className="text-muted-foreground text-sm">Built with enterprise-grade security, compliance, and data protection to ensure your sensitive information remains secure.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 text-foreground">Core Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Custom LLM Integration",
                  "Multi-Agent Systems", 
                  "Workflow Automation",
                  "Natural Language Processing",
                  "Document Intelligence",
                  "Conversational AI",
                  "Predictive Analytics",
                  "Real-time Decision Making"
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
                  {["OpenAI GPT-4", "LangChain", "AutoGen", "Python", "FastAPI", "Vector DBs", "RAG Systems", "Hugging Face"].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-muted text-foreground text-sm border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-card p-6 border">
                <h3 className="text-lg font-bold mb-4 text-foreground">Use Cases</h3>
                <ul className="space-y-2 text-muted-foreground text-sm mb-6">
                  <li>• Customer Support Automation</li>
                  <li>• Document Processing & Analysis</li>
                  <li>• Sales Lead Qualification</li>
                  <li>• Content Generation & Curation</li>
                  <li>• Data Analysis & Reporting</li>
                  <li>• Process Optimization</li>
                </ul>
                
                <h4 className="font-bold text-foreground mb-2">Ready to Automate?</h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  Transform your operations with intelligent AI agents that work 24/7.
                </p>
                <Link href="/#contact">
                  <Button className="w-full">
                    Start AI Project
                  </Button>
                </Link>
              </div>

              <div className="bg-secondary p-6 border">
                <h3 className="text-lg font-bold mb-3 text-foreground">Our Process</h3>
                <div className="space-y-3">
                  {[
                    "AI Strategy & Use Case Analysis",
                    "Agent Architecture Design", 
                    "Model Training & Fine-tuning",
                    "Integration & Testing",
                    "Deployment & Monitoring",
                    "Continuous Learning & Optimization"
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
