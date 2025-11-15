export function Steps({ step }) {
  return (
    <nav className="steps-navigation">
      <ul className="steps-list">
        <li>
          <span className={step === 1 ? "step-number selected" : "step-number"}>
            1
          </span>
          <div>
            <p>STEP 1</p>
            <span className="step-indicator">YOUR INFO</span>
          </div>
        </li>
        <li>
          <span className={step === 2 ? "step-number selected" : "step-number"}>
            2
          </span>
          <div>
            <p>STEP 2</p>
            <span className="step-indicator">SELECT PLAN</span>
          </div>
        </li>
        <li>
          <span className={step === 3 ? "step-number selected" : "step-number"}>
            3
          </span>
          <div>
            <p>STEP 3</p>
            <span className="step-indicator">ADD-ONS</span>
          </div>
        </li>
        <li>
          <span className={step === 4 ? "step-number selected" : "step-number"}>
            4
          </span>
          <div>
            <p>STEP 4</p>
            <span className="step-indicator">SUMMARY</span>
          </div>
        </li>
      </ul>
    </nav>
  );
}
