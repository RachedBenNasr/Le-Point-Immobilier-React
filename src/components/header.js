import React, { useState } from "react";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { FaFacebookF } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

import NavigationLinks from "./navigation-links";
import "./header.css";

const Header = (props) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <header data-role="Header" className="header-header ">
      <Link to="/" className="header-navlink">
        <img alt="image" src="/horizontal-1500h.png" className="header-image" />
      </Link>
      <div className="header-nav">
        <NavigationLinks rootClassName="rootClassName10"></NavigationLinks>
      </div>
      <div className="header-container">
        <Link to="/publish" className="header-publish button">
          <span className="header-text">
            <span>Publier une annonce</span>
            <br></br>
          </span>
        </Link>
      </div>
      <div
        data-role="BurgerMenu"
        className="header-burger-menu"
        onClick={toggleSidebar}
      >
        <GiHamburgerMenu />
      </div>
      <div
        data-role="MobileMenu"
        className={`header-mobile-menu ${
          sidebarVisible ? "showing" : "notShowing"
        }`}
      >
        <div className="header-logo">
          <div className="header-container1">
            <img src="/horizontal-1500h.png" className="header-image1" />
          </div>
        </div>
        <div className="header-nav1">
          <Link to="/" className="header-navlinks">
            Acceuil
          </Link>
          <Link to="/service" className="header-navlinks">
            Services
          </Link>
          <Link to="/buying" className="header-navlinks">
            Achat
          </Link>
          <Link to="/renting" className="header-navlinks">
            Location
          </Link>
          <Link to="/contact" className="header-navlinks">
            Contactez nous
          </Link>
        </div>
        <div className="header-icon-group">
          <a
            href="https://www.facebook.com/lepointimmo/?locale=fr_FR"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaFacebookF className="header-icon06" />
          </a>
          <a href="mailto:lepointimmo.pro@gmail.com">
            <MdAlternateEmail className="header-icon06" />
          </a>
        </div>
      </div>
      <div
        className={`header-semi-transparent-layer ${
          sidebarVisible ? "showing" : "notShowing"
        }`}
        onClick={toggleSidebar}
      ></div>
    </header>
  );
};

export default Header;
