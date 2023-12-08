import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import "./redirection.css";

const Redirection = (props) => {
  return (
    <div className="redirection-hero">
      <h1 className="redirection-text">{props.heading}</h1>
      <span className="redirection-text1">
        <br></br>
        <span>Votre annonce sera rendue publique une fois approuvée.</span>
        <span>
          <span
            dangerouslySetInnerHTML={{
              __html: " ",
            }}
          />
        </span>
        <span>
          <span
            dangerouslySetInnerHTML={{
              __html: " ",
            }}
          />
        </span>
      </span>
      <div className="redirection-btn-group">
        <Link to="/" className="redirection-navlink button">
          {props.button}
        </Link>
        <Link to="/service" className="redirection-navlink1 button">
          {props.button1}
        </Link>
      </div>
    </div>
  );
};

Redirection.defaultProps = {
  heading: "Merci de nous faire confiance.",
  button: "Revenez a l'accueil",
  button1: "decouvrez nos services",
};

Redirection.propTypes = {
  heading: PropTypes.string,
  button: PropTypes.string,
  button1: PropTypes.string,
};

export default Redirection;
