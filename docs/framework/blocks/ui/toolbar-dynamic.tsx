// Block: Dynamic toolbar — compact icon toolbar that springs open into an inline
// search input (back arrow collapses it). Good for contextual search/filter bars
// floating over a work surface (notes lists, boards, canvases).
// Source: motion-primitives (toolbar-dynamic). useClickOutside is inlined so the
// block is self-contained. Retheme hardcoded zinc grays to semantic tokens; swap
// the placeholder icons/actions for the surface's real ones; wire the input to
// real search state. The open width (300px) is a PLACEHOLDER — size to context.
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, MotionConfig } from 'motion/react';
import { ArrowLeft, Search, User } from 'lucide-react';

const transition = {
  type: 'spring',
  bounce: 0.1,
  duration: 0.2,
};

function useClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  handler: () => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      handler();
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

function Button({
  children,
  onClick,
  disabled,
  ariaLabel,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
}) {
  return (
    <button
      className='relative flex h-9 w-9 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50'
      type='button'
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default function ToolbarDynamic() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => {
    setIsOpen(false);
  });

  return (
    <MotionConfig transition={transition}>
      <div className='absolute bottom-8' ref={containerRef}>
        <div className='h-full w-full rounded-xl border border-zinc-950/10 bg-white'>
          <motion.div
            animate={{
              width: isOpen ? '300px' : '98px',
            }}
            initial={false}
          >
            <div className='overflow-hidden p-2'>
              {!isOpen ? (
                <div className='flex space-x-2'>
                  <Button disabled ariaLabel='User profile'>
                    <User className='h-5 w-5' />
                  </Button>
                  <Button
                    onClick={() => setIsOpen(true)}
                    ariaLabel='Search notes'
                  >
                    <Search className='h-5 w-5' />
                  </Button>
                </div>
              ) : (
                <div className='flex space-x-2'>
                  <Button onClick={() => setIsOpen(false)} ariaLabel='Back'>
                    <ArrowLeft className='h-5 w-5' />
                  </Button>
                  <div className='relative w-full'>
                    <input
                      className='h-9 w-full rounded-lg border border-zinc-950/10 bg-transparent p-2 text-zinc-900 placeholder-zinc-500 focus:outline-hidden'
                      autoFocus
                      placeholder='Search notes'
                    />
                    <div className='absolute right-1 top-0 flex h-full items-center justify-center'></div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </MotionConfig>
  );
}
