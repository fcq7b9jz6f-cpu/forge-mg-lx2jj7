import type { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  type?: "fadeUp" | "slideRight" | "slideLeft" | "scaleIn" | "stagger";
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, type = "fadeUp", className = "", delay = 0 }: AnimatedSectionProps) {
  const base = "animate-on-scroll";
  const typeClass = type === "slideRight" 
    ? "slide-from-right" 
    : type === "slideLeft" 
    ? "slide-from-left" 
    : type === "scaleIn" 
    ? "scale-in" 
    : "fade-up";

  return (
    <div
      className={`${base} ${typeClass} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

export function AnimatedStaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`animate-on-scroll fade-up ${className}`}>{children}</div>;
}

export const staggerContainer = {};
export const staggerChild = {};
