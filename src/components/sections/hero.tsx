"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { CopyCommand } from "@/components/ui/copy-command";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-12 sm:pb-16 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(233,30,140,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(233,30,140,0.04) 1px, transparent 1px),
              linear-gradient(rgba(0,180,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,180,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px, 60px 60px, 20px 20px, 20px 20px',
            maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
            animation: 'grid-fade 8s ease-in-out infinite',
          }}
        />
      </div>

      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#E91E8C08_0%,_transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mb-8"
      >
        <Image
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKGZUcil50cL3l4ddD6f3aw0ebnvLr_dTXSl5LUgaMbZLIAs19H9u5TQEozHOH2M2SaRlz6GcynqLy3uF2O8pEWC5K8VDj0k19kZPGAxQ3qI0KEjRO_ql_XHAXoly_Tw7dYvja-tnddTIYtDUOkNDO7WSNBldJad3v3zEIDdt8ENoRMf1FSs63kGcjZAjr/w604-h202/Untitled%20design%20(52).png"
          alt="MODAF"
          width={400}
          height={134}
          className="h-24 sm:h-32 md:h-40 w-auto"
          priority
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 text-lg sm:text-xl md:text-2xl text-white/60 text-center max-w-2xl font-light"
      >
        A reusable framework that helps coding agents architect and build{" "}
        <span className="text-magenta font-medium">web applications</span> with
        precision and speed.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
        className="relative z-10 mt-4 text-base text-white/40 text-center max-w-xl"
      >
        Describe your idea. Clone the framework. Let your AI agent go to work.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.45, ease: "easeOut" }}
        className="relative z-10 mt-8 w-full max-w-md"
      >
        <CopyCommand command="git clone https://github.com/mosnin/LoxSammy" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.55, ease: "easeOut" }}
        className="relative z-10 mt-5 flex flex-row gap-3"
      >
        <a
          href="#get-started"
          className="glow-button inline-flex items-center justify-center gap-2 h-[44px] sm:h-[52px] px-5 sm:px-8 text-sm sm:text-base font-semibold rounded-full text-white transition-all duration-150 hover:scale-[1.02]"
        >
          <span className="relative z-10">Get Started</span>
        </a>
        <a
          href="https://github.com/mosnin/LoxSammy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 h-[44px] sm:h-[52px] px-5 sm:px-8 text-sm sm:text-base font-semibold rounded-full border border-white/20 text-white hover:bg-white/5 transition-all duration-150"
        >
          View on GitHub
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#get-started"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/60 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <HugeiconsIcon icon={ArrowDown01Icon} size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
}
