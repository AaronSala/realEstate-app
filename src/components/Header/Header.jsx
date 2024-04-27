import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };

  return (
    <section className="h-wrapper">
      <div className="  paddings h-container innerWidth">
        <span className="logo">The Arfrim Housing</span>

        <OutsideClickHandler onOutsideClick={()=>{setMenuOpened(false)}}>
          <div className="h-menu flexCenter" style={getMenuStyles(menuOpened)}>
            <a href="#">Recidencies</a>
            <a href="#">Our Value</a>
            <a href="#">Contact Us</a>
            <a href="#">Get Started</a>
            <button className="button">
              {" "}
              <a href="#">Contacts</a>
            </button>
          </div>
        </OutsideClickHandler>

        <div className="menu-icon">
          <BiMenuAltRight
            size={30}
            onClick={() => setMenuOpened((prev) => !prev)}
          />
        </div>
      </div>
    </section>
  );
}

export default Header;
