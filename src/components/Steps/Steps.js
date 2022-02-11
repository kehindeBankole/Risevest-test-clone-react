import React from "react";
import "./Steps.scss";
import { ReactComponent as Woman1 } from "../../assets/woman1.svg";
import { ReactComponent as Woman2 } from "../../assets/woman2.svg";
import { ReactComponent as Woman3 } from "../../assets/woman3.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrowright.svg";

const data = [
  {
    title: "Superior Performance",
    desc: "Rise outperforms your other alternatives in two ways. The first is through our expert, algorithm driven investment approach that picks through over 3,000 data sets to find the perfect investment for you. ",
    image: <Woman1 />,
    id: 1,
  },
  {
    title: "Personalization",
    desc: "No two people are the same, and everyone’s financial goals are different. Rise understands this, which is why we tailor your journey to financial freedom to fit you.",
    image: <Woman2 />,
    id: 2,
  },
  {
    title: "Diversification",
    desc: "Rise offers a choice of three asset classes: US equities, US real estate and fixed income assets to provide stability to your investments and protection from market declines. You can pick one asset class or",
    image: <Woman3 />,
    id: 3,
  },
];
function Steps() {
  return (
    <section className="steps-section">
      {data.map((item) => (
        <div
          className="image-box"
          style={{
            width: "100%",
          }}
          key={item.id}
        >
          {item.image}
          <div>
            <p id="title">{item.title}</p>
            <p id="desc">{item.desc}</p>
            <button>
              Start Investing Now <ArrowRight className="arrow-right" />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Steps;
