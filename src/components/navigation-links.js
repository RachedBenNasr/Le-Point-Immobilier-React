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
      <Link to="/service" className="navigation-links-navlink1">
        {props.text1}
      </Link>
      <Link to="/contact" className="navigation-links-navlink2">
        {props.text4}
      </Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text1: 'Services',
  rootClassName: '',
  text: 'Acceuil',
  text4: 'Contactez nous',
}

NavigationLinks.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
}

export default NavigationLinks
