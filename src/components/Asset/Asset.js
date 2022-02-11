import React from "react";
import { ReactComponent as Stocks } from "../../assets/stocks.svg";
import { ReactComponent as RealEstate } from "../../assets/realestate.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrowright.svg";
import { ReactComponent as Income } from "../../assets/income.svg";
import "./Asset.scss";
const data = [
  {
    title: "stocks",
    desc: "We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with ourequity portfolio of power stocks",
    annum: "14% per annum",
    risklevel: "Medium",
    action: "Learn how Stocks work",
    image: <Stocks className="icon" />,
  },
  {
    title: "Real Estate",
    desc: "Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.",
    annum: "14% per annum",
    risklevel: "Medium",
    action: "Learn how Real Estate work",
    image: <RealEstate className="icon" />,
  },
  {
    title: "Fixed Income",
    desc: "A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money from inflation while earning steady returns.    ",
    annum: "14% per annum",
    risklevel: "Medium",
    action: "Learn how Fixed Income work",
    image: <Income className="icon" />,
  },
];
function Asset() {
  return (
    <section className="asset-section">
      <h1 className="title">Asset Classes</h1>
      <p className="subtitle">It’s your money, choose where you invest it</p>
      <div className="asset-cards">
        {data.map((item, index) => (
          <div className="asset-card-item" key={index}>
            <div className="top-bg"></div>
            {item.image}
            <h3>{item.title}</h3>
            <p id="desc">{item.desc}</p>
            <div className="returns">
              <p>
                <span>Historical returns:</span> {item.annum}
              </p>
              <p>
                {" "}
                <span>Risk Level: </span>
                {item.risklevel}
              </p>
            </div>
            <button>
              {item.action} <ArrowRight className="arrow-right" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Asset;
