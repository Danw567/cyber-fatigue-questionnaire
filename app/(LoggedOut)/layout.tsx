import React from "react";
import Logo from "../_components/Logo";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-card mx-auto h-dvh max-w-200 overflow-auto px-5 pb-10 shadow-2xl">
      <div id="survey-top" className="h-5 w-0" />
      <div className="flex justify-between">
        <Logo width="150" />
        <div
          id="logo-bar-right"
          className="mx-auto flex w-full justify-end"
        ></div>
      </div>
      {children}
    </main>
  );
}
