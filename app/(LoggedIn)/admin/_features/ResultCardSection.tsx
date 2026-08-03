"use client";

import { calcAvg } from "@/app/_utils/utils";
import { ResultCard } from "./ResultCard";
import { useState } from "react";
import { Actions } from "./Actions";
import { SearchAlert } from "lucide-react";

export const URGENT_SCORE = 3.8;
export const WARNING_SCORE = 2.6;

export default function ResultCardSection({ results }: { results: any }) {
  const [resultFilter, setResultFilter] = useState<boolean | null>(null);
  console.log("RESULTS FILTER", resultFilter);
  console.log("results", results);

  const filteredResults =
    resultFilter !== null
      ? results.filter((res: any) => res.isTechnicalUser == resultFilter)
      : results;

  console.log("FILTERED RESULTS", filteredResults);

  const action_results = calcAvg(
    filteredResults.map((res: any) => res.action_avg),
  );
  const advice_results = calcAvg(
    filteredResults.map((res: any) => res.advice_avg),
  );
  const cognitive_results = calcAvg(
    filteredResults.map((res: any) => res.cognitive_avg),
  );
  const attitudinal_results = calcAvg(
    filteredResults.map((res: any) => res.attitudinal_avg),
  );

  const hasSuggestions =
    Number(action_results) >= WARNING_SCORE ||
    Number(advice_results) >= WARNING_SCORE ||
    Number(cognitive_results) >= WARNING_SCORE ||
    Number(attitudinal_results) >= WARNING_SCORE;

  return (
    <>
      <Tabs resultFilter={resultFilter} setResultFilter={setResultFilter} />

      {filteredResults.length > 0 ? (
        <>
          <h2 className="mt-2 text-2xl!">
            <span className="text-primary-off">{filteredResults.length}</span>{" "}
            member
            {filteredResults.length > 1 ? "s" : ""} of staff{" "}
            {filteredResults.length > 1 ? "have" : "has"} completed the survey.
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
          )}{" "}
        </>
      ) : (
        <div className="bg-primary-100 mt-8 rounded-lg p-8 shadow-sm">
          <div className="flex flex-col items-center p-8 text-center">
            <div className="text-primary mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white">
              <SearchAlert size={50} />
            </div>

            <h3 className="text-secondary mb-2 text-xl font-bold">
              No Results
            </h3>
          </div>
        </div>
      )}
    </>
  );
}

const TABS = [
  { label: "All Users", value: null },
  { label: "Technical Users", value: true },
  { label: "Non-Technical Users", value: false },
];

function Tabs({
  resultFilter,
  setResultFilter,
}: {
  resultFilter: boolean | null;
  setResultFilter: (val: boolean | null) => void;
}) {
  return (
    <div className="mt-4 mb-6">
      <div className="relative flex">
        {TABS.map((tab) => {
          const isActive = resultFilter === tab.value;
          return (
            <div
              onClick={() => setResultFilter(tab.value)}
              key={tab.label}
              className={`w-1/3 py-3 text-center font-semibold ${isActive ? "text-primary-off" : "text-alt/50 cursor-pointer"}`}
            >
              {tab.label}
            </div>
          );
        })}
        <div className="absolute bottom-0 w-full">
          <div
            className={`bg-primary relative left-0 ${resultFilter === true ? "left-1/3" : resultFilter === false ? "left-2/3" : ""} h-1 w-1/3 rounded-b transition-all duration-300`}
          />
        </div>
      </div>
    </div>
  );
}
