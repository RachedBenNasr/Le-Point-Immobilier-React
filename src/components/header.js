import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import NavigationLinks from "./navigation-links";
import "./header.css";

const Header = (props) => {
  return (
    <header
      data-role="Header"
      className={`header-header ${props.rootClassName} `}
    >
      <Link to="/home" className="header-navlink">
        <img alt="image" src="/horizontal-1500h.png" className="header-image" />
      </Link>
      <div className="header-nav">
        <NavigationLinks
          rootClassName="rootClassName10"
          className=""
        ></NavigationLinks>
      </div>
      <div className="header-container">
        <Link to="/publish" className="header-publish button">
          <span className="header-text">
            <span className="">Publier une annonce</span>
            <br className=""></br>
          </span>
        </Link>
      </div>
      <div data-role="BurgerMenu" className="header-burger-menu">
        <svg viewBox="0 0 1024 1024" className="header-icon">
          <path
            d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            className=""
          ></path>
        </svg>
      </div>
      <div data-role="MobileMenu" className="header-mobile-menu">
        <div className="header-logo">
          <div className="header-container1">
            <div data-role="CloseMobileMenu" className="header-menu-close">
              <svg viewBox="0 0 1024 1024" className="header-icon02">
                <path
                  d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  className=""
                ></path>
              </svg>
            </div>
            <img
              alt="image"
              src="/horizontal-1500h.png"
              loading="lazy"
              className="header-image1"
            />
          </div>
        </div>
        <div className="header-nav1">
          <Link to="/home" className="header-navlinks">
            Acceuil
          </Link>
          <Link to="/services" className="header-navlinks">
            Services
          </Link>
          <Link to="/buying" className="header-navlinks">
            Achat
          </Link>
          <Link to="/buying" className="header-navlinks">
            Location
          </Link>
          <Link to="/contact" className="header-navlinks">
            Contactez nous
          </Link>
        </div>
        <div className="header-icon-group">
          <svg viewBox="0 0 877.7142857142857 1024" className="header-icon04">
            <path
              d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              className=""
            ></path>
          </svg>
          <a
            href="https://www.facebook.com/lepointimmo/?locale=fr_FR"
            target="_blank"
            rel="noreferrer noopener"
            className=""
          >
            <svg viewBox="0 0 602.2582857142856 1024" className="header-icon06">
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                className=""
              ></path>
            </svg>
          </a>
          <a
            href="mailto:lepointimmo.pro@gmail.com?subject=General contact request"
            className=""
          >
            <svg viewBox="0 0 1024 1024" className="header-icon08">
              <path
                d="M512 640q52 0 90-38t38-90-38-90-90-38-90 38-38 90 38 90 90 38zM512 86q176 0 301 125t125 301v62q0 64-43 108t-105 44q-78 0-126-64-64 64-152 64t-151-63-63-151 63-151 151-63 151 63 63 151v62q0 26 19 46t45 20 45-20 19-46v-62q0-140-101-241t-241-101-241 101-101 241 101 241 241 101h214v84h-214q-176 0-301-125t-125-301 125-301 301-125z"
                className=""
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  rootClassName: "",
};

Header.propTypes = {
  rootClassName: PropTypes.string,
};

export default Header;
