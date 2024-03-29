import React from 'react'

import PropTypes from 'prop-types'

import './testimonial-card.css'

const TestimonialCard = (props) => {
  return (
    <header
      className={`testimonial-card-testimonial-card ${props.rootClassName} `}
    >
      <svg viewBox="0 0 1024 1024" className="testimonial-card-icon">
        <path
          d="M800 640c-123.712 0-224-100.29-224-224 0-123.712 100.288-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.634-11.636 22.252-24.016 31.83-37.020-11.438 1.8-23.16 2.746-35.104 2.746zM224 640c-123.71 0-224-100.29-224-224 0-123.712 100.29-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.636-11.636 22.254-24.016 31.832-37.020-11.44 1.8-23.16 2.746-35.106 2.746z"
          className=""
        ></path>
      </svg>
      <div className="testimonial-card-testimonial">
        <span className="testimonial-card-text">{props.quote}</span>
        <img
          alt={props.pictureAlt}
          src={props.pictureSrc}
          className="testimonial-card-image"
        />
        <span className="testimonial-card-text1">{props.name}</span>
      </div>
    </header>
  )
}

TestimonialCard.defaultProps = {
  name: 'Zack T',
  quote:
    "I couldn't be happier with the exceptional service I received from XYZ Realty. Their team's dedication to finding me the perfect home was evident from day one. They took the time to understand my preferences and needs, ensuring that every property they showed me was a potential match. Thanks to their expertise, I found my dream home in no time. I highly recommend XYZ Realty to anyone in search of a reliable and efficient real estate agency.",
  pictureAlt: 'profile',
  rootClassName: '',
  pictureSrc:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&ixlib=rb-1.2.1&h=1200',
}

TestimonialCard.propTypes = {
  name: PropTypes.string,
  quote: PropTypes.string,
  pictureAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  pictureSrc: PropTypes.string,
}

export default TestimonialCard
