"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({ as: Element = "div", className, children, ...props }) {
  const elementRef = useRef(null);
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    setArmed(true);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(element);
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -32px 0px" });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <Element ref={elementRef} className={className} data-armed={armed ? "true" : undefined} data-visible={visible ? "true" : undefined} {...props}>{children}</Element>;
}