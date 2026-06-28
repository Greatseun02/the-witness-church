import React from "react";

type Variant = "primary" | "outline" | "ghost" | "outline-light";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  as?: "button" | "a";
  href?: string;
  children: React.ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-red text-white hover:bg-red-dark active:scale-95 shadow-sm hover:shadow-md",
  outline:
    "border-2 border-red text-red hover:bg-red hover:text-white active:scale-95",
  ghost: "text-red hover:bg-pink-light active:scale-95",
  "outline-light":
    "border border-white/40 text-white hover:bg-white/10 active:scale-95",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-xs tracking-wide",
  md: "px-6 py-3 text-sm tracking-wide",
  lg: "px-8 py-4 text-base tracking-wide",
};

export default function Button({
  variant = "primary",
  size = "md",
  as = "button",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-150 cursor-pointer select-none";
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (as === "a" && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
