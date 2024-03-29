import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import Header from "../components/header";
import GalleryCard3 from "../components/gallery-card3";
import TestimonialCard from "../components/testimonial-card";

import Footer from "../components/footer";
import "./home.css";

import { getDatabase, ref, get } from "firebase/database";

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
      </Helmet>
      <div className="home-container01">
        <Header></Header>
        <div className="home-hero">
          <div className="home-container02">
            <h1 id="Title" className="home-text">
              L&apos;immobilier n&apos;a jamais été aussi simple.
            </h1>
            <div className="home-container03">
              <Link to="/service" className="home-navlink button">
                <span>
                  <span className="home-text02">Découvrez nos services</span>
                  <br></br>
                </span>
              </Link>
              <Link to="/promote" className="home-navlink1 button">
                <span>
                  <span className="home-text05">Promouvez votre annonce</span>
                  <br></br>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="home-separator"></div>
        <div className="home-gallery">
          <h1 className="home-text07">
            <span>À la une</span>
            <br></br>
          </h1>
          <span className="home-text10">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis.
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </span>
            <br></br>
            <span>
              <span>
                Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </span>
          </span>
          <div className="home-container04">
            <GalleryCard3 rootClassName="rootClassName"></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName1"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fG1pbmltYWxpc20lMjBob21lfGVufDB8fHx8MTYyNjQ0ODUyNw&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName3"
            ></GalleryCard3>
            <GalleryCard3
              imageSrc="https://images.unsplash.com/photo-1531829039722-d3fb3e705a4b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxtaW5pbWFsaXNtJTIwaG9tZXxlbnwwfHx8fDE2MjY0NDg1Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName2"
            ></GalleryCard3>
          </div>
        </div>
        <div className="home-separator1"></div>
        <div className="home-stats">
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
        <div className="home-separator2"></div>
        <div className="home-steps">
          <h1 className="home-text37">Découvrez Notre Processus</h1>
          <span className="home-text38">
            <span>Simple. Efficace. Avec vous au cœur.</span>
            <br></br>
          </span>
          <div className="home-container05">
            <div className="home-step">
              <div className="home-container06">
                <div className="home-line"></div>
                <div className="home-container07">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M634 558q92-64 92-174 0-88-63-151t-151-63-151 63-63 151q0 46 27 96t65 78l36 26v98h172v-98zM512 86q124 0 211 87t87 211q0 156-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
                  </svg>
                </div>
                <div className="home-line1"></div>
              </div>
              <div className="home-container08">
                <h1 className="home-text41">Recherche</h1>
                <span className="home-text42">
                  {" "}
                  Posez les bases avec une recherche perspicace
                </span>
              </div>
            </div>
            <div className="home-step1">
              <div className="home-container09">
                <div className="home-line2"></div>
                <div className="home-container10">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon2"
                  >
                    <path d="M658.286 475.429c0-141.143-114.857-256-256-256s-256 114.857-256 256 114.857 256 256 256 256-114.857 256-256zM950.857 950.857c0 40-33.143 73.143-73.143 73.143-19.429 0-38.286-8-51.429-21.714l-196-195.429c-66.857 46.286-146.857 70.857-228 70.857-222.286 0-402.286-180-402.286-402.286s180-402.286 402.286-402.286 402.286 180 402.286 402.286c0 81.143-24.571 161.143-70.857 228l196 196c13.143 13.143 21.143 32 21.143 51.429z"></path>
                  </svg>
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
            <div className="home-step2">
              <div className="home-container12">
                <div className="home-line4"></div>
                <div className="home-container13">
                  <svg
                    viewBox="0 0 1243.4285714285713 1024"
                    className="home-icon4"
                  >
                    <path d="M987.429 256l-219.429 402.286h438.857zM256 256l-219.429 402.286h438.857zM725.143 146.286c-10.857 30.857-36 56-66.857 66.857v737.714h347.429c10.286 0 18.286 8 18.286 18.286v36.571c0 10.286-8 18.286-18.286 18.286h-768c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h347.429v-737.714c-30.857-10.857-56-36-66.857-66.857h-280.571c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h280.571c15.429-42.857 55.429-73.143 103.429-73.143s88 30.286 103.429 73.143h280.571c10.286 0 18.286 8 18.286 18.286v36.571c0 10.286-8 18.286-18.286 18.286h-280.571zM621.714 155.429c25.143 0 45.714-20.571 45.714-45.714s-20.571-45.714-45.714-45.714-45.714 20.571-45.714 45.714 20.571 45.714 45.714 45.714zM1243.429 658.286c0 117.714-162.857 164.571-256 164.571s-256-46.857-256-164.571v0c0-22.286 199.429-375.429 224-420 6.286-11.429 18.857-18.857 32-18.857s25.714 7.429 32 18.857c24.571 44.571 224 397.714 224 420v0zM512 658.286c0 117.714-162.857 164.571-256 164.571s-256-46.857-256-164.571v0c0-22.286 199.429-375.429 224-420 6.286-11.429 18.857-18.857 32-18.857s25.714 7.429 32 18.857c24.571 44.571 224 397.714 224 420z"></path>
                  </svg>
                </div>
                <div className="home-line5"></div>
              </div>
              <div className="home-container14">
                <h1 className="home-text47">Évaluation</h1>
                <span className="home-text48">
                  <span>
                    {" "}
                    Prenez des décisions éclairées grâce à une évaluation
                    approfondie
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-step3">
              <div className="home-container15">
                <div className="home-line6"></div>
                <div className="home-container16">
                  <svg viewBox="0 0 1024 1024" className="home-icon6">
                    <path d="M928 128h-832c-52.8 0-96 43.2-96 96v576c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-576c0-52.8-43.2-96-96-96zM96 192h832c17.346 0 32 14.654 32 32v96h-896v-96c0-17.346 14.654-32 32-32zM928 832h-832c-17.346 0-32-14.654-32-32v-288h896v288c0 17.346-14.654 32-32 32zM128 640h64v128h-64zM256 640h64v128h-64zM384 640h64v128h-64z"></path>
                  </svg>
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
        <div className="home-separator3"></div>
        <div className="home-testimonial">
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
              rootClassName="rootClassName"
            ></TestimonialCard>
            <TestimonialCard
              name="FLEN"
              quote="Je ne peux pas remercier assez cette équipe pour leur dévouement. Ils ont non seulement compris mes préférences, mais m'ont aussi aidé à découvrir des options que je n'avais pas envisagées. Le résultat ? Une propriété qui a dépassé mes attentes."
              pictureSrc="https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
              rootClassName="rootClassName"
            ></TestimonialCard>
            <TestimonialCard
              name="FLEN"
              quote="Le professionnalisme de cette agence est incomparable. Ils ont rendu le processus fluide et transparent, me tenant informé à chaque étape. Avec leur soutien, j'ai trouvé un investissement précieux qui est maintenant un pilier de mon portefeuille."
              pictureSrc="https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
              rootClassName="rootClassName"
            ></TestimonialCard>
          </div>
        </div>
        <div className="home-separator4"></div>
        

        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
