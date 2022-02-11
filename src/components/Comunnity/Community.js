import React from "react";
import community from "../../assets/community.png";
import "./Community.scss";
function Community() {
  return (
    <section className="community-container">
      <img src={community} />
      <div className="details">
        <h1>Join The Rise Community</h1>
        <p>If you want to go far, go together.</p>
        <p id="desktop-text">
          If you want to go far, go together. Our Telegram community surrounds
          you with others who can help you along your financial journey with
          tips, support, advice and learning. It's completely free and open to
          new and seasoned investors.
        </p>
        <button>Join our Community</button>
      </div>
    </section>
  );
}

export default Community;
