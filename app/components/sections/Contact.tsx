"use client";

import { Container } from "@/app/components/layout/Container";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm text-text-muted">Get in touch</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Let&apos;s build something.
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            Open to freelance AI engineering work and full-time roles.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="mailto:rehanrizwan041@gmail.com"
            className="rounded-full bg-accent px-7 py-3 font-medium text-background transition-colors hover:bg-accent/90"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/rehan-rizwan-1b4266400/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-surface-border px-7 py-3 font-medium text-text-primary transition-colors hover:bg-surface"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/rehandesign35"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-surface-border px-7 py-3 font-medium text-text-primary transition-colors hover:bg-surface"
          >
            GitHub
          </a>
          <a
            href="/resume.docx"
            download
            className="rounded-full border border-surface-border px-7 py-3 font-medium text-text-primary transition-colors hover:bg-surface"
          >
            Download Resume
          </a>
        </div>
      </Container>
    </section>
  );
}
