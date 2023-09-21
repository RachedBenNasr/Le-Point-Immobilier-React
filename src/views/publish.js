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
              <h1 className="publish-title">
                Carefully fill out the form below
              </h1>
              <div className="publish-personal">
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
              </div>
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
                    className="publish-radiobutton01"
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
              <div className="publish-residential">
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
                        name="garden"
                        required="true"
                        className="publish-radiobutton02"
                      />
                      <span>Yes</span>
                    </div>
                    <div className="publish-container08">
                      <input
                        type="radio"
                        name="garden"
                        required="true"
                        className="publish-radiobutton03"
                      />
                      <span>No</span>
                    </div>
                  </div>
                </div>
                <div className="publish-boxes1">
                  <div className="publish-container09">
                    <span>does it have a pool</span>
                    <div className="publish-container10">
                      <input
                        type="radio"
                        name="pool"
                        required="true"
                        className="publish-radiobutton04"
                      />
                      <span>Yes</span>
                    </div>
                    <div className="publish-container11">
                      <input
                        type="radio"
                        name="pool"
                        required="true"
                        className="publish-radiobutton05"
                      />
                      <span>No</span>
                    </div>
                  </div>
                  <div className="publish-container12">
                    <span>does it contain a cellar</span>
                    <div className="publish-container13">
                      <input
                        type="radio"
                        name="cellar"
                        required="true"
                        className="publish-radiobutton06"
                      />
                      <span>Yes</span>
                    </div>
                    <div className="publish-container14">
                      <input
                        type="radio"
                        name="cellar"
                        required="true"
                        className="publish-radiobutton07"
                      />
                      <span>No</span>
                    </div>
                  </div>
                  <div className="publish-container15">
                    <span>does it contain a garage</span>
                    <div className="publish-container16">
                      <input
                        type="radio"
                        name="garage"
                        required="true"
                        className="publish-radiobutton08"
                      />
                      <span>Yes</span>
                    </div>
                    <div className="publish-container17">
                      <input
                        type="radio"
                        name="garage"
                        required="true"
                        className="publish-radiobutton09"
                      />
                      <span>No</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="publish-commercial">
                <span className="publish-text33">
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
                <span className="publish-text34">
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
                <span className="publish-text37">
                  What is the exact address
                </span>
                <input
                  type="text"
                  id="address"
                  required="true"
                  placeholder="Address"
                  className="publish-type1 input"
                />
              </div>
              <div className="publish-area1">
                <span className="publish-text38">
                  What is the full area of your property in M²
                </span>
                <input
                  type="text"
                  id="Area"
                  required="true"
                  placeholder="Area"
                  className="publish-type2 input"
                />
              </div>
              <div className="publish-services">
                <span className="publish-text39">
                  Is your property serviced? (Water - Electricity - Gas)
                </span>
                <div className="publish-container18">
                  <input
                    type="radio"
                    name="service"
                    required="true"
                    className="publish-radiobutton10"
                  />
                  <span>Yes</span>
                </div>
                <div className="publish-container19">
                  <input
                    type="radio"
                    name="service"
                    required="true"
                    className="publish-radiobutton11"
                  />
                  <span>No</span>
                </div>
              </div>
              <div className="publish-legal">
                <span className="publish-text42">
                  What kind of title does your property hold
                </span>
                <div className="publish-container20">
                  <input
                    type="radio"
                    name="title"
                    required="true"
                    className="publish-radiobutton12"
                  />
                  <span>Blue / Individual title</span>
                </div>
                <div className="publish-container21">
                  <input
                    type="radio"
                    name="title"
                    required="true"
                    className="publish-radiobutton13"
                  />
                  <span>&quot;titre jumelée&quot;</span>
                </div>
              </div>
              <div className="publish-uploads">
                <span className="publish-text45">
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
              </div>
              <div className="publish-price">
                <span className="publish-text48">Asking price (TND)</span>
                <input
                  type="text"
                  id="Price"
                  required="true"
                  placeholder="Price"
                  className="publish-type3 input"
                />
              </div>
              <div className="publish-additional">
                <span className="publish-text49">Additional information</span>
                <textarea
                  placeholder="Details"
                  className="publish-textarea textarea"
                ></textarea>
              </div>
              <button type="submit" className="publish-button button">
                <span>
                  <span className="publish-text51">Submit</span>
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
