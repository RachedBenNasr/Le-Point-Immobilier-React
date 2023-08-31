import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Not found!</title>
        <meta
          name="description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
        <meta property="og:title" content="Not found!" />
        <meta
          property="og:description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c9c7ea5e-99e3-47ab-b80b-7093b1c26267/88d48a30-d400-4a40-ab6c-cec76baadcc7?org_if_sml=1"
        />
      </Helmet>
      <div className="page-container1">
        <Header rootClassName="header-root-class-name1"></Header>
        <div className="page-hero">
          <img
            src="/z01vrhbcvd-removebg-preview.png"
            alt="image"
            className="page-image"
          />
          <div className="page-container2">
            <h1 className="page-text">404!</h1>
            <span className="page-text1">
              The page you requested does not seem to exist
            </span>
            <Link to="/" className="page-navlink button">
              Go back home
            </Link>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
    </div>
  )
}

export default Page
