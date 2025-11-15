import { Steps } from "./Steps";
import "./Aside.css";

export function Aside({ step }) {
  return (
    <div className="aside-steps">
      <Steps step={step} />
    </div>
  );
}
