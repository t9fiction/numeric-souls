"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Users, CheckCircle, BarChart3 } from "lucide-react";

// Hook for animated numbers
function useCounter(end: number, duration: number = 2) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (time: number) => {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [end, duration, isInView]);

  return { ref, count };
}

const stats = [
  {
    id: 1,
    name: "Projects Delivered",
    value: 120,
    suffix: "+",
    icon: CheckCircle,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    id: 2,
    name: "Happy Clients",
    value: 50,
    suffix: "+",
    icon: Users,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    id: 3,
    name: "Years Experience",
    value: 7,
    suffix: "yrs",
    icon: BarChart3,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    id: 4,
    name: "Growth Rate",
    value: 300,
    suffix: "%",
    icon: TrendingUp,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
];

const StatCard = ({ stat }: { stat: typeof stats[0] }) => {
  const { ref, count } = useCounter(stat.value);

  return (
    <div
      ref={ref}
      className="p-6 rounded-2xl bg-card border border-border hover:border-border/80 transition-all duration-300 hover:shadow-lg"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${stat.bg}`}>
          <stat.icon className={`w-6 h-6 ${stat.color}`} />
        </div>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-bold tracking-tight">{count}</span>
        <span className={`text-xl font-medium ${stat.color}`}>{stat.suffix}</span>
      </div>
      <p className="text-muted-foreground mt-2 font-medium">{stat.name}</p>
    </div>
  );
};

export default function Stats() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30 -skew-y-2 pointer-events-none" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text & Graph */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Driving Results with <br />
                <span className="text-primary">Measurable Impact</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-lg">
                We believe in transparency and performance. Our numbers speak to the
                value we deliver across every engagement.
              </p>
            </div>

            {/* Custom SVG Graph Animation */}
            <div className="relative h-64 bg-card rounded-2xl border border-border p-6 overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 p-4">
                <div className="flex items-center gap-2 text-sm text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full font-medium">
                  <TrendingUp className="w-4 h-4" />
                  +24% vs last year
                </div>
              </div>
              
              <div className="h-full flex items-end">
                 <svg
                  viewBox="0 0 400 150"
                  className="w-full h-full overflow-visible"
                    preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Grid Lines */}
                  {[0, 1, 2, 3].map((i) => (
                      <line
                        key={i}
                        x1="0"
                        y1={i * 50}
                        x2="400"
                        y2={i * 50}
                        stroke="currentColor"
                        strokeOpacity="0.1"
                        strokeDasharray="4 4"
                      />
                  ))}

                  {/* Filled Area */}
                  <motion.path
                    d="M0,150 C50,150 50,100 100,100 C150,100 150,120 200,80 C250,40 250,60 300,30 C350,0 350,20 400,10 L400,150 Z"
                    fill="url(#gradient)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  />

                  {/* Line Path */}
                  <motion.path
                    d="M0,150 C50,150 50,100 100,100 C150,100 150,120 200,80 C250,40 250,60 300,30 C350,0 350,20 400,10"
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  
                  {/* Data Points */}
                  {[
                      { cx: 100, cy: 100 },
                      { cx: 200, cy: 80 },
                      { cx: 300, cy: 30 },
                      { cx: 400, cy: 10 }
                  ].map((point, i) => (
                      <motion.circle
                        key={i}
                        cx={point.cx}
                        cy={point.cy}
                        r="6"
                        fill="var(--background)"
                        stroke="var(--primary)"
                        strokeWidth="3"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 1 + (i * 0.2) }}
                      />
                  ))}
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column: Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat) => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
