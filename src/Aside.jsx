import { Steps } from "./Steps";

export function Aside({ step }) {
  return (
    <ul className="aside-steps">
      <Steps step={step} />
    </ul>
  );
}
