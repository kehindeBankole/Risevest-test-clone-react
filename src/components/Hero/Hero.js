import React from "react";
import { ReactComponent as AppleIcon } from "../../assets/apple.svg";
import { ReactComponent as PlayStore } from "../../assets/playstore.svg";
import Phone from "../../assets/Phone.png";
import "./Hero.scss";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>Dollar investments that help you grow</h1>
        <p id="info">
          {" "}
          Your personal wealth manager. Get started with a minimum of $10 and
        </p>
        <div className="buttons">
          <button>
            <AppleIcon style={{ marginRight: 9 }} />
            <div className="instruction">
              <p>
                Download on the <br /> <span>App Store</span>{" "}
              </p>
            </div>
          </button>
          <button>
            <PlayStore style={{ marginRight: 9 }} />
            <div className="instruction">
              <p>
                Download on the <br /> <span>Google Play</span>{" "}
              </p>
            </div>
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img src={Phone} alt="phone" />
      </div>
    </section>
  );
}

export default Hero;
