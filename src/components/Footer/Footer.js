import React, { useState } from "react";
import "./Footer.scss";
import { ReactComponent as FooterLogo } from "../../assets/footerlogo.svg";
import { ReactComponent as ArrowSlantUp } from "../../assets/arrowslantup.svg";
function Footer() {
  const data = [
    "about us",
    "careers",
    "FAQs",
    "contact info",
    "press",
    "rise impact",
    ,
  ];
  const data2 = [
    "Investmet Club",
    "Blog",
    "Newsletter",
    "Instagram",
    "Twitter",
  ];
  const data3 = ["Rise App", "Wallets", "Asset Classes"];
  const data4 = [
    "0818 714 7405",
    "hello@rise.capital",
    "Newsletter",
    "Instagram",
    "Twitter",
  ];
  return (
    <footer className="footer-section">
      <div className="first-section">
        <div>
          <h3>
            {" "}
            <FooterLogo />{" "}
          </h3>
          {data.map((item, index) => {
            return (
              <p key={index} className="item-link">
                <a>{item}</a>
              </p>
            );
          })}
        </div>
        <div>
          <h3>Explore</h3>
          {data2.map((item, index) => {
            return (
              <p key={index} className="item-link">
                <a>{item}</a>
                <ArrowSlantUp className="icon" />
              </p>
            );
          })}
        </div>
        <div>
          <h3>Products</h3>
          {data3.map((item, index) => {
            return (
              <p key={index} className="item-link">
                <a>{item}</a>
              </p>
            );
          })}
        </div>
        <div>
          <h3>Contact Us</h3>
          {data4.map((item, index) => {
            return (
              <p key={index} className="item-link">
                <a>{item}</a>
                <ArrowSlantUp className="icon" />
              </p>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
