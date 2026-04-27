import type { ReactNode }, cloneElement, isValidElement } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
  variant?: "default" | "ghost" | "outline";
  size?: "sm" | "default" | "lg";
  href?: string;
  to?: string;
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  asChild,
  variant = "default",
  size = "default",
  href,
  to,
  className = "",
  onClick,
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:opacity-90",
    ghost: "bg-transparent text-foreground hover:bg-secondary",
    outline: "border border-border bg-transparent text-foreground hover:bg-secondary",
  };

  const base = `inline-flex items-center justify-center rounded-[10px] font-medium transition-all duration-200 min-h-[44px] ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (asChild && isValidElement(children)) {
    return cloneElement(children as React.ReactElement, {
      className: `${base} ${(children.props as Record<string, string>).className || ""}`,
    });
  }

  if (to) {
    return (
      <Link to={to} className={base}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={base}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={base}>
      {children}
    </button>
  );
}
