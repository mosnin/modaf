"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { BorderBeam } from "@/components/ui/border-beam";

const phases = [
  {
    phase: "Phase 0-2",
    title: "Discovery & Planning",
    description: "Interactive interview, project docs generation, architecture plan",
    color: "bg-cyan",
    beamFrom: "#00B4FF",
    beamTo: "#FFE500",
  },
  {
    phase: "Phase 3-4",
    title: "Foundation",
    description: "Next.js setup, database schema, shared utilities, validation gates",
    color: "bg-cyan",
    beamFrom: "#00B4FF",
    beamTo: "#E91E8C",
  },
  {
    phase: "Phase 5-6",
    title: "Auth & Onboarding",
    description: "Login, signup, email verification, multi-step onboarding flow",
    color: "bg-yellow",
    beamFrom: "#FFE500",
    beamTo: "#00B4FF",
  },
  {
    phase: "Phase 7-8",
    title: "App Shell & Dashboard",
    description: "Responsive layout, navigation, dashboard with real metrics",
    color: "bg-yellow",
    beamFrom: "#FFE500",
    beamTo: "#E91E8C",
  },
  {
    phase: "Phase 9-11",
    title: "Features & Settings",
    description: "Core CRUD, settings, Stripe billing, admin panel",
    color: "bg-magenta",
    beamFrom: "#E91E8C",
    beamTo: "#FFE500",
  },
  {
    phase: "Phase 12-14",
    title: "Email, Marketing & Polish",
    description: "Email templates, marketing site, edge cases, QA checklist",
    color: "bg-magenta",
    beamFrom: "#E91E8C",
    beamTo: "#00B4FF",
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
    <section id="how-it-works" className="py-20 md:py-32 px-4 sm:px-6 bg-white/[0.02] overflow-hidden">
      <div className="mx-auto max-w-5xl w-full">
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
              <div className="relative overflow-hidden text-center py-6 px-4 rounded-xl border border-white/10 bg-white/[0.02]">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-white/40 mt-1">{stat.label}</div>
                <BorderBeam
                  size={80}
                  duration={4}
                  delay={i * 0.8}
                  colorFrom="#00B4FF"
                  colorTo="#E91E8C"
                  borderWidth={1}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Phase cards grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {phases.map((phase, i) => (
            <ScrollReveal key={phase.phase} delay={i * 0.08}>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 h-full group hover:bg-white/[0.04] transition-colors duration-300">
                {/* Phase dot + label */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-2.5 h-2.5 rounded-full ${phase.color} shadow-[0_0_8px] shadow-current`} />
                  <span className="text-xs font-mono font-bold text-white/40">
                    {phase.phase}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1.5">
                  {phase.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {phase.description}
                </p>
                <BorderBeam
                  size={100}
                  duration={6}
                  delay={i * 0.5}
                  colorFrom={phase.beamFrom}
                  colorTo={phase.beamTo}
                  borderWidth={1}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
