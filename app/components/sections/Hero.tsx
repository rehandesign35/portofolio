"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useReducedMotion,
  useAnimationControls,
  type Variants,
} from "framer-motion";

const stats = [
  { value: "59 calls", label: "handled by the voice agent, zero missed" },
  { value: "0%", label: "hallucination rate, 40 RAG evaluation queries" },
  { value: "100%", label: "compliance test pass rate, opt-outs" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const controls = useAnimationControls();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !prefersReducedMotion) {
      controls.start("visible");
    }
  }, [mounted, prefersReducedMotion, controls]);

  const shouldAnimate = mounted && !prefersReducedMotion;

  return (
    <motion.div
      variants={containerVariants}
      initial={shouldAnimate ? "hidden" : false}
      animate={shouldAnimate ? controls : "visible"}
      className="flex flex-col gap-8"
    >
      {/* Status badge */}
      <motion.div variants={childVariants}>
        <span className="inline-flex items-center gap-2 rounded-full border border-surface-border px-4 py-1.5">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
          <span className="text-sm text-text-muted">Open to work — Sept 2026</span>
        </span>
      </motion.div>

      {/* Identity subline */}
      <motion.p variants={childVariants} className="text-sm text-text-muted mb-4">
        Rehan — AI engineer
      </motion.p>

      {/* Headline */}
      <motion.h1
        variants={childVariants}
        className="font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl"
      >
        AI systems that catch the leads your business is already losing.
      </motion.h1>

      {/* Subhead */}
      <motion.p
        variants={childVariants}
        className="max-w-xl text-lg leading-relaxed text-text-muted"
      >
        Seven connected agents — voice, follow-up, pricing, compliance, and
        monitoring — built and stress-tested with real data, not demos.
      </motion.p>

      {/* Stat row */}
      <motion.div variants={childVariants} className="flex flex-wrap gap-10">
        {stats.map((stat) => (
          <div key={stat.value} className="flex flex-col gap-1">
            <span className="font-display text-3xl font-bold text-text-primary">
              {stat.value}
            </span>
            <span className="max-w-[140px] text-sm leading-snug text-text-muted">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* CTA row */}
      <motion.div variants={childVariants} className="flex items-center gap-4">
        <a
          href="#system"
          className="rounded-full bg-accent px-7 py-3 font-medium text-background transition-colors hover:bg-accent/90"
        >
          See the system live
        </a>
        <a
          href="https://github.com/rehandesign35"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-surface-border px-7 py-3 font-medium text-text-primary transition-colors hover:bg-surface"
        >
          View source on GitHub
        </a>
      </motion.div>
    </motion.div>
  );
}
