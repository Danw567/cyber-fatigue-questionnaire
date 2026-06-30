import { getAllEvaluationResults } from "@/app/_actions/admin/fetchResults";
import { calcAvg } from "@/app/_utils/utils";
import { ResultCard } from "./_features/ResultCard";
import { Actions } from "./_features/Actions";

export const URGENT_SCORE = 3.8;
export const WARNING_SCORE = 2.6;

export default async function page() {
  const results = await getAllEvaluationResults();

  const action_results = calcAvg(results.map((res) => res.action_avg));
  const advice_results = calcAvg(results.map((res) => res.advice_avg));
  const cognitive_results = calcAvg(results.map((res) => res.cognitive_avg));
  const attitudinal_results = calcAvg(
    results.map((res) => res.attitudinal_avg),
  );

  const hasSuggestions =
    Number(action_results) >= WARNING_SCORE ||
    Number(advice_results) >= WARNING_SCORE ||
    Number(cognitive_results) >= WARNING_SCORE ||
    Number(attitudinal_results) >= WARNING_SCORE;

  return (
    <div>
      <h1>
        Hello, <span className="text-primary-off">[NAME]</span>
      </h1>
      <h2 className="mt-2 text-2xl!">
        <span className="text-primary-off">{results.length}</span> member
        {results.length > 1 ? "s" : ""} of staff{" "}
        {results.length > 1 ? "have" : "has"} completed the survey.
      </h2>

      <div className="mt-6 flex flex-wrap gap-3">
        <ResultCard type="Action" score={action_results} />
        <ResultCard type="Advice" score={advice_results} />
        <ResultCard type="Cognitive" score={cognitive_results} />
        <ResultCard type="Attitudinal" score={attitudinal_results} />
      </div>

      {hasSuggestions && (
        <Actions
          action={Number(action_results)}
          advice={Number(advice_results)}
          attitudinal={Number(attitudinal_results)}
          cognitive={Number(cognitive_results)}
        />
      )}
    </div>
  );
}
