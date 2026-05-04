import type { Variants } from "framer-motion";

export const softTransition = {
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function fadeUpStagger(reduceMotion: boolean | null): Variants {
  if (reduceMotion) {
    return {
      hidden: { opacity: 1 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0, delayChildren: 0 },
      },
    };
  }
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.06 },
    },
  };
}

export function fadeUpItem(reduceMotion: boolean | null): Variants {
  if (reduceMotion) {
    return { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } };
  }
  return {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: softTransition,
    },
  };
}

export function inViewOnce(reduceMotion: boolean | null): Variants {
  if (reduceMotion) {
    return { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } };
  }
  return {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: softTransition,
    },
  };
}
