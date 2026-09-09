"use client";

import { Container } from "@/app/components/layout/Container";
import { Card } from "@/app/components/ui/Card";
import { projects } from "@/app/lib/projects";

export function Projects() {
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
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
