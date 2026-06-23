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
  const primaryClass =
    "bg-primary-off hover:bg-primary text-white border-primary-off hover:border-primary";
  const secondaryClass =
    "border-alt text-alt hover:border-secondary hover:text-secondary";

  const buttonClass = variant === "primary" ? primaryClass : secondaryClass;

  return (
    <a
      title={title}
      href={href || undefined}
      onClick={onClick || undefined}
      className={`flex w-fit cursor-pointer items-center gap-1 rounded border-2 px-6 py-3 transition-all ${buttonClass} ${className}`}
    >
      {children}
    </a>
  );
}
