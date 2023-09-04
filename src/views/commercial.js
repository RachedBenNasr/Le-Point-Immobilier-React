import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ByuingListing from '../components/byuing-listing'
import Footer from '../components/footer'
import './commercial.css'

const Commercial = (props) => {
  return (
    <div className="commercial-container">
      <Helmet>
        <title>Commercial</title>
        <meta
          name="description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
        <meta property="og:title" content="Commercial" />
        <meta
          property="og:description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c9c7ea5e-99e3-47ab-b80b-7093b1c26267/302f541c-a798-4e34-bdf0-ddf3b83df923?org_if_sml=1"
        />
      </Helmet>
      <div className="commercial-container1">
        <Header rootClassName="header-root-class-name6"></Header>
        <div className="commercial-container2">
          <div className="commercial-hero">
            <h1 className="commercial-text">Sponsored content</h1>
            <span className="commercial-text1">Want your listing here?</span>
            <div className="commercial-btn-group">
              <Link to="/promote" className="commercial-navlink button">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="commercial-container3">
          <div className="commercial-container4">
            <h1 className="commercial-text2">Advanced search</h1>
            <div className="commercial-container5">
              <input
                type="text"
                placeholder="MIN (TND)"
                className="commercial-textinput input"
              />
              <input
                type="text"
                placeholder="MAX (TND)"
                className="commercial-textinput1 input"
              />
            </div>
            <select className="commercial-select">
              <option value="0" selected>
                Type
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Appartment">Appartment</option>
              <option value="Option 2">Option 2</option>
              <option value="Penthouse">Penthouse</option>
              <option value="Villa">Villa</option>
              <option value="Option 3">Option 3</option>
              <option value="Commercial">Commercial</option>
              <option value="Plot of land">Plot of land</option>
            </select>
            <select className="commercial-select1">
              <option value="0" selected>
                City
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Tunis">Tunis</option>
              <option value="Ariana">Ariana</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Manouba">Manouba</option>
              <option value="Ben Arous">Ben Arous</option>
              <option value="Monastir">Monastir</option>
              <option value="Sousse">Sousse</option>
              <option value="Other">Other</option>
            </select>
            <select className="commercial-select2">
              <option value="0" selected>
                Sort By
              </option>
              <option value="price">Price</option>
              <option value="Option 1">Option 1</option>
              <option value="date">Date posted</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
            <div className="commercial-container6">
              <button type="button" className="commercial-button button">
                <span>
                  <span className="commercial-text4">Apply</span>
                  <br></br>
                </span>
              </button>
              <button type="reset" className="commercial-button1 button">
                <span className="commercial-text6">
                  <span className="commercial-text7">Reset</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
          <div className="commercial-container7">
            <ByuingListing rootClassName="byuing-listing-root-class-name8"></ByuingListing>
            <ByuingListing rootClassName="byuing-listing-root-class-name9"></ByuingListing>
            <ByuingListing rootClassName="byuing-listing-root-class-name10"></ByuingListing>
            <ByuingListing rootClassName="byuing-listing-root-class-name11"></ByuingListing>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name6"></Footer>
      </div>
    </div>
  )
}

export default Commercial
