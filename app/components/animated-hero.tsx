'use client'

import { motion } from "framer-motion"
import Image from "next/image"

export default function AnimatedHero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative py-24 px-6 text-center"
    >
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
          Connecting Displaced People
        </span>
        <br />
        with Support in Boston
      </motion.h1>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="relative w-full max-w-4xl mx-auto mt-12 rounded-lg overflow-hidden shadow-xl"
      >
        <Image
          src="/placeholder.jpg"
          alt="Community support in Boston"
          width={1200}
          height={600}
          className="w-full h-auto"
        />
      </motion.div>
    </motion.section>
  )
}