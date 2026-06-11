import { ChevronRight } from "lucide-react";
import Button from "./_components/Button";
import Logo from "./_components/Logo";
import DataSafeGaurdSplit from "./_features/DataSafeGaurdSplit";
import InfoCard from "./_components/InfoCard";

export default function Home() {
  return (
    <div className="p-5">
      <Logo width="150" />
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
            title="Please note"
            message="Closing the page without completing the survey will erase any progress."
          />

          <div className="mt-4 flex items-center justify-center">
            <Button variant="primary" className="group">
              Start Survey Now{" "}
              <ChevronRight
                size={20}
                className="relative right-0 transition-all group-hover:-right-1.5"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
