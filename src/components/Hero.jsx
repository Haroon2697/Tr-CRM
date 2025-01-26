"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#142F32]">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
          <defs>
            <pattern id="flowingPattern" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
              <motion.path
                d="M0,100 C50,-50 150,250 300,100 C450,-50 550,250 700,100"
                fill="none"
                stroke="#E3FFCC"
                strokeWidth="0.5"
                strokeOpacity="0.3"
                animate={{
                  d: [
                    "M0,100 C50,-50 150,250 300,100 C450,-50 550,250 700,100",
                    "M0,150 C150,50 250,150 300,50 C350,150 450,50 700,150",
                    "M0,100 C50,-50 150,250 300,100 C450,-50 550,250 700,100",
                  ],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  duration: 20,
                }}
              />
              <motion.path
                d="M0,200 C150,100 250,300 300,200 C350,100 450,300 700,200"
                fill="none"
                stroke="#E3FFCC"
                strokeWidth="0.5"
                strokeOpacity="0.3"
                animate={{
                  d: [
                    "M0,200 C150,100 250,300 300,200 C350,100 450,300 700,200",
                    "M0,250 C50,100 150,400 300,250 C450,100 550,400 700,250",
                    "M0,200 C150,100 250,300 300,200 C350,100 450,300 700,200",
                  ],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  duration: 25,
                }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#flowingPattern)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#142F32]/90" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            The Future of Manufacturing with <span className="text-[#E3FFCC]">Latest Technology</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
            Expert tech to elevate your manufacturing. Let's take your business further.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-6 py-3 text-xl font-semibold rounded-lg bg-[#E3FFCC] text-[#142F32] hover:bg-[#E3FFCC]/90 transition duration-300">
              Get Started
            </button>
            <button className="px-6 py-3 text-xl font-semibold rounded-lg border-2 border-white text-white hover:bg-white/10 transition duration-300">
              Try Demo
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex items-center justify-center gap-2"
          >
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="text-[#E3FFCC]"
                >
                  ★
                </motion.span>
              ))}
            </div>
            <span className="ml-2 text-sm text-white">5.0 from 80+ reviews</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#142F32] to-transparent"
      />
    </section>
  )
}

