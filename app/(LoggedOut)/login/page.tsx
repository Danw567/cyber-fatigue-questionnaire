import { getCurrentUser } from "@/app/_actions/admin/user";
import LoginForm from "./LoginForm";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await getCurrentUser();
  if (user) redirect("/admin");

  return (
    <div className="mx-auto mt-6 max-w-100">
      <h1 className="text-2xl!">Admin Login</h1>
      <LoginForm />
    </div>
  );
}
