import Button from "@/app/_components/Button";
import Logo from "@/app/_components/Logo";
import { LogOut } from "lucide-react";
import { Metadata } from "next";

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
        <Button
          title="Log out"
          variant="secondary"
          className="flex cursor-pointer items-center gap-2 px-4! py-2!"
        >
          <LogOut />
        </Button>
      </div>
      <div className="p-5">{children}</div>
    </main>
  );
}
