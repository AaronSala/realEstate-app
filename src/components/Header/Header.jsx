import React from "react";
import "./Header.css";
function Header() {
  return (
    <section className="h-wrapper">
      <div className="  paddings h-container innerWidth">
        <span className="logo">The Arfrim Housing</span>

        <div className="h-menu flexCenter">
          <a href="#">Recidencies</a>
          <a href="#">Our Value</a>
          <a href="#">Contact Us</a>
          <a href="#">Get Started</a>
          <button className="button">
            {" "}
            <a href="#">Contacts</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Header;
