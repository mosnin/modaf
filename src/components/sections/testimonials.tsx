"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Marquee } from "@/components/ui/marquee";

const testimonials = [
  {
    quote:
      "I went from a vague idea to a fully structured SaaS codebase in a single afternoon. MODAF handled the architecture decisions I usually agonize over for weeks.",
    name: "Alex Rivera",
    role: "Solo Founder",
  },
  {
    quote:
      "The phased approach is what makes this different. My agent didn't just dump code — it asked the right questions, generated docs, and built methodically.",
    name: "Sarah Kim",
    role: "Full-Stack Developer",
  },
  {
    quote:
      "46 validation gates meant I caught structural issues before they became expensive rewrites. The pattern snapshot alone saved me from drift across sessions.",
    name: "Marcus Chen",
    role: "Tech Lead",
  },
  {
    quote:
      "I've tried half a dozen AI coding workflows. MODAF is the first one that produces code I'd actually ship. The framework docs are incredibly well structured.",
    name: "Priya Patel",
    role: "Indie Hacker",
  },
  {
    quote:
      "The generated project docs — feature spec, user flows, edge cases — were better than what most junior PMs produce. And the agent wrote them in minutes.",
    name: "Jordan Lee",
    role: "Product Manager",
  },
  {
    quote:
      "From Prisma schema to Stripe billing to marketing site — MODAF covers the full stack. I just had to describe what I wanted and approve each phase.",
    name: "Lena Kowalski",
    role: "Startup CTO",
  },
];

function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <div className="w-[280px] sm:w-[320px] md:w-[360px] flex-shrink-0 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-6">
      <p className="text-sm text-white/70 leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <div className="mt-4 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-magenta to-cyan flex items-center justify-center text-xs font-bold text-white">
          {name[0]}
        </div>
        <div>
          <div className="text-sm font-semibold text-white">{name}</div>
          <div className="text-xs text-white/40">{role}</div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3);

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white/[0.02] overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-magenta mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold leading-tight">
            Builders ship faster
            <br />
            <span className="text-magenta">with MODAF</span>
          </h2>
        </ScrollReveal>
      </div>

      <div className="mt-12 space-y-4">
        <Marquee>
          {row1.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </Marquee>
        <Marquee reverse>
          {row2.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
