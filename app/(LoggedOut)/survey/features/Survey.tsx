"use client";
import ProgressBar from "@/app/_components/ProgressBar";
import { surveyStatements } from "@/app/_data/statements";
import { useEffect, useState, useTransition } from "react";
import { createPortal } from "react-dom";
import SurveySection from "./SurveySection";
import { useRouter } from "next/navigation";
import { AssessmentScores, computeScoreAverages } from "@/app/_utils/utils";
import { submitCyfaAssessment } from "@/app/_actions/surveyAssessment";
import { useTechincalUserContext } from "@/app/context/useTechnicalUser";

export type SelectedAnswer = {
  type: string;
  statementNumber: number;
  score: number;
};

export default function Survey() {
  const router = useRouter();
  const { isTechnicalUser } = useTechincalUserContext();
  const [mounted, setMounted] = useState(false);
  const [section, setSection] = useState(0);
  const [answers, setAnswers] = useState<SelectedAnswer[]>([]);
  const [submitError, setSubmitError] = useState(false);
  const [isSubmitting, startTransition] = useTransition();

  const answerCount = surveyStatements.flatMap((ss) => ss.statements).length;
  const percentage = (answers.length / answerCount) * 100;

  const handleSetAnswers = (ans: SelectedAnswer) => {
    setAnswers((prev) => {
      const exists = prev.some(
        (item) =>
          item.type === ans.type &&
          item.statementNumber === ans.statementNumber,
      );

      if (exists) {
        return prev.map((item) =>
          item.type === ans.type && item.statementNumber === ans.statementNumber
            ? { ...item, score: ans.score }
            : item,
        );
      }

      return [...prev, ans];
    });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNext = () => {
    setSubmitError(false);
    if (answerCount === answers.length) {
      startTransition(async () => {
        const computedAverages: AssessmentScores =
          computeScoreAverages(answers);

        try {
          await submitCyfaAssessment({
            ...computedAverages,
            isTechnicalUser: isTechnicalUser,
          });
          router.push("/survey/completed");
        } catch (e) {
          console.log("There was an error", e);
          setSubmitError(true);
        }
      });
    } else {
      setSection((prev) => {
        if (prev === surveyStatements.length - 1)
          return surveyStatements.length - 1;

        return prev + 1;
      });

      const topAnchor = document.getElementById("survey-top");
      if (topAnchor) {
        topAnchor.scrollIntoView({ behavior: "smooth" });
      }
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
      {mounted &&
        container &&
        createPortal(
          <div className="w-full max-w-[80%]">
            <ProgressBar percentage={percentage} />
          </div>,
          container,
        )}
      <SectionText currentSection={section} />
      <SurveySection
        statementObj={surveyStatements[section]}
        sectionNumber={section}
        handleNextClick={handleNext}
        handlePreviousClick={handlePrevious}
        setAnswers={handleSetAnswers}
        answers={answers}
        isSubmitting={isSubmitting}
        hasError={submitError}
      />
    </>
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
