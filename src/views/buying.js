import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import Header from "../components/header";
import ByuingListing from "../components/byuing-listing";
import Footer from "../components/footer";
import Details from "../components/details";
import "./buying.css";

import { getDatabase, ref, onValue } from "firebase/database";
import { getStorage } from "firebase/storage";

const Buying = (props) => {
  // State to hold sale listings

  const [saleListings, setSaleListings] = useState([]);

  //Detail.js code

  const [detailsVisible, setDetailsVisible] = useState(false);
  const [selectedListing, setSelectedListing] = useState(null);

  const handleListingClick = (listing) => {
    setSelectedListing(listing);
    setDetailsVisible(true);
  };

  const handleCloseDetails = () => {
    setDetailsVisible(false);
    setSelectedListing(null);
  };

  // Effect to fetch sale listings from Firebase
  useEffect(() => {
    const fetchSaleListings = async () => {
      // Assuming you have initialized Firebase elsewhere in your app
      const database = getDatabase();
      // const saleListingsRef = database.ref("listings/sale");
      const saleListingsRef = ref(database, "listings/sale");

      // Fetch data from Firebase
      onValue(saleListingsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          // Convert object to array, filter by state, and set state
          const listingsArray = Object.values(data).filter(
            (listing) => listing.state === "approved"
          );
          setSaleListings(listingsArray);
        }
      });
    };

    fetchSaleListings();
  }, []);

  return (
    <div className="buying-container">
      <Helmet>
        <title>Buying</title>
        <meta
          name="description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
        <meta property="og:title" content="Buying" />
        <meta
          property="og:description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/c9c7ea5e-99e3-47ab-b80b-7093b1c26267/53cd6d90-a431-4578-b8cd-fd4e4a17983d?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="buying-container1">
        <Header rootClassName="header-root-class-name4"></Header>
        <div className="buying-container2">
          <div className="buying-hero">
            <h1 className="buying-text">Contenu sponsorisé</h1>
            <span className="buying-text1">
              Vous souhaitez voir votre annonce ici ?
            </span>
            <div className="buying-btn-group">
              <Link to="/promote" className="buying-navlink button">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
        <div className="buying-container3">
          <div className="buying-container4">
            <h1 className="buying-text2">Recherche avancée</h1>
            <div className="buying-container5">
              <input
                type="text"
                placeholder="MIN (TND)"
                className="buying-textinput input"
              />
              <input
                type="text"
                placeholder="MAX (TND)"
                className="buying-textinput1 input"
              />
            </div>
            <select className="buying-select">
              <option defaultValue={0}>Type</option>
              <option value="Appartment">Appartment</option>
              <option value="Penthouse">Penthouse</option>
              <option value="Villa">Villa</option>
              <option value="Commercial">Commercial</option>
              <option value="Terrain">Terrain</option>
            </select>
            <select className="buying-select1">
              <option value="0" defaultValue={0}>
                Ville
              </option>
              <option value="Tunis">Tunis</option>
              <option value="Ariana">Ariana</option>
              <option value="Manouba">Manouba</option>
              <option value="Ben Arous">Ben Arous</option>
              <option value="Monastir">Monastir</option>
              <option value="Sousse">Sousse</option>
              <option value="Autre">Autre</option>
            </select>
            <select className="buying-select2">
              <option value="0" defaultValue={0}>
                Trier Par
              </option>
              <option value="Prix">prix</option>
              <option value="date">Date de publication</option>
            </select>
            <div className="buying-container6">
              <button type="button" className="buying-button ">
                <span>
                  <span className="buying-text4">Appliquer</span>
                  <br></br>
                </span>
              </button>
              <button type="reset" className="buying-button1 ">
                <span className="buying-text6">Réinitialiser</span>
                <br></br>
              </button>
            </div>
          </div>
          <div className="buying-container7">
            {saleListings.map((listing) => (
              <div key={listing.id} onClick={() => handleListingClick(listing)}>
                <ByuingListing
                  id={listing.id}
                  photos={listing.photos}
                  price={listing.price}
                  baths={listing.baths}
                  header={listing.header}
                  location={listing.location}
                  area={listing.area}
                  body={listing.body}
                  beds={listing.beds}
                  cars={listing.cars}
                  pool={listing.pool}
                  garden={listing.garden}
                />
              </div>
            ))}
          </div>
          {detailsVisible && (
            <>
              <div
                className="details-overlay"
                onClick={handleCloseDetails}
              ></div>

              <Details
                id={selectedListing.id}
                title={selectedListing.header}
                photos={selectedListing.photos}
                price={selectedListing.price}
                baths={selectedListing.baths}
                header={selectedListing.header}
                location={selectedListing.location}
                area={selectedListing.area}
                body={selectedListing.body}
                beds={selectedListing.beds}
                garage={selectedListing.garage}
                pool={selectedListing.pool}
                garden={selectedListing.garden}
                closeDetails={handleCloseDetails}
              />
            </>
          )}
        </div>

        <Footer rootClassName="footer-root-class-name4"></Footer>
      </div>
    </div>
  );
};

export default Buying;
