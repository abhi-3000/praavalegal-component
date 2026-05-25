"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function BackgroundBlob({ animateY, duration, className }) {
  return (
    <motion.div
      animate={{ y: animateY }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      className={cn("absolute blur-[0.5px]", className)}
    />
  );
}
