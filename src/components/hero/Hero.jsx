import React from "react";
import "./Hero.css";

import { HiLocationMarker } from "react-icons/hi"


function Hero() {
  return (
    <section className="hero-wrapper">
      {/* left side */}
      <div className="paddings innerWidth hero-container">
        <div className="flexColStart hero-left ">
                  <div className=" hero-title">
                      <div className="orange-circle"/>
            <h1>
              Discover
              <br /> Most Suitable
              <br />
              Property
            </h1>
          </div>

          <div className=" flexColStart hero-desc">
            <span>
              Find variety of of properties that suites you very clesely
            </span>
            <span>
              forget all the dificalties in finding a residence for you
            </span>
          </div>

                  <div className="search-bar">
                      <HiLocationMarker color="var(--blue)" size={25}/>
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
