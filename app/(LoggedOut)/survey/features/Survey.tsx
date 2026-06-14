"use client";
import Button from "@/app/_components/Button";
import RadioInput from "@/app/_components/RadioInput";
import {
  surveyAnswers,
  surveyStatements,
  SurveyStatementsT,
} from "@/app/_data/statements";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Survey() {
  const [mounted, setMounted] = useState(false);
  const [section, setSection] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNext = () => {
    setSection((prev) => {
      if (prev === surveyStatements.length - 1)
        return surveyStatements.length - 1;

      return prev + 1;
    });
    const topAnchor = document.getElementById("survey-top");
    if (topAnchor) {
      topAnchor.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    setSection((prev) => {
      if (prev === 0) return 0;
      return prev - 1;
    });
  };

  const container =
    typeof window !== "undefined"
      ? document.getElementById("logo-bar-right")
      : null;

  return (
    <>
      <div id="survey-top" className="h-0 w-0" />
      {mounted && container && createPortal(<p>progress bar</p>, container)}
      <SectionText currentSection={section} />
      <Section
        statementObj={surveyStatements[section]}
        sectionNumber={section}
        handleNextClick={handleNext}
        handlePreviousClick={handlePrevious}
      />
    </>
  );
}

type SectionProps = {
  statementObj: SurveyStatementsT;
  sectionNumber: number;
  handleNextClick: () => void;
  handlePreviousClick: () => void;
};

function Section({
  statementObj,
  sectionNumber,
  handleNextClick,
  handlePreviousClick,
}: SectionProps) {
  const { statements, fatigueType } = statementObj;
  return (
    <>
      {statements.map((st, i) => (
        <Statement key={`${sectionNumber}-${i}`} statement={st} />
      ))}
      <div className="my-10 flex items-center justify-between">
        {sectionNumber > 0 ? (
          <Button
            variant="secondary"
            className="group w-full justify-center sm:w-fit"
            onClick={handlePreviousClick}
            title="Next section"
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
        >
          Next{" "}
          <ChevronRight
            size={20}
            className="relative right-0 transition-all group-hover:-right-1.5"
          />
        </Button>
      </div>
    </>
  );
}

function Statement({ statement }: { statement: string }) {
  return (
    <div className="my-7">
      <div className="bg-primary-200 mb-3 rounded px-3 pt-1 pb-3">
        <p className="text-primary-off! text-[10px]! tracking-wider uppercase">
          Statement
        </p>
        <p className="text-center sm:text-lg!">"{statement}"</p>
      </div>
      <Answers statement={statement} />
    </div>
  );
}

function Answers({ statement }: { statement: string }) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div role="radiogroup">
      {surveyAnswers.map((ans) => (
        <RadioInput
          key={`${statement}-${ans.answer}`}
          label={ans.answer}
          value={ans.score}
          name={statement}
          selected={selected === ans.score}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
}

function SectionText({ currentSection }: { currentSection: number }) {
  return (
    <div className="mb-5">
      <h1>
        Section <span className="text-primary-off">{currentSection + 1}</span>{" "}
        of 4
      </h1>
      <p>Select one answer for each statement</p>
    </div>
  );
}
