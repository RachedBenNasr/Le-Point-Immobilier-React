import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './not-found.css'

const NotFound = (props) => {
  return (
    <div className="not-found-container">
      <Helmet>
        <title>Not Found!</title>
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
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c9c7ea5e-99e3-47ab-b80b-7093b1c26267/d697306b-9985-4334-937c-1df08a633632?org_if_sml=1"
        />
      </Helmet>
      <div className="not-found-container1">
        <Header rootClassName="header-root-class-name8"></Header>
        <div className="not-found-hero">
          <img
            alt="image"
            src="/z01vrhbcvd-removebg-preview-1500h.png"
            className="not-found-image"
          />
          <div className="not-found-container2">
            <h1 className="not-found-text">404!</h1>
            <span className="not-found-text1">
              <span>The page you are looking for does not seem to exist</span>
              <br></br>
            </span>
            <Link to="/home" className="not-found-navlink button">
              <span>
                <span>Go back home</span>
                <br></br>
              </span>
            </Link>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name8"></Footer>
      </div>
    </div>
  )
}

export default NotFound
