"use client";

import { motion } from "framer-motion";
import ProfilePicture from "./ProfilePicture";

interface HeroContentProps {
  name: string;
  className?: string;
}

export default function HeroContent({
  name,
  className = "",
}: HeroContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`text-center space-y-4 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="space-y-16"
      >
        <motion.h1
          animate={{
            y: [0, -3, 0, -2, 2, 0],
            x: [0, 2, -2, 0, -2, 0],
            rotate: [0, -1, 1, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-[2.5rem] font-bold text-text-dark mb-3"
        >
          {name}
        </motion.h1>

        {/* Profile Picture */}
        <ProfilePicture className="order-2" />
      </motion.div>
    </motion.div>
  );
}
