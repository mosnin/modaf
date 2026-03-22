"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const phases = [
  {
    phase: "Phase 0–2",
    title: "Discovery & Planning",
    description: "Interactive interview, project docs generation, architecture plan",
    color: "bg-cyan",
  },
  {
    phase: "Phase 3–4",
    title: "Foundation",
    description: "Next.js setup, database schema, shared utilities, validation gates",
    color: "bg-cyan",
  },
  {
    phase: "Phase 5–6",
    title: "Auth & Onboarding",
    description: "Login, signup, email verification, multi-step onboarding flow",
    color: "bg-yellow",
  },
  {
    phase: "Phase 7–8",
    title: "App Shell & Dashboard",
    description: "Responsive layout, navigation, dashboard with real metrics",
    color: "bg-yellow",
  },
  {
    phase: "Phase 9–11",
    title: "Features & Settings",
    description: "Core CRUD, settings, Stripe billing, admin panel",
    color: "bg-magenta",
  },
  {
    phase: "Phase 12–14",
    title: "Email, Marketing & Polish",
    description: "Email templates, marketing site, edge cases, QA checklist",
    color: "bg-magenta",
  },
];

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {target}
          {suffix}
        </motion.span>
      ) : (
        "0"
      )}
    </motion.span>
  );
}

const stats = [
  { value: 15, suffix: "", label: "Build phases" },
  { value: 46, suffix: "+", label: "Validation gates" },
  { value: 9, suffix: "", label: "Project docs generated" },
  { value: 22, suffix: "", label: "Framework files" },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 px-6 bg-white/[0.02]">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-cyan mb-2">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold leading-tight">
            14 phases from idea
            <br />
            <span className="text-cyan">to production</span>
          </h2>
          <p className="mt-4 text-lg text-white/50 max-w-xl">
            MODAF guides your AI agent through a structured, phased build
            process. Each phase reads only the files it needs, builds,
            validates, and waits for your approval before continuing.
          </p>
        </ScrollReveal>

        {/* Stats band */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.08}>
              <div className="text-center py-6 px-4 rounded-xl border border-white/10 bg-white/[0.02]">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-white/40 mt-1">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Phase timeline */}
        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-[15px] md:left-[19px] top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-6">
            {phases.map((phase, i) => (
              <ScrollReveal key={phase.phase} delay={i * 0.08}>
                <div className="flex gap-4 md:gap-6 items-start relative">
                  <div
                    className={`w-[10px] h-[10px] rounded-full ${phase.color} mt-2 flex-shrink-0 relative z-10 ring-4 ring-black`}
                  />
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-white/40">
                        {phase.phase}
                      </span>
                      <h3 className="text-lg font-semibold text-white">
                        {phase.title}
                      </h3>
                    </div>
                    <p className="text-sm text-white/40 mt-1">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
