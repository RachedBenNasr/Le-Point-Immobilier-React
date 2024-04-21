import React, { useEffect, useState } from "react";



import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

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
    <div>
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
  );
};

export default Logos;
