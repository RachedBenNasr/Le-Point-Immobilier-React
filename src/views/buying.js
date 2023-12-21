import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import Header from "../components/header";
import ByuingListing from "../components/byuing-listing";
import Footer from "../components/footer";
import Details from "../components/details";
import "./buying.css";

import { getDatabase, ref, onValue } from "firebase/database";

const Buying = (props) => {
  // State to hold sale listings

  const [saleListings, setSaleListings] = useState([]);

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

  // State variables for filters
  // const [minPrice, setMinPrice] = useState(0);
  // const [maxPrice, setMaxPrice] = useState(null);
  const [nature, setNature] = useState("0");
  const [city, setCity] = useState("0");
  const [range, setRange] = useState("0");

  // Function to update filter states
  const updateFilters = () => {
    // Get filter values from inputs and update state variables
    // const newMinPrice = parseInt(
    //   document.querySelector(".buying-textinput").value
    // );
    // const newMaxPrice = parseInt(
    //   document.querySelector(".buying-textinput1").value
    // );
    const newNature = document.getElementById("nature").value;
    const newcity = document.getElementById("city").value;
    const newRange = document.getElementById("intervalSelect").value;

    setNature(newNature);
    setCity(newcity);
    setRange(newRange);

    // if (newMinPrice > newMaxPrice || newMinPrice < 0 || newMaxPrice < 0) {
    //   alert("Merci de verifier les valeurs de filtrage");
    //   return;
    // }

    // setMinPrice(newMinPrice);
    // setMaxPrice(newMaxPrice);
  };

  // Effect to fetch sale listings from Firebase
  useEffect(() => {
    const fetchSaleListings = async () => {
      const database = getDatabase();
      const saleListingsRef = ref(database, "listings/sale");

      onValue(saleListingsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const listingsArray = Object.values(data).filter((listing) => {
            if (listing.nature == "commercial") {
              return false;
            }
            // Filter by state
            if (listing.state !== "approved") {
              return false;
            }

            // PRICE FILTERING DISABLED

            // // Filter by minPrice
            // if (minPrice > 0 && listing.price < minPrice) {
            //   return false;
            // }

            // // Filter by maxPrice
            // if (maxPrice && listing.price > maxPrice) {
            //   return false;
            // }

            // Filter by nature

            // Filter by nature
            if (nature !== "0" && listing.nature !== nature) {
              return false;
            }

            // Filter by city
            if (city !== "0" && listing.city !== city) {
              return false;
            }

            if (range !== "0" && listing.interval !== range) {
              return false;
            }

            return true; // Include the listing if it passes all filters
          });

          setSaleListings(listingsArray);
        }
      });
    };

    fetchSaleListings();
  }, [range, nature, city]);

  return (
    <div className="buying-container">
      <Helmet>
        <title>Services - Vente</title>
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
            {/* <div className="buying-container5">
              <input
                type="text"
                placeholder="MIN (TND)"
                className="buying-textinput input"
                onInput={(e) => {
                  // Remove non-numeric characters
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
              />
              <input
                type="text"
                placeholder="MAX (TND)"
                className="buying-textinput1 input"
                onInput={(e) => {
                  // Remove non-numeric characters
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
              />
            </div> */}

            <select
              id="intervalSelect"
              name="interval"
              className="buying-select"
            >
              <option value="0">Fourchette</option>
              <option value="[-100,000 TND]">[-100,000 TND]</option>
              <option value="[100,000 - 200,000 TND]">
                [100,000 - 200,000 TND]
              </option>
              <option value="[200,000 - 500,000 TND]">
                [200,000 - 500,000 TND]
              </option>
              <option value="[500,000 - 1,000,000 TND]">
                [500,000 - 1,000,000 TND]
              </option>
              <option value="[1,000,000 - 2,000,000 TND]">
                [1,000,000 - 2,000,000 TND]
              </option>
              <option value="[2,000,000+]">[2,000,000+]</option>
            </select>

            <select className="buying-select" defaultValue={"0"} id="nature">
              <option value="0">Type</option>
              <option value="appartment">Appartment</option>
              <option value="penthouse">Penthouse</option>
              <option value="villa">Villa</option>
              <option value="commercial">Commercial</option>
              <option value="terrain">Terrain</option>
            </select>

            <select className="buying-select1" defaultValue={"0"} id="city">
              <option value="0">Ville</option>
              <option value="Tunis">Tunis</option>
              <option value="Ariana">Ariana</option>
              <option value="Manouba">Manouba</option>
              <option value="Ben Arous">Ben Arous</option>
              <option value="Monastir">Monastir</option>
              <option value="Sousse">Sousse</option>
              <option value="Autre">Autre</option>
            </select>

            <div className="buying-container6">
              <button
                type="button"
                className="buying-button "
                onClick={updateFilters}
              >
                <span>
                  <span className="buying-text4">Appliquer</span>
                  <br></br>
                </span>
              </button>
              <button
                type="reset"
                className="buying-button1 "
                onClick={() => {
                  window.location.reload();
                }}
              >
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
                  city={listing.city}
                  location={listing.location}
                  area={listing.area}
                  body={listing.body}
                  beds={listing.beds}
                  cars={listing.cars}
                  pool={listing.pool}
                  garden={listing.garden}
                  nature={listing.nature}
                  interval={listing.interval}
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
                nature={selectedListing.nature}
                interval={selectedListing.interval}
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
