import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ShineBorderProps = {
  children: ReactNode;
  className?: string;
  borderWidth?: number;
  duration?: number;
  color?: string;
};

export function ShineBorder({
  children,
  className,
  borderWidth = 1.5,
  duration = 4,
  color = "#E91E8C",
}: ShineBorderProps) {
  return (
    <div
      className={cn("relative rounded-xl sm:rounded-2xl", className)}
      style={{ padding: borderWidth }}
    >
      {/* Animated gradient border layer */}
      <div className="absolute inset-0 rounded-[inherit] overflow-hidden">
        <div
          className="absolute -inset-full animate-spin"
          style={{
            animationDuration: `${duration}s`,
            background: `conic-gradient(from 0deg, transparent, ${color}, transparent, transparent)`,
          }}
        />
      </div>
      {/* Content layer */}
      <div className="relative rounded-[inherit] bg-black">
        {children}
      </div>
    </div>
  );
}
