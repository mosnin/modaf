"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Copy01Icon, CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";

interface CopyCommandProps {
  command: string;
}

export function CopyCommand({ command }: CopyCommandProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-0 rounded-xl border border-white/10 bg-white/5 overflow-hidden max-w-xl w-full min-w-0">
      <code className="flex-1 px-3 sm:px-4 py-3 text-xs sm:text-sm md:text-base font-mono text-cyan overflow-x-auto whitespace-nowrap min-w-0">
        {command}
      </code>
      <button
        onClick={handleCopy}
        className="flex-shrink-0 px-4 py-3 border-l border-white/10 text-white/40 hover:text-white hover:bg-white/5 transition-colors duration-150"
        aria-label={copied ? "Copied" : "Copy to clipboard"}
      >
        <HugeiconsIcon
          icon={copied ? CheckmarkCircle02Icon : Copy01Icon}
          size={18}
          className={copied ? "text-green-400" : ""}
        />
      </button>
    </div>
  );
}
