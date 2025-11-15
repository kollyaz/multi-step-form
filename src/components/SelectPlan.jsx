import { Header } from "./Header";

export function SelectPlan({
  plans,
  selectedPlan,
  setSelectedPlan,
  isOn,
  setIsOn,
}) {
  return (
    <div className="select-plan section">
      <Header
        title="Select your plan"
        subtitle="You have the option of monthly or yearly billing."
      />

      <div className="plans">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`plan ${selectedPlan === plan.name ? "selected" : ""}`}
            onClick={() => setSelectedPlan(plan.name)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setSelectedPlan(plan.name)}
          >
            <img
              className="plan-icon"
              src={plan.icon}
              alt={`${plan.name} icon`}
            />
            <div className="plan-details">
              <h2>{plan.name}</h2>
              <p>{isOn ? plan.priceYear : plan.priceMonth}</p>
              <span className="bonus">{isOn ? "2 months free" : ""}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="plan-sequence">
        <span className={isOn ? "grey" : "active"}>Monthly</span>
        <Toggle isOn={isOn} setIsOn={setIsOn} />
        <span className={isOn ? "active" : "grey"}>Yearly</span>
      </div>
    </div>
  );
}

function Toggle({ isOn, setIsOn }) {
  return (
    <div
      className={`slider-toggle ${isOn ? "on" : "off"}`}
      role="switch"
      aria-checked={isOn}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setIsOn(!isOn)}
      onClick={() => setIsOn(!isOn)}
    >
      <div className="slider-circle"></div>
    </div>
  );
}
