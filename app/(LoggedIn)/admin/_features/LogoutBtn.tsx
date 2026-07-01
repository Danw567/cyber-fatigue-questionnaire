"use client";

import { logOut } from "@/app/_actions/admin/user";
import Button from "@/app/_components/Button";
import { Loader2, LogOut } from "lucide-react";
import { useTransition } from "react";

export function LogoutBtn() {
  const [isPending, startTransition] = useTransition();

  const handleLogOut = () => {
    startTransition(async () => {
      await logOut();
    });
  };

  return (
    <Button
      title="Log out"
      variant="secondary"
      className="flex cursor-pointer items-center gap-2 px-4! py-2!"
      onClick={handleLogOut}
      disabled={isPending}
    >
      {isPending ? <Loader2 className="animate-spin" /> : <LogOut />}
    </Button>
  );
}
