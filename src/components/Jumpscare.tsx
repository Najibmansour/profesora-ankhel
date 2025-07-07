"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Howl } from "howler";
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
  const soundRef = useRef<Howl | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Create sound only once
  useEffect(() => {
    if (soundFile) {
      soundRef.current = new Howl({
        src: [soundFile],
        volume: 0.5,
      });
    }
  }, [soundFile]);

  const triggerScare = () => {
    if (!enabled) return;

    setShowScare(true);

    // Play sound reliably
    if (soundRef.current) {
      soundRef.current.play();
    }

    if (enableVibration && "vibrate" in navigator) {
      navigator.vibrate(500);
    }

    setTimeout(() => {
      setShowScare(false);
    }, scareDuration);
  };

  const scheduleNextScare = () => {
    if (!enabled) return;

    const delay = Math.random() * (maxDelay - minDelay) + minDelay;

    timeoutRef.current = setTimeout(() => {
      triggerScare();
      if (multipleScares) {
        timeoutRef.current = setTimeout(scheduleNextScare, scareInterval);
      }
    }, delay);
  };

  useEffect(() => {
    if (!enabled) return;

    scheduleNextScare();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [enabled, minDelay, maxDelay, multipleScares, scareInterval]);

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
