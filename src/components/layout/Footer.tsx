import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, Mail, Code, Zap, Shield, Users, Cloud, Palette, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border mt-auto transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src="/logo.png"
                  alt="Numeric Souls Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-bold tracking-tighter text-foreground">
                Numeric Souls
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed mb-6">
              Transforming ideas into digital excellence through innovative software solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-accent">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4 uppercase tracking-wide text-sm">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"><Code size={14} className="text-primary" /> Custom Development</Link></li>
              <li><Link href="/#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"><Zap size={14} className="text-primary" /> AI & ML</Link></li>
              <li><Link href="/#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"><Cloud size={14} className="text-primary" /> Cloud Solutions</Link></li>
              <li><Link href="/#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"><Palette size={14} className="text-primary" /> UI/UX Design</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4 uppercase tracking-wide text-sm">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"><Users size={14} className="text-primary" /> About Us</Link></li>
              <li><Link href="/#team" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"><Users size={14} className="text-primary" /> Our Team</Link></li>
              <li><Link href="/#portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"><Code size={14} className="text-primary" /> Portfolio</Link></li>
              <li><Link href="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"><Mail size={14} className="text-primary" /> Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4 uppercase tracking-wide text-sm">Contact</h3>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground flex items-start gap-2">
                <Mail size={14} className="text-primary mt-0.5 flex-shrink-0" />
                <span>sohail.sohailishaq@gmail.com</span>
              </li>
              <li className="text-sm text-muted-foreground flex items-start gap-2">
                <Phone size={14} className="text-primary mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="text-sm text-muted-foreground flex items-start gap-2">
                <MapPin size={14} className="text-primary mt-0.5 flex-shrink-0" />
                <span>New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Numeric Souls. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
