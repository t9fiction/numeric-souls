"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { TrendingUp, Users, CheckCircle, BarChart3, Award, Clock } from "lucide-react";
import DataVisualization from "@/components/ui/DataVisualization";

// Hook removed in favor of framer-motion springs within the component for better performance

const stats = [
  {
    id: 1,
    name: "Projects Delivered",
    value: 200,
    suffix: "+",
    icon: CheckCircle,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    id: 2,
    name: "Happy Clients",
    value: 150,
    suffix: "+",
    icon: Users,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    id: 3,
    name: "Years Experience",
    value: 5,
    suffix: "yrs",
    icon: BarChart3,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    id: 4,
    name: "On-Time Delivery",
    value: 98,
    suffix: "%",
    icon: Clock,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
];

const StatCard = ({ stat }: { stat: typeof stats[0] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Use a spring for smooth counting animation
  const spring = useSpring(0, { mass: 1, stiffness: 50, damping: 15 });
  const display = useTransform(spring, (current: number) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      spring.set(stat.value);
    }
  }, [isInView, stat.value, spring]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${stat.bg}`}>
          <stat.icon className={`w-6 h-6 ${stat.color}`} />
        </div>
      </div>
      <div className="flex items-baseline gap-1">
        <motion.span className="text-3xl font-bold tracking-tight">{display}</motion.span>
        <span className={`text-lg font-medium ${stat.color}`}>{stat.suffix}</span>
      </div>
      <p className="text-muted-foreground mt-2 text-sm">{stat.name}</p>
    </motion.div>
  );
};

export default function Stats() {
  return (
    <section id="stats" className="py-24 bg-secondary/20 relative overflow-hidden">
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
            <Award className="w-4 h-4" />
            Our Impact
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4 text-foreground max-w-3xl mx-auto"
          >
            Proven Results, Measurable Impact
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto text-lg"
          >
            {'We deliver exceptional results that drive business growth and innovation'}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
