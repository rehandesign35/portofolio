"use client";

import { type Variants } from "framer-motion";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/app/components/layout/Container";

interface CaseStudy {
  number: string;
  title: string;
  outcome: string;
  stats: string[];
  tags: string[];
  description: string;
  caveat: string | null;
  feedsInto: string | null;
  link: string | null;
}

const caseStudies: CaseStudy[] = [
  {
    number: "01",
    title: "Sam — Solar Lead Recovery Voice Agent",
    outcome: "Answers missed leads and books qualified calls automatically.",
    stats: ["59 calls handled", "6 leads qualified", "2 calls booked", "2:44 avg call duration"],
    tags: ["Vapi", "Twilio", "Vercel", "Webhooks"],
    description: "An AI voice agent that calls back solar leads within minutes of form submission, qualifies them conversationally, and books consultations directly — built to prove the call-answering and qualification pipeline works end-to-end before conversion-rate claims matter.",
    caveat: "Call volume and reliability are the headline numbers, not conversion rate — conversion reflects seeded test data, not real ad spend.",
    feedsInto: "Feeds into → Follow-Up Agents",
    link: null,
  },
  {
    number: "02",
    title: "Multi-Agent Lead Qualification & Follow-Up",
    outcome: "A supervisor-led agent team qualifies and nurtures leads after the first call.",
    stats: ["LangGraph.js multi-agent architecture", "Early testing stage"],
    tags: ["LangGraph.js", "OpenAI", "Vercel"],
    description: "A team of specialized agents — supervised by a routing agent — picks up leads after Sam's initial call, classifies replies, and drives follow-up sequences until a lead is ready to book.",
    caveat: "Still in early testing with a single fully-tracked test lead. One known limitation: the Supervisor occasionally misclassifies short-but-valid replies — documented, not hidden.",
    feedsInto: "Feeds into → RAG Pricing Assistant",
    link: "solar-lead-followup-agents-nine.vercel.app",
  },
  {
    number: "03",
    title: "RAG Proposal & Pricing Assistant",
    outcome: "Answers pricing and proposal questions grounded in real source documents, with zero hallucinations.",
    stats: ["100% citation accuracy (29/29)", "96.7% recall@5", "93.3% exact lookup", "80% synthesis accuracy", "90% refusal precision", "0% hallucination rate (0/40)"],
    tags: ["OpenAI text-embedding-3-small", "pgvector", "Supabase", "Vercel"],
    description: "A retrieval-augmented assistant that answers pricing and proposal questions by pulling directly from source documents rather than generating answers from memory — evaluated across citation accuracy, retrieval recall, exact lookups, synthesis, and refusal handling.",
    caveat: null,
    feedsInto: "Feeds into → Compliance-Aware SDR",
    link: "https://rag-pricing-assistant.vercel.app/",
  },
  {
    number: "04",
    title: "Autonomous Playwright Monitoring Agent",
    outcome: "Watches a live target end-to-end and survived a full backend redesign with zero code changes.",
    stats: ["57.1% extraction accuracy (4/7)", "40% false-positive rate (2/5)", "8.63s avg alert latency"],
    tags: ["Playwright", "Supabase", "Slack", "GitHub Actions"],
    description: "An autonomous agent that monitors a target site, extracts structured signals, persists results, and alerts via Slack on a scheduled loop — infrastructure layer watching the system rather than a customer-facing project.",
    caveat: "Extraction accuracy and false-positive rate are still rough — the strongest proof point here is architectural resilience: the pipeline survived a full v1→v2 backend redesign with zero code changes.",
    feedsInto: null,
    link: null,
  },
  {
    number: "05",
    title: "Self-Healing n8n Pipeline",
    outcome: "Automatically retries and recovers failed workflow runs without manual intervention.",
    stats: ["233 total runs", "217 successful", "89.39% retry success rate", "6.87% dead-letter rate", "2527.64ms avg recovery time"],
    tags: ["n8n", "Railway", "Supabase"],
    description: "A self-healing automation pipeline that detects failed runs, retries them automatically, and routes unrecoverable failures to a dead-letter queue — infrastructure layer, stress-tested with real run data.",
    caveat: null,
    feedsInto: null,
    link: "self-healing-system-swart.vercel.app",
  },
  {
    number: "06",
    title: "Compliance-Aware AI SDR",
    outcome: "Handles outbound messaging with built-in opt-out and compliance enforcement.",
    stats: ["6/6 compliance tests passing", "100% compliance accuracy", "Verified opt-out processing time"],
    tags: ["OpenAI", "Supabase", "Vercel"],
    description: "An AI SDR that sends outbound messages while enforcing opt-out handling and compliance rules automatically — verified against a real compliance test suite, not just described.",
    caveat: null,
    feedsInto: null,
    link: "https://compliance-ai-sdr.vercel.app",
  },
  {
    number: "07",
    title: "Signal Desk — Ops & Security Log Monitoring",
    outcome: "Watches the whole system's Supabase data for anomalies and surfaces incidents in real time.",
    stats: ["1s detection latency", "85 total incidents", "51 open incidents", "48.5% false-positive rate"],
    tags: ["Supabase", "Vercel", "Next.js"],
    description: "The capstone project — an ops/security monitoring dashboard that watches Sam's and the self-healing pipeline's Supabase data across the whole system and surfaces incidents as they happen.",
    caveat: "False-positive rate and open-incident volume are still being tuned — flagged honestly rather than hidden. Detection latency itself is real and fast.",
    feedsInto: "Watches the whole system",
    link: "ops-security-log-monitoring-agent.vercel.app",
  },
];

const blockVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function CaseStudyBlock({ study }: { study: CaseStudy }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      variants={blockVariants}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
      className="rounded-lg border border-surface-border bg-surface p-6 md:p-8"
    >
      {/* Top row: number */}
      <div className="mb-4 flex items-center gap-3">
        <span className="font-mono text-sm text-accent">{study.number}</span>
      </div>

      {/* Title */}
      <h3 className="font-display text-xl font-semibold text-text-primary sm:text-2xl">
        {study.link ? (
          <a
            href={study.link.startsWith("http") ? study.link : `https://${study.link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            {study.title}
          </a>
        ) : (
          study.title
        )}
      </h3>

      {/* One-liner */}
      <p className="mt-2 text-sm text-text-muted sm:text-base">{study.outcome}</p>

      {/* Stat row */}
      <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
        {study.stats.map((stat) => (
          <span
            key={stat}
            className="break-words font-mono text-xs text-text-primary sm:text-sm"
          >
            {stat}
          </span>
        ))}
      </div>

      {/* Tech tags */}
      <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
        {study.tags.map((tag) => (
          <span
            key={tag}
            className="whitespace-nowrap rounded-full border border-surface-border px-2.5 py-0.5 text-xs text-text-muted sm:px-3 sm:py-1"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div className="my-5 border-t border-surface-border sm:my-6" />

      {/* Description */}
      <p className="break-words text-sm leading-relaxed text-text-muted sm:text-base">
        {study.description}
      </p>

      {/* Caveat */}
      {study.caveat && (
        <p className="mt-3 break-words text-xs text-text-muted/70 italic sm:mt-4 sm:text-sm">
          {study.caveat}
        </p>
      )}

      {/* Feeds into */}
      {study.feedsInto && (
        <p className="mt-3 break-words text-xs text-text-muted italic sm:mt-4">
          {study.feedsInto}
        </p>
      )}

      {/* Link */}
      {study.link && (
        <div className="mt-3 sm:mt-4">
          <a
            href={study.link.startsWith("http") ? study.link : `https://${study.link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-muted transition-colors hover:text-accent"
          >
            View live ↗
          </a>
        </div>
      )}
    </motion.article>
  );
}

export function CaseStudies() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="case-studies" className="py-24">
      <Container>
        {/* Section header */}
        <div className="max-w-2xl">
          <p className="text-sm text-text-muted">Deep dives</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Case Studies
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            Seven projects, one system — each with verified, real metrics.
          </p>
        </div>

        {/* Case study blocks — each animates independently on scroll */}
        <div className="mt-16 flex flex-col gap-10 sm:gap-12">
          {caseStudies.map((study) => (
            <CaseStudyBlock key={study.number} study={study} />
          ))}
        </div>
      </Container>
    </section>
  );
}
