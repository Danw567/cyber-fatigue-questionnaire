"use client";

import { suggestions, SuggestionT } from "@/app/_data/suggestions";
import { URGENT_SCORE, WARNING_SCORE } from "../page";
import { useState } from "react";
import { Plus } from "lucide-react";
import InfoCard from "@/app/_components/InfoCard";

interface SuggestedActionProps {
  action: number;
  advice: number;
  attitudinal: number;
  cognitive: number;
}

export function Actions({
  action,
  advice,
  attitudinal,
  cognitive,
}: SuggestedActionProps) {
  let warningSuggestions: FatigueType[] = [];
  let urgentSuggestions: FatigueType[] = [];

  if (action > URGENT_SCORE) {
    urgentSuggestions.push("action");
  } else if (action > WARNING_SCORE) {
    warningSuggestions.push("action");
  }
  if (advice > URGENT_SCORE) {
    urgentSuggestions.push("advice");
  } else if (advice > WARNING_SCORE) {
    warningSuggestions.push("advice");
  }
  if (attitudinal > URGENT_SCORE) {
    urgentSuggestions.push("attitudinal");
  } else if (attitudinal > WARNING_SCORE) {
    warningSuggestions.push("attitudinal");
  }
  if (cognitive > URGENT_SCORE) {
    urgentSuggestions.push("cognitive");
  } else if (cognitive > WARNING_SCORE) {
    warningSuggestions.push("cognitive");
  }

  return (
    <div className="mt-6">
      {urgentSuggestions.length > 0 && (
        <div className="mt-6">
          <h3>Urgent Actions</h3>
          <div className="mt-2 flex flex-col gap-2">
            {urgentSuggestions.map((type: FatigueType) => (
              <ActionPanel type={type} key={type} />
            ))}
          </div>
        </div>
      )}
      {warningSuggestions.length > 0 && (
        <div className="mt-6">
          <h3>Suggested Actions</h3>
          <div className="mt-2 flex flex-col gap-2">
            {warningSuggestions.map((type: FatigueType) => (
              <ActionPanel type={type} key={type} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

type FatigueType = "action" | "advice" | "attitudinal" | "cognitive";

function ActionPanel({ type }: { type: FatigueType }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const suggestionObj = suggestions.find((s) => s.type === type);

  const handleExpansionToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="border-alt-200 bg-background rounded-lg border-2">
      <div
        className="flex cursor-pointer items-center justify-between p-4"
        onClick={handleExpansionToggle}
        title="expand section"
      >
        <h4 className="capitalize">
          <span className="text-primary-off">{type}</span> fatigue mitigations
        </h4>
        <div className={`${isExpanded ? "rotate-45" : ""}`}>
          <Plus />
        </div>
      </div>
      {isExpanded && (
        <>
          <ul className="mt-1 px-4 pb-4">
            {suggestionObj?.suggestions.map((sug: SuggestionT) => (
              <ActionItem
                title={sug.title}
                explanation={sug.explanation}
                key={sug.title}
              />
            ))}
          </ul>
          <div className="px-4 pb-4">
            <InfoCard
              title={`What is ${type}-related fatigue?`}
              message={suggestionObj?.description ?? ""}
            />
          </div>
        </>
      )}
    </div>
  );
}

function ActionItem({ title, explanation }: SuggestionT) {
  return (
    <li className="not-last:mb-1">
      <div className="text-primary-off text-lg font-semibold">{title}</div>
      <div>{explanation}</div>
    </li>
  );
}
