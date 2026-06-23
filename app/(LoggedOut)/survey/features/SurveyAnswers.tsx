import RadioInput from "@/app/_components/RadioInput";
import { StatementProps } from "./SurveyStatement";
import { surveyAnswers } from "@/app/_data/statements";

export default function SurveyAnswers({
  statement,
  setAnswers,
  type,
  statementNumber,
  answers,
}: StatementProps) {
  const currentAnswer = answers.find(
    (item) => item.type === type && item.statementNumber === statementNumber,
  );

  const selected = currentAnswer ? currentAnswer.score : null;

  const handleSelect = (score: number) => {
    setAnswers({ type, statementNumber, score });
  };

  return (
    <div role="radiogroup">
      {surveyAnswers.map((ans) => (
        <RadioInput
          key={`${statement}-${ans.answer}`}
          label={ans.answer}
          value={ans.score}
          name={statement}
          selected={selected === ans.score}
          setSelected={handleSelect}
        />
      ))}
    </div>
  );
}
