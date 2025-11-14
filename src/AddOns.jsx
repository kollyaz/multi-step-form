import { Header } from "./Header";

export function AddOns({ addOns, selectedAddOns, setSelectedAddOns, isOn }) {
  const toggleSelection = (id) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="add-ons section">
      <Header
        title="Pick add-ons"
        subtitle="Add-ons help enhance your gaming experience."
      />
      {addOns.map((addOn) => (
        <label
          key={addOn.id}
          className={`add-on-item ${
            selectedAddOns.includes(addOn.id) ? "selected" : ""
          }`}
          onClick={() => toggleSelection(addOn.id)}
        >
          <input
            type="checkbox"
            checked={selectedAddOns.includes(addOn.id)}
            onChange={() => toggleSelection(addOn.id)}
          />
          <span className="custom-checkbox"></span>

          <div className="add-on-details-container">
            <div className="add-on-details">
              <h3>{addOn.title}</h3>
              <p>{addOn.subtitle}</p>
            </div>
            <span className="bonus-add-on">
              {isOn ? addOn.priceYear : addOn.priceMonth}
            </span>
          </div>
        </label>
      ))}
    </div>
  );
}
