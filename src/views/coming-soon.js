import React from 'react'

import { Helmet } from 'react-helmet'

import './coming-soon.css'

const ComingSoon = (props) => {
  return (
    <div className="coming-soon-container">
      <Helmet>
        <title>Coming Soon...</title>
        <meta
          name="description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
        <meta property="og:title" content="Coming Soon..." />
        <meta
          property="og:description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
      </Helmet>
      <div className="coming-soon-container1">
        <div className="coming-soon-hero">
          <img
            alt="image"
            src="/original-200h.png"
            className="coming-soon-image"
          />
          <span className="coming-soon-text">
            Site en cours de construction
          </span>
          <h1 className="coming-soon-text1">
            De magnifiques nouveautés arrivent bientôt!
          </h1>
          <span className="coming-soon-text2">En attendant..</span>
          <a
            href="https://www.facebook.com/lepointimmo/?locale=fr_FR"
            target="_blank"
            rel="noreferrer noopener"
            className="coming-soon-link button"
          >
            Visitez notre page Facebook
          </a>
          <span className="coming-soon-text3">Ou bien...</span>
          <a
            href="mailto:lepointimmo.pro@gmail.com?subject=Contact request"
            className="coming-soon-link1 button"
          >
            Envoyez-nous un email
          </a>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon
