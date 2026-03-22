import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

const tools = [
  {
    name: "Cursor",
    src: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/cursor.png",
  },
  {
    name: "Claude",
    src: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/claude-color.png",
  },
  {
    name: "Codex",
    src: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/codex-color.png",
  },
  {
    name: "Windsurf",
    src: "https://cdn.toolcentral.ai/2025/11/Windsurf-logo.png",
  },
  {
    name: "OpenClaw",
    src: "https://zyugzloemocjcxmspsso.supabase.co/storage/v1/object/public/static-assets/openclaw-logo.png",
  },
  {
    name: "Kimi",
    src: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/kimi-color.png",
  },
  {
    name: "Jules",
    src: "https://static.wikia.nocookie.net/logopedia/images/4/4a/Google_Antigravity_icon.svg/revision/latest/scale-to-width-down/1200?cb=20251119202403",
  },
];

function ToolLogo({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border border-white/10 bg-white/[0.03] flex-shrink-0">
      <Image
        src={src}
        alt={name}
        width={48}
        height={48}
        className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
      />
    </div>
  );
}

export function ToolsMarquee() {
  return (
    <section className="py-12 sm:py-16 overflow-hidden">
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/30 text-center mb-8">
        Use with your favorite coding tools
      </p>
      <Marquee>
        {tools.map((tool) => (
          <ToolLogo key={tool.name} {...tool} />
        ))}
      </Marquee>
    </section>
  );
}
