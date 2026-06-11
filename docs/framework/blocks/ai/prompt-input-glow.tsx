// Block: Glowing dynamic-grow prompt input — sticky pill input that expands on focus, with
// hover glow, cursor-follow gradient, ripples, and option tags (Auto/Max/Search/Plan).
// Source: 21st.dev community (received twice; deduplicated). Adapted: removed the broken
// `figma:react` import. CAVEAT: several classes are built from template strings
// (`bg-white/${n}`, `text-[${color}]`, `duration-${ms}`) which Tailwind's compiler cannot
// see — when adapting, replace them with static classes or inline styles, and retheme the
// purple/pink glow to the design direction's palette.
'use client'

import React, { useEffect, useState, useRef, useCallback, memo } from "react";
import { Plus } from "lucide-react";

type MenuOption = "Auto" | "Max" | "Search" | "Plan";

interface RippleEffect {
  x: number;
  y: number;
  id: number;
}

interface Position {
  x: number;
  y: number;
}

interface ChatInputProps {
  placeholder?: string;
  onSubmit?: (value: string) => void;
  disabled?: boolean;
  glowIntensity?: number;
  expandOnFocus?: boolean;
  animationDuration?: number;
  textColor?: string;
  backgroundOpacity?: number;
  showEffects?: boolean;
  menuOptions?: MenuOption[];
}

const SendButton = memo(({ isDisabled }: { isDisabled: boolean }) => (
  <button
    type="submit"
    aria-label="Send message"
    disabled={isDisabled}
    className={`ml-auto self-center h-8 w-8 flex items-center justify-center rounded-full border-0 p-0 transition-all z-20 ${
      isDisabled
        ? 'opacity-40 cursor-not-allowed bg-gray-400 text-white/60'
        : 'opacity-90 bg-[#0A1217] text-white hover:opacity-100 cursor-pointer hover:shadow-lg'
    }`}
  >
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={`block ${isDisabled ? "opacity-50" : "opacity-100"}`}>
      <path d="M16 22L16 10M16 10L11 15M16 10L21 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
));
SendButton.displayName = 'SendButton'

const OptionsMenu = memo(({ isOpen, onSelect, menuOptions }: { isOpen: boolean; onSelect: (option: MenuOption) => void; menuOptions: MenuOption[] }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg overflow-hidden z-30 min-w-[120px]">
      <ul className="py-1">
        {menuOptions.map((option) => (
          <li
            key={option}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-900 text-sm font-medium"
            onClick={() => onSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
});
OptionsMenu.displayName = 'OptionsMenu'

const OptionTag = memo(({ option, onRemove }: { option: MenuOption; onRemove: (option: MenuOption) => void }) => (
  <div className="flex items-center gap-1 bg-black/10 px-2 py-1 rounded-md text-xs">
    <span>{option}</span>
    <button
      type="button"
      onClick={() => onRemove(option)}
      className="h-4 w-4 flex items-center justify-center rounded-full hover:bg-black/20 opacity-70"
    >
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  </div>
));
OptionTag.displayName = 'OptionTag'

const GlowEffects = memo(({ glowIntensity, mousePosition, animationDuration, enabled }: { glowIntensity: number; mousePosition: Position; animationDuration: number; enabled: boolean }) => {
  if (!enabled) return null;

  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-r from-white/8 via-white/12 to-white/8 backdrop-blur-2xl rounded-3xl"></div>

      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: `
            0 0 0 1px rgba(147, 51, 234, ${0.2 * glowIntensity}),
            0 0 8px rgba(147, 51, 234, ${0.3 * glowIntensity}),
            0 0 16px rgba(236, 72, 153, ${0.2 * glowIntensity}),
            0 0 24px rgba(59, 130, 246, ${0.15 * glowIntensity})
          `,
          filter: 'blur(0.5px)',
        }}
      ></div>

      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: `
            0 0 12px rgba(147, 51, 234, ${0.4 * glowIntensity}),
            0 0 20px rgba(236, 72, 153, ${0.25 * glowIntensity}),
            0 0 32px rgba(59, 130, 246, ${0.2 * glowIntensity})
          `,
          filter: 'blur(1px)',
        }}
      ></div>

      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none blur-sm"
        style={{
          background: `radial-gradient(circle 120px at ${mousePosition.x}% ${mousePosition.y}%, rgba(147,51,234,0.08) 0%, rgba(236,72,153,0.05) 30%, rgba(59,130,246,0.04) 60%, transparent 100%)`,
        }}
      ></div>

      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 overflow-hidden blur-sm">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/8 to-transparent transform -translate-x-full group-hover:translate-x-full"
          style={{
            transitionProperty: 'transform',
            transitionDuration: `${animationDuration * 2}ms`,
            transitionTimingFunction: 'ease-out',
          }}
        ></div>
      </div>

      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-25 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/4 to-transparent animate-pulse blur-sm"></div>

      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-15 group-focus-within:opacity-10 transition-opacity duration-300 bg-gradient-to-r from-purple-400/5 via-pink-400/5 to-blue-400/5 blur-sm"></div>
    </>
  );
});
GlowEffects.displayName = 'GlowEffects'

const RippleEffects = memo(({ ripples, enabled }: { ripples: RippleEffect[]; enabled: boolean }) => {
  if (!enabled || ripples.length === 0) return null;

  return (
    <>
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute pointer-events-none blur-sm"
          style={{ left: ripple.x - 25, top: ripple.y - 25, width: 50, height: 50 }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-400/15 via-pink-400/10 to-blue-400/15 animate-ping"></div>
        </div>
      ))}
    </>
  );
});
RippleEffects.displayName = 'RippleEffects'

