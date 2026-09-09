"use client";

import { Container } from "@/app/components/layout/Container";

export function About() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm text-text-muted">About</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Why this exists.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            I&apos;m Rehan, an AI engineering student in Pakistan. I build agentic
            systems — voice agents, RAG pipelines, multi-agent orchestration —
            and I care more about proving a system works with real metrics than
            describing what it could do. Every number on this page comes from
            live data or an actual eval run, not a projection.
          </p>
        </div>
      </Container>
    </section>
  );
}
