import React from "react";
import person1 from "../../assets/person1.png";
import "./Testimonial.scss";

function Testimonial() {
  return (
    <section className="testimonial-section">
      <div id="mobile-title" className="box">
        <h1>What our customers are saying</h1>
        <p>We serve over 80,000 amazing users.</p>
      </div>
      <div id="desktop-title" className="box">
        <h1>From The People Who Use Rise</h1>
        <p>
          Our mission at Risevest is to empower more people just like you to
          achieve your personal financial goals.
        </p>
      </div>

      <div className="testimonial-box">
        {[1, 2, 3].map((item, index) => (
          <div className="testimonial-card" key={index}>
            <p>
              I don’t want to invest in separate stocks because I’m not a
              financial expert and I would rather trust my money in the hands of
              people like Rise who are skilled and knowledgeable.
            </p>
            <div className="user-info">
              <img src={person1} alt="person-image" />
              <p>UX Researcher</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
