"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function FloatingCard({
  className,
  colorVariant = "blue",
  rotation = 0,
  icon: Icon,
  label,
  variant = "default",
  delay = 0,
  children,
}) {
  const colorStyles = {
    blue: "bg-[#3651ff] text-white shadow-[#3651ff]/20",
    orange: "bg-[#de7c36] text-white shadow-[#de7c36]/20",
    dark: "bg-[#2b2738] text-[#de7c36] shadow-[#2b2738]/20",
    lightPurple: "bg-[#a6adff] text-slate-800 shadow-[#a6adff]/20",
  };

  const portalStyles = "bg-[#aeb4f2] text-slate-900 shadow-[#aeb4f2]/20";

  const isPortal = variant === "portal";
  const bgStyle = isPortal ? portalStyles : colorStyles[colorVariant] || colorStyles.blue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate: rotation }}
      transition={{
        duration: 0.8,
        delay: delay,
        type: "spring",
        bounce: 0.4,
      }}
      whileHover={{ 
        scale: 1.05, 
        rotate: 0,
        zIndex: 50,
        transition: { duration: 0.3 }
      }}
      className={cn(
        "absolute rounded-full shadow-xl flex items-center gap-3 px-6 py-4 cursor-pointer select-none border border-white/10 dark:border-white/5 backdrop-blur-sm",
        bgStyle,
        className
      )}
    >
      {children ? (
        children
      ) : isPortal ? (
        <div className="flex items-center gap-3 w-full relative">
          <div className="w-1.5 h-10 bg-[#de7c36] rounded-full absolute -left-2" />
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 shrink-0">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=John&backgroundColor=c0aede"
              alt="John Doe"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold leading-tight">John Doe - Portal</span>
            <span className="text-[10px] text-slate-700/80 dark:text-slate-900/80 leading-tight mt-0.5">
              Hey! Could you please review a<br/>document for me?
            </span>
            <span className="text-[9px] text-slate-600/70 dark:text-slate-800/70 mt-1 uppercase font-semibold">
              MAT-2233 - 2 h ago
            </span>
          </div>
        </div>
      ) : (
        <>
          {Icon && <Icon className="w-6 h-6 shrink-0" />}
          <span className="font-semibold text-lg">{label}</span>
        </>
      )}
    </motion.div>
  );
}
