import { ChevronRight } from "lucide-react";
import Button from "../_components/Button";

export default function StartSurveyBtn() {
  return (
    <Button variant="primary" className="group" href="login">
      Start Survey{" "}
      <ChevronRight
        size={20}
        className="relative right-0 transition-all group-hover:-right-1.5"
      />
    </Button>
  );
}
