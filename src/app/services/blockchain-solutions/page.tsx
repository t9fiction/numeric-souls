import { ArrowLeft, CheckCircle2, Lock, Coins, Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlockchainPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <Link href="/#services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft size={16} />
            Back to Services
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Blockchain Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Build the decentralized future with our comprehensive blockchain development services. From smart contracts to full-scale DeFi protocols, we create secure, scalable solutions that leverage the power of Web3 technology.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">What We Build</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We specialize in creating decentralized applications, smart contracts, and blockchain infrastructure that enables trustless, transparent, and secure business operations. Our solutions are built for scalability and real-world adoption.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <Lock className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Smart Contract Development</h3>
                    <p className="text-muted-foreground text-sm">Secure, audited smart contracts that automate business logic and eliminate intermediaries while ensuring transparency and trust.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Coins className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">DeFi Protocol Creation</h3>
                    <p className="text-muted-foreground text-sm">Complete decentralized finance solutions including lending platforms, DEXs, yield farming, and liquidity mining protocols.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="text-primary w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Web3 Integration</h3>
                    <p className="text-muted-foreground text-sm">Seamless integration of blockchain functionality into existing applications with wallet connectivity and transaction management.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 text-foreground">Core Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Smart Contract Development",
                  "DeFi Protocol Creation",
                  "NFT Marketplaces",
                  "DAO Implementation",
                  "Token Economics Design",
                  "Cross-Chain Solutions",
                  "Blockchain Auditing",
                  "Web3 dApp Development"
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
                  {["Solidity", "Ethereum", "Polygon", "Web3.js", "Ethers.js", "Hardhat", "IPFS", "MetaMask", "OpenZeppelin"].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-muted text-foreground text-sm border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-card p-6 border">
                <h3 className="text-lg font-bold mb-4 text-foreground">Project Types</h3>
                <ul className="space-y-2 text-muted-foreground text-sm mb-6">
                  <li>• Decentralized Exchanges (DEX)</li>
                  <li>• NFT Platforms & Marketplaces</li>
                  <li>• Lending & Borrowing Protocols</li>
                  <li>• Governance & DAO Systems</li>
                  <li>• Supply Chain Solutions</li>
                  <li>• Gaming & Metaverse dApps</li>
                </ul>
                
                <h4 className="font-bold text-foreground mb-2">Ready to Build Web3?</h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  Launch your blockchain project with our expert development team.
                </p>
                <Link href="/#contact">
                  <Button className="w-full">
                    Start Blockchain Project
                  </Button>
                </Link>
              </div>

              <div className="bg-secondary p-6 border">
                <h3 className="text-lg font-bold mb-3 text-foreground">Development Process</h3>
                <div className="space-y-3">
                  {[
                    "Blockchain Strategy & Architecture",
                    "Smart Contract Development",
                    "Security Audits & Testing",
                    "Testnet Deployment & Validation",
                    "Mainnet Launch & Monitoring",
                    "Community & Governance Setup"
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
