import React from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import Header from "../components/header";
import Footer from "../components/footer";
import RedirectionPromoter from "../components/redirection-promoter";
import "./not-found.css";

const ThankingPromoter = (props) => {
  return (
    <div className="not-found-container">
      <Helmet>
        <title>Merci !</title>
        <meta
          name="description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
        <meta property="og:title" content="Not Found!" />
        <meta
          property="og:description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c9c7ea5e-99e3-47ab-b80b-7093b1c26267/d697306b-9985-4334-937c-1df08a633632?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="not-found-container1">
        <Header rootClassName="header-root-class-name8"></Header>
        <RedirectionPromoter></RedirectionPromoter>
        <Footer rootClassName="footer-root-class-name8"></Footer>
      </div>
    </div>
  );
};

export default ThankingPromoter;
