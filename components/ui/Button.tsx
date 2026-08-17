import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "emerald" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition focus:outline-none focus:ring-2 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-blue-600 text-white shadow-glow hover:bg-blue-500 focus:ring-blue-400/60",
  emerald:
    "bg-emerald-500 text-slate-950 hover:bg-emerald-400 focus:ring-emerald-400/60",
  secondary:
    "border border-white/10 bg-white/5 text-slate-100 hover:bg-white/10 focus:ring-white/20",
  ghost: "text-slate-200 hover:bg-white/5 hover:text-white focus:ring-white/20",
  outline:
    "border border-blue-500/40 text-blue-300 hover:bg-blue-500/10 focus:ring-blue-400/40",
};

const sizes: Record<Size, string> = {
  sm: "px-3.5 py-2 text-xs",
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  external?: boolean;
  disabled?: boolean;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  onClick,
  type = "button",
  external,
  disabled,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (disabled) {
    return (
      <button type={type} className={classes} disabled>
        {children}
      </button>
    );
  }

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} onClick={onClick}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
