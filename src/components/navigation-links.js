import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import "./navigation-links.css";

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links-navlink">
        {props.home}
      </Link>
      <Link to="/service" className="navigation-links-navlink">
        {props.services}
      </Link>

      <Link to="/buying" className="navigation-links-navlink">
        {props.achat}
      </Link>
      <Link to="/renting" className="navigation-links-navlink">
        {props.location}
      </Link>
      <Link to="/contact" className="navigation-links-navlink">
        {props.contact}
      </Link>
    </nav>
  );
};

NavigationLinks.defaultProps = {
  services: "Services",
  rootClassName: "",
  home: "Acceuil",
  contact: "Contactez nous",
  achat: "Achat",
  location: "Location",
};

NavigationLinks.propTypes = {
  services: PropTypes.string,
  rootClassName: PropTypes.string,
  home: PropTypes.string,
  contact: PropTypes.string,
  achat: PropTypes.string,
  location: PropTypes.string,
};

export default NavigationLinks;
