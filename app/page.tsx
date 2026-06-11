import Logo from "./_components/Logo";
import DataSafeGaurdSplit from "./_features/DataSafeGaurdSplit";
import InfoCard from "./_components/InfoCard";
import StartSurveyBtn from "./_features/StartSurveyBtn";

export default function Home() {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <Logo width="150" />
        <StartSurveyBtn />
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
            <StartSurveyBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
