"use client";

import { motion } from "framer-motion";
import ProfilePicture from "./ProfilePicture";

interface HeroContentProps {
  name: string;
  className?: string;
}

export default function HeroContent({ 
  name, 
  className = "" 
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
        <h1 className="text-[2.5rem] font-bold text-text-dark mb-3">
          {name}
        </h1>
    
     {/* Profile Picture */}
     <ProfilePicture className="order-2" />
      </motion.div>
    </motion.div>
  );
} 