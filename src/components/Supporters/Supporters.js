import React from "react";
import supporterimage from "../../assets/supporterimage.png";
import "./Supporters.scss";

function Supporters() {
  return (
    <section className="supporters-section">
      <p id="supporters-info">We are supported by</p>
      <img src={supporterimage} />
    </section>
  );
}

export default Supporters;
