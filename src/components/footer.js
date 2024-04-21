import React from "react";
import { Link } from "react-router-dom";

import Logos from "../components/logos";
import { FaFacebookF } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

import "./footer.css";

const Footer = () => {
  return (
    <div className="all">
      <h1>ILS NOUS ONT FAIT CONFIANCE</h1>
      <div className="trust-logos">
        <Logos startIndex={0}></Logos>
        <Logos startIndex={1}></Logos>
        <Logos startIndex={2}></Logos>
      </div>
      <footer className="footer-footer">
        <Link to="/" className="footer-navlink">
          <img
            alt="image"
            src="/horizontal-1500h.png"
            className="footer-image"
          />
        </Link>
        <div className="footer-container">
          <span className="footer-text">©</span>
          <span className="footer-date-time">{new Date().getFullYear()}</span>
          <span className="footer-text1">
            Le Point Immobilier, Tous droits réservés.
          </span>
        </div>
        <div className="footer-icon-group">
          <a
            href="https://www.facebook.com/lepointimmo/?locale=fr_FR"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link"
          >
            <FaFacebookF className="footer-icon" />
          </a>
          <a href="mailto:lepointimmo.pro@gmail.com" className="footer-link1">
            <MdAlternateEmail className="footer-icon" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
