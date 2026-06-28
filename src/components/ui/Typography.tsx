import React from "react";

interface SectionTagProps {
  children: React.ReactNode;
  variant?: "light" | "dark" | "pink";
  className?: string;
}

export function SectionTag({
  children,
  variant = "dark",
  className = "",
}: SectionTagProps) {
  const styles = {
    dark: "bg-pink-light text-pink border border-pink/20",
    light: "bg-white/10 text-white border border-white/20",
    pink: "bg-pink text-white border border-pink",
  };
  return (
    <span
      className={`inline-block text-[10px] font-bold tracking-[2.5px] uppercase px-3 py-1 rounded-full mb-3 ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

interface HeadingProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4";
  light?: boolean;
  className?: string;
}

export function Heading({
  children,
  as: Tag = "h2",
  light = false,
  className = "",
}: HeadingProps) {
  const sizes = {
    h1: "text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]",
    h2: "text-3xl md:text-4xl font-bold leading-[1.2]",
    h3: "text-xl md:text-2xl font-semibold leading-[1.3]",
    h4: "text-lg font-semibold leading-[1.4]",
  };
  return (
    <Tag
      className={`font-playfair ${sizes[Tag]} ${light ? "text-white" : "text-text"} ${className}`}
    >
      {children}
    </Tag>
  );
}

interface SubtextProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export function Subtext({ children, light = false, className = "" }: SubtextProps) {
  return (
    <p
      className={`text-[15px] leading-relaxed mt-2 max-w-xl ${light ? "text-white/60" : "text-muted"} ${className}`}
    >
      {children}
    </p>
  );
}

interface CaptionProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export function Caption({ children, light = false, className = "" }: CaptionProps) {
  return (
    <span
      className={`text-[11px] font-semibold tracking-[1.5px] uppercase ${light ? "text-white/50" : "text-muted"} ${className}`}
    >
      {children}
    </span>
  );
}
