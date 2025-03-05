"use client";

import { motion } from "framer-motion"
import React from 'react'

export default function ButtonAnimation() {
  return (
    <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="bg-green-500 text-white px-6 py-2 rounded-lg"
    >
        Click Me!
    </motion.button>
  )
}
