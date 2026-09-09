"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Container } from "./Container";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "System", href: "#system" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = navLinks.map((l) => l.href.slice(1));

export function Header() {
  const prefersReducedMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        { rootMargin: "-20% 0px -60% 0px" },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return;

      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: prefersReducedMotion ? "auto" : "smooth" });
    },
    [prefersReducedMotion],
  );

  const bgOpacity = scrolled ? 0.8 : 0;
  const blur = scrolled ? 12 : 0;
  const borderBottom = scrolled ? "rgba(255,255,255,0.08)" : "transparent";

  return (
    <header
      className="fixed top-0 z-50 w-full transition-colors"
      style={{
        backgroundColor: `rgba(10, 10, 11, ${bgOpacity})`,
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        borderBottom: `1px solid ${borderBottom}`,
        transition: prefersReducedMotion ? "none" : "background-color 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease",
      }}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-tight text-text-primary"
          >
            rehan.
          </Link>

          <nav className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="relative text-sm transition-colors"
                  style={{
                    color: isActive ? "#E8873A" : "#9A9A9F",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.target as HTMLElement).style.color = "#F2F1ED";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.target as HTMLElement).style.color = "#9A9A9F";
                  }}
                >
                  {link.label}
                  {isActive && (
                    <AnimatePresence>
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-accent"
                        initial={prefersReducedMotion ? false : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={prefersReducedMotion ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 30 }}
                      />
                    </AnimatePresence>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </Container>
    </header>
  );
}
