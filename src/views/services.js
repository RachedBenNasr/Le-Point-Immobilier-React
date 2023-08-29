import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import BlogPostCard4 from '../components/blog-post-card4'
import FeatureCard4 from '../components/feature-card4'
import Footer from '../components/footer'
import './services.css'

const Services = (props) => {
  return (
    <div className="services-container">
      <Helmet>
        <title>Services</title>
        <meta
          name="description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
        <meta property="og:title" content="Services" />
        <meta
          property="og:description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
      </Helmet>
      <div className="services-container1">
        <Header rootClassName="header-root-class-name"></Header>
        <div className="services-hero">
          <span className="services-text">Le point immobilier tunisie</span>
          <h1 className="services-text1">
            Your dream investment, at the click of a button.
          </h1>
          <a href="#CARDS" className="services-link button">
            Get Started
          </a>
        </div>
        <div id="CARDS" className="services-blog">
          <div className="services-container2">
            <BlogPostCard4
              date="Renting"
              label="Browse→"
              imageSrc="https://images.unsplash.com/flagged/photo-1564767609424-270b9df918e1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGhvdXNlJTIwa2V5fGVufDB8fHx8MTY5MjU1Njk0NXww&amp;ixlib=rb-4.0.3&amp;w=1500"
              description="Find your perfect rental property hassle-free."
              rootClassName="rootClassName2"
            ></BlogPostCard4>
            <BlogPostCard4
              date="Opportunities"
              label="Browse→"
              imageSrc="https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxzdG9ja3N8ZW58MHx8fHwxNjkyNTU5Mzk0fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              description="Investment options that fit your budget, high on value."
              rootClassName="rootClassName3"
            ></BlogPostCard4>
          </div>
          <div className="services-container3">
            <Link to="/buying" className="services-navlink">
              <BlogPostCard4
                date="Buying"
                label="Browse→"
                imageSrc="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fHJlYWwlMjBlc3RhdGV8ZW58MHx8fHwxNjkyNTU3Mzc5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
                description="Your path to property ownership made simple."
                rootClassName="rootClassName5"
                className="services-component03"
              ></BlogPostCard4>
            </Link>
            <BlogPostCard4
              date="Estimating"
              label="Browse→"
              imageSrc="https://images.unsplash.com/photo-1632571401005-458e9d244591?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fG1hdGhzfGVufDB8fHx8MTY5MjU1OTQxMnww&amp;ixlib=rb-4.0.3&amp;w=1500"
              description="Accurate property insights for confident decisions."
              rootClassName="rootClassName6"
            ></BlogPostCard4>
          </div>
          <div className="services-container4">
            <BlogPostCard4
              date="Commercial"
              label="Browse→"
              imageSrc="https://images.unsplash.com/photo-1570838562484-e873ff08d81f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxnYXMlMjBzdGF0aW9ufGVufDB8fHx8MTY5MjU1Njk4N3ww&amp;ixlib=rb-4.0.3&amp;w=1500"
              description="Unlock lucrative business opportunities in real estate."
              rootClassName="rootClassName1"
            ></BlogPostCard4>
            <Link to="/promote" className="services-navlink1">
              <BlogPostCard4
                date="Promotion"
                label="Browse→"
                imageSrc="https://images.unsplash.com/photo-1513757378314-e46255f6ed16?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDExfHxhZHZlcnRpc2luZ3xlbnwwfHx8fDE2OTI1NTk0OTB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                description="Elevate property visibility with expert marketing."
                rootClassName="rootClassName4"
                className="services-component06"
              ></BlogPostCard4>
            </Link>
          </div>
        </div>
        <div className="services-features">
          <h1 className="services-text2">
            <span>All our services,</span>
            <br></br>
            <span>At the click of a button.</span>
          </h1>
          <div className="services-separator"></div>
          <div className="services-container5">
            <div className="services-container6">
              <FeatureCard4 rootClassName="rootClassName1"></FeatureCard4>
              <FeatureCard4 rootClassName="rootClassName4"></FeatureCard4>
              <FeatureCard4 rootClassName="rootClassName3"></FeatureCard4>
              <FeatureCard4 rootClassName="rootClassName2"></FeatureCard4>
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjQ0NTY1Nw&amp;ixlib=rb-1.2.1&amp;h=1000"
              className="services-image"
            />
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
    </div>
  )
}

export default Services