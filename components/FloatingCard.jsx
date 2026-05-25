"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function FloatingCard({
  className,
  color = "blue",
  rotation,
  icon: Icon,
  label,
  children,
  variants,
  whileHover,
  transition,
  isMobile = false,
}) {
  const colorStyles = {
    blue: "bg-[#2f46ff] shadow-[0_14px_32px_rgba(47,70,255,0.28)] text-white",
    orange:
      "bg-[#e67e2b] shadow-[0_14px_32px_rgba(230,126,43,0.28)] text-white",
    purple:
      "bg-[#9ea6ef] shadow-[0_14px_32px_rgba(106,123,214,0.30)] text-white",
    dark: "bg-[#2f254d] shadow-[0_14px_32px_rgba(47,37,77,0.35)]",
  };

  const iconColors = {
    blue: "text-white",
    orange: "text-white",
    purple: "text-white",
    dark: "text-[#f08c2b]",
  };

  const labelColors = {
    blue: "text-white",
    orange: "text-white",
    purple: "text-white",
    dark: "text-[#f08c2b]",
  };

  return (
    <motion.div
      variants={variants}
      whileHover={whileHover}
      transition={transition}
      className={cn(
        "card-base flex items-center !rounded-[100px]",
        !isMobile && "card-hover",
        colorStyles[color],
        rotation,
        className,
      )}
    >
      {children ? (
        children
      ) : (
        <>
          <span
            className={cn(
              "flex items-center justify-center shrink-0",
              isMobile ? "h-14 w-14" : "h-20 w-20",
            )}
          >
            {Icon && (
              <Icon
                className={cn(
                  isMobile ? "h-7 w-7" : "h-10 w-10",
                  iconColors[color],
                )}
              />
            )}
          </span>
          <span
            className={cn(
              "font-light tracking-tight ml-3",
              isMobile ? "text-[20px]" : "text-[26px]",
              labelColors[color],
            )}
          >
            {label}
          </span>
        </>
      )}
    </motion.div>
  );
}
