import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ByuingListing from '../components/byuing-listing'
import Footer from '../components/footer'
import './renting.css'

const Renting = (props) => {
  return (
    <div className="renting-container">
      <Helmet>
        <title>Renting</title>
        <meta
          name="description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
        <meta property="og:title" content="Renting" />
        <meta
          property="og:description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c9c7ea5e-99e3-47ab-b80b-7093b1c26267/0490d11f-1d5a-4605-ac0d-408b4950862b?org_if_sml=1"
        />
      </Helmet>
      <div className="renting-container1">
        <Header rootClassName="header-root-class-name5"></Header>
        <div className="renting-container2">
          <div className="renting-hero">
            <h1 className="renting-text">Sponsored content</h1>
            <span className="renting-text1">Want your listing here?</span>
            <div className="renting-btn-group">
              <Link to="/promote" className="renting-navlink button">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="renting-container3">
          <div className="renting-container4">
            <h1 className="renting-text2">Advanced search</h1>
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
              <option value="Option 1">Option 1</option>
              <option value="Penthouse">Penthouse</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Villa">Villa</option>
              <option value="Commercial">Commercial</option>
              <option value="Plot of land">Plot of land</option>
            </select>
            <select className="renting-select1">
              <option value="0" selected>
                City
              </option>
              <option value="Tunis">Tunis</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Ariana">Ariana</option>
              <option value="Option 3">Option 3</option>
              <option value="Manouba">Manouba</option>
              <option value="Ben Arous">Ben Arous</option>
              <option value="Monastir">Monastir</option>
              <option value="Sousse">Sousse</option>
              <option value="Other">Other</option>
            </select>
            <select className="renting-select2">
              <option value="0" selected>
                Sort By
              </option>
              <option value="price">Price</option>
              <option value="Option 1">Option 1</option>
              <option value="date">Date posted</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
            <div className="renting-container6">
              <button type="button" className="renting-button button">
                <span>
                  <span className="renting-text4">Apply</span>
                  <br></br>
                </span>
              </button>
              <button type="reset" className="renting-button1 button">
                <span className="renting-text6">
                  <span className="renting-text7">Reset</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
          <div className="renting-container7">
            <ByuingListing rootClassName="byuing-listing-root-class-name4"></ByuingListing>
            <ByuingListing rootClassName="byuing-listing-root-class-name5"></ByuingListing>
            <ByuingListing rootClassName="byuing-listing-root-class-name6"></ByuingListing>
            <ByuingListing rootClassName="byuing-listing-root-class-name7"></ByuingListing>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name5"></Footer>
      </div>
    </div>
  )
}

export default Renting
