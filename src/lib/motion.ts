/**
 * Site-wide motion tokens: one easing curve, consistent scroll reveals,
 * and smaller motion than the previous default (less y-travel, shorter duration).
 */

/** Smooth deceleration — feels calmer than linear or raw easeOut */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const VIEWPORT_INVIEW = {
  once: true as const,
  margin: "-56px 0px" as const,
  amount: 0.12 as const,
};

const baseTransition = (delay = 0) => ({
  duration: 0.42,
  delay,
  ease: EASE_OUT,
});

/** Standard scroll-triggered block (sections, cards). */
export function scrollReveal(delay = 0) {
  return {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT_INVIEW,
    transition: baseTransition(delay),
  };
}

/** Stagger helper for mapped children (keep steps small to avoid “cascading” feel). */
export function staggerDelay(index: number, step = 0.05) {
  return index * step;
}

/** Section intro titles (About-style variant blocks). */
export function fadeUpVariants(stagger = 0.06) {
  return {
    hidden: { opacity: 0, y: 12 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * stagger, duration: 0.42, ease: EASE_OUT },
    }),
  };
}

/** Hero: softer than previous -30px x slide */
export const heroColumn = {
  initial: { opacity: 0, x: -14 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.55, ease: EASE_OUT },
};

export const heroBadge = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.38, delay: 0.1, ease: EASE_OUT },
};

export const heroImageReveal = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay: 0.22, duration: 0.65, ease: EASE_OUT },
};
