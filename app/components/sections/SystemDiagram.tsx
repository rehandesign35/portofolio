"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Container } from "@/app/components/layout/Container";
import { projects } from "@/app/lib/projects";

const nodeVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const connectorVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export function SystemDiagram() {
  const prefersReducedMotion = useReducedMotion();

  const pipelineProjects = projects.filter(
    (p) =>
      p.id === "sam" ||
      p.id === "follow-up" ||
      p.id === "pricing" ||
      p.id === "compliance",
  );

  const infraProjects = projects.filter(
    (p) => p.id === "monitoring" || p.id === "self-healing",
  );

  const oversightProject = projects.find(
    (p) => p.id === "signal-desk",
  );

  return (
    <section id="system" className="py-24">
      <Container>
        <motion.div
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.15 }}
          className="relative space-y-12"
        >
          {/* Three-row diagram wrapper --- */}
          <div className="relative space-y-12">
            {/* Row 1: Lead pipeline --- */}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-8 relative">
              {pipelineProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  variants={nodeVariants}
                  transition={{ delay: idx * 0.1 }}
                  className="w-full flex-1 min-w-0 sm:min-w-[140px] text-center relative"
                >
                  <div
                    className="relative rounded-lg border-2 border-[var(--color-layer-pipeline)] bg-surface p-4 sm:p-5 transition-colors hover:border-accent hover:bg-accent/5 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    tabIndex={0}
                    role="button"
                    onClick={() => {
                      const targetId = `project-${project.id}`;
                      const element = document.getElementById(targetId);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        const targetId = `project-${project.id}`;
                        const element = document.getElementById(targetId);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                  >
                    <p className="text-xs font-mono text-[var(--color-layer-pipeline)]">{project.number}</p>
                    <h4 className="mt-2 text-base sm:text-lg font-semibold text-text-primary">{project.name}</h4>
                    <p className="mt-1 text-xs sm:text-sm text-text-muted">{project.oneLiner}</p>
                  </div>
                </motion.div>
              ))}
              {pipelineProjects.length > 1 && pipelineProjects.slice(0, -1).map((_, i) => (
                <motion.svg
                  key={i}
                  variants={connectorVariants}
                  transition={{ delay: (i + 1) * 0.1 - 0.05 }}
                  className="absolute top-1/2 -translate-y-1/2 text-[var(--color-layer-pipeline)] pointer-events-none hidden sm:block"
                  width={16}
                  height={12}
                  style={{ left: `calc(${(i + 1) / pipelineProjects.length * 100}%)` }}
                >
                  <path
                    d="M2 0L10 4L2 8"
                    strokeWidth={1.5}
                    fill="none"
                    stroke="currentColor"
                  />
                </motion.svg>
              ))}
            </div>

            {/* Row 2: Infrastructure layer --- */}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-8 relative">
              {infraProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  variants={nodeVariants}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="w-full flex-1 min-w-0 sm:min-w-[140px] text-center relative"
                >
                  <div
                    className="relative rounded-lg border dashed border-2 border-[var(--color-layer-infra)] bg-surface p-4 sm:p-5 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    tabIndex={0}
                    role="button"
                    onClick={() => {
                      const targetId = `project-${project.id}`;
                      const element = document.getElementById(targetId);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        const targetId = `project-${project.id}`;
                        const element = document.getElementById(targetId);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                  >
                    <p className="text-xs font-mono text-[var(--color-layer-infra)]">{project.number}</p>
                    <h4 className="mt-2 text-base sm:text-lg font-semibold text-text-primary">{project.name}</h4>
                    <p className="mt-1 text-xs sm:text-sm text-text-muted">{project.oneLiner}</p>
                  </div>
                </motion.div>
              ))}

              {/* Upward arrow connectors - P4 under left-1/4, P5 under left-3/4 */}
              <motion.svg
                variants={connectorVariants}
                transition={{ delay: 0.55 }}
                className="absolute top-0 left-1/4 -translate-x-1/2 text-[var(--color-layer-infra)] pointer-events-none hidden sm:block"
                width={12}
                height={10}
              >
                <path
                  d="M6 2L2 8M6 2L10 8"
                  strokeWidth={1.5}
                  strokeDasharray="4 2"
                  fill="none"
                  stroke="currentColor"
                />
              </motion.svg>
              <motion.svg
                variants={connectorVariants}
                transition={{ delay: 0.65 }}
                className="absolute top-0 left-3/4 -translate-x-1/2 text-[var(--color-layer-infra)] pointer-events-none hidden sm:block"
                width={12}
                height={10}
              >
                <path
                  d="M6 2L2 8M6 2L10 8"
                  strokeWidth={1.5}
                  strokeDasharray="4 2"
                  fill="none"
                  stroke="currentColor"
                />
              </motion.svg>
            </div>

            {/* Row 3: Oversight --- */}
            {oversightProject && (
              <div className="flex justify-center gap-8">
                <motion.div
                  variants={nodeVariants}
                  transition={{ delay: 0.7 }}
                  className="relative w-full sm:w-auto sm:flex-1 sm:min-w-[200px] text-center"
                >
                  <div
                    className="relative rounded-lg border-2 border-[var(--color-layer-oversight)] bg-surface p-5 sm:p-6 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    tabIndex={0}
                    role="button"
                    onClick={() => {
                      const targetId = `project-${oversightProject.id}`;
                      const element = document.getElementById(targetId);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        const targetId = `project-${oversightProject.id}`;
                        const element = document.getElementById(targetId);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                  >
                    <p className="text-xs font-mono text-[var(--color-layer-oversight)]">{oversightProject.number}</p>
                    <h4 className="mt-2 text-base sm:text-lg font-semibold text-text-primary">{oversightProject.name}</h4>
                    <p className="mt-1 text-xs sm:text-sm text-text-muted">{oversightProject.oneLiner}</p>
                  </div>
                </motion.div>
              </div>
            )}

            {/* Dashed vertical line from Row 1 center to Row 3 --- */}
            <motion.div
              variants={connectorVariants}
              transition={{ delay: 0.35 }}
              className="absolute top-0 left-1/2 -translate-x-1/2 h-full pointer-events-none hidden sm:block"
            >
              <svg
                viewBox="0 0 2 100"
                width={2}
                height="100%"
                preserveAspectRatio="none"
              >
                <path
                  d="M1 0L1 100"
                  strokeWidth={1.5}
                  strokeDasharray="4 2"
                  stroke="currentColor"
                />
              </svg>
            </motion.div>
          </div>

          {/* Caption/Legend --- */}
          <motion.div
            variants={connectorVariants}
            transition={{ delay: 0.8 }}
            className="mt-12 flex flex-wrap gap-6 text-text-muted text-xs justify-center"
          >
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded border border-[var(--color-layer-pipeline)]"
                style={{ borderColor: "var(--color-layer-pipeline)" }}
              />
              <span>Teal: Lead pipeline (P1→P2→P3→P6)</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded border border-[var(--color-layer-infra)]"
                style={{ borderColor: "var(--color-layer-infra)" }}
              />
              <span>Purple: Infrastructure (P4↑P5)</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded border border-[var(--color-layer-oversight)]"
                style={{ borderColor: "var(--color-layer-oversight)" }}
              />
              <span>Amber: Oversight (P7 watches P1&P5)</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
