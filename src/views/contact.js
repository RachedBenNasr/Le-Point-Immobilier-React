import React, { useState } from "react";

import { Helmet } from "react-helmet";

import { getDatabase, ref, set, push } from "firebase/database";

import Header from "../components/header";
import Footer from "../components/footer";
import "./contact.css";

const Contact = (props) => {
  const [request, setRequest] = useState({
    requestid: "",
    name: "",
    email: "",
    phone: "",
    state: "unseen",
    dateTime: "",
    body: "",
  });

  const contactRequest = (e) => {
    e.preventDefault();
    request.name = document.querySelector(".contact-name").value;
    request.email = document.querySelector(".contact-name1").value;
    request.phone = document.querySelector(".contact-name2").value;
    request.body = document.querySelector(".contact-textarea").value;
    request.dateTime = Date.now();

    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(request.email)) {
      alert("Veuillez saisir une adresse e-mail valide.");
      return;
    }

    const db = getDatabase();
    const requestRef = ref(db, "requests/contactRequests");
    const newRequestKey = push(requestRef);
    request.requestid = newRequestKey.toString().split("/").pop();

    set(newRequestKey, request);
    alert(
      "merci de nous avoir contacté, nous reviendrons vers vous prochainement."
    );
    window.location.href = "/";
  };

  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact</title>
        <meta
          name="description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
        <meta property="og:title" content="Contact" />
        <meta
          property="og:description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c9c7ea5e-99e3-47ab-b80b-7093b1c26267/88d48a30-d400-4a40-ab6c-cec76baadcc7?org_if_sml=1&amp;force_format=original"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Trouvez votre propriété de rêve en Tunisie. Découvrez une large gamme de biens immobiliers à vendre et à louer. Parcourez les annonces d'appartements, de villas et de terrains. Services immobiliers experts pour trouver votre maison idéale. Commencez dès maintenant !"
        />
        <meta
          name="keywords"
          content="Tunisie immobilier, propriétés tunisiennes, maisons à vendre Tunisie, appartements à louer Tunisie, villas tunisiennes, agences immobilières Tunisie, acheter une maison Tunisie, louer un appartement Tunisie"
        />
        <meta name="geo.region" content="TN" />
        <meta name="geo.placename" content="Tunisie" />
        <meta name="geo.position" content="35.8617; 10.5364" />
        <meta name="language" content="fr,en" />
      </Helmet>
      <div className="contact-container1">
        <Header rootClassName="header-root-class-name1"></Header>
        <div className="contact-banner">
          <span className="contact-text">Contactez-nous.</span>
          <h1 className="contact-text01">Commençons une conversation !</h1>

          <div className="contact-cards">
            <div className="contact-left">
              <div className="contact-feature-card">
                <svg viewBox="0 0 1024 1024" className="contact-icon">
                  <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                </svg>
                <a href="tel:+216 29 791 660" className="contact-link">
                  <div className="contact-container2">
                    <h2 className="contact-text09">Numéro de téléphone</h2>
                    <span className="contact-text10">+216 29 791 660</span>
                  </div>
                </a>
              </div>
              <div className="contact-separator"></div>
              <div className="contact-feature-card1">
                <svg viewBox="0 0 1024 1024" className="contact-icon2">
                  <path d="M512 640q52 0 90-38t38-90-38-90-90-38-90 38-38 90 38 90 90 38zM512 86q176 0 301 125t125 301v62q0 64-43 108t-105 44q-78 0-126-64-64 64-152 64t-151-63-63-151 63-151 151-63 151 63 63 151v62q0 26 19 46t45 20 45-20 19-46v-62q0-140-101-241t-241-101-241 101-101 241 101 241 241 101h214v84h-214q-176 0-301-125t-125-301 125-301 301-125z"></path>
                </svg>
                <div className="contact-container3">
                  <h2 className="contact-text11">Email</h2>
                  <a
                    href="mailto:lpitunisie@gmail.com?subject=Support Request"
                    className="contact-link1"
                  >
                    lpitunisie@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-separator1"></div>
              <div className="contact-feature-card2">
                <svg
                  viewBox="0 0 1170.2857142857142 1024"
                  className="contact-icon4"
                >
                  <path d="M1154.286 6.286c9.714 6.857 16 18.286 16 30.286v804.571c0 14.857-9.143 28.571-22.857 33.714l-365.714 146.286c-9.143 4-18.286 4-27.429 0l-352-140.571-352 140.571c-4.571 2.286-9.143 2.857-13.714 2.857-7.429 0-14.286-2.286-20.571-6.286-9.714-6.857-16-18.286-16-30.286v-804.571c0-14.857 9.143-28.571 22.857-33.714l365.714-146.286c9.143-4 18.286-4 27.429 0l352 140.571 352-140.571c11.429-4.571 24-3.429 34.286 3.429zM420.571 83.429v725.714l329.143 131.429v-725.714zM73.143 207.429v725.714l310.857-124v-725.714zM1097.143 816.571v-725.714l-310.857 124v725.714z"></path>
                </svg>
                <a
                  href="https://www.google.com/maps/search/Immeuble+,+Montplaisir+1073+Tunis+%2F+Les+Berges+du+Lac,+Rue+Lenon,+Tunis,+Tunisia/@36.8345238,10.2389498,17z/data=!3m1!4b1?entry=ttu"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact-link2"
                >
                  <div className="contact-container4">
                    <h2 className="contact-text12">Emplacement</h2>
                    <span className="contact-text13">
                      Immeuble , Montplaisir 1073 Tunis / Les Berges du Lac, Rue
                      Lenon, Tunis, Tunisia
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <form
              className="contact-form"
              onSubmit={(event) => contactRequest(event)}
            >
              <input
                type="text"
                id="name"
                required
                placeholder="Nom et Prenom"
                className="contact-name input"
              />
              <input
                type="text"
                id="mail"
                required
                placeholder="Email"
                className="contact-name1 input"
              />
              <input
                type="text"
                id="Phone Number"
                required
                placeholder="Numéro"
                className="contact-name2 input"
                onInput={(e) => {
                  e.target.value = e.target.value
                    .replace(/[^0-9+]/g, "")
                    .replace(/\+/g, "00");
                }}
              />
              <textarea
                placeholder="Sujet"
                className="contact-textarea textarea"
              ></textarea>
              <button type="submit" className="contact-button button">
                <span>
                  <span className="contact-text15">Envoyer</span>
                  <br></br>
                </span>
              </button>
            </form>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
    </div>
  );
};

export default Contact;
