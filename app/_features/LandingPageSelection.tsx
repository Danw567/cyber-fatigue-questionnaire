"use client";

import { Check, ChevronRight } from "lucide-react";
import Button from "../_components/Button";
import { useTechincalUserContext } from "../context/useTechnicalUser";

export default function LandingPageContinue() {
  const { isTechnicalUser, toggleTechUser } = useTechincalUserContext();

  const setToggleChecked = () => toggleTechUser();

  return (
    <div className="mt-4 flex flex-col items-center justify-center gap-8">
      <CheckBox
        isChecked={isTechnicalUser}
        label="I consider myself technical"
        setIsChecked={setToggleChecked}
      />
      <Button
        variant="primary"
        className="group w-full justify-center sm:w-fit"
        href="/survey"
        title="Start survey"
      >
        Start Survey{" "}
        <ChevronRight
          size={20}
          className="relative right-0 transition-all group-hover:-right-1.5"
        />
      </Button>
    </div>
  );
}

function CheckBox({
  setIsChecked,
  isChecked,
  label,
}: {
  setIsChecked: () => void;
  isChecked: boolean;
  label: string;
}) {
  return (
    <div
      onClick={setIsChecked}
      className="flex cursor-pointer items-center gap-2"
      role="checkbox"
      aria-checked={isChecked}
    >
      <div
        className={`border-primary-off h-5 w-5 rounded border ${isChecked ? "bg-primary-off" : ""}`}
      >
        {isChecked && <Check size={18} className="text-card" />}
      </div>
      <div className="leading-0">{label}</div>
    </div>
  );
}
