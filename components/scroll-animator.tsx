"use client";

import { useEffect } from "react";

export function ScrollAnimator() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    elements.forEach((el) => {
      const delay = el.dataset.revealDelay;
      if (delay) {
        el.style.setProperty("--reveal-delay", `${delay}ms`);
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    elements.forEach((el) => {
      if (el.classList.contains("reveal-immediate")) {
        requestAnimationFrame(() => el.classList.add("is-visible"));
        return;
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
