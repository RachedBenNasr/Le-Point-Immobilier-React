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
  const initialFilters = {
    baths: "",
    beds: "",
    interval: "",
    nature: "",
    city: "",
  };

  const [filters, setFilters] = useState(initialFilters);

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    // Check if the default option is selected
    if (value === "0") {
      // Reset the filter for the respective id
      resetFilters();
    } else {
      // Update the filter value
      setFilters((prevFilters) => ({
        ...prevFilters,
        [id]: value,
      }));
    }
  };

  const [emptyChecker, setEmptyChecker] = useState("");

  // Effect to fetch sale listings from Firebase
  useEffect(() => {
    const fetchSaleListings = async () => {
      const database = getDatabase();
      const saleListingsRef = ref(database, "listings/sale");

      onValue(saleListingsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const listingsArray = Object.values(data).filter((listing) => {
            if (listing.nature === "commercial") {
              return false;
            }
            if (listing.state !== "approved") {
              return false;
            }
            if (filters.city && listing.city !== filters.city) {
              console.log("city failed");
              return false;
            }
            if (filters.nature && listing.nature !== filters.nature) {
              console.log("nature failed");
              return false;
            }
            if (filters.interval && listing.interval !== filters.interval) {
              console.log("interval failed");
              return false;
            }
            if (filters.beds && listing.beds !== filters.beds) {
              console.log("beds failed");
              return false;
            }
            if (filters.baths && listing.baths !== filters.baths) {
              console.log("baths failed");
              return false;
            }
            return true;
          });

          if (listingsArray.length == 0) {
            setEmptyChecker(
              "Aucun filtre ne correspond à votre recherche. Merci d'essayer avec d'autres filtres."
            );
          } else {
            setEmptyChecker("");
          }
          setSaleListings(listingsArray);
        }
      });
    };

    fetchSaleListings();
  }, [filters]); // Include filters in dependency array

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
                id="baths"
                type="text"
                className="buying-select"
                placeholder="Salles de bain"
                onInput={(e) => {
                  // Remove non-numeric characters
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
                value={filters.baths}
                onChange={handleInputChange}
              ></input>

              <input
                placeholder="S+1"
                id="beds"
                type="select"
                className="buying-select"
                onInput={(e) => {
                  // Remove non-numeric characters
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
                value={filters.beds}
                onChange={handleInputChange}
              ></input>
            </div>

            <select
              id="interval"
              name="interval"
              className="buying-select"
              value={filters.interval}
              onChange={handleInputChange}
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

            <select
              className="buying-select"
              id="nature"
              value={filters.nature}
              onChange={handleInputChange}
            >
              <option value="0">Type</option>
              <option value="appartment">Appartment</option>
              <option value="penthouse">Penthouse</option>
              <option value="villa">Villa</option>
              <option value="commercial">Commercial</option>
              <option value="terrain">Terrain</option>
            </select>

            <select
              className="buying-select1"
              id="city"
              value={filters.city}
              onChange={handleInputChange}
            >
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
                type="reset"
                className="buying-button1 "
                onClick={resetFilters}
              >
                <span className="buying-text6">Réinitialiser</span>
                <br></br>
              </button>
            </div>
          </div>

          <div className="buying-container7">
            {saleListings.length > 0 ? (
              saleListings.map((listing) => (
                <div
                  key={listing.id}
                  onClick={() => handleListingClick(listing)}
                >
                  <ByuingListing
                    id={listing.id}
                    photos={listing.photos}
                    price={listing.price}
                    baths={listing.baths}
                    header={listing.header}
                    city={listing.city}
                    location={listing.location}
                    areaC={listing.areaC}
                    areaNC={listing.areaNC}
                    body={listing.body}
                    beds={listing.beds}
                    cars={listing.cars}
                    pool={listing.pool}
                    garden={listing.garden}
                    nature={listing.nature}
                    interval={listing.interval}
                  />
                </div>
              ))
            ) : (
              <h2>{emptyChecker}</h2>
            )}
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
                areaC={selectedListing.areaC}
                areaNC={selectedListing.areaNC}
                body={selectedListing.body}
                beds={selectedListing.beds}
                garage={selectedListing.garage}
                pool={selectedListing.pool}
                garden={selectedListing.garden}
                nature={selectedListing.nature}
                interval={selectedListing.interval}
                closeDetails={handleCloseDetails}
                type={selectedListing.type}
                yearBuilt={selectedListing.yearBuilt}
                city={selectedListing.city}
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
