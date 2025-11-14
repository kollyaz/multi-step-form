import { useState } from "react";
import "./App.css";
import arcade from "./assets/images/icon-arcade.svg";
import advanced from "./assets/images/icon-advanced.svg";
import pro from "./assets/images/icon-pro.svg";
import { YourInfo } from "./YourInfo.jsx";
import { SelectPlan } from "./SelectPlan";
import { AddOns } from "./AddOns";
import { Summary } from "./Summary";
import { Success } from "./Success";
import { Aside } from "./Aside";

function App() {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [isOn, setIsOn] = useState(false);

  function nextStep() {
    setStep((prev) => Math.min(prev + 1, 5));
  }

  function prevStep() {
    setStep((prev) => Math.max(prev - 1, 1));
  }

  const plans = [
    { name: "Arcade", priceMonth: "$9/mo", priceYear: "$90/yr", icon: arcade },
    {
      name: "Advanced",
      priceMonth: "$12/mo",
      priceYear: "$120/yr",
      icon: advanced,
    },
    { name: "Pro", priceMonth: "$15/mo", priceYear: "$150/yr", icon: pro },
  ];

  const addOns = [
    {
      id: 1,
      title: "Online service",
      subtitle: "Access to multiplayer games",
      priceMonth: "+ $1/mo",
      priceYear: "+ $10/yr",
    },
    {
      id: 2,
      title: "Larger storage",
      subtitle: "Extra 1TB of cloud save",
      priceMonth: "+ $2/mo",
      priceYear: "+ $20/yr",
    },
    {
      id: 3,
      title: "Customizable profile",
      subtitle: "Custom theme on your profile",
      priceMonth: "+ $2/mo",
      priceYear: "+ $20/yr",
    },
  ];

  return (
    <div className="App">
      <Aside step={step} />
      <div className="center">
        {step === 1 && <YourInfo nextStep={nextStep} />}
        {step === 2 && (
          <SelectPlan
            plans={plans}
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            isOn={isOn}
            setIsOn={setIsOn}
          />
        )}
        {step === 3 && (
          <AddOns
            addOns={addOns}
            selectedAddOns={selectedAddOns}
            setSelectedAddOns={setSelectedAddOns}
            isOn={isOn}
          />
        )}

        {step === 4 && (
          <Summary
            selectedPlan={selectedPlan}
            selectedAddOns={selectedAddOns}
            plans={plans}
            addOns={addOns}
            isOn={isOn}
          />
        )}

        {step === 5 && <Success />}
      </div>
      <div className={step === 1 || step === 5 ? "empty" : "buttons"}>
        <Button
          className={step === 1 ? "" : step === 5 ? "empty" : "back-button"}
          onClick={prevStep}
        >
          {step === 1 ? " " : "Go Back"}
        </Button>

        <Button
          className={
            step === 4
              ? "confirm-button"
              : step === 1 || step === 5
              ? "empty"
              : "next-button"
          }
          onClick={nextStep}
        >
          {step === 4 ? "Confirm" : "Next Step"}
        </Button>
      </div>
    </div>
  );
}

export function Header({ title, subtitle }) {
  return (
    <div className="header">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}

export function Button({ children, className, ...rest }) {
  return (
    <button type="submit" className={className} {...rest}>
      {children}
    </button>
  );
}

export default App;
