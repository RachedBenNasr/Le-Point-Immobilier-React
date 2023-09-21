import React from 'react'
import { Link } from 'react-router-dom'

import { DateTimePrimitive } from '@teleporthq/react-components'
import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <Link to="/" className="footer-navlink">
        <img
          alt={props.imagealt}
          src={props.imagesrc}
          className="footer-image"
        />
      </Link>
      <div className="footer-container">
        <span className="footer-text">{props.text}</span>
        <span className="footer-date-time">
          <DateTimePrimitive
            format="YYYY"
            date="Sun Aug 20 2023 19:59:46 GMT+0100 (Central European Standard Time)"
            className=""
          ></DateTimePrimitive>
        </span>
        <span className="footer-text1">{props.text1}</span>
      </div>
      <div className="footer-icon-group">
        <svg viewBox="0 0 877.7142857142857 1024" className="footer-icon">
          <path
            d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
            className=""
          ></path>
        </svg>
        <a
          href="https://www.facebook.com/lepointimmo/?locale=fr_FR"
          target="_blank"
          rel="noreferrer noopener"
          className="footer-link"
        >
          <svg viewBox="0 0 602.2582857142856 1024" className="footer-icon2">
            <path
              d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              className=""
            ></path>
          </svg>
        </a>
        <a
          href="mailto:lepointimmo.pro@gmail.com?subject=General contact request"
          className="footer-link1"
        >
          <svg viewBox="0 0 1024 1024" className="footer-icon4">
            <path
              d="M512 640q52 0 90-38t38-90-38-90-90-38-90 38-38 90 38 90 90 38zM512 86q176 0 301 125t125 301v62q0 64-43 108t-105 44q-78 0-126-64-64 64-152 64t-151-63-63-151 63-151 151-63 151 63 63 151v62q0 26 19 46t45 20 45-20 19-46v-62q0-140-101-241t-241-101-241 101-101 241 101 241 241 101h214v84h-214q-176 0-301-125t-125-301 125-301 301-125z"
              className=""
            ></path>
          </svg>
        </a>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  text1: 'Le Point Immobilier, All Rights Reserved.',
  imagealt: 'image',
  text: '©',
  rootClassName: '',
  imagesrc: '/horizontal-1500h.png',
}

Footer.propTypes = {
  text1: PropTypes.string,
  imagealt: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  imagesrc: PropTypes.string,
}

export default Footer
