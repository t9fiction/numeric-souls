import Link from "next/link";
import { Code2, Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border mt-auto transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 flex items-center justify-center text-foreground border border-foreground/20 group-hover:bg-foreground group-hover:text-background transition-colors">
                <Code2 size={20} />
              </div>
              <span className="text-xl font-bold tracking-tighter text-foreground">
                LUMINA
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Precision digital engineering for the future.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-foreground mb-4 uppercase tracking-wide text-sm">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground font-mono">
              <li><Link href="#" className="hover:text-foreground transition-colors">Web Development</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Mobile Apps</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">UI/UX Design</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">System Architecture</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-foreground mb-4 uppercase tracking-wide text-sm">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground font-mono">
              <li><Link href="#" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Press</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-foreground mb-4 uppercase tracking-wide text-sm">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors border p-2 border-transparent hover:border-border"><Github size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors border p-2 border-transparent hover:border-border"><Twitter size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors border p-2 border-transparent hover:border-border"><Linkedin size={20} /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors border p-2 border-transparent hover:border-border"><Mail size={20} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-mono text-muted-foreground">© {new Date().getFullYear()} LUMINA SYSTEMS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 text-xs font-mono text-muted-foreground">
            <Link href="#" className="hover:text-foreground">PRIVACY</Link>
            <Link href="#" className="hover:text-foreground">TERMS</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
