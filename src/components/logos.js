import React, { useEffect, useState } from "react";

import "./logos.css";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import PropTypes from "prop-types";

import {
  getStorage,
  ref as Sref,
  listAll,
  getDownloadURL,
} from "firebase/storage";

const Logos = ({ startIndex }) => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    // Function to fetch the images for a listing from Firebase Storage
    const fetchLogos = async () => {
      try {
        const storage = getStorage();
        let logosref = Sref(storage, `logos/`);

        // List all items in the folder
        let logos = await listAll(logosref);

        // Create an array of objects with the required format
        const imagesArray = await Promise.all(
          logos.items.map(async (item) => ({
            original: await getDownloadURL(item),
          }))
        );

        // Set the state with the formatted images
        setImageList(imagesArray);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    // Call the function to fetch the images
    fetchLogos();
  }, []);
  return (
    <div className="logos-container">
      <div className="logos-features">
        <div className="logos-container1">
          <ImageGallery
            items={imageList}
            showIndex={false}
            showFullscreenButton={false}
            showNav={false}
            showPlayButton={false}
            disableKeyDown={true}
            disableThumbnailSwipe={true}
            autoPlay={true}
            lazyLoad={true}
            disableSwipe={true}
            slideDuration={300}
            slideInterval={2000}
            useTranslate3D={false}
            startIndex={startIndex} // Set the startIndex here
          />
        </div>
      </div>
    </div>
  );
};

Logos.propTypes = {
  startIndex: PropTypes.number.isRequired,
};

export default Logos;
