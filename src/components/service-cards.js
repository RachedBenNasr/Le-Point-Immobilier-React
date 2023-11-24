import React from 'react'

import PropTypes from 'prop-types'

import './service-cards.css'

const ServiceCards = (props) => {
  return (
    <div className={`service-cards-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="service-cards-image"
      />
      <div className="service-cards-container">
        <span className="service-cards-text">{props.date}</span>
        <span className="service-cards-text1">{props.description}</span>
        <div className="service-cards-separator"></div>
      </div>
    </div>
  )
}

ServiceCards.defaultProps = {
  description:
    'Lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  rootClassName: '',
  imageAlt: 'image',
  imageSrc:
    'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHZlbmljZXxlbnwwfHx8fDE2MjYyNzIyOTA&ixlib=rb-1.2.1&w=1000',
  date: 'JULY 24',
}

ServiceCards.propTypes = {
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  date: PropTypes.string,
}

export default ServiceCards
