import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import { sliderSettings } from "../../assets/common";
import data from "../../assets/slider.json";

const Residencies = () => {
  return (
    <div>
      <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
          <div className="r-head flexColStart">
            <span className="orangeText"> best Choices</span>
            <span className="primaryText">Popular Residencies</span>
          </div>

                  <Swiper {...sliderSettings}>
                      <SliderButtons/>
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="flexColStart r-card">
                  <img src={card.image} alt="home" />

                  <span className="secondaryText r-price">
                    <span style={{ color: "orange" }}>Ksh</span>
                    <span>{card.price}</span>
                  </span>

                  <span className="primaryText">{card.name}</span>
                  <span className="secondaryText">{card.details}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Residencies;

const SliderButtons = () => {
    const swiper = useSwiper()
    return (
      <div className="r-buttons">
        <button
          onClick={() => {
            swiper.slidePrev();
          }}
        >
          &lt;
        </button>
        <button
          onClick={() => {
            swiper.slideNext();
          }}
        >
          &gt;
        </button>
      </div>
    );
}
