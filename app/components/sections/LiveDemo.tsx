"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Container } from "@/app/components/layout/Container";

const DEMO_URL = "https://rag-pricing-assistant.vercel.app/";

export function LiveDemo() {
  const [loaded, setLoaded] = useState(false);
  const [timedOut, setTimedOut] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setTimedOut(true);
    }, 8000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleLoad = useCallback(() => {
    setLoaded(true);
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  return (
    <section id="demo" className="py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm text-text-muted">Live demo</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Try It Live
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            This is Project 3 — the RAG pricing assistant — running live. Ask it
            a pricing question.
          </p>
        </div>

        <div
          className="mt-12 relative overflow-hidden rounded-lg border border-surface-border bg-surface"
        >
          {/* Loading skeleton */}
          {!loaded && !timedOut && (
            <div className="h-[500px] md:h-[600px] w-full animate-pulse bg-surface" />
          )}

          {/* Timeout fallback */}
          {timedOut && (
            <div className="flex flex-col items-center justify-center gap-4 p-12 text-center">
              <p className="text-text-muted">
                Demo didn&apos;t load — open it directly:
              </p>
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted transition-colors hover:text-text-primary"
              >
                Open in new tab ↗
              </a>
            </div>
          )}

          {/* Iframe */}
          {!timedOut && (
            <iframe
              src={DEMO_URL}
              title="RAG Pricing Assistant — Live Demo"
              className={`h-[500px] md:h-[600px] w-full border-0 ${loaded ? "block" : "hidden"}`}
              onLoad={handleLoad}
              allow="microphone"
            />
          )}
        </div>

        {/* Fallback link */}
        <div className="mt-4">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-muted transition-colors hover:text-text-primary"
          >
            Open in new tab ↗
          </a>
        </div>
      </Container>
    </section>
  );
}
