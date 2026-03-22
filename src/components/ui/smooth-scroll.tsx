"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    function lerpColor(a: string, b: string, t: number): string {
      const ar = parseInt(a.slice(1, 3), 16);
      const ag = parseInt(a.slice(3, 5), 16);
      const ab = parseInt(a.slice(5, 7), 16);
      const br = parseInt(b.slice(1, 3), 16);
      const bg = parseInt(b.slice(3, 5), 16);
      const bb = parseInt(b.slice(5, 7), 16);
      const r = Math.round(ar + (br - ar) * t);
      const g = Math.round(ag + (bg - ag) * t);
      const bl = Math.round(ab + (bb - ab) * t);
      return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${bl.toString(16).padStart(2, "0")}`;
    }

    function getColor(p: number) {
      if (p < 0.33) return lerpColor("#E91E8C", "#FFE500", p / 0.33);
      if (p < 0.66) return lerpColor("#FFE500", "#00B4FF", (p - 0.33) / 0.33);
      return lerpColor("#00B4FF", "#E91E8C", (p - 0.66) / 0.34);
    }

    // Update scroll progress bar on every Lenis scroll tick
    lenis.on("scroll", (e: any) => {
      const el = barRef.current;
      if (!el) return;
      const progress = e.progress as number;
      const color = getColor(progress);
      el.style.height = `${Math.max(progress * 100, 0.5)}%`;
      el.style.background = `linear-gradient(to bottom, ${getColor(Math.max(0, progress - 0.15))}, ${color})`;
      el.style.boxShadow = `0 0 10px ${color}60`;
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="fixed top-0 right-0 z-[90] w-1.5 h-full pointer-events-none">
      <div ref={barRef} className="w-full rounded-full" />
    </div>
  );
}
