import React from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import Header from "../components/header";
import ServiceCards from "../components/service-cards";
import Footer from "../components/footer";
import "./services.css";

const Services = (props) => {
  const alertFire = () => {
    alert("Service bientôt disponible.");
  };

  return (
    <div className="services-container">
      <Helmet>
        <title>Services</title>
        <meta
          name="description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
        <meta property="og:title" content="Services" />
        <meta
          property="og:description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
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
      <div className="services-container1">
        <Header rootClassName="header-root-class-name"></Header>
        <div className="services-hero">
          <span className="services-text">Le point immobilier tunisie</span>
          <h1 className="services-text1">
            Votre investissement de rêve, à portée de clic.
          </h1>
          <a href="#CARDS" className="services-link button">
            <span>
              <span className="services-text3">Commencez</span>
              <br></br>
            </span>
          </a>
        </div>
        <div id="CARDS" className="services-blog">
          <div className="services-container2">
            <Link to="/renting" className="services-navlink">
              <ServiceCards
                date="Location"
                label="Browse→"
                imageSrc="https://images.unsplash.com/flagged/photo-1564767609424-270b9df918e1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGhvdXNlJTIwa2V5fGVufDB8fHx8MTY5MjU1Njk0NXww&amp;ixlib=rb-4.0.3&amp;w=1500"
                description="Trouvez votre location idéale"
                rootClassName="rootClassName2"
                className="services-component1"
              ></ServiceCards>
            </Link>
            <div onClick={alertFire}>
              <ServiceCards
                date="Opportunités"
                label="Browse→"
                imageSrc="https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxzdG9ja3N8ZW58MHx8fHwxNjkyNTU5Mzk0fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                description="Des investissements adaptées à votre budget, riches en valeur."
                rootClassName="rootClassName3"
                className="services-component2"
              ></ServiceCards>
            </div>
          </div>
          <div className="services-container3">
            <Link to="/buying" className="services-navlink">
              <ServiceCards
                date="Achat"
                label="Browse→"
                imageSrc="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fHJlYWwlMjBlc3RhdGV8ZW58MHx8fHwxNjkyNTU3Mzc5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                description="Votre chemin vers la propriété simplifié"
                rootClassName="rootClassName5"
                className="services-component3"
              ></ServiceCards>
            </Link>
            <Link to="/consulting" className="services-navlink1">
              <ServiceCards
                date="Consulting"
                label="Browse→"
                imageSrc="https://images.unsplash.com/photo-1612550761236-e813928f7271?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxoYW5kc2hha2V8ZW58MHx8fHwxNjkzODM4Mjk1fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                description="Des informations immobilières précises pour des décisions en toute confiance"
                rootClassName="rootClassName6"
                className="services-component4"
              ></ServiceCards>
            </Link>
          </div>
          <div className="services-container4">
            <Link to="/commercial" className="services-navlink">
              <ServiceCards
                date="Commercial"
                label="Browse→"
                imageSrc="https://images.unsplash.com/photo-1570838562484-e873ff08d81f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxnYXMlMjBzdGF0aW9ufGVufDB8fHx8MTY5MjU1Njk4N3ww&amp;ixlib=rb-4.0.3&amp;w=1500"
                description="Découvrez des opportunités commerciales lucratives"
                rootClassName="rootClassName1"
                className="services-component5"
              ></ServiceCards>
            </Link>
            <Link to="/promote" className="services-navlink2">
              <ServiceCards
                date="Promotion"
                label="Browse→"
                imageSrc="https://images.unsplash.com/photo-1513757378314-e46255f6ed16?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxhZHZlcnRpc2luZ3xlbnwwfHx8fDE2OTI1NTk0OTB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                description="Augmentez la visibilité de votre propriété grâce à une expertise en marketing."
                rootClassName="rootClassName4"
                className="services-component6"
              ></ServiceCards>
            </Link>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
    </div>
  );
};

export default Services;
