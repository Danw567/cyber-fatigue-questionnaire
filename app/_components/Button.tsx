import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant: "primary" | "secondary";
  href?: string;
  onClick?: any;
  className?: string;
}

export default function Button({
  children,
  variant,
  onClick,
  href,
  className = "",
}: ButtonProps) {
  const primaryClass = "bg-primary-off hover:bg-primary";
  const secondaryClass = "";

  const buttonClass = variant === "primary" ? primaryClass : secondaryClass;

  return (
    <a
      href={href || undefined}
      onClick={onClick || undefined}
      className={`flex w-fit cursor-pointer items-center gap-1 rounded px-4 py-2 text-white transition-all ${buttonClass} ${className}`}
    >
      {children}
    </a>
  );
}
