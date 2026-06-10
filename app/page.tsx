import { ChevronRight } from "lucide-react";
import Button from "./_components/Button";
import Logo from "./_components/Logo";

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
          <p>
            To keep this evaluation completely fair and honest, CyFa-4 protects
            your data from start to finish:
          </p>
          <ul>
            <li>
              <strong>100% Anonymous:</strong> We do not collect your name,
              tracking tags, or any details that could show who you are.
            </li>
            <li>
              <strong>No Individual Reviews:</strong> Your organization will
              only see big-picture team trends to help them fix issues. Your
              individual answers are kept completely separate and can never be
              used against you.
            </li>
            <li>
              <strong>Focused on Friction:</strong> The data is only used to
              find where daily security tasks feel exhausting, so the
              organization can make them easier to follow.
            </li>
            <li>
              <strong>Permanently Deleted:</strong> Every single piece of data
              collected will be completely wiped out when the project ends this
              September.
            </li>
          </ul>
          <p>
            <strong>Please note:</strong> complete all questions before leaving
            this site. Doing so will erase any progress made.
          </p>
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
