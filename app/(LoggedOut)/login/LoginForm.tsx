"use client";

import { signIn, signUp } from "@/app/_actions/admin/user";
import Button from "@/app/_components/Button";
import { ChevronRight, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export default function LoginForm() {
  const [isPending, startTransition] = useTransition();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = () => {
    if (username.length > 0 && password.length > 0) {
      startTransition(async () => {
        await signIn(username, password);
        router.push("/admin");
      });
    }
  };

  return (
    <form>
      <div className="group mt-2 flex flex-col">
        <label
          className="group-focus-within:text-primary-off text-sm font-semibold"
          htmlFor=""
        >
          Username
        </label>
        <input
          id="username"
          name="username"
          className="border-alt group-focus-within:border-primary-off h-9 rounded border-2 px-2 outline-0"
          value={username}
          onChange={(e) => setUsername(e.target.value.trim())}
        />
      </div>
      <div className="group mt-2 flex flex-col">
        <label
          className="group-focus-within:text-primary-off text-sm font-semibold"
          htmlFor=""
        >
          Password
        </label>
        <input
          id="password"
          name="username"
          className="border-alt group-focus-within:border-primary-off h-9 rounded border-2 px-2 outline-0"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value.trim())}
        />
      </div>
      <div className="mt-8 flex justify-end">
        <Button
          variant="primary"
          className="group w-full justify-center sm:w-fit"
          title="Start survey"
          onClick={handleSignIn}
          disabled={isPending || !username || !password}
        >
          {isPending ? (
            <>
              Logging in... <Loader2 size={20} className="animate-spin" />
            </>
          ) : (
            <>
              Log in{" "}
              <ChevronRight
                size={20}
                className="relative right-0 transition-all group-hover:-right-1.5"
              />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
