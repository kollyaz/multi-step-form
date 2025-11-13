import { Header } from "./App";

export function Summary({ selectedPlan, selectedAddOns, plans, addOns, isOn }) {
  const selectedPlanDetails = plans.find((plan) => plan.name === selectedPlan);
  const planPriceStr = selectedPlanDetails
    ? isOn
      ? selectedPlanDetails.priceYear
      : selectedPlanDetails.priceMonth
    : null;
  const planPriceValue = planPriceStr
    ? parseFloat(planPriceStr.replace(/[^0-9.-]+/g, ""))
    : 0;

  const selectedAddOnObjects = selectedAddOns
    .map((id) => addOns.find((a) => a.id === id))
    .filter(Boolean);

  const addOnItems = selectedAddOnObjects.map((a) => {
    const priceStr = isOn ? a.priceYear : a.priceMonth;
    const priceValue = parseFloat(priceStr.replace(/[^0-9.-]+/g, ""));
    return { ...a, priceStr, priceValue };
  });

  const totalAddOnValue = addOnItems.reduce(
    (sum, item) => sum + item.priceValue,
    0
  );
  const totalValue = planPriceValue + totalAddOnValue;

  const periodLabel = isOn ? "per year" : "per month";
  const periodSuffix = isOn ? "/yr" : "/mo";

  return (
    <div className="summary-container section">
      <Header
        title="Finishing up"
        subtitle="Double-check everything looks OK before confirming."
      />
      <div className="summary">
        <div className="plan-summary">
          <div>
            <h3>
              {selectedPlan
                ? `${selectedPlan} (${isOn ? "Yearly" : "Monthly"})`
                : "No plan selected"}
            </h3>
            <a href="#change">Change</a>
          </div>
          <span>{planPriceStr ?? "$0"}</span>
        </div>

        <hr />

        <div className="add-ons-summary">
          {addOnItems.length === 0 ? (
            <p>No add-ons selected</p>
          ) : (
            addOnItems.map((item) => (
              <div key={item.id} className="add-on-summary-item">
                <span>{item.title}</span>
                <span className="add-on-price-summary">{item.priceStr}</span>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="total-summary">
        <span>Total ({periodLabel})</span>
        <h2 className="total-price">
          +${totalValue}
          {periodSuffix}
        </h2>
      </div>
    </div>
  );
}
