// Block: Copy button — cross-fade icon morph (copy → check) confirming on the element itself,
// per the micro-interaction catalog in signature_interactions.md (never a toast).
// Source: 21st.dev community, adapted from inline styles to Tailwind + real clipboard write.
'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { cn } from '@/lib/utils'

export function CopyButton({ value, label = 'Copy', className }: { value: string; label?: string; className?: string }) {
  const [copied, setCopied] = useState(false)

  const handleClick = async () => {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        'inline-flex items-center gap-2 rounded-2xl bg-zinc-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-600',
        className
      )}
    >
      <span className="relative inline-block size-4">
        <span
          className="absolute inset-0 transition-all duration-150"
          style={{ opacity: copied ? 0 : 1, transform: copied ? 'scale(0.6)' : 'scale(1)' }}
        >
          <Copy className="size-4" />
        </span>
        <span
          className="absolute inset-0 transition-all delay-150 duration-[400ms]"
          style={{ opacity: copied ? 1 : 0, transform: copied ? 'scale(1)' : 'scale(0.6)' }}
        >
          <Check className="size-4" />
        </span>
      </span>
      {copied ? 'Copied!' : label}
    </button>
  )
}
