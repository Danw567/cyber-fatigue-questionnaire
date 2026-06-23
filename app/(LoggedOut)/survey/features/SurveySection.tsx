import { surveyStatements, SurveyStatementsT } from "@/app/_data/statements";
import { SelectedAnswer } from "./Survey";
import SurveyStatement from "./SurveyStatement";
import Button from "@/app/_components/Button";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const SECTION_STATEMENT_COUNT = 4;

type SectionProps = {
  statementObj: SurveyStatementsT;
  sectionNumber: number;
  handleNextClick: () => void;
  handlePreviousClick: () => void;
  setAnswers: (val: SelectedAnswer) => void;
  answers: SelectedAnswer[];
};

export default function SurveySection({
  statementObj,
  sectionNumber,
  handleNextClick,
  handlePreviousClick,
  setAnswers,
  answers,
}: SectionProps) {
  const { statements, fatigueType } = statementObj;
  const realSectionNumber = sectionNumber + 1;

  const isNextBtnDisabled =
    answers.length < realSectionNumber * SECTION_STATEMENT_COUNT;

  const nextStepToComplete = realSectionNumber === surveyStatements.length;

  return (
    <>
      {statements.map((st, i) => (
        <SurveyStatement
          key={`${sectionNumber}-${i}`}
          statement={st}
          setAnswers={setAnswers}
          type={fatigueType}
          statementNumber={i}
          answers={answers}
        />
      ))}
      <div className="my-10 flex items-center justify-between gap-3">
        {sectionNumber > 0 ? (
          <Button
            variant="secondary"
            className="group w-full justify-center sm:w-fit"
            onClick={handlePreviousClick}
            title="Previous section"
          >
            <ChevronLeft
              size={20}
              className="relative left-0 transition-all group-hover:-left-1.5"
            />{" "}
            Previous
          </Button>
        ) : (
          <div></div>
        )}

        <Button
          variant="primary"
          className="group w-full justify-center sm:w-fit"
          onClick={handleNextClick}
          title="Next section"
          disabled={isNextBtnDisabled}
        >
          {nextStepToComplete ? (
            <>
              Complete <CheckCircle size={18} />
            </>
          ) : (
            <>
              Next{" "}
              <ChevronRight
                size={20}
                className="relative right-0 transition-all group-hover:-right-1.5"
              />
            </>
          )}
        </Button>
      </div>
    </>
  );
}
