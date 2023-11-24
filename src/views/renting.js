import React from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import Header from "../components/header";
import ByuingListing from "../components/byuing-listing";
import Footer from "../components/footer";
import "./renting.css";

const renting = (props) => {
  return (
    <div className="renting-container">
      <Helmet>
        <title>Renting</title>
        <meta
          name="description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
        <meta property="og:title" content="renting" />
        <meta
          property="og:description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c9c7ea5e-99e3-47ab-b80b-7093b1c26267/53cd6d90-a431-4578-b8cd-fd4e4a17983d?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="renting-container1">
        <Header rootClassName="header-root-class-name4"></Header>
        <div className="renting-container2">
          <div className="renting-hero">
            <h1 className="renting-text">Contenu sponsorisé</h1>
            <span className="renting-text1">
              Vous souhaitez voir votre annonce ici ?
            </span>
            <div className="renting-btn-group">
              <Link to="/promote" className="renting-navlink button">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
        <div className="renting-container3">
          <div className="renting-container4">
            <h1 className="renting-text2">Recherche avancée</h1>
            <div className="renting-container5">
              <input
                type="text"
                placeholder="MIN (TND)"
                className="renting-textinput input"
              />
              <input
                type="text"
                placeholder="MAX (TND)"
                className="renting-textinput1 input"
              />
            </div>
            <select className="renting-select">
              <option value="0" selected>
                Type
              </option>
              <option value="Appartment">Appartment</option>
              <option value="Penthouse">Penthouse</option>
              <option value="Villa">Villa</option>
              <option value="Commercial">Commercial</option>
              <option value="Terrain">Terrain</option>
            </select>
            <select className="renting-select1">
              <option value="0" selected>
                Ville
              </option>
              <option value="Tunis">Tunis</option>
              <option value="Ariana">Ariana</option>
              <option value="Manouba">Manouba</option>
              <option value="Ben Arous">Ben Arous</option>
              <option value="Monastir">Monastir</option>
              <option value="Sousse">Sousse</option>
              <option value="Autre">Autre</option>
            </select>
            <select className="renting-select2">
              <option value="0" selected>
                Trier Par
              </option>
              <option value="Prix">prix</option>
              <option value="date">Date de publication</option>
            </select>
            <div className="renting-container6">
              <button type="button" className="renting-button button">
                <span>
                  <span className="renting-text4">Appliquer</span>
                  <br></br>
                </span>
              </button>
              <button type="reset" className="renting-button1 button">
                <span className="renting-text6">
                  <span className="renting-text7">Réinitialiser</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
          <div className="renting-container7">
            <ByuingListing rootClassName="byuing-listing-root-class-name"></ByuingListing>
            <ByuingListing rootClassName="byuing-listing-root-class-name20"></ByuingListing>
            <ByuingListing rootClassName="byuing-listing-root-class-name19"></ByuingListing>
            <ByuingListing rootClassName="byuing-listing-root-class-name18"></ByuingListing>
            <ByuingListing rootClassName="byuing-listing-root-class-name17"></ByuingListing>
            <ByuingListing rootClassName="byuing-listing-root-class-name16"></ByuingListing>
            <ByuingListing rootClassName="byuing-listing-root-class-name3"></ByuingListing>
            <ByuingListing rootClassName="byuing-listing-root-class-name2"></ByuingListing>
            <ByuingListing rootClassName="byuing-listing-root-class-name1"></ByuingListing>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name4"></Footer>
      </div>
    </div>
  );
};

export default renting;
