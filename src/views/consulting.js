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
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c9c7ea5e-99e3-47ab-b80b-7093b1c26267/740b1f35-1557-4e95-80c7-9df3a00dfba5?org_if_sml=1"
        />
      </Helmet>
      <div className="consulting-container1">
        <Header rootClassName="header-root-class-name9"></Header>
        <div className="consulting-hero">
          <h1 className="consulting-text">
            Unlocking Your Real Estate Potential
          </h1>
          <p className="consulting-text01">
            <span>
              Navigating Real Estate Together, One Consultation at a Time!
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
          </p>
        </div>
        <div className="consulting-features">
          <h1 className="consulting-text04">
            <span>Explore our services</span>
            <br></br>
            <span></span>
          </h1>
          <span className="consulting-text07">
            <span>
              Our aim is to pair our expertise with your property to make the
              real estate decisions that matter.
            </span>
            <br></br>
          </span>
          <div id="services" className="consulting-container2">
            <FeatureCard3
              title="Price Estimation"
              description="Precision Pricing for Informed Decisions"
              rootClassName="rootClassName"
            ></FeatureCard3>
            <FeatureCard3
              title="Portfolio Management"
              description="Effortless Property Portfolio Excellence"
              rootClassName="rootClassName3"
            ></FeatureCard3>
            <FeatureCard3
              title="Market Analysis"
              description="Navigating Real Estate Trends with Insight"
              rootClassName="rootClassName5"
            ></FeatureCard3>
            <FeatureCard3
              title="Value strategization"
              description="Unlocking Property Potential, Maximizing Value"
              rootClassName="rootClassName1"
            ></FeatureCard3>
          </div>
        </div>
        <div className="consulting-banner">
          <h2 className="consulting-text10">
            <span>
              If any of these services interest you, or if you want to make use
              of our extensive knowledge.
            </span>
            <br className="consulting-text12"></br>
            <span className="consulting-text13">Get in contact!</span>
            <br className="consulting-text14"></br>
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
              <span className="consulting-text17">+216 00 000 000</span>
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
