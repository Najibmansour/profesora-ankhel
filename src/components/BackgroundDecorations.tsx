"use client";

import { motion } from "framer-motion";

export default function BackgroundDecorations() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
        className="absolute bottom-20 left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl"
      />
    </>
  );
} 