"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useSound from "use-sound";
import Image, { StaticImageData } from "next/image";

interface JumpscareProps {
  // Sound file path (optional)
  soundFile?: string;
  // Image file path (optional - will use default scary face if not provided)
  imageFile?: StaticImageData;
  // Minimum time before first scare (in milliseconds)
  minDelay?: number;
  // Maximum time before first scare (in milliseconds)
  maxDelay?: number;
  // How long the scare stays visible (in milliseconds)
  scareDuration?: number;
  // Whether to enable multiple scares
  multipleScares?: boolean;
  // Interval between multiple scares (in milliseconds)
  scareInterval?: number;
  // Whether to enable mobile vibration
  enableVibration?: boolean;
  // Whether the jumpscare is enabled
  enabled?: boolean;
}

const Jumpscare: React.FC<JumpscareProps> = ({
  soundFile,
  imageFile,
  minDelay = 10000, // 10 seconds
  maxDelay = 30000, // 30 seconds
  scareDuration = 2000, // 2 seconds
  multipleScares = false,
  scareInterval = 60000, // 1 minute between scares
  enableVibration = true,
  enabled = true,
}) => {
  const [showScare, setShowScare] = useState(false);
  const [scareCount, setScareCount] = useState(0);

  // Initialize sound if provided
  const [play] = useSound(soundFile || "", {
    volume: 0.5,
    // Only initialize if sound file is provided
    ...(soundFile ? {} : { soundEnabled: false }),
  });

  const triggerScare = () => {
    if (!enabled) return;

    setShowScare(true);
    setScareCount((prev) => prev + 1);

    // Play sound if available
    if (soundFile) {
      play();
    }

    // Trigger vibration on mobile if enabled
    if (enableVibration && "vibrate" in navigator) {
      navigator.vibrate(500);
    }

    // Hide scare after duration
    setTimeout(() => {
      setShowScare(false);
    }, scareDuration);
  };

  useEffect(() => {
    if (!enabled) return;

    const scheduleScare = () => {
      const randomTime = Math.random() * (maxDelay - minDelay) + minDelay;

      const timer = setTimeout(() => {
        triggerScare();

        // Schedule next scare if multiple scares are enabled
        if (multipleScares) {
          setTimeout(scheduleScare, scareInterval);
        }
      }, randomTime);

      return timer;
    };

    const timer = scheduleScare();

    return () => clearTimeout(timer);
  }, [enabled, minDelay, maxDelay, multipleScares, scareInterval, scareCount]);

  // Default scary face emoji if no image provided
  const defaultScare = "😱";

  return (
    <AnimatePresence>
      {showScare && (
        <motion.div
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{
            opacity: 1,
            scale: [0.1, 1.2, 1],
            rotate: [0, 5, -5, 0],
          }}
          exit={{ opacity: 0, scale: 0.1 }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            backgroundColor: "rgba(0, 0, 0, 0)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            pointerEvents: "none",
          }}
        >
          {imageFile ? (
            <motion.div
              style={{
                maxHeight: "80%",
                maxWidth: "80%",
                objectFit: "contain",
              }}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="bg-transparent"
            >
              <Image src={imageFile} alt="Jumpscare" />
            </motion.div>
          ) : (
            <motion.div
              style={{
                fontSize: "20rem",
                color: "white",
                textShadow: "0 0 50px red",
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              {defaultScare}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Jumpscare;
