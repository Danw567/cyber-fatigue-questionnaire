import DataSafeGaurdSplit from "./_features/DataSafeGaurdSplit";
import InfoCard from "./_components/InfoCard";
import Button from "./_components/Button";
import { ChevronRight } from "lucide-react";
import Logo from "./_components/Logo";

export default function Home() {
  return (
    <main className="bg-card mx-auto h-dvh max-w-200 overflow-auto px-5 pb-10 shadow-2xl">
      <div id="survey-top" className="h-5 w-0" />
      <div className="flex justify-between">
        <Logo width="150" />
        <div
          id="logo-bar-right"
          className="mx-auto flex w-full justify-end"
        ></div>
      </div>
      <div className="mt-5">
        <h1>Cyber Fatigue Survey</h1>
        <div className="mt-6 flex flex-col gap-4">
          <h2>Got about 7 minutes?</h2>
          <p>
            This independent evaluation is designed to map the hidden strain of
            daily security tasks. Your honest insights allow CyFa-4 to isolate
            where fatigue is occurring, ensuring vital security protocols can be
            streamlined without compromising safety.
          </p>

          <DataSafeGaurdSplit />
          <InfoCard
            title="Please Note!"
            message="Closing the page without completing the survey will erase any progress."
          />

          <div className="mt-4 flex items-center justify-center">
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
        </div>
      </div>
    </main>
  );
}
