import React, { useState } from "react";

import { Helmet } from "react-helmet";

import Header from "../components/header";
import Footer from "../components/footer";
import "./publish.css";

import { getDatabase, ref, set, push } from "firebase/database";
import { getStorage, ref as sref, uploadBytes } from "firebase/storage";

const Publish = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber1: "",
    phoneNumber2: "",
    email: "",
    role: "",
    nature: "",
    beds: "",
    baths: "",
    garden: false,
    pool: false,
    garage: false,
    cuisine: false,
    commercialType: "",
    city: "",
    location: "",
    areaC: "",
    areaNC: "",
    yearBuilt: "",
    propertyTitle: "",
    price: "",
    header: "",
    body: "",
    id: "",
    photos: "",
    state: "requested",
    dateTime: "",
    interval: "",
    terrainType: "",
    publishDate: new Date().toISOString(),
    type: "",
  });

  const saveData = (e) => {
    const { id, value, type } = e.target;
    var inputValue = "";
    if (id != "role" && id != "propertyTitle") {
      inputValue = type === "radio" ? value === "true" : value;
    } else {
      inputValue = value;
    }

    setFormData((prevData) => ({
      ...prevData,
      [id]: inputValue,
    }));

    console.log("for " + id + " the value is NOW " + inputValue);
  };

  const [propertyType, setPropertyType] = useState("0");

  const handlePropertyTypeChange = (e) => {
    console.log(e.target.value);
    setPropertyType(e.target.value);
  };

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    // Check if the number of selected files plus the previously selected files exceeds the limit of 20
    if (files.length + selectedFiles.length > 20) {
      alert("Vous ne pouvez télécharger que 20 photos maximum.");
      return;
    }

    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleRemoveFile = (index) => {
    const newFiles = [...selectedFiles];
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);
  };

  const [category, setCategory] = useState("");

  const handleCategrotyChange = (e) => {
    console.log("this property is for " + e.target.value);
    setCategory(e.target.value);
  };

  const currentYear = new Date().getFullYear();
  const startYear = 1900;
  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, index) => startYear + index
  ).reverse();

  // Function to resize and compress an image
  const resizeAndCompressImage = async (file) => {
    console.log("Start resizing and compressing:", file.name);

    return new Promise(async (resolve) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;

        img.onload = () => {
          console.log("Original image size:", img.width, img.height);

          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          const maxWidth = 800;
          const maxHeight = 800;
          let newWidth = img.width;
          let newHeight = img.height;

          if (img.width > maxWidth) {
            newWidth = maxWidth;
            newHeight = (img.height * maxWidth) / img.width;
          }

          if (img.height > maxHeight) {
            newHeight = maxHeight;
            newWidth = (img.width * maxHeight) / img.height;
          }

          canvas.width = newWidth;
          canvas.height = newHeight;

          ctx.drawImage(img, 0, 0, newWidth, newHeight);

          console.log("Resized image size:", newWidth, newHeight);

          canvas.toBlob(
            (blob) => {
              const resizedFile = new File([blob], file.name, {
                type: "image/jpeg",
              });
              console.log("Resized file size:", resizedFile.size);
              resolve(resizedFile);
            },
            "image/jpeg",
            0.75
          );
        };
      };

      reader.readAsDataURL(file);
    });
  };

  const finalSend = async (e) => {
    setLoading(true);
    setProgress(0);
    e.preventDefault();

    console.log("selected files to start: ", selectedFiles);

    if (selectedFiles.length < 3) {
      alert("Veuillez sélectionner au moins 3 photos.");
      return;
    }

    // Compress and resize each selected file
    const tempHolder = [...selectedFiles]; // Create a shallow copy to avoid modifying the original array

    for (let i = 0; i < tempHolder.length; i++) {
      const resizedFile = await resizeAndCompressImage(tempHolder[i]);
      tempHolder[i] = resizedFile;
    }
    console.log("Contents of temp holder: ", tempHolder);

    // After all images are resized, set the selectedFiles
    setSelectedFiles(tempHolder);

    console.log("selected files to end: ", selectedFiles);

    try {
      const db = getDatabase();
      const storage = getStorage();
      const listingsRef = ref(db, "listings/" + category);
      const newListingKey = push(listingsRef);
      formData.type = category;

      formData.price = parseInt(formData.price.replace(/[^0-9.]/g, ""));

      if (formData.price < 100000) {
        formData.interval = "[-100,000 TND]";
      } else if (formData.price >= 100000 && formData.price < 200000) {
        formData.interval = "[100,000 - 200,000 TND]";
      } else if (formData.price >= 200000 && formData.price < 500000) {
        formData.interval = "[200,000 - 500,000 TND]";
      } else if (formData.price >= 500000 && formData.price < 1000000) {
        formData.interval = "[500,000 - 1,000,000 TND]";
      } else if (formData.price >= 1000000 && formData.price < 2000000) {
        formData.interval = "[1,000,000 - 2,000,000 TND]";
      } else {
        formData.interval = "[2,000,000+]";
      }

      formData.dateTime = Date.now();
      formData.id = newListingKey.toString().split("/").pop();
      formData.photos = tempHolder.length;

      set(newListingKey, formData);

      for (let i = 0; i < tempHolder.length; i++) {
        const imageRef = sref(
          storage,
          `/${category}/${formData.id}/${tempHolder[i].name}`
        );

        const result = await uploadBytes(imageRef, tempHolder[i]).then(() => {
          const newProgress = Math.round(((i + 1) / tempHolder.length) * 100);
          setProgress(newProgress);
        });
      }

      setLoading(false);
      setProgress(0);
      if (formData.role == "person") {
        window.location.href = "/thanking";
      } else {
        window.location.href = "/thanking-promoter";
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  return (
    <div className="publish-container">
      <Helmet>
        <title>Publish</title>
        <meta
          name="description"
          content="Trouvez votre bien parmi nos annonces immobilières en Tunisie : choisissez directement vente maison"
        />
        <meta property="og:title" content="publish" />
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
      <div className="publish-container01">
        <Header rootClassName="header-root-class-name2"></Header>
        <div className="publish-contents">
          <span className="publish-text">Publier une annonce</span>
          <h1 className="publish-text01">
            Portée considérable. Exposition inégalée.
          </h1>

          <div className="publish-cards">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1564846824194-346b7871b855?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHNpZ25pbmd8ZW58MHx8fHwxNjkyNTY0NTMzfDA&amp;ixlib=rb-4.0.3&amp;w=1400"
              className="publish-image"
            />
            <form className="publish-form" onSubmit={finalSend}>
              <h1 className="publish-title">
                Remplissez soigneusement le formulaire ci-dessous
              </h1>
              <div className="publish-personal">
                <span className="publish-text09">
                  <span>Informations personnelles</span>
                  <br></br>
                </span>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Nom et Prenom"
                  className="publish-name input"
                  onBlur={saveData}
                  onInput={(e) => {
                    // Allow only uppercase and lowercase letters and spaces
                    e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
                  }}
                />
                <input
                  type="text"
                  id="phoneNumber1"
                  required
                  placeholder="Numéro 1"
                  className="publish-number input"
                  onBlur={saveData}
                  onInput={(e) => {
                    e.target.value = e.target.value
                      .replace(/[^0-9+]/g, "")
                      .replace(/\+/g, "00");
                  }}
                />
                <input
                  type="text"
                  id="phoneNumber2"
                  required
                  placeholder="Numéro 2"
                  className="publish-number input"
                  onBlur={saveData}
                  onInput={(e) => {
                    e.target.value = e.target.value
                      .replace(/[^0-9+]/g, "")
                      .replace(/\+/g, "00");
                  }}
                />
                <input
                  type="text"
                  id="email"
                  required
                  placeholder="Email"
                  className="publish-email input"
                  onBlur={saveData}
                />
              </div>
              <div className="publish-purpose">
                <span className="publish-text12">Vous êtes:</span>
                <div className="publish-container02">
                  <input
                    type="radio"
                    name="role"
                    required
                    className="publish-radiobutton"
                    value="promoter"
                    id="role"
                    onBlur={saveData}
                  />
                  <span>Promoteur immobilier</span>
                </div>
                <div className="publish-container03">
                  <input
                    type="radio"
                    name="role"
                    required
                    className="publish-radiobutton01"
                    value="person"
                    id="role"
                    onBlur={saveData}
                  />
                  <span>Particulier</span>
                </div>
              </div>
              <div className="publish-purpose">
                <span className="publish-text12">Type d'annonce</span>
                <div className="publish-container02">
                  <input
                    type="radio"
                    name="purpose"
                    required
                    className="publish-radiobutton"
                    value="rent"
                    id="type"
                    onBlur={handleCategrotyChange}
                  />
                  <span>A Louer</span>
                </div>
                <div className="publish-container03">
                  <input
                    type="radio"
                    name="purpose"
                    required
                    className="publish-radiobutton01"
                    value="sale"
                    id="type"
                    onBlur={handleCategrotyChange}
                  />
                  <span>A vendre</span>
                </div>
              </div>
              {/* CONDITIONAL RENDERING  */}
              <div className="publish-nature">
                <span className="publish-text15">Nature</span>
                <select
                  required
                  className="publish-select"
                  onChange={(e) => {
                    handlePropertyTypeChange(e);
                    saveData(e);
                  }}
                  id="nature"
                  defaultValue="0"
                >
                  <option value="0">La nature de votre annonce</option>
                  <option value="appartement">Appartement</option>
                  <option value="duplex">Duplex</option>
                  <option value="penthouse">Penthouse</option>
                  <option value="villa">Villa</option>
                  <option value="commercial">Commercial</option>
                  <option value="terrain">Terrain</option>
                </select>
              </div>
              {propertyType != "0" &&
                propertyType != "commercial" &&
                propertyType != "terrain" && (
                  <div className="publish-residential">
                    <span className="publish-text16">
                      <span>Details</span>
                      <br />
                    </span>
                    <div className="publish-boxes">
                      <div className="publish-container04">
                        <span>Chambres</span>
                        <input
                          type="text"
                          placeholder="(1, 2 3,...)"
                          className="publish-textinput input"
                          id="beds"
                          onBlur={saveData}
                          onInput={(e) => {
                            // Remove non-numeric characters
                            e.target.value = e.target.value.replace(
                              /[^0-9]/g,
                              ""
                            );
                          }}
                        />
                      </div>
                      <div className="publish-container05">
                        <span className="publish-text20">Salles de bain</span>
                        <input
                          type="text"
                          placeholder="(1, 2 3,...)"
                          className="publish-textinput1 input"
                          id="baths"
                          onBlur={saveData}
                          onInput={(e) => {
                            // Remove non-numeric characters
                            e.target.value = e.target.value.replace(
                              /[^0-9]/g,
                              ""
                            );
                          }}
                        />
                      </div>
                      <div className="publish-container06">
                        <span>Contient-il un jardin</span>
                        <div className="publish-container07">
                          <input
                            type="radio"
                            name="garden"
                            required
                            className="publish-radiobutton02"
                            id="garden"
                            value={true}
                            onBlur={saveData}
                          />
                          <span>Oui</span>
                        </div>
                        <div className="publish-container08">
                          <input
                            type="radio"
                            name="garden"
                            required
                            className="publish-radiobutton03"
                            id="garden"
                            value={false}
                            onBlur={saveData}
                          />
                          <span>Non</span>
                        </div>
                      </div>
                    </div>
                    <div className="publish-boxes1">
                      <div className="publish-container09">
                        <span>Dispose-t-il d&apos;une piscine</span>
                        <div className="publish-container10">
                          <input
                            type="radio"
                            name="pool"
                            required
                            className="publish-radiobutton04"
                            id="pool"
                            value={true}
                            onBlur={saveData}
                          />
                          <span>Oui</span>
                        </div>
                        <div className="publish-container11">
                          <input
                            type="radio"
                            name="pool"
                            required
                            className="publish-radiobutton05"
                            id="pool"
                            value={false}
                            onBlur={saveData}
                          />
                          <span>Non</span>
                        </div>
                      </div>

                      <div className="publish-container15">
                        <span>Contient-il un garage</span>
                        <div className="publish-container16">
                          <input
                            type="radio"
                            name="garage"
                            required
                            className="publish-radiobutton08"
                            id="garage"
                            value={true}
                            onBlur={saveData}
                          />
                          <span>Oui</span>
                        </div>
                        <div className="publish-container17">
                          <input
                            type="radio"
                            name="garage"
                            required
                            className="publish-radiobutton09"
                            id="garage"
                            value={false}
                            onBlur={saveData}
                          />
                          <span>Non</span>
                        </div>
                      </div>
                      <div className="publish-container15">
                        <span>la cuisine est-elle équipée</span>
                        <div className="publish-container16">
                          <input
                            type="radio"
                            name="cuisine"
                            required
                            className="publish-radiobutton08"
                            id="cuisine"
                            value={true}
                            onBlur={saveData}
                          />
                          <span>Oui</span>
                        </div>
                        <div className="publish-container17">
                          <input
                            type="radio"
                            name="cuisine"
                            required
                            className="publish-radiobutton09"
                            id="cuisine"
                            value={false}
                            onBlur={saveData}
                          />
                          <span>Non</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              {propertyType === "commercial" && (
                <div className="publish-commercial">
                  <span className="publish-text33">
                    Quel type de propriété commerciale ?
                  </span>
                  <input
                    type="text"
                    id="commercialType"
                    placeholder="Veuillez indiquer le type"
                    className="publish-type input"
                    onBlur={saveData}
                  />
                </div>
              )}
              {propertyType === "terrain" && (
                <div className="publish-area1">
                  <span className="publish-text33">Zonage du terrain</span>
                  <select
                    required
                    className="publish-select1"
                    id="terrainType"
                    onBlur={saveData}
                  >
                    <option defaultValue={0}>Terrain pour...</option>
                    <option value="Villa">Villa</option>
                    <option value="Industrie">Industrie</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Promotion">Promotion</option>
                  </select>
                </div>
              )}
              <div className="publish-location">
                <span className="publish-text34">
                  <span>Où se situe votre propriété</span>
                  <br></br>
                </span>
                <select
                  required
                  className="publish-select1"
                  id="city"
                  onBlur={saveData}
                >
                  <option defaultValue={0}>
                    Veuillez sélectionner une ville
                  </option>
                  <option value="Tunis">Tunis</option>
                  <option value="Ariana">Ariana</option>
                  <option value="Manouba">Manouba</option>
                  <option value="Ben Arous">Ben Arous</option>
                  <option value="Monastir">Monastir</option>
                  <option value="Sousse">Sousse</option>
                  <option value="Autre">Autre...</option>
                </select>
              </div>
              <div className="publish-area">
                <span className="publish-text37">
                  Quelle est l&apos;adresse exacte
                </span>
                <input
                  type="text"
                  id="location"
                  required
                  placeholder="Adresse "
                  className="publish-type1 input"
                  onBlur={saveData}
                />
              </div>
              <div className="publish-area1">
                <span className="publish-text38">
                  veuillez indiquer les superficies de votre propriété en metre
                  carré :
                </span>
                <input
                  type="text"
                  id="areaC"
                  required
                  placeholder="Superficie couverte"
                  className="publish-type2 input"
                  onBlur={saveData}
                  onInput={(e) => {
                    // Remove non-numeric characters
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  }}
                />
                <input
                  type="text"
                  id="areaNC"
                  required
                  placeholder="Superficie non couverte"
                  className="publish-type2 input"
                  onBlur={saveData}
                  onInput={(e) => {
                    // Remove non-numeric characters
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  }}
                />
              </div>
              <span className="publish-text42">Année de construction</span>
              <select
                required
                id="yearBuilt"
                name="yearBuilt"
                className="publish-select1"
                onChange={saveData}
              >
                <option defaultValue={0}>Choisir ...</option>
                {years.map((year) => (
                  <option value={year}>{year}</option>
                ))}
              </select>
              {/* <div className="publish-services">
                <span className="publish-text39">
                  Votre propriété est-elle viabilisé (eau, électricité, gaz)
                </span>
                <div className="publish-container18">
                  <input
                    type="radio"
                    name="service"
                    required
                    className="publish-radiobutton10"
                    id="viabilise"
                    value={true}
                    onBlur={saveData}
                  />
                  <span>Oui</span>
                </div>
                <div className="publish-container19">
                  <input
                    type="radio"
                    name="service"
                    required
                    className="publish-radiobutton11"
                    id="viabilise"
                    value={false}
                    onBlur={saveData}
                  />
                  <span>Non</span>
                </div>
              </div> */}
              <div className="publish-legal">
                <span className="publish-text42">
                  votre propriété a-t-elle un titre bleu?
                </span>
                <div className="publish-container20">
                  <input
                    type="radio"
                    name="title"
                    required
                    className="publish-radiobutton12"
                    id="propertyTitle"
                    value="oui"
                    onBlur={saveData}
                  />
                  <span>Oui</span>
                </div>
                <div className="publish-container21">
                  <input
                    type="radio"
                    name="title"
                    required
                    className="publish-radiobutton13"
                    id="propertyTitle"
                    value="non"
                    onBlur={saveData}
                  />
                  <span>Non</span>
                </div>
              </div>
              <div className="publish-uploads">
                <span className="publish-text45">
                  Téléchargez des photos de votre propriéte
                </span>
                <div className="publish-container22">
                  <div className="publish-container23">
                    <label htmlFor="file-upload" className="custom-upload">
                      Choisir des Photos
                    </label>
                    <input
                      type="file"
                      id="file-upload"
                      name="photos[]"
                      accept="image/*"
                      multiple
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </div>
              <div id="preview" className="image-preview">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="preview-item">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Preview ${index + 1}`}
                      className="preview-image"
                    />
                    <span
                      className="remove-icon"
                      onClick={() => handleRemoveFile(index)}
                    >
                      X
                    </span>
                  </div>
                ))}
              </div>
              <div className="publish-price">
                <span className="publish-text46">Prix demandé (TND)</span>
                <input
                  type="text"
                  id="price"
                  rows="Prix"
                  required
                  placeholder="Prix"
                  className="publish-type3 input"
                  onBlur={saveData}
                  onInput={(e) => {
                    // Remove non-numeric characters
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  }}
                />
              </div>
              <div className="publish-price">
                <span className="publish-text46">Titre de l'annonce </span>
                <input
                  type="text"
                  id="header"
                  rows="Prix"
                  required
                  placeholder="Titre"
                  className="publish-type3 input"
                  onBlur={saveData}
                />
              </div>
              <div className="publish-additional">
                <span className="publish-text47">Description</span>
                <textarea
                  placeholder="Details"
                  className="publish-textarea textarea"
                  id="body"
                  onBlur={(e) => {
                    saveData(e); // Call the saveData function

                    // Check for the presence of a phone number (8 consecutive digits)
                    const phoneNumberRegex = /\b\d{8}\b/;
                    const hasPhoneNumber = phoneNumberRegex.test(
                      e.target.value
                    );

                    if (hasPhoneNumber) {
                      alert(
                        "Veuillez supprimer le numéro de téléphone de la description."
                      );
                    }
                  }}
                  maxLength="2000"
                ></textarea>
              </div>
              <button type="submit" className="publish-button button">
                <span>
                  <span className="publish-text49">Envoyer</span>
                  <br></br>
                </span>
              </button>
            </form>
          </div>
          <div>
            {loading && (
              <div className="overlay">
                <div className="loader-container">
                  <p>Veuillez attendre la fin du téléchargement</p>
                  <p>{`${progress}%`}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name2"></Footer>
      </div>
    </div>
  );
};

export default Publish;
