"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { suggestions, SuggestionT } from "@/app/_data/suggestions";
import InfoCard from "@/app/_components/InfoCard";
import { URGENT_SCORE, WARNING_SCORE } from "./ResultCardSection";

type FatigueType = "action" | "advice" | "attitudinal" | "cognitive";

interface SuggestedActionProps {
  action: number;
  advice: number;
  attitudinal: number;
  cognitive: number;
}

export function Actions(props: SuggestedActionProps) {
  const urgentSuggestions: FatigueType[] = [];
  const warningSuggestions: FatigueType[] = [];

  Object.entries(props).forEach(([key, score]) => {
    const type = key as FatigueType;
    if (score > URGENT_SCORE) {
      urgentSuggestions.push(type);
    } else if (score > WARNING_SCORE) {
      warningSuggestions.push(type);
    }
  });

  return (
    <div className="mt-6">
      {urgentSuggestions.length > 0 && (
        <div className="mt-6">
          <h3>Urgent Actions</h3>
          <div className="mt-2 flex flex-col gap-2">
            {urgentSuggestions.map((type) => (
              <ActionPanel type={type} key={`urgent-${type}`} />
            ))}
          </div>
        </div>
      )}

      {warningSuggestions.length > 0 && (
        <div className="mt-6">
          <h3>Suggested Actions</h3>
          <div className="mt-2 flex flex-col gap-2">
            {warningSuggestions.map((type) => (
              <ActionPanel type={type} key={`warning-${type}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ActionPanel({ type }: { type: FatigueType }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const suggestionObj = suggestions.find((s) => s.type === type);

  const handleExpansionToggle = () => setIsExpanded((prev) => !prev);

  if (!suggestionObj) return null;

  return (
    <div className="border-alt-200 bg-background rounded-lg border-2 shadow-sm">
      <button
        className="flex w-full cursor-pointer items-center justify-between p-4"
        onClick={handleExpansionToggle}
        aria-expanded={isExpanded}
        title="expand section"
      >
        <h4 className="capitalize">
          <span className="text-primary-off">{type}</span> fatigue mitigations
        </h4>
        <div
          className={`transition-transform duration-200 ${isExpanded ? "rotate-45" : ""}`}
        >
          <Plus />
        </div>
      </button>

      {isExpanded && (
        <>
          <ul className="mt-1 px-4 pb-4">
            {suggestionObj.suggestions.map((sug: SuggestionT) => (
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
              message={suggestionObj.description ?? ""}
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
