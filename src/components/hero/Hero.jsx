import React from "react";
import "./Hero.css";

import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

function Hero() {
  return (
    <section className="hero-wrapper">
      {/* left side */}
      <div className="paddings innerWidth hero-container">
        <div className="flexColStart hero-left ">
          <div className=" hero-title">
            <div className="orange-circle" />
            <h1>
              Discover
              <br /> Most Suitable
              <br />
              Property
            </h1>
          </div>

          <div className=" flexColStart hero-desc">
            <span className="secondaryText">
              Find variety of of properties that suites you very clesely
            </span>
            <span className="secondaryText">
              forget all the dificalties in finding a residence for you
            </span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" placeholder="Search" />
            <button className="button" type="button">
              Search
            </button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColcenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">premium products</span>
            </div>

            <div className="flexColcenter stat">
              <span>
                <CountUp start={1950} end={32000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColcenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexcenter hero-right">
          <div className="image-container">
            <img src="./images/th.jpeg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
