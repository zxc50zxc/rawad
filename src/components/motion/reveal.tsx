"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { inViewOnce, softTransition } from "@/lib/motion-presets";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Reveal({ children, className = "" }: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={inViewOnce(reduce)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={softTransition}
    >
      {children}
    </motion.div>
  );
}
