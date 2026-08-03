import { SelectedAnswer } from "../(LoggedOut)/survey/features/Survey";
import { AssessmentPayload } from "../_actions/surveyAssessment";

export type AssessmentScores = Omit<AssessmentPayload, "isTechnicalUser">;

export function computeScoreAverages(
  answers: SelectedAnswer[],
): AssessmentScores {
  const groupedAnswers = Object.groupBy(answers, (ans) => ans.type);

  const categoryAverages = Object.fromEntries(
    Object.entries(groupedAnswers).map(([category, items]) => {
      if (!items || items.length === 0) return [category, 0];

      const total = items.reduce((sum, item) => sum + item.score, 0);
      const average = total / items.length;

      return [category, average];
    }),
  );

  const { action, advice, attitudinal, cognitive } = categoryAverages;

  return {
    action,
    advice,
    attitudinal,
    cognitive,
  };
}

const sum = (scores: number[]) => scores.reduce((acc, curr) => acc + curr, 0);

export const calcAvg = (scores: number[]) => {
  return (
    scores && scores.length > 0 ? sum(scores) / scores.length : 0
  ).toFixed(2);
};
