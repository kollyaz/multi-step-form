import successImg from "../assets/images/icon-thank-you.svg";

export function Success() {
  return (
    <div className="success-message section">
      <img className="success-img" src={successImg} alt="Success icon" />
      <h1 className="success-title">Thank you!</h1>
      <p className="success-detail">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
