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
    <div className={`relative ${className}`}>
      {/* Background blobs - stacked in center */}
      <div className="absolute inset-0 flex items-center justify-center">

        {/* Purple color blob - top blob layer */}
        <motion.div 
          className="absolute w-24 h-24 rounded-full bg-purple-500/50 blur-sm top-0 right-20"
          animate={{
            y: [0, -8, 4, 0],
            x: [0, 3, -2, 0],
            rotate: [45, 42, 48, 45]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Accent color blob - bottom layer */}
        <motion.div 
          className="absolute w-44 h-44 rounded-full bg-amber-300/50 blur-sm -bottom-10 left-24"
          animate={{
            y: [0, 6, -3, 0],
            x: [0, -4, 2, 0],
            rotate: [15, 18, 12, 15]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Primary color blob - middle layer */}
        <motion.div 
          className="absolute w-28 h-28 rounded-full bg-amber-600/50 blur-sm top-10 left-32"
          animate={{
            y: [0, -5, 3, 0],
            x: [0, 5, -3, 0],
            rotate: [-25, -22, -28, -25]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
      </div>
      
      {/* Profile picture - on top */}
      <div className="relative z-10 flex items-center justify-center ">
        <motion.div 
          className="relative"
          animate={{
            y: [0, -4, 2, 0],
            x: [0, 2, -1, 0],
            rotate: [0, -1, 1, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image src={angy_main} alt="Profile Picture" width={150} height={150} />
          {/* Bottom blur overlay */}
        </motion.div>
      </div>
    </div>
  );
}
