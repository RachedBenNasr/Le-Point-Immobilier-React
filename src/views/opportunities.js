import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ByuingListing from '../components/byuing-listing'
import Footer from '../components/footer'
import './opportunities.css'

const Opportunities = (props) => {
  return (
    <div className="opportunities-container">
      <Helmet>
        <title>Opportunities</title>
        <meta
          name="description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
        <meta property="og:title" content="Opportunities" />
        <meta
          property="og:description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c9c7ea5e-99e3-47ab-b80b-7093b1c26267/27d2b300-4e66-463a-b7ae-01f4bf361dfc?org_if_sml=1"
        />
      </Helmet>
      <div className="opportunities-container1">
        <Header rootClassName="header-root-class-name7"></Header>
        <div className="opportunities-container2">
          <div className="opportunities-hero">
            <h1 className="opportunities-text">Sponsored content</h1>
            <span className="opportunities-text1">Want your listing here?</span>
            <div className="opportunities-btn-group">
              <Link to="/promote" className="opportunities-navlink button">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="opportunities-container3">
          <div className="opportunities-container4">
            <h1 className="opportunities-text2">Advanced search</h1>
            <div className="opportunities-container5">
              <input
                type="text"
                placeholder="MIN (TND)"
                className="opportunities-textinput input"
              />
              <input
                type="text"
                placeholder="MAX (TND)"
                className="opportunities-textinput1 input"
              />
            </div>
            <select className="opportunities-select">
              <option value="0" selected>
                Type
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Appartment">Appartment</option>
              <option value="Option 2">Option 2</option>
              <option value="Penthouse">Penthouse</option>
              <option value="Option 3">Option 3</option>
              <option value="Villa">Villa</option>
              <option value="Commercial">Commercial</option>
              <option value="Plot of land">Plot of land</option>
            </select>
            <select className="opportunities-select1">
              <option value="0" selected>
                City
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Tunis">Tunis</option>
              <option value="Option 2">Option 2</option>
              <option value="Ariana">Ariana</option>
              <option value="Option 3">Option 3</option>
              <option value="Manouba">Manouba</option>
              <option value="Ben Arous">Ben Arous</option>
              <option value="Monastir">Monastir</option>
              <option value="Sousse">Sousse</option>
              <option value="Other">Other</option>
            </select>
            <select className="opportunities-select2">
              <option value="0" selected>
                Sort By
              </option>
              <option value="Option 1">Option 1</option>
              <option value="price">Price</option>
              <option value="Option 2">Option 2</option>
              <option value="date">Date posted</option>
              <option value="Option 3">Option 3</option>
            </select>
            <div className="opportunities-container6">
              <button type="button" className="opportunities-button button">
                <span>
                  <span className="opportunities-text4">Apply</span>
                  <br></br>
                </span>
              </button>
              <button type="reset" className="opportunities-button1 button">
                <span className="opportunities-text6">
                  <span className="opportunities-text7">Reset</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
          <div className="opportunities-container7">
            <ByuingListing rootClassName="byuing-listing-root-class-name12"></ByuingListing>
            <ByuingListing rootClassName="byuing-listing-root-class-name13"></ByuingListing>
            <ByuingListing rootClassName="byuing-listing-root-class-name14"></ByuingListing>
            <ByuingListing rootClassName="byuing-listing-root-class-name15"></ByuingListing>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name7"></Footer>
      </div>
    </div>
  )
}

export default Opportunities
