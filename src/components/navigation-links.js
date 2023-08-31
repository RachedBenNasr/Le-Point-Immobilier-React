import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links-navlink">
        {props.text}
      </Link>
      <Link to="/services" className="navigation-links-navlink1">
        {props.text1}
      </Link>
      <Link to="/contact" className="navigation-links-navlink2">
        {props.text4}
      </Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text3: 'Opportunities',
  text2: 'Buying',
  text1: 'Services',
  rootClassName: '',
  text: 'Homepage',
  text4: 'Contact Us',
}

NavigationLinks.propTypes = {
  text3: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
}

export default NavigationLinks
