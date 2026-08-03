"use client";

import { ReactNode } from "react";
import { TechinalUserProvider } from "../context/useTechnicalUser";

export default function Providers({ children }: { children: ReactNode }) {
  return <TechinalUserProvider>{children}</TechinalUserProvider>;
}
