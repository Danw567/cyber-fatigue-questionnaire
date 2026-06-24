import InfoCard from "@/app/_components/InfoCard";
import { CheckCircle, ShieldCheckIcon } from "lucide-react";

export default function page() {
  return (
    <>
      <div className="flex flex-col items-center p-8 text-center">
        <div className="bg-primary-100 text-primary mb-5 flex h-20 w-20 items-center justify-center rounded-full">
          <CheckCircle size={50} />
        </div>

        <h1 className="text-secondary mb-2 text-xl font-bold">Thank you!</h1>

        <p className="mb-6 max-w-md text-sm">
          Your answers are in. We are already converting this data into
          big-picture trends to help your organisation fix exhausting workflows
          and make security feel less like a burden.
        </p>

        <div className="text-alt-400 bg-primary-off-100 border-l-primary-off inline-flex items-center gap-1.5 rounded border-l-4 px-2.5 py-1 text-xs font-medium">
          <ShieldCheckIcon size={14} className="text-primary" />
          100% private and protected
        </div>
      </div>
    </>
  );
}
