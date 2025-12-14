import { ArrowLeft, CheckCircle2, Smartphone, Zap, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MobileEcosystemsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <Link href="/#services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft size={16} />
            Back to Services
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Mobile Ecosystems
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Create comprehensive mobile experiences that work seamlessly across iOS and Android. Our cross-platform solutions deliver native performance while maximizing code reuse and reducing development time and costs.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">What We Build</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We develop complete mobile ecosystems that provide consistent user experiences across all devices. Our solutions combine the performance of native apps with the efficiency of cross-platform development, ensuring your app reaches the widest possible audience.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <Smartphone className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Cross-Platform Excellence</h3>
                    <p className="text-muted-foreground text-sm">Single codebase that delivers native performance on both iOS and Android with platform-specific optimizations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Performance Optimization</h3>
                    <p className="text-muted-foreground text-sm">Lightning-fast apps with smooth animations, efficient memory usage, and optimized battery consumption.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">User Experience Focus</h3>
                    <p className="text-muted-foreground text-sm">Intuitive interfaces that follow platform guidelines while maintaining your brand identity and user engagement.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 text-foreground">Core Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Cross-Platform Development",
                  "Native Performance",
                  "Offline-First Architecture",
                  "Push Notifications",
                  "In-App Purchases",
                  "Social Integration",
                  "Analytics & Tracking",
                  "App Store Optimization"
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
                  {["React Native", "Expo", "Flutter", "Firebase", "Redux", "AsyncStorage", "CodePush", "Flipper"].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-muted text-foreground text-sm border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-card p-6 border">
                <h3 className="text-lg font-bold mb-4 text-foreground">App Categories</h3>
                <ul className="space-y-2 text-muted-foreground text-sm mb-6">
                  <li>• Enterprise & Productivity Apps</li>
                  <li>• E-commerce & Marketplace</li>
                  <li>• Social & Communication</li>
                  <li>• Health & Fitness</li>
                  <li>• Education & Learning</li>
                  <li>• Finance & Banking</li>
                </ul>
                
                <h4 className="font-bold text-foreground mb-2">Ready to Launch?</h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  Build a mobile app that engages users across all platforms.
                </p>
                <Link href="/#contact">
                  <Button className="w-full">
                    Start Mobile Project
                  </Button>
                </Link>
              </div>

              <div className="bg-secondary p-6 border">
                <h3 className="text-lg font-bold mb-3 text-foreground">Development Process</h3>
                <div className="space-y-3">
                  {[
                    "Mobile Strategy & Platform Planning",
                    "UI/UX Design & Prototyping",
                    "Cross-Platform Development",
                    "Testing & Quality Assurance",
                    "App Store Deployment",
                    "Analytics & Performance Monitoring"
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
