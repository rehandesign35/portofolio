export type ProjectStatus = "launch-ready" | "early-testing";

export interface Project {
  id: string;
  number: string;
  name: string;
  oneLiner: string;
  stack: string[];
  metric: { value: string; label: string };
  feedsInto: string;
  status: ProjectStatus;
  href?: string;
  repoHref: string;
}

export const projects: Project[] = [
  {
    id: "sam",
    number: "01",
    name: "Sam (Voice Agent)",
    oneLiner: "Solar & home-services lead recovery via outbound voice.",
    stack: ["Vapi", "Twilio", "Node.js"],
    metric: { value: "59 calls", label: "handled, zero missed" },
    feedsInto: "Feeds into → Multi-Agent Follow-Up",
    status: "launch-ready",
    repoHref: "https://github.com/rehandesign35",
  },
  {
    id: "follow-up",
    number: "02",
    name: "Multi-Agent Follow-Up",
    oneLiner: "LangGraph.js supervisor routes and qualifies inbound leads.",
    stack: ["LangGraph.js", "OpenAI", "Supabase"],
    metric: { value: "1 lead", label: "tracked through pipeline" },
    feedsInto: "Feeds into → RAG Pricing Assistant",
    status: "early-testing",
    href: "https://solar-lead-followup-agents-nine.vercel.app",
    repoHref: "https://github.com/rehandesign35",
  },
  {
    id: "pricing",
    number: "03",
    name: "RAG Pricing Assistant",
    oneLiner: "Proposal & pricing chat grounded in company documentation.",
    stack: ["OpenAI Embeddings", "pgvector", "Next.js"],
    metric: { value: "0%", label: "hallucination rate (40 evals)" },
    feedsInto: "Feeds into → Compliance SDR",
    status: "launch-ready",
    href: "https://rag-pricing-assistant.vercel.app/",
    repoHref: "https://github.com/rehandesign35",
  },
  {
    id: "monitoring",
    number: "04",
    name: "Autonomous Monitoring Agent",
    oneLiner: "Playwright-based site & price watcher on a cron loop.",
    stack: ["Playwright", "Supabase", "GitHub Actions"],
    metric: {
      value: "v1→v2",
      label: "redesign survived, zero code changes",
    },
    feedsInto: "Infrastructure layer",
    status: "launch-ready",
    repoHref: "https://github.com/rehandesign35",
  },
  {
    id: "self-healing",
    number: "05",
    name: "Self-Healing Pipeline",
    oneLiner: "n8n retry & dead-letter system for failed agent workflows.",
    stack: ["n8n", "Supabase", "Railway"],
    metric: { value: "89.4%", label: "retry success rate" },
    feedsInto: "Infrastructure layer",
    status: "launch-ready",
    href: "https://self-healing-system-swart.vercel.app",
    repoHref: "https://github.com/rehandesign35",
  },
  {
    id: "compliance",
    number: "06",
    name: "Compliance-Aware SDR",
    oneLiner: "Opt-out handling & compliance-test automation for outbound.",
    stack: ["OpenAI", "Supabase", "Twilio"],
    metric: { value: "100%", label: "compliance test pass rate" },
    feedsInto: "Feeds into → Ops/Security Monitor",
    status: "launch-ready",
    href: "https://compliance-ai-sdr.vercel.app",
    repoHref: "https://github.com/rehandesign35",
  },
  {
    id: "signal-desk",
    number: "07",
    name: "Signal Desk",
    oneLiner: "Capstone dashboard watching every agent's data in one view.",
    stack: ["Next.js", "Supabase"],
    metric: { value: "<2s", label: "real-time detection latency" },
    feedsInto: "Watches the whole system",
    status: "launch-ready",
    href: "https://ops-security-log-monitoring-agent.vercel.app",
    repoHref: "https://github.com/rehandesign35",
  },
];
