import React from "react";
import build from "../../assets/buildwealth.png";
import "./Save.scss";

function Save() {
  return (
    <section className="save-section">
      <img src={build} />
      <div className="save-details">
        <h3>The Rise App</h3>
        <h1>
          Save for your <span>future</span>
        </h1>
        <p>
          With Rise, you achieve your financial goals faster. Save for school,
          your home, vacations, your children’s future and more.
        </p>
        <button>start saving</button>
      </div>
    </section>
  );
}

export default Save;
