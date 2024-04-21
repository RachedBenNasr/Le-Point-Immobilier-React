import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import Header from "../components/header";
import GalleryCard3 from "../components/gallery-card3";
import TestimonialCard from "../components/testimonial-card";

import Footer from "../components/footer";
import "./home.css";

import { getDatabase, ref, get } from "firebase/database";

import {
  FaSearch,
  FaBalanceScale,
  FaCreditCard,
  FaLightbulb,
} from "react-icons/fa";

const Home = (props) => {
  const [totalListings, setTotalListings] = useState(0);

  useEffect(() => {
    const fetchTotalListings = async () => {
      const database = getDatabase();
      const saleListingsRef = ref(database, "listings/sale");
      const rentListingsRef = ref(database, "listings/rent");

      try {
        const [saleSnapshot, rentSnapshot] = await Promise.all([
          get(saleListingsRef),
          get(rentListingsRef),
        ]);

        const saleData = saleSnapshot.val();
        const rentData = rentSnapshot.val();

        let tempTotal = 0;

        if (saleData) {
          const saleListingsArray = Object.values(saleData);
          tempTotal += saleListingsArray.length;
        }

        if (rentData) {
          const rentListingsArray = Object.values(rentData);
          tempTotal += rentListingsArray.length;
        }

        setTotalListings(tempTotal);
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };

    fetchTotalListings();
  }, []);

  return (
    <div className="home-container">
      <Helmet>
        <title>Le Point Immobilier</title>
        <meta
          name="description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
        <meta property="og:title" content="Le Point Immobilier" />
        <meta
          property="og:description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
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
      <div className="home-container01">
        <Header></Header>
        <div className="home-hero">
          <div className="home-container02">
            <h1 id="Title" className="home-text">
              L&apos;immobilier n&apos;a jamais été aussi simple.
            </h1>
            <div className="home-container03">
              <Link to="/promote" className="home-navlink1 button">
                <span>
                  <span className="home-text05">Promouvez votre annonce</span>
                  <br></br>
                </span>
              </Link>
              <Link to="/service" className="home-navlink button">
                <span>
                  <span className="home-text02">Découvrez nos services</span>
                  <br></br>
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="home-gallery card">
          <h1 className="home-text07">
            <span>À la une</span>
          </h1>
          <span className="home-text10">
            <span>
              Votre propriété mérite d'être remarquée.
              <a href="/promote">
                <u> Contactez-nous</u>
              </a>
              , pour la mettre en avant dès maintenant!
            </span>
          </span>
          <div className="home-container04">
            <GalleryCard3></GalleryCard3>
            <GalleryCard3 imageSrc="https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"></GalleryCard3>
            <GalleryCard3 imageSrc="https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"></GalleryCard3>
            <GalleryCard3 imageSrc="https://images.unsplash.com/photo-1531829039722-d3fb3e705a4b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"></GalleryCard3>
          </div>
        </div>

        <div className="home-stats card">
          <h1 className="home-text17">Statistiques clés</h1>
          <span className="home-text18">
            <span>
              Un coup d&apos;œil sur nos chiffres leaders de l&apos;industrie
            </span>
            <br></br>
          </span>
          <div className="home-stats1">
            <div className="home-stat">
              <h1 className="home-text21">3000+</h1>
              <span className="home-text22">clients satisfaits</span>
              <span className="home-text23">
                Votre satisfaction, notre attente
              </span>
            </div>
            <div className="home-stat1">
              <h1 className="home-text24">1000+</h1>
              <span className="home-text25"> Projets accomplis</span>
              <span className="home-text26">
                Adoptez des investissements exceptionnels
              </span>
            </div>
            <div className="home-stat2">
              <h1 className="home-text27">
                <span className="home-text28">{totalListings}+</span>
                <br></br>
              </h1>
              <span className="home-text30">Annonces</span>
              <span className="home-text31"> en croissance chaque jour</span>
            </div>
            <div className="home-stat3">
              <h1 className="home-text32">7</h1>
              <span className="home-text33">Villes</span>
              <span className="home-text34">
                <span>D&apos;innombrables opportunités</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>

        <div className="home-steps card">
          <h1 className="home-text17">Découvrez Notre Processus</h1>
          <span className="home-text38">
            <span>Simple. Efficace. Avec vous au cœur.</span>
            <br></br>
          </span>
          <div className="home-container05">
            <div className="home-step">
              <div className="home-container06">
                <div className="home-line"></div>
                <div className="home-container07">
                  <FaLightbulb className="home-icon" />
                </div>
                <div className="home-line1"></div>
              </div>
              <div className="home-container08">
                <h1 className="home-text41">Recherche</h1>
                <span className="home-text42">
                  Posez les bases avec une recherche perspicace
                </span>
              </div>
            </div>
            <div className="home-step">
              <div className="home-container09">
                <div className="home-line2"></div>
                <div className="home-container10">
                  <FaSearch className="home-icon" />
                </div>
                <div className="home-line3"></div>
              </div>
              <div className="home-container11">
                <h1 className="home-text43">Parcours</h1>
                <span className="home-text44">
                  <span>
                    Découvrez un monde de possibilités d&apos;investissement
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-step">
              <div className="home-container12">
                <div className="home-line4"></div>
                <div className="home-container13">
                  <FaBalanceScale className="home-icon" />
                </div>
                <div className="home-line5"></div>
              </div>
              <div className="home-container14">
                <h1 className="home-text47">Évaluation</h1>
                <span className="home-text48">
                  <span>
                    Prenez des décisions éclairées grâce à une évaluation
                    approfondie
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-step">
              <div className="home-container15">
                <div className="home-line6"></div>
                <div className="home-container16">
                  <FaCreditCard className="home-icon" />
                </div>
                <div className="home-line7"></div>
              </div>
              <div className="home-container17">
                <h1 className="home-text51">Achat</h1>
                <span className="home-text52">
                  <span>
                    Devenez le maître de votre succès en investissement
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="home-testimonial card">
          <h1 className="home-text55">Nos clients témoignent</h1>
          <span className="home-text56">
            Découvrez les histoires de ceux qui ont transformé leurs aspirations
            immobilières en réalité avec nous. Nos clients précieux partagent
            leur parcours, mettant en avant la confiance, la satisfaction et le
            succès qu&apos;ils ont trouvés grâce à nos services.
          </span>
          <div className="home-container18">
            <TestimonialCard
              name="FLEN"
              quote="Choisir cette agence a été un tournant décisif pour moi. De la première consultation à l'achat de la propriété, ils m'ont guidé de manière transparente. Leur expertise a transformé mon investissement en une histoire à succès. Je les recommande vivement !"
              pictureSrc="https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
            ></TestimonialCard>
            <TestimonialCard
              name="FLEN"
              quote="Je ne peux pas remercier assez cette équipe pour leur dévouement. Ils ont non seulement compris mes préférences, mais m'ont aussi aidé à découvrir des options que je n'avais pas envisagées. Le résultat ? Une propriété qui a dépassé mes attentes."
              pictureSrc="https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
            ></TestimonialCard>
            <TestimonialCard
              name="FLEN"
              quote="Le professionnalisme de cette agence est incomparable. Ils ont rendu le processus fluide et transparent, me tenant informé à chaque étape. Avec leur soutien, j'ai trouvé un investissement précieux qui est maintenant un pilier de mon portefeuille."
              pictureSrc="https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
            ></TestimonialCard>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
