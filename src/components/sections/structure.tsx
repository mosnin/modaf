"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { HugeiconsIcon } from "@hugeicons/react";
import { FolderCodeIcon, Folder01Icon } from "@hugeicons/core-free-icons";

const structure = [
  {
    name: "website/",
    color: "text-magenta",
    description: "Public site — home page system, design tokens, component specs, copy rules, sitemap",
    files: [
      "saas_home_page_system.md",
      "design_system_tokens.md",
      "public_component_specs.md",
      "public_copy_conversion_rules.md",
      "public_screen_archetypes.md",
      "component_library_spec.md",
      "nextjs_folder_structure.md",
      "sitemap_diagram.md",
    ],
  },
  {
    name: "internal/",
    color: "text-cyan",
    description: "Product app — shell, auth, dashboard, features, billing, admin, data models, UI system",
    files: [
      "01_app_shell.md",
      "02_auth_and_onboarding.md",
      "07_data_models.md",
      "09_build_rules_internal.md",
      "10_design_tokens_internal.md",
      "21_validation_gates.md",
      "22_pattern_snapshot.md",
      "...and 15 more",
    ],
  },
  {
    name: "templates/",
    color: "text-yellow",
    description: "Project doc templates — app idea, feature spec, user flows, edge cases, tech stack",
    files: [
      "00_app_idea_template.md",
      "01_project_brief_template.md",
      "02_feature_spec_template.md",
      "03_user_flows_template.md",
      "05_tech_stack_template.md",
      "07_acceptance_criteria_template.md",
      "08_qa_checklist_template.md",
    ],
  },
  {
    name: "phases/",
    color: "text-white/60",
    description: "Phase index files — what to read, what to build, exit conditions for each phase",
    files: [
      "phase_00_welcome.md → phase_14_polish.md",
    ],
  },
];

export function StructureSection() {
  return (
    <section id="structure" className="py-20 md:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl w-full">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-yellow mb-2">
            Repository Structure
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold leading-tight">
            Documentation that
            <br />
            <span className="text-yellow">builds software</span>
          </h2>
          <p className="mt-4 text-lg text-white/50 max-w-xl">
            MODAF contains no code — only structured documentation that guides
            your AI agent through every decision. Four directories, each with a
            clear purpose.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {structure.map((dir, i) => (
            <ScrollReveal key={dir.name} delay={i * 0.08}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <HugeiconsIcon
                    icon={i < 2 ? FolderCodeIcon : Folder01Icon}
                    size={20}
                    className={dir.color}
                  />
                  <h3 className={`text-lg font-semibold font-mono ${dir.color}`}>
                    {dir.name}
                  </h3>
                </div>
                <p className="text-sm text-white/50 mb-4">{dir.description}</p>
                <div className="space-y-1 overflow-hidden">
                  {dir.files.map((file) => (
                    <div
                      key={file}
                      className="text-xs font-mono text-white/30 pl-4 border-l border-white/10 truncate"
                    >
                      {file}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tech stack marquee */}
        <ScrollReveal delay={0.2}>
          <div className="mt-16">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/30 text-center mb-6">
              Default tech stack
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "shadcn/ui",
                "Prisma",
                "PostgreSQL",
                "Auth.js",
                "Stripe",
                "Resend",
                "Motion",
                "Vercel",
                "Vitest",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium text-white/50 rounded-full border border-white/10 bg-white/[0.03]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
