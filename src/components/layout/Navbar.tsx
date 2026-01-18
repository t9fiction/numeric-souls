"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/#services", hasDropdown: true },
    { name: "Work", href: "/#portfolio" },
    { name: "About", href: "/#about" },
    { name: "Team", href: "/#team" },
    { name: "Contact", href: "/#contact" },
  ];

  const serviceSublinks = [
    { name: "Custom Development", href: "/#services" },
    { name: "AI & Machine Learning", href: "/#services" },
    { name: "Cloud Solutions", href: "/#services" },
    { name: "UI/UX Design", href: "/#services" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled ? "bg-background/90 backdrop-blur-md border-border" : "bg-transparent border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-lg">
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
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase flex items-center gap-1",
                      link.hasDropdown && "cursor-pointer"
                    )}
                    onClick={(e) => {
                      if (link.hasDropdown) {
                        e.preventDefault();
                        setServicesOpen(!servicesOpen);
                      }
                    }}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown size={16} className="transition-transform" style={{ transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />}
                  </Link>

                  {link.hasDropdown && (
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg py-2 z-50"
                        >
                          {serviceSublinks.map((sublink, idx) => (
                            <Link
                              key={idx}
                              href={sublink.href}
                              className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                              onClick={() => setServicesOpen(false)}
                            >
                              {sublink.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
              <ThemeToggle />
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <div
                    className="flex justify-between items-center px-3 py-4 border-b border-border text-lg font-medium text-muted-foreground hover:text-foreground"
                    onClick={() => link.hasDropdown && setServicesOpen(!servicesOpen)}
                  >
                    <Link href={link.href} onClick={() => !link.hasDropdown && setIsOpen(false)}>
                      {link.name}
                    </Link>
                    {link.hasDropdown && <ChevronDown size={20} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />}
                  </div>

                  {link.hasDropdown && servicesOpen && (
                    <div className="pl-6 space-y-1">
                      {serviceSublinks.map((sublink, idx) => (
                        <Link
                          key={idx}
                          href={sublink.href}
                          className="block px-3 py-2 text-base text-muted-foreground hover:text-foreground hover:bg-accent rounded-md"
                          onClick={() => setIsOpen(false)}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
