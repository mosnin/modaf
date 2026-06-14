// Block: Shining text — shimmer-sweep gradient text for "assistant is thinking" states.
// Source: 21st.dev community. Use in the AI assistant module's working indicator
// (internal/23_ai_module.md). Adapted: typed props.
"use client"

import * as React from "react"
import { motion } from "motion/react"

export function ShiningText({ text }: { text: string }) {
  return (
    <motion.h1
      className="bg-[linear-gradient(110deg,#404040,35%,#fff,50%,#404040,75%,#404040)] bg-[length:200%_100%] bg-clip-text text-base font-regular text-transparent"
      initial={{ backgroundPosition: "200% 0" }}
      animate={{ backgroundPosition: "-200% 0" }}
      transition={{
        repeat: Infinity,
        duration: 2,
        ease: "linear",
      }}
    >
      {text}
    </motion.h1>
  )
}
