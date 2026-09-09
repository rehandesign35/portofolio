"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/app/lib/projects";

const categoryColors: Record<string, { base: string; hover: string }> = {
  sam:       { base: "#38BDF8", hover: "#7DD3FC" },
  "follow-up": { base: "#38BDF8", hover: "#7DD3FC" },
  pricing:   { base: "#38BDF8", hover: "#7DD3FC" },
  compliance:{ base: "#38BDF8", hover: "#7DD3FC" },
  monitoring:  { base: "#A78BFA", hover: "#C4B5FD" },
  "self-healing": { base: "#A78BFA", hover: "#C4B5FD" },
  "signal-desk":  { base: "#E8873A", hover: "#F5A66A" },
};

export function Card({ project }: { project: Project }) {
  const prefersReducedMotion = useReducedMotion();
  const colors = categoryColors[project.id] ?? { base: "#232326", hover: "#3A3A3F" };

  const feedsText = project.feedsInto;
  const chevronIndex = feedsText.indexOf("→");
  const hasChevron = chevronIndex !== -1;
  const feedsLabel = hasChevron ? feedsText.slice(0, chevronIndex).trim() : feedsText;
  const feedsTarget = hasChevron ? feedsText.slice(chevronIndex + 1).trim() : "";

  return (
    <motion.div
      id={`project-${project.id}`}
      whileHover={prefersReducedMotion ? undefined : { borderColor: colors.hover }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="flex h-full flex-col rounded-lg border bg-surface p-6"
      style={{ borderColor: colors.base }}
    >
      {/* Top row: number + status */}
      <div className="mb-3 flex items-center gap-3">
        <span className="font-mono text-sm" style={{ color: colors.base }}>{project.number}</span>
        {project.id === "pricing" && (
          <span className="inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-xs" style={{ borderColor: colors.base, color: colors.base }}>
            <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ backgroundColor: colors.base }} />
            Live
          </span>
        )}
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
      {feedsTarget ? (
        <p className="flex items-center gap-1.5 text-xs text-text-muted italic">
          <span>{feedsLabel}</span>
          <svg width={12} height={10} viewBox="0 0 12 10" className="shrink-0" style={{ color: colors.base }}>
            <path d="M2 0L10 4L2 8" strokeWidth={1.5} fill="none" stroke="currentColor" />
          </svg>
          <span>{feedsTarget}</span>
        </p>
      ) : (
        <p className="text-xs text-text-muted italic">{feedsText}</p>
      )}

      {/* Bottom row: links */}
      <div className="mt-auto flex items-center gap-4 pt-4">
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-muted transition-colors hover:text-accent"
          >
            Live demo
          </a>
        )}
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
