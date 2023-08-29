import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './promote.css'

const Promote = (props) => {
  return (
    <div className="promote-container">
      <Helmet>
        <title>Promote</title>
        <meta
          name="description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
        <meta property="og:title" content="Promote" />
        <meta
          property="og:description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c9c7ea5e-99e3-47ab-b80b-7093b1c26267/a1046218-0a63-487d-91b6-e7c01fc05565?org_if_sml=1"
        />
      </Helmet>
      <div className="promote-container1">
        <Header rootClassName="header-root-class-name3"></Header>
        <div className="promote-hero">
          <h1 className="promote-text">Stand Out, Get Noticed.</h1>
          <p className="promote-text01">
            <span>
              Elevate your property&apos;s presence with our premium promotion
              services.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <span>
              Capture the attention of potential buyers and renters by
              showcasing your listing at the forefront of our platform.
            </span>
            <br></br>
            <br></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              Increase visibility and secure your property&apos;s spotlight
              today.
            </span>
          </p>
          <div className="promote-btn-group">
            <a href="#pricing" className="promote-link button">
              Learn More
            </a>
          </div>
        </div>
        <div id="pricing" className="promote-pricing">
          <h1 className="promote-text10">Our avertising plans</h1>
          <div className="promote-container2">
            <div className="promote-pricing-card">
              <span className="promote-text11">Personal</span>
              <div className="promote-container3">
                <span className="promote-text12">$</span>
                <span className="promote-text13">0</span>
              </div>
              <div className="promote-container4">
                <span className="promote-text14">
                  <span>✔ Full access to design tool</span>
                </span>
                <span className="promote-text16">
                  <span>✔ Publish with Teleport</span>
                </span>
                <span className="promote-text18">
                  <span>✔ Subdomain publish</span>
                </span>
                <span className="promote-text20">
                  <span>✔ Download code</span>
                </span>
              </div>
              <button className="promote-button button">Learn More</button>
            </div>
            <div className="promote-pricing-card1">
              <span className="promote-text22">basic</span>
              <div className="promote-container5">
                <span className="promote-text23">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="promote-text26">9</span>
                <span className="promote-text27">
                  <span>/ monthly</span>
                </span>
              </div>
              <span className="promote-text29">
                <span>Billed annualy or $12 month-to-month.</span>
                <span></span>
              </span>
              <div className="promote-container6">
                <span className="promote-text32">
                  <span>✔ All features of FREE plan</span>
                </span>
                <span className="promote-text34">
                  <span>✔ Connect to custom domains</span>
                </span>
                <span className="promote-text36">
                  <span>✔ Private projects</span>
                </span>
                <span className="promote-text38">
                  <span>✔ No project limitations</span>
                </span>
                <span className="promote-text40">
                  <span>✔ Unlimited collabotators</span>
                </span>
              </div>
              <button className="promote-button1 button">Learn More</button>
            </div>
            <div className="promote-pricing-card2">
              <span className="promote-text42">Pro</span>
              <div className="promote-container7">
                <span className="promote-text43">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="promote-text46">29</span>
                <span className="promote-text47">
                  <span>/ monthly</span>
                </span>
              </div>
              <span className="promote-text49">
                <span>Billed annualy or $32 month-to-month.</span>
                <span></span>
              </span>
              <div className="promote-container8">
                <span className="promote-text52">
                  <span>✔ All features of BASIC plan</span>
                </span>
                <span className="promote-text54">
                  <span>✔ Priority support</span>
                </span>
                <span className="promote-text56">
                  <span>✔ Premium analytics</span>
                </span>
                <span className="promote-text58">
                  <span>✔ Version history</span>
                </span>
              </div>
              <button className="promote-button2 button">Learn More</button>
            </div>
          </div>
        </div>
        <div className="promote-banner">
          <h2 className="promote-text60">
            <span>Not sure what plan is the one for you?</span>
            <br className="promote-text62"></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
          <Link to="/contact" className="promote-navlink button">
            We can help!
          </Link>
        </div>
        <Footer rootClassName="footer-root-class-name3"></Footer>
      </div>
    </div>
  )
}

export default Promote
