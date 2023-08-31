import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ByuingListing from '../components/byuing-listing'
import Footer from '../components/footer'
import './buying.css'

const Buying = (props) => {
  return (
    <div className="buying-container">
      <Helmet>
        <title>Buying</title>
        <meta
          name="description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
        <meta property="og:title" content="Buying" />
        <meta
          property="og:description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c9c7ea5e-99e3-47ab-b80b-7093b1c26267/53cd6d90-a431-4578-b8cd-fd4e4a17983d?org_if_sml=1"
        />
      </Helmet>
      <div className="buying-container1">
        <Header rootClassName="header-root-class-name4"></Header>
        <div className="buying-container2">
          <div className="buying-hero">
            <h1 className="buying-text">Sponsored content</h1>
            <span className="buying-text1">Want your listing here?</span>
            <div className="buying-btn-group">
              <Link to="/promote" className="buying-navlink button">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="buying-container3">
          <div className="buying-container4">
            <h1 className="buying-text2">Advanced search</h1>
            <div className="buying-container5">
              <input
                type="text"
                placeholder="MIN (TND)"
                className="buying-textinput input"
              />
              <input
                type="text"
                placeholder="MAX (TND)"
                className="buying-textinput1 input"
              />
            </div>
            <select className="buying-select">
              <option value="0" selected>
                Type
              </option>
              <option value="Appartment">Appartment</option>
              <option value="Penthouse">Penthouse</option>
              <option value="Villa">Villa</option>
              <option value="Commercial">Commercial</option>
              <option value="Plot of land">Plot of land</option>
            </select>
            <select className="buying-select1">
              <option value="0" selected>
                City
              </option>
              <option value="Tunis">Tunis</option>
              <option value="Ariana">Ariana</option>
              <option value="Manouba">Manouba</option>
              <option value="Ben Arous">Ben Arous</option>
              <option value="Monastir">Monastir</option>
              <option value="Sousse">Sousse</option>
              <option value="Other">Other</option>
            </select>
            <select className="buying-select2">
              <option value="0" selected>
                Sort By
              </option>
              <option value="price">Price</option>
              <option value="date">Date posted</option>
            </select>
            <div className="buying-container6">
              <button type="button" className="buying-button button">
                <span>
                  <span className="buying-text4">Apply</span>
                  <br></br>
                </span>
              </button>
              <button type="reset" className="buying-button1 button">
                <span className="buying-text6">
                  <span className="buying-text7">Reset</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
          <div className="buying-container7">
            <ByuingListing rootClassName="byuing-listing-root-class-name"></ByuingListing>
            <ByuingListing rootClassName="byuing-listing-root-class-name3"></ByuingListing>
            <ByuingListing rootClassName="byuing-listing-root-class-name2"></ByuingListing>
            <ByuingListing rootClassName="byuing-listing-root-class-name1"></ByuingListing>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name4"></Footer>
      </div>
    </div>
  )
}

export default Buying
