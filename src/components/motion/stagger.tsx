"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUpItem, fadeUpStagger } from "@/lib/motion-presets";

type StaggerProps = {
  children: ReactNode;
  className?: string;
};

export function Stagger({ children, className = "" }: StaggerProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={fadeUpStagger(reduce)}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div className={className} variants={fadeUpItem(reduce)}>
      {children}
    </motion.div>
  );
}
