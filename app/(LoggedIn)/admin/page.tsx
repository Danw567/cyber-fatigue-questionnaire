import { getAllEvaluationResults } from "@/app/_actions/admin/fetchResults";
import { calcAvg } from "@/app/_utils/utils";
import { CheckCircle, CircleAlert, TriangleAlert } from "lucide-react";

export default async function page() {
  const results = await getAllEvaluationResults();

  const action_results = calcAvg(results.map((res) => res.action_avg));
  const advice_results = calcAvg(results.map((res) => res.advice_avg));
  const cognitive_results = calcAvg(results.map((res) => res.cognitive_avg));
  const attitudinal_results = calcAvg(
    results.map((res) => res.attitudinal_avg),
  );

  const hasSuggestions =
    Number(action_results) >= 2.6 ||
    Number(advice_results) >= 2.6 ||
    Number(cognitive_results) >= 2.6 ||
    Number(attitudinal_results) >= 2.6;

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
        <ResultCard type="Action Related Avg." score={action_results} />
        <ResultCard type="Advice Related Avg." score={advice_results} />
        <ResultCard type="Cognitive Fatigue Avg." score={cognitive_results} />
        <ResultCard
          type="Attitudinal Fatigue Avg."
          score={attitudinal_results}
        />
      </div>

      {hasSuggestions && (
        <SuggestedActions
          action={Number(action_results)}
          advice={Number(advice_results)}
          attitudinal={Number(attitudinal_results)}
          cognitive={Number(cognitive_results)}
        />
      )}
    </div>
  );
}

interface SuggestedActionProps {
  action: number;
  advice: number;
  attitudinal: number;
  cognitive: number;
}

function SuggestedActions({
  action,
  advice,
  attitudinal,
  cognitive,
}: SuggestedActionProps) {
  const urgentScore = 3.8;

  const severityPhrase =
    Number(cognitive) > urgentScore || Number(attitudinal) > urgentScore
      ? "urgently action the suggestions below"
      : "think about actioning the suggestions below soon";

  return (
    <div className="mt-6">
      <h3>Suggested Actions</h3>
      <p>
        Based on the averages above, you should {severityPhrase} if applicable:
      </p>
    </div>
  );
}

interface ResultCardProps {
  type: string;
  score: string | number;
}

export function ResultCard({ type, score }: ResultCardProps) {
  const numberScore = Number(score);

  const getCardStatus = (val: number) => {
    if (val >= 3.8) {
      return {
        cardClass: "border-rose-200 bg-rose-50 text-rose-600",
        icon: <TriangleAlert size={18} />,
        iconbg: "bg-rose-100",
      };
    }
    if (val >= 2.6 && val <= 3.7) {
      return {
        cardClass: "border-amber-200 bg-amber-50 text-amber-600",
        icon: <CircleAlert size={18} />,
        iconbg: "bg-amber-100",
      };
    }
    return {
      cardClass:
        "bg-primary-off-50 border-primary-off-200 text-primary-off-600",
      icon: <CheckCircle size={18} />,
      iconbg: "bg-primary-off-100",
    };
  };

  const { cardClass, icon, iconbg } = getCardStatus(numberScore);

  return (
    <div
      className={`w-1/5 min-w-3xs grow rounded-lg border-2 p-4 shadow-sm ${cardClass}`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="text-alt/50 font-medium">{type}</div>
        <div className={`rounded p-1 ${iconbg}`}>{icon}</div>
      </div>
      <div className="text-bold text-4xl">{numberScore.toFixed(2)}</div>
    </div>
  );
}
