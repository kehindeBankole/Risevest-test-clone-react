import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as NavIcon } from "../../assets/navicon.svg";
import { ReactComponent as ArrowDownIcon } from "../../assets/arrowdown.svg";
import "./Nav.scss";

function Nav() {
  return (
    <nav>
      <div className="logo">
        <Logo />
      </div>
      <div className="menu">
        <div className="menu-items">
          <div className="item active">Home</div>
          <div className="item">
            Products
            <ArrowDownIcon style={{ marginLeft: 5 }} />
          </div>
          <div className="item">Investment Club</div>
          <div className="item">Blog</div>
          <div className="item">About Us</div>
          <div className="item">FAQs</div>
        </div>
        <button className="nav-button">
          <NavIcon />
        </button>
      </div>
    </nav>
  );
}

export default Nav;
