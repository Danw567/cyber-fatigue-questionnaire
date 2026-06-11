import { CircleAlert, Info } from "lucide-react";
import React from "react";

interface InfoCardProps {
  type?: "error" | "info";
  title?: string;
  message: string;
}

export default function InfoCard({
  type = "info",
  title,
  message,
}: InfoCardProps) {
  let icon = <Info size={20} />;
  switch (type) {
    case "error":
      icon = <CircleAlert size={20} />;
  }

  let colorClass = "border-primary";
  switch (type) {
    case "error":
      colorClass = "border-destructive";
  }

  let iconClass = "bg-primary-150 text-primary-700";
  switch (type) {
    case "error":
      iconClass = "bg-destructive-150 text-destructive";
  }

  let textClass = "text-primary-700";
  switch (type) {
    case "error":
      textClass = "text-destructive";
  }

  let bgClass = "bg-primary-50";
  switch (type) {
    case "error":
      bgClass = "bg-destructive-50";
  }

  return (
    <div
      className={`${bgClass} flex items-start gap-2 rounded border-l-4 p-2 shadow-sm ${colorClass}`}
    >
      <div className={`rounded p-1 ${iconClass}`}>{icon}</div>
      <div>
        <div className={`${textClass} text-destructive text-lg font-semibold`}>
          {title}
        </div>
        {message}
      </div>
    </div>
  );
}
