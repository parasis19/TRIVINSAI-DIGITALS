// components/BlurFade.tsx
"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function BlurFade() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setShow(false), 1500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1, backdropFilter: "blur(16px)" }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[9999] backdrop-blur-2xl bg-white/30 dark:bg-[#1f2a3c]/30 pointer-events-none"
        />
      )}
    </AnimatePresence>
  )
}
