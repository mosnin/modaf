"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CopyCommand } from "@/components/ui/copy-command";
import { BorderBeam } from "@/components/ui/border-beam";

export function CTASection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 bg-white/[0.02] overflow-hidden">
      <div className="mx-auto max-w-3xl w-full text-center">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold leading-tight">
            Ready to build?
          </h2>
          <p className="mt-4 text-lg text-white/50">
            Clone the framework, describe your idea, and let your AI agent
            handle the rest.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-8 flex justify-center">
            <CopyCommand command="git clone https://github.com/mosnin/LoxSammy docs/framework" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://github.com/mosnin/LoxSammy"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden inline-flex items-center justify-center h-[48px] sm:h-[52px] px-6 sm:px-8 text-sm sm:text-base font-semibold rounded-full bg-magenta text-white transition-all duration-150 hover:scale-[1.02] hover:shadow-lg hover:shadow-magenta/20"
            >
              View on GitHub
              <BorderBeam size={60} duration={3} colorFrom="#FFE500" colorTo="#00B4FF" borderWidth={2} />
            </a>
          </div>
          <p className="mt-4 text-sm text-white/30">
            Free and open source. No account required.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
