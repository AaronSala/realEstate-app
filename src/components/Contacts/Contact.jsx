import React from "react";
import "./Contacts.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side*/}
        <div className="flexColStart c-left ">
          <span className="orangeText"> Our Contacts</span>
          <span className="primaryText">Easy to Contact Us</span>
          <span className="secondaryText">
            We ready to help providing the best services and believe having a
            good place to live cnmake you life better
          </span>

          <div className="flexColStart contactModes">
            {/*first row */}
            <div className="flexStart row">
              <div className="flexColcenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>

                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">+254704 261 080</span>
                  </div>
                </div>

                <div className="FlexCenter button">Call Now</div>
              </div>
              {/*second div */}
              <div className="flexColcenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>

                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">+254704 261 080</span>
                  </div>
                </div>

                <div className="FlexCenter button">Chat Now</div>
              </div>
            </div>

            {/*second row */}

            <div className="flexStart row">
              <div className="flexColcenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>

                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">+254704 261 080</span>
                  </div>
                </div>

                <div className="FlexCenter button">Video Call Now</div>
              </div>
              {/*sfouth mode */}
              <div className="flexColcenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>

                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">+254704 261 080</span>
                  </div>
                </div>

                <div className="FlexCenter button">Message Now</div>
              </div>
            </div>
          </div>
        </div>
        {/*right side */}

        <div className="c-right">
          <div className="image-container">
            <img src="./images/th (1).jpeg" alt="contact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
