import { getAllEvaluationResults } from "@/app/_actions/admin/fetchResults";
import { getCurrentUser } from "@/app/_actions/admin/user";
import { redirect } from "next/navigation";
import ResultCardSection from "./_features/ResultCardSection";

export default async function page() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const results = await getAllEvaluationResults();

  const username = user.email?.split("@")[0];

  return (
    <>
      <h1>
        Hello, <span className="text-primary-off capitalize">{username}</span>
      </h1>

      <ResultCardSection results={results} />
    </>
  );
}
