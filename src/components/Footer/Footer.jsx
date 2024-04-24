import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <section className="f-wrapper">
        <div className="paddings innerWidth f-container">
          {/*left side */}
          <div className="flexColStart f-left">
                      <span className="logo primaryText">The Arfrim Housing</span>
                      <div className="dot"></div>
            <span className="secondaryText">
              Our vision is to makeall people <br />
              the best place to live them
            </span>
          </div>

          <div className="flexColStart f-right ">
            <span className="primaryText"> Information</span>
            <span className="secondaryText">Nairobi Riruta setilite</span>

            <div className="flexCenter f-manu">
              <span>Property</span>
              <span> Services</span>
              <span>products</span>
              <span>About Us</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
