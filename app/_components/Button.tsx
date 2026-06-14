"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant: "primary" | "secondary";
  href?: string;
  onClick?: any;
  className?: string;
  title?: string;
}

export default function Button({
  children,
  variant,
  onClick,
  href,
  className = "",
  title,
}: ButtonProps) {
  const primaryClass = "bg-primary-off hover:bg-primary";
  const secondaryClass = "bg-secondary hover:bg-alt";

  const buttonClass = variant === "primary" ? primaryClass : secondaryClass;

  return (
    <a
      title={title}
      href={href || undefined}
      onClick={onClick || undefined}
      className={`flex w-fit cursor-pointer items-center gap-1 rounded px-6 py-3 text-white transition-all ${buttonClass} ${className}`}
    >
      {children}
    </a>
  );
}
