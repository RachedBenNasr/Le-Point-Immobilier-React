import React from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import Header from "../components/header";
import Footer from "../components/footer";
import "./promote.css";

const Promote = (props) => {
  return (
    <div className="promote-container">
      <Helmet>
        <title>Promote</title>
        <meta
          name="description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
        <meta property="og:title" content="Promote" />
        <meta
          property="og:description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c9c7ea5e-99e3-47ab-b80b-7093b1c26267/a1046218-0a63-487d-91b6-e7c01fc05565?org_if_sml=1&amp;force_format=original"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Trouvez votre propriété de rêve en Tunisie. Découvrez une large gamme de biens immobiliers à vendre et à louer. Parcourez les annonces d'appartements, de villas et de terrains. Services immobiliers experts pour trouver votre maison idéale. Commencez dès maintenant !"
        />
        <meta
          name="keywords"
          content="Tunisie immobilier, propriétés tunisiennes, maisons à vendre Tunisie, appartements à louer Tunisie, villas tunisiennes, agences immobilières Tunisie, acheter une maison Tunisie, louer un appartement Tunisie"
        />
        <meta name="geo.region" content="TN" />
        <meta name="geo.placename" content="Tunisie" />
        <meta name="geo.position" content="35.8617; 10.5364" />
        <meta name="language" content="fr,en" />
      </Helmet>
      <div className="promote-container1">
        <Header rootClassName="header-root-class-name3"></Header>
        <div className="promote-hero">
          <h1 className="promote-text">
            Démarquez-vous, Faites-vous remarquer.
          </h1>
          <p className="promote-text01">
            <span>
              Rehaussez la visibilité de votre propriété avec nos services de
              promotion.
            </span>
            <br></br>
          </p>
          <div className="promote-btn-group">
            <a href="#pricing" className="promote-link button">
              <span>
                <span className="promote-text05">En savoir plus</span>
                <br></br>
              </span>
            </a>
          </div>
        </div>
        <div id="pricing" className="promote-pricing">
          <h1 className="promote-text07">Bientôt disponible.</h1>
          <div className="promote-container2">
            <div className="promote-pricing-card">
              <span className="promote-text08">Personal</span>
              <div className="promote-container3">
                <span className="promote-text09">$</span>
                <span className="promote-text10">X</span>
              </div>
              <div className="promote-container4">
                <span className="promote-text11">
                  <span>✔ Full access to design tool</span>
                </span>
                <span className="promote-text13">
                  <span>✔ Publish with Teleport</span>
                </span>
                <span className="promote-text15">
                  <span>✔ Subdomain publish</span>
                </span>
                <span className="promote-text17">
                  <span>✔ Download code</span>
                </span>
              </div>
              <button disabled="true" className="promote-button button">
                En savoir plus
              </button>
            </div>
            <div className="promote-pricing-card1">
              <span className="promote-text19">basic</span>
              <div className="promote-container5">
                <span className="promote-text20">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="promote-text23">X</span>
                <span className="promote-text24">/ mois</span>
              </div>
              <div className="promote-container6">
                <span className="promote-text25">
                  <span>✔ All features of FREE plan</span>
                </span>
                <span className="promote-text27">
                  <span>✔ Connect to custom domains</span>
                </span>
                <span className="promote-text29">
                  <span>✔ Private projects</span>
                </span>
                <span className="promote-text31">
                  <span>✔ No project limitations</span>
                </span>
                <span className="promote-text33">
                  <span>✔ Unlimited collabotators</span>
                </span>
              </div>
              <button disabled="true" className="promote-button1 button">
                En savoir plus
              </button>
            </div>
            <div className="promote-pricing-card2">
              <span className="promote-text35">Pro</span>
              <div className="promote-container7">
                <span className="promote-text36">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="promote-text39">X</span>
                <span className="promote-text40">/ mois</span>
              </div>
              <div className="promote-container8">
                <span className="promote-text41">
                  <span>✔ All features of BASIC plan</span>
                </span>
                <span className="promote-text43">
                  <span>✔ Priority support</span>
                </span>
                <span className="promote-text45">
                  <span>✔ Premium analytics</span>
                </span>
                <span className="promote-text47">
                  <span>✔ Version history</span>
                </span>
              </div>
              <button disabled="true" className="promote-button2 button">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
        <div className="promote-banner">
          <h2 className="promote-text49">
            <span>Vous ne savez pas quel plan choisir ?</span>
            <br className="promote-text51"></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
          </h2>
          <Link
            to="/contact"
            disabled="true"
            className="promote-navlink button"
          >
            Nous pouvons vous aider!
          </Link>
        </div>
        <Footer rootClassName="footer-root-class-name3"></Footer>
      </div>
    </div>
  );
};

export default Promote;