const InputArea = memo(({ value, setValue, placeholder, handleKeyDown, disabled, isSubmitDisabled }: {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  handleKeyDown: (e: React.KeyboardEvent) => void;
  disabled: boolean;
  isSubmitDisabled: boolean;
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const scrollHeight = textareaRef.current.scrollHeight;
      const lineHeight = 22;
      const maxHeight = lineHeight * 4 + 16;
      textareaRef.current.style.height = Math.min(scrollHeight, maxHeight) + "px";
    }
  }, [value]);

  return (
    <div className="flex-1 relative h-full flex items-center">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        aria-label="Message Input"
        rows={1}
        className="w-full min-h-8 max-h-24 bg-transparent text-sm font-normal text-left self-center placeholder-[#6B7280] border-0 outline-none px-3 pr-10 py-1 z-20 relative resize-none overflow-y-auto"
        style={{ letterSpacing: "-0.14px", lineHeight: "22px" }}
        disabled={disabled}
      />
      <SendButton isDisabled={isSubmitDisabled} />
    </div>
  );
});
InputArea.displayName = 'InputArea'

export default function PromptInputGlow({
  placeholder = "Ask anything",
  onSubmit = (value: string) => console.log("Submitted:", value),
  disabled = false,
  glowIntensity = 0.4,
  expandOnFocus = true,
  animationDuration = 500,
  showEffects = true,
  menuOptions = ["Auto", "Max", "Search", "Plan"] as MenuOption[],
}: ChatInputProps) {
  const [value, setValue] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<MenuOption[]>([]);
  const [ripples, setRipples] = useState<RippleEffect[]>([]);
  const [mousePosition, setMousePosition] = useState<Position>({ x: 50, y: 50 });

  const containerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const throttleRef = useRef<number | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (value.trim() && onSubmit && !disabled) {
        onSubmit(value.trim());
        setValue("");
      }
    },
    [value, onSubmit, disabled]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSubmit(e as unknown as React.FormEvent);
      }
    },
    [handleSubmit]
  );

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!showEffects) return;

    if (containerRef.current && !throttleRef.current) {
      throttleRef.current = window.setTimeout(() => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          setMousePosition({ x, y });
        }
        throttleRef.current = null;
      }, 50);
    }
  }, [showEffects]);

  const addRipple = useCallback((x: number, y: number) => {
    if (!showEffects) return;

    if (ripples.length < 5) {
      const newRipple: RippleEffect = { x, y, id: Date.now() };
      setRipples(prev => [...prev, newRipple]);
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 600);
    }
  }, [ripples, showEffects]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      addRipple(e.clientX - rect.left, e.clientY - rect.top);
    }
  }, [addRipple]);

  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);

  const selectOption = useCallback((option: MenuOption) => {
    setSelectedOptions(prev => (prev.includes(option) ? prev : [...prev, option]));
    setIsMenuOpen(false);
  }, []);

  const removeOption = useCallback((option: MenuOption) => {
    setSelectedOptions(prev => prev.filter(opt => opt !== option));
  }, []);

  const isSubmitDisabled = disabled || !value.trim();

  const hasModeSelected = selectedOptions.length > 0;
  const shouldExpandOnFocus = expandOnFocus && !hasModeSelected;
  const baseWidthClass = hasModeSelected ? "w-96" : "w-56";
  const focusWidthClass = shouldExpandOnFocus ? "focus-within:w-96" : "";

  return (
    <form
      onSubmit={handleSubmit}
      className={`sticky bottom-4 left-1/2 -translate-x-1/2 z-50 mx-auto min-h-12 ${baseWidthClass} ease-out ${focusWidthClass} translate-y-0 opacity-100`}
      style={{
        transition: `transform ${animationDuration}ms, opacity 200ms, left 200ms, width ${animationDuration}ms`,
      }}
    >
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
        className="relative flex flex-col w-full min-h-full bg-white/15 backdrop-blur-xl shadow-lg rounded-3xl p-2 overflow-visible group hover:bg-white/20"
        style={{
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          transition: `all ${animationDuration}ms ease, box-shadow ${animationDuration}ms ease`,
        }}
      >
        <GlowEffects glowIntensity={glowIntensity} mousePosition={mousePosition} animationDuration={animationDuration} enabled={showEffects} />
        <RippleEffects ripples={ripples} enabled={showEffects} />

        <div className="flex items-center relative z-20">
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={toggleMenu}
              aria-label="Menu options"
              className="h-8 w-8 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-all ml-1 mr-1"
            >
              <Plus size={16} />
            </button>
            <OptionsMenu isOpen={isMenuOpen} onSelect={selectOption} menuOptions={menuOptions} />
          </div>

          <InputArea
            value={value}
            setValue={setValue}
            placeholder={placeholder}
            handleKeyDown={handleKeyDown}
            disabled={disabled}
            isSubmitDisabled={isSubmitDisabled}
          />
        </div>

        {selectedOptions.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2 pl-3 pr-3 z-20 relative">
            {selectedOptions.map((option) => (
              <OptionTag key={option} option={option} onRemove={removeOption} />
            ))}
          </div>
        )}
      </div>
    </form>
  );
}
