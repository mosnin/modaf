"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Tree, type TreeViewElement } from "@/components/ui/file-tree";

const treeElements: TreeViewElement[] = [
  {
    id: "docs",
    name: "docs/framework/",
    type: "folder",
    children: [
      {
        id: "website",
        name: "website/",
        type: "folder",
        children: [
          { id: "w1", name: "saas_home_page_system.md", type: "file" },
          { id: "w2", name: "design_system_tokens.md", type: "file" },
          { id: "w3", name: "public_component_specs.md", type: "file" },
          { id: "w4", name: "public_copy_conversion_rules.md", type: "file" },
          { id: "w5", name: "public_screen_archetypes.md", type: "file" },
          { id: "w6", name: "component_library_spec.md", type: "file" },
          { id: "w7", name: "nextjs_folder_structure.md", type: "file" },
          { id: "w8", name: "sitemap_diagram.md", type: "file" },
        ],
      },
      {
        id: "internal",
        name: "internal/",
        type: "folder",
        children: [
          { id: "i1", name: "01_app_shell.md", type: "file" },
          { id: "i2", name: "02_auth_and_onboarding.md", type: "file" },
          { id: "i3", name: "07_data_models.md", type: "file" },
          { id: "i4", name: "09_build_rules_internal.md", type: "file" },
          { id: "i5", name: "10_design_tokens_internal.md", type: "file" },
          { id: "i6", name: "21_validation_gates.md", type: "file" },
          { id: "i7", name: "22_pattern_snapshot.md", type: "file" },
          { id: "i8", name: "...and 15 more", type: "file" },
        ],
      },
      {
        id: "templates",
        name: "templates/",
        type: "folder",
        children: [
          { id: "t1", name: "00_app_idea_template.md", type: "file" },
          { id: "t2", name: "01_project_brief_template.md", type: "file" },
          { id: "t3", name: "02_feature_spec_template.md", type: "file" },
          { id: "t4", name: "03_user_flows_template.md", type: "file" },
          { id: "t5", name: "05_tech_stack_template.md", type: "file" },
          { id: "t6", name: "07_acceptance_criteria_template.md", type: "file" },
          { id: "t7", name: "08_qa_checklist_template.md", type: "file" },
        ],
      },
      {
        id: "phases",
        name: "phases/",
        type: "folder",
        children: [
          { id: "p1", name: "phase_00_welcome.md", type: "file" },
          { id: "p2", name: "phase_01_discovery.md", type: "file" },
          { id: "p3", name: "phase_02_scaffold.md", type: "file" },
          { id: "p4", name: "...", type: "file" },
          { id: "p5", name: "phase_14_polish.md", type: "file" },
        ],
      },
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

        <ScrollReveal delay={0.1}>
          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-6 md:p-8">
            <Tree
              elements={treeElements}
              initialExpandedItems={["docs", "website", "internal", "templates", "phases"]}
              className="text-white/70 [&_button]:text-white/70 [&_svg]:text-white/40 [&_button:hover]:text-white [&_.bg-muted]:bg-white/10"
              sort="none"
            />
          </div>
        </ScrollReveal>

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
