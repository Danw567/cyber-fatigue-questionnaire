import InfoCard from "@/app/_components/InfoCard";
import { CheckCircle, ShieldCheckIcon } from "lucide-react";

export default function page() {
  return (
    <div className="bg-primary-100 mx-auto mt-8 max-w-md rounded-lg">
      <div className="flex flex-col items-center p-8 text-center">
        <div className="text-primary mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white">
          <CheckCircle size={50} />
        </div>

        <h1 className="text-secondary mb-2 text-xl font-bold">Thank you!</h1>

        <p className="mb-6 text-sm">
          Your answers are in. We're using these trends to help your
          organisation simplify workflows and reduce daily security friction.
        </p>

        <div className="text-alt-400 border-l-primary-off inline-flex items-center gap-1.5 rounded border-l-4 bg-white px-2.5 py-1 text-xs font-medium">
          <ShieldCheckIcon size={14} className="text-primary" />
          100% private and protected
        </div>
      </div>
    </div>
  );
}
