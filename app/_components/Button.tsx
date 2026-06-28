"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant: "primary" | "secondary";
  href?: string;
  onClick?: any;
  className?: string;
  title?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  variant,
  onClick,
  href,
  className = "",
  title,
  disabled,
}: ButtonProps) {
  const primaryClass =
    "bg-primary-off hover:bg-primary text-white border-primary-off hover:border-primary";
  const secondaryClass =
    "border-secondary text-secondary hover:border-primary-off hover:text-primary-off";

  const buttonClass = variant === "primary" ? primaryClass : secondaryClass;
  const disabledClass = disabled ? "pointer-events-none opacity-50" : "";

  return (
    <a
      aria-disabled={disabled}
      title={title}
      href={href || undefined}
      onClick={onClick || undefined}
      className={`flex w-fit cursor-pointer items-center gap-1 rounded border-2 px-6 py-3 transition-all ${buttonClass} ${className} ${disabledClass}`}
    >
      {children}
    </a>
  );
}
