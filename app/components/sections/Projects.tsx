"use client";

import { useReducedMotion, motion, type Variants } from "framer-motion";
import { Container } from "@/app/components/layout/Container";
import { Card } from "@/app/components/ui/Card";
import { projects } from "@/app/lib/projects";

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Projects() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="work" className="py-24">
      <Container>
        {/* Section header */}
        <div className="max-w-2xl">
          <p className="text-sm text-text-muted">The system</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            One system, seven agents.
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            Each project below is a working part of a lead-recovery pipeline —
            built, deployed, and stress-tested independently, then wired
            together.
          </p>
        </div>

        {/* Projects grid */}
        <motion.div
          variants={sectionVariants}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <Card project={project} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
