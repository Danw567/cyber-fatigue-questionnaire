import { CheckCircle, CircleAlert, TriangleAlert } from "lucide-react";

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
        <div className="text-alt/50 font-medium">{type} Fatigue Avg.</div>
        <div className={`rounded p-1 ${iconbg}`}>{icon}</div>
      </div>
      <div className="text-bold text-4xl">{numberScore.toFixed(2)}</div>
    </div>
  );
}
