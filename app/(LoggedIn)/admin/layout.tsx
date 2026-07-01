import Logo from "@/app/_components/Logo";
import { Metadata } from "next";
import { LogoutBtn } from "./_features/LogoutBtn";

export const metadata: Metadata = {
  title: "Admin | CyFa-4",
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto h-dvh max-w-350 pb-10">
      <div className="flex justify-between px-5 pt-5">
        <Logo width="150" />
        <LogoutBtn />
      </div>
      <div className="p-5">{children}</div>
    </main>
  );
}
