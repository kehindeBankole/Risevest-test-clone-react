import React from "react";
import { ReactComponent as AppleIcon } from "../../assets/apple.svg";
import { ReactComponent as PlayStore } from "../../assets/playstore.svg";
import Phone from "../../assets/phonecut.png";
import PhoneBig from "../../assets/phonecutbig.png";
import "./Join.scss";

function Join() {
  return (
    <section className="join-section">
      <div className="content">
        <div className="hero-text">
          <p>Download The Rise App</p>
          <h3 id="info">
            Join our 100,000 users investing and setting long term goals!
          </h3>
          <p id="info">Dollar investments that help you grow.</p>
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
          <img src={Phone} alt="phone" id="phone-mobile" />
          <img src={PhoneBig} alt="phone" id="phone-desktop" />
        </div>
      </div>
    </section>
  );
}

export default Join;
