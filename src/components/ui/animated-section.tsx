import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

const slideFromRightVariants: Variants = {
  hidden: { opacity: 0, x: 120 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};

const slideFromLeftVariants: Variants = {
  hidden: { opacity: 0, x: -120 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};

const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const staggerChild: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

type AnimationType = "fadeUp" | "slideRight" | "slideLeft" | "scaleIn" | "stagger";

interface AnimatedSectionProps {
  children: ReactNode;
  type?: AnimationType;
  className?: string;
  delay?: number;
}

const variantsMap: Record<string, Variants> = {
  fadeUp: fadeUpVariants,
  slideRight: slideFromRightVariants,
  slideLeft: slideFromLeftVariants,
  scaleIn: scaleInVariants,
  stagger: staggerContainer,
};

export function AnimatedSection({ children, type = "fadeUp", className = "", delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variantsMap[type]}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedStaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={staggerChild} className={className}>
      {children}
    </motion.div>
  );
}

export { staggerContainer, staggerChild };
