import DataSafeGaurdSplit from "./_features/DataSafeGaurdSplit";
import InfoCard from "./_components/InfoCard";
import Logo from "./_components/Logo";
import LandingPageContinue from "./_features/LandingPageSelection";

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

          <LandingPageContinue />
        </div>
      </div>
    </main>
  );
}
