import React from "react";
import { Link } from "react-router-dom";
import "./redirection.css";

const Redirection = () => {
  return (
    <div className="redirection-hero">
      <h1 className="redirection-text">Merci de nous faire confiance.</h1>
      <span className="redirection-text1">
        <br></br>
        <span>Votre annonce sera rendue publique une fois approuvée.</span>
      </span>
      <div className="redirection-btn-group">
        <Link to="/" className="redirection-navlink button">
          Revenez a l'accueil
        </Link>
        <Link to="/service" className="redirection-navlink1 button">
          decouvrez nos services
        </Link>
      </div>
    </div>
  );
};

export default Redirection;
