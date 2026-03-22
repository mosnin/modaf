import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
}

export function Marquee({ children, reverse, className }: MarqueeProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-black to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-black to-transparent" />

      <div
        className={cn(
          "flex w-max gap-4",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        {children}
        {children}
        {children}
        {children}
      </div>
    </div>
  );
}
