import { SelectedAnswer } from "../(LoggedOut)/survey/features/Survey";
import { AssessmentPayload } from "../_actions.ts/surveyAssessment";

export function computeScoreAverages(
  answers: SelectedAnswer[],
): AssessmentPayload {
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
