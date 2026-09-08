"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/app/lib/projects";

export function Card({ project }: { project: Project }) {
  const prefersReducedMotion = useReducedMotion();
  const isInfrastructure =
    project.feedsInto === "Infrastructure layer" ||
    project.feedsInto === "Watches the whole system";

  return (
    <motion.div
      id={`project-${project.id}`}
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="flex h-full flex-col rounded-lg border border-surface-border bg-surface p-6 transition-colors duration-200 hover:border-accent/40 hover:shadow-[0_0_20px_-4px] hover:shadow-accent/10"
    >
      {/* Top row: number + status */}
      <div className="mb-3 flex items-center gap-3">
        <span className="font-mono text-sm text-accent">{project.number}</span>
        {project.status === "early-testing" && (
          <span className="rounded-full border border-surface-border px-2 py-0.5 text-xs text-text-muted">
            Early testing
          </span>
        )}
      </div>

      {/* Name */}
      <h3 className="font-display text-xl font-semibold text-text-primary">
        {project.name}
      </h3>

      {/* One-liner */}
      <p className="mt-1 text-sm text-text-muted">{project.oneLiner}</p>

      {/* Metric */}
      <p className="mt-4">
        <span className="font-display text-lg font-bold text-accent">
          {project.metric.value}
        </span>{" "}
        <span className="text-sm text-text-muted">{project.metric.label}</span>
      </p>

      {/* Stack tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-surface-border px-3 py-1 text-xs text-text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div className="my-4 border-t border-surface-border" />

      {/* Feeds into */}
      <p
        className={`text-xs ${isInfrastructure ? "text-text-muted" : "text-text-muted italic"}`}
      >
        {project.feedsInto}
      </p>

      {/* Bottom row: links */}
      <div className="mt-auto flex items-center gap-4 pt-4">
        <a
          href={project.href}
          className="text-sm text-text-muted transition-colors hover:text-accent"
        >
          Live demo
        </a>
        <a
          href={project.repoHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-text-muted transition-colors hover:text-accent"
        >
          Source
        </a>
      </div>
    </motion.div>
  );
}
