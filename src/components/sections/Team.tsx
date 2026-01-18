"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Code, Palette, Cpu, Users } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Sohail Ishaque",
    role: "CEO & Founder",
    image: "/images/sohail_ishaque.png",
    bio: "Visionary leader with 15+ years in tech innovation.",
    expertise: ["Leadership", "Strategy", "Business"],
    social: {
      linkedin: "https://www.linkedin.com/in/sohail-ishaque/",
      twitter: "#",
      github: "https://github.com/t9fiction",
    },
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
    bio: "Architecture expert ensuring scalable and robust solutions.",
    expertise: ["Architecture", "DevOps", "Security"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Michael Ross",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop",
    bio: "Award-winning designer passionate about user experience.",
    expertise: ["UI/UX", "Design Systems", "Research"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Emily Watson",
    role: "Senior Developer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop",
    bio: "Full-stack wizard turning complex requirements into clean code.",
    expertise: ["Full-Stack", "AI/ML", "Cloud"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
];

const expertiseIcons: Record<string, React.ReactElement> = {
  "Leadership": <Users className="w-4 h-4" />,
  "Strategy": <Cpu className="w-4 h-4" />,
  "Business": <Cpu className="w-4 h-4" />,
  "Architecture": <Cpu className="w-4 h-4" />,
  "DevOps": <Cpu className="w-4 h-4" />,
  "Security": <Cpu className="w-4 h-4" />,
  "UI/UX": <Palette className="w-4 h-4" />,
  "Design Systems": <Palette className="w-4 h-4" />,
  "Research": <Palette className="w-4 h-4" />,
  "Full-Stack": <Code className="w-4 h-4" />,
  "AI/ML": <Code className="w-4 h-4" />,
  "Cloud": <Code className="w-4 h-4" />,
};

export default function Team() {
  return (
    <section id="team" className="py-24 bg-background/50 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium tracking-wide uppercase border border-primary/30 text-primary bg-primary/10 rounded-full"
          >
            <Users className="w-4 h-4" />
            Our Experts
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4 text-foreground max-w-3xl mx-auto"
          >
            Meet Our Leadership Team
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto text-lg"
          >
            {'A diverse group of experts with decades of combined experience in technology and innovation'}
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <div className="aspect-[4/5] relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

                  {/* Social Links (Reveal on Hover) */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={member.social.linkedin}
                      className="p-2 bg-background/80 backdrop-blur-sm border border-border rounded-lg hover:bg-primary hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.github}
                      className="p-2 bg-background/80 backdrop-blur-sm border border-border rounded-lg hover:bg-primary hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl mb-1 text-foreground">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-2">
                  {member.expertise.slice(0, 2).map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full flex items-center gap-1"
                    >
                      {expertiseIcons[skill]}
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
