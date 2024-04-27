import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import data from "../../assets/Accordion";

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side*/}
        <div className="v-left">
          <div className="image-container">
            <img src="./images/th (3).jpeg" alt="value" />
          </div>
        </div>

        {/* right side */}

        <div className="flexColStart v-right">
          <span className="orangeText">Our value</span>
          <span className="primaryText">Value we give to you</span>
          <span className="secondaryText">
            We always ready to halp and give the best service ever
            <br />
            We baliev a good blace to live can make your live better
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              return (
                <AccordionItem className="accordionItem" key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText head">{item.headings}</span>
                      <div className="flexcenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText"> {item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
