"use client";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

export default function ProgressBar({ percentage }: { percentage: number }) {
  const [start, setStart] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setStart(percentage);
    }, 300);
  }, [percentage]);

  return (
    <div className="w-full">
      <span className="text-xs leading-0">
        <span className="font-medium">
          <CountUp duration={5} start={start} end={percentage} />%
        </span>{" "}
        Complete
      </span>
      <div className="border-primary-off h-2 w-full rounded-full border">
        <div
          className="bg-primary h-full transition-all duration-500 ease-in-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
