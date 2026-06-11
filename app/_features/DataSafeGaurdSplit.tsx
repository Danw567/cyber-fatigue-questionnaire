export default function DataSafeGaurdSplit() {
  const safeguards = [
    {
      title: "100% Anonymous",
      text: "We do not collect your name, tracking tags, or any details that could show who you are.",
    },
    {
      title: "No Individual Reviews",
      text: "Your organization will only see big-picture team trends to help them fix issues. Your individual answers are kept completely separate and can never be used against you.",
    },
    {
      title: "Focused on Friction",
      text: "The data is only used to find where daily security tasks feel exhausting, so the organization can make them easier to follow.",
    },
    {
      title: "Permanently Deleted",
      text: "Every single piece of data collected will be completely wiped out when the project ends this September.",
    },
  ];

  return (
    <div className="bg-background mx-auto w-full max-w-5xl rounded border border-slate-100 p-6 shadow-sm md:p-8">
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <h3 className="mb-2">Your Privacy Safeguards</h3>
          <p className="text-alt text-sm leading-relaxed">
            To keep this evaluation completely fair and honest, CyFa-4 protects
            your data from start to finish.
          </p>
        </div>

        <div className="space-y-5 md:col-span-2">
          {safeguards.map((item, index) => (
            <div key={index} className="flex gap-4">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
              <div>
                <h4 className="mb-0.5">{item.title}</h4>
                <p className="text-alt">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
