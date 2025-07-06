"use client";

import { motion } from "framer-motion";
import angy_main from "../../public/images/angy_main.png";
import Image from "next/image";

interface ProfilePictureProps {
  className?: string;
}

export default function ProfilePicture({
  className = "",
}: ProfilePictureProps) {
  return (
    <div className={`relative ${className} z-0`}>
      {/* Background blobs - stacked in center */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Purple color blob - top blob layer */}
        <motion.div
          className="absolute w-24 h-24 rounded-full bg-purple-500/50 blur-sm top-0 right-18"
          animate={{
            y: [0, -12, 8, -6, 0],
            x: [0, 7, -5, 3, -2, 0],
            rotate: [45, 42, 48, 45],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Accent color blob - bottom layer */}
        <motion.div
          className="absolute w-44 h-44 rounded-full bg-amber-300/50 blur-sm -bottom-10 left-[30%]"
          animate={{
            y: [0, 9, -7, 4, -3, 0],
            x: [0, -8, 6, -4, 2, 0],
            rotate: [15, 18, 12, 15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Primary color blob - middle layer */}
        <motion.div
          className="absolute w-28 h-28 rounded-full bg-amber-600/50 blur-sm top-6 left-[30%]"
          animate={{
            y: [0, -9, 6, -4, 2, 0],
            x: [0, 8, -6, 4, -3, 0],
            rotate: [-25, -22, -28, -25],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Icons around the profile picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 + 1 * 0.1 }}
          className="absolute top-2 right-[5rem] text-2xl z-0"
        >
          <motion.div
            animate={{
              y: [0, -6, 4, -3, 0],
              x: [0, 5, 2, 0],
              rotate: [0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            💭
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.0 + 2 * 0.1 }}
          className="absolute top-50 left-18 text-2xl z-0"
        >
          <motion.div
            animate={{
              y: [0, -5, 3, -2, 0],
              x: [0, -6, 4, -3, 0],
              rotate: [45, 42, 48, 45],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🌟
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 + 3 * 0.1 }}
          className="absolute top-10 left-28 text-2xl z-0"
        >
          <motion.div
            animate={{
              x: [0, -4, 3, -2, 0],
              y: [0, -5, 3, -2, 0],
              rotate: [-10, 5, -10],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🧠
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.4 + 4 * 0.1 }}
          className="absolute top-60 right-22 text-2xl z-0"
        >
          <motion.div
            animate={{
              y: [0, -4, 3, -2, 0],
              x: [0, 6, -4, 0, 3, 0],
              rotate: [-20, 10, -20],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            💕
          </motion.div>
        </motion.div>
      </div>

      {/* Profile picture - on top */}
      <div className="relative z-0 flex items-center justify-center mt-0 -mb-[40%]">
        <motion.div
          className="relative"
          animate={{
            y: [0, -3, 4, -2, 2, 0],
            x: [0, 5, -4, 3, -2, 0],
            rotate: [0, -1, 1, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src={angy_main}
            alt="Profile Picture"
            width={150}
            height={150}
          />
          {/* Bottom blur overlay */}
        </motion.div>
      </div>
    </div>
  );
}
