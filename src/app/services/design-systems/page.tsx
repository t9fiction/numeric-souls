import { ArrowLeft, CheckCircle2, Palette, Layout, Eye } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DesignSystemsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <Link href="/#services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft size={16} />
            Back to Services
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Design Systems
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Create cohesive, scalable design systems that ensure consistency across all your digital products. Our comprehensive approach combines beautiful aesthetics with functional usability, creating interfaces that users love and brands can scale.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">What We Create</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We build comprehensive design systems that serve as the foundation for all your digital products. Our systems ensure visual consistency, improve development efficiency, and create memorable user experiences that align with your brand identity.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <Palette className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Brand-Aligned Design</h3>
                    <p className="text-muted-foreground text-sm">Visual systems that perfectly capture your brand personality while ensuring consistency across all touchpoints and platforms.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Layout className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Component Libraries</h3>
                    <p className="text-muted-foreground text-sm">Reusable UI components with comprehensive documentation that accelerate development and ensure consistency.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Eye className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Accessibility First</h3>
                    <p className="text-muted-foreground text-sm">Inclusive design principles that ensure your products are accessible to all users, meeting WCAG guidelines and best practices.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 text-foreground">System Components</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Component Libraries",
                  "Design Tokens",
                  "Typography Systems",
                  "Color Palettes",
                  "Icon Libraries",
                  "Layout Grids",
                  "Interaction Patterns",
                  "Accessibility Guidelines"
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
                <h3 className="text-xl font-bold mb-4 text-foreground">Design Tools</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Figma", "Storybook", "Tailwind CSS", "Framer", "Adobe XD", "Principle", "InVision", "Zeplin"].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-muted text-foreground text-sm border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-card p-6 border">
                <h3 className="text-lg font-bold mb-4 text-foreground">Design Deliverables</h3>
                <ul className="space-y-2 text-muted-foreground text-sm mb-6">
                  <li>• Complete Component Library</li>
                  <li>• Design Token Documentation</li>
                  <li>• Brand Guidelines & Standards</li>
                  <li>• Interactive Prototypes</li>
                  <li>• Accessibility Guidelines</li>
                  <li>• Implementation Guidelines</li>
                </ul>
                
                <h4 className="font-bold text-foreground mb-2">Ready to Design?</h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  Create a design system that scales with your brand.
                </p>
                <Link href="/#contact">
                  <Button className="w-full">
                    Start Design Project
                  </Button>
                </Link>
              </div>

              <div className="bg-secondary p-6 border">
                <h3 className="text-lg font-bold mb-3 text-foreground">Design Process</h3>
                <div className="space-y-3">
                  {[
                    "Brand & User Research",
                    "Design System Architecture",
                    "Component Design & Testing",
                    "Documentation & Guidelines",
                    "Implementation & Training",
                    "Maintenance & Evolution"
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
