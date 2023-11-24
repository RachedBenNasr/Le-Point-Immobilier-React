import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FeatureCard3 from '../components/feature-card3'
import Footer from '../components/footer'
import './consulting.css'

const Consulting = (props) => {
  return (
    <div className="consulting-container">
      <Helmet>
        <title>Consulting</title>
        <meta
          name="description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
        <meta property="og:title" content="Consulting" />
        <meta
          property="og:description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c9c7ea5e-99e3-47ab-b80b-7093b1c26267/740b1f35-1557-4e95-80c7-9df3a00dfba5?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="consulting-container1">
        <Header rootClassName="header-root-class-name9"></Header>
        <div className="consulting-hero">
          <h1 className="consulting-text">
            Révélez la puissance de l&apos;immobilier.
          </h1>
          <p className="consulting-text01">
            <span>
              Explorons l&apos;immobilier ensemble, une consultation à la fois!
            </span>
            <br></br>
          </p>
        </div>
        <div className="consulting-features">
          <h1 className="consulting-text04">
            <span>Explorez nos services.</span>
            <br></br>
          </h1>
          <span className="consulting-text07">
            <span>
              Notre objectif est d&apos;associer notre expertise à votre
              propriété pour prendre les décisions immobilières qui comptent
            </span>
            <br></br>
          </span>
          <div id="services" className="consulting-container2">
            <FeatureCard3
              title="Estimation de prix"
              description="Tarification précise pour des décisions éclairées"
              rootClassName="rootClassName"
            ></FeatureCard3>
            <FeatureCard3
              title="Gestion de portefeuille"
              description="Excellence sans effort dans votre portefeuille immobilier."
              rootClassName="rootClassName3"
            ></FeatureCard3>
            <FeatureCard3
              title="Analyse du marché"
              description="Naviguer dans les tendances immobilières"
              rootClassName="rootClassName5"
            ></FeatureCard3>
            <FeatureCard3
              title="Stratégie de valorisation"
              description="Maximisez la valeur de vos investissements."
              rootClassName="rootClassName1"
            ></FeatureCard3>
          </div>
        </div>
        <div className="consulting-banner">
          <h2 className="consulting-text10">
            <span>
              Si l&apos;un de ces services vous intéresse, ou si vous souhaitez
              bénéficier de notre vaste expertise, contactez-nous !
            </span>
            <br className="consulting-text12"></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
          <button className="consulting-button button">
            <span>
              <span className="consulting-text15">+216 00 000 000</span>
              <br></br>
            </span>
          </button>
        </div>
        <Footer rootClassName="footer-root-class-name9"></Footer>
      </div>
    </div>
  )
}

export default Consulting
