import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './publish.css'

const Publish = (props) => {
  return (
    <div className="publish-container">
      <Helmet>
        <title>publish</title>
        <meta
          name="description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
        <meta property="og:title" content="publish" />
        <meta
          property="og:description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
      </Helmet>
      <div className="publish-container01">
        <Header rootClassName="header-root-class-name2"></Header>
        <div className="publish-contents">
          <span className="publish-text">Publish a listing</span>
          <h1 className="publish-text01">
            Ample reach. Unparalleled exposure.
          </h1>
          <span className="publish-text02">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span>
              <span>
                Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
          <div className="publish-cards">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1564846824194-346b7871b855?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHNpZ25pbmd8ZW58MHx8fHwxNjkyNTY0NTMzfDA&amp;ixlib=rb-4.0.3&amp;w=1400"
              className="publish-image"
            />
            <form className="publish-form">
              <h1 className="publish-heading">
                Carefully fill out the form below
              </h1>
              <span className="publish-text09">
                <span>Personal details</span>
                <br></br>
              </span>
              <input
                type="text"
                id="name"
                required="true"
                placeholder="Full Name"
                className="publish-name input"
              />
              <input
                type="text"
                id="Phone Number"
                required="true"
                placeholder="Number"
                className="publish-number input"
              />
              <input
                type="text"
                id="mail"
                required="true"
                placeholder="Email"
                className="publish-email input"
              />
              <div className="publish-purpose">
                <span className="publish-text12">Purpose</span>
                <div className="publish-container02">
                  <input
                    type="radio"
                    name="purpose"
                    required="true"
                    className="publish-radiobutton"
                  />
                  <span>For rent</span>
                </div>
                <div className="publish-container03">
                  <input
                    type="radio"
                    name="purpose"
                    required="true"
                    className="publish-radiobutton1"
                  />
                  <span>For sale</span>
                </div>
              </div>
              <div className="publish-nature">
                <span className="publish-text15">Nature</span>
                <select required="true" className="publish-select">
                  <option value="0">
                    Please select the nature of your listing
                  </option>
                  <option value="Appartment">Appartment</option>
                  <option value="Penthouse">Penthouse</option>
                  <option value="Villa">Villa</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Plot of land">Plot of land</option>
                </select>
              </div>
              <div className="publish-rooms">
                <span className="publish-text16">
                  <span>Details</span>
                  <br></br>
                </span>
                <div className="publish-boxes">
                  <div className="publish-container04">
                    <span>Number of rooms</span>
                    <input
                      type="text"
                      placeholder="(1, 2 3,...)"
                      className="publish-textinput input"
                    />
                  </div>
                  <div className="publish-container05">
                    <span className="publish-text20">Number of bathrooms</span>
                    <input
                      type="text"
                      placeholder="(1, 2 3,...)"
                      className="publish-textinput1 input"
                    />
                  </div>
                  <div className="publish-container06">
                    <span>does it contain a garden</span>
                    <div className="publish-container07">
                      <input
                        type="radio"
                        name="State"
                        required="true"
                        className="publish-radiobutton2"
                      />
                      <span>Yes</span>
                    </div>
                    <div className="publish-container08">
                      <input
                        type="radio"
                        name="State"
                        required="true"
                        className="publish-radiobutton3"
                      />
                      <span>No</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="publish-commercial">
                <span className="publish-text24">
                  What type of commercial property
                </span>
                <input
                  type="text"
                  id="Type"
                  placeholder="Please indicate the type"
                  className="publish-type input"
                />
              </div>
              <div className="publish-location">
                <span className="publish-text25">
                  <span>Where is your property located</span>
                  <br></br>
                </span>
                <select required="true" className="publish-select1">
                  <option value="0" selected>
                    Please select a city
                  </option>
                  <option value="Tunis">Tunis</option>
                  <option value="Ariana">Ariana</option>
                  <option value="Manouba">Manouba</option>
                  <option value="Ben Arous">Ben Arous</option>
                  <option value="Monastir">Monastir</option>
                  <option value="Sousse">Sousse</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="publish-area">
                <span className="publish-text28">
                  What is the full area of your property in M²
                </span>
                <input
                  type="text"
                  id="Area"
                  required="true"
                  placeholder="Area"
                  className="publish-type1 input"
                />
              </div>
              <div className="publish-services">
                <span className="publish-text29">
                  Is your property serviced? (Water - Electricity - Gas)
                </span>
                <div className="publish-container09">
                  <input
                    type="radio"
                    name="State"
                    required="true"
                    className="publish-radiobutton4"
                  />
                  <span>Yes</span>
                </div>
                <div className="publish-container10">
                  <input
                    type="radio"
                    name="State"
                    required="true"
                    className="publish-radiobutton5"
                  />
                  <span>No</span>
                </div>
              </div>
              <div className="publish-legal">
                <span className="publish-text32">
                  Does your property have a blue title / Individual title
                </span>
                <div className="publish-container11">
                  <input
                    type="radio"
                    name="Title"
                    required="true"
                    className="publish-radiobutton6"
                  />
                  <span>Yes</span>
                </div>
                <div className="publish-container12">
                  <input
                    type="radio"
                    name="Title"
                    className="publish-radiobutton7"
                  />
                  <span>No</span>
                </div>
              </div>
              <span className="publish-text35">
                <span>Upload photos of your property</span>
                <br></br>
              </span>
              <div className="publish-div">
                <React.Fragment>
                  <React.Fragment>
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          '\n    input[type="file"] {\n        display: none;\n    }\n\n    .custom-upload {\n        display: inline-block;\n        padding: 8px 12px;\n        background-color: #a0221a;\n        color: white;\n        border: none;\n        border-radius: 4px;\n        cursor: pointer;\n        transition: background-color 0.3s;\n    }\n\n    .custom-upload:hover {\n        background-color: #a0221a;\n    }\n',
                      }}
                    />

                    <label htmlFor="file-upload" className="custom-upload">
                      Choose Photos
                    </label>
                    <input
                      type="file"
                      id="file-upload"
                      name="photos[]"
                      accept="image/*"
                      multiple={true}
                    />
                  </React.Fragment>
                </React.Fragment>
              </div>
              <div className="publish-price">
                <span className="publish-text38">Asking price (TND)</span>
                <input
                  type="text"
                  id="Price"
                  placeholder="Price"
                  className="publish-type2 input"
                />
              </div>
              <button type="submit" className="publish-button button">
                <span>
                  <span className="publish-text40">Submit</span>
                  <br></br>
                </span>
              </button>
            </form>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name2"></Footer>
      </div>
    </div>
  )
}

export default Publish
