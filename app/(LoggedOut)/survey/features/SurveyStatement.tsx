import { SelectedAnswer } from "./Survey";
import SurveyAnswers from "./SurveyAnswers";

export type StatementProps = {
  statement: string;
  statementNumber: number;
  type: string;
  setAnswers: (val: SelectedAnswer) => void;
  answers: SelectedAnswer[];
};

export default function SurveyStatement({
  statement,
  setAnswers,
  type,
  statementNumber,
  answers,
}: StatementProps) {
  return (
    <div className="my-7">
      <div className="bg-primary-100 mb-3 rounded px-3 pt-1 pb-3">
        <p className="text-primary-off! text-[10px]! tracking-wider uppercase">
          Statement
        </p>
        <p className="text-center sm:text-lg!">"{statement}"</p>
      </div>
      <SurveyAnswers
        statement={statement}
        setAnswers={setAnswers}
        type={type}
        statementNumber={statementNumber}
        answers={answers}
      />
    </div>
  );
}
