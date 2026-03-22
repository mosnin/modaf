"use client";

import { useState, useEffect } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cycle through magenta → yellow → cyan based on scroll position
  const getColor = (p: number) => {
    if (p < 0.33) {
      // magenta → yellow
      const t = p / 0.33;
      return lerpColor("#E91E8C", "#FFE500", t);
    } else if (p < 0.66) {
      // yellow → cyan
      const t = (p - 0.33) / 0.33;
      return lerpColor("#FFE500", "#00B4FF", t);
    } else {
      // cyan → magenta
      const t = (p - 0.66) / 0.34;
      return lerpColor("#00B4FF", "#E91E8C", t);
    }
  };

  return (
    <div className="fixed top-0 right-0 z-[90] w-1.5 h-full pointer-events-none">
      <div
        className="w-full rounded-full transition-all duration-100"
        style={{
          height: `${Math.max(progress * 100, 1)}%`,
          background: getColor(progress),
          boxShadow: `0 0 8px ${getColor(progress)}80`,
        }}
      />
    </div>
  );
}

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
