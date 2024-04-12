import React from "react";
import { Link } from "react-router-dom";

import "./redirection-promoter.css";

const RedirectionPromoter = () => {
  return (
    <div className={`redirection-promoter-hero `}>
      <h1 className="redirection-promoter-text">
        Vous êtes promoteur immobilier?
      </h1>
      <span className="redirection-promoter-text1">
        Rejoignez notre réseau de partenaires et concrétisez vos projets
        immobiliers avec nous!
      </span>
      <div className="redirection-promoter-btn-group">
        <a href="tel:+21621000000" className="redirection-promoter-link button">
          Contactez-nous !
        </a>
        <Link to="/consulting" className="redirection-promoter-navlink button">
          Services consulting
        </Link>
        <Link to="/promote" className="redirection-promoter-navlink1 button">
          Services Promotion
        </Link>
      </div>
    </div>
  );
};

export default RedirectionPromoter;
