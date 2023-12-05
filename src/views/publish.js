import React, { useState } from "react";

import { Helmet } from "react-helmet";

import Header from "../components/header";
import Footer from "../components/footer";
import "./publish.css";

import { getDatabase, ref, set, push, update } from "firebase/database";
import { getStorage, ref as sref, uploadBytes } from "firebase/storage";

const Publish = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    nature: "",
    beds: "",
    baths: "",
    garden: false,
    pool: false,
    garage: false,
    commercialType: "",
    city: "",
    location: "",
    area: "",
    viabilise: "",
    propertyTitle: "",
    price: "",
    header: "",
    body: "",
    id: "",
    nbrimg: "",
  });
  //TODO fix data types (bools and strings)

  const saveData = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    console.log("for " + id + " the value is now " + value);
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

  // Function to resize and compress an image
  const resizeAndCompressImage = async (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;

        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          // Resize the image to a maximum width and height
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

          // Draw the image on the canvas
          ctx.drawImage(img, 0, 0, newWidth, newHeight);

          // Convert the canvas content to a Blob (compressed image)
          canvas.toBlob(
            (blob) => {
              resolve(new File([blob], file.name, { type: file.type }));
            },
            file.type,
            0.75
          ); // Adjust the compression quality (0.75 means 75% quality)
        };
      };

      reader.readAsDataURL(file);
    });
  };

  const finalSend = async (e) => {
    e.preventDefault();

    if (selectedFiles.length < 3) {
      alert("Veuillez sélectionner au moins 3 photos.");
      return;
    }

    // Compress and resize each selected file
    const compressedFiles = await Promise.all(
      selectedFiles.map(resizeAndCompressImage)
    );
    setSelectedFiles(compressedFiles);

    // if (
    //   !/^[a-zA-Z]{3,}$/.test(formData.name) ||
    //   !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    // ) {
    //   alert("Veuillez entrer un nom valide et une adresse e-mail valide.");
    //   return;
    // }

    try {
      const db = getDatabase();
      const storage = getStorage();

      const listingsRef = ref(db, "listings/" + category);

      const newListingKey = push(listingsRef);

      set(newListingKey, formData);

      const newID = newListingKey.toString().split("/").pop();
      formData.id = newID;
      formData.nbrimg = selectedFiles.length;
      set(newListingKey, formData);

      for (let i = 0; i < selectedFiles.length; i++) {
        const imageRef = sref(
          storage,
          `/sale/${newID}/${selectedFiles[i].name}`
        );

        const result = await uploadBytes(imageRef, selectedFiles[i]).then(
          () => {
            console.log("success");
          }
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

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
                />
                <input
                  type="text"
                  id="phoneNumber"
                  required
                  placeholder="Numéro"
                  className="publish-number input"
                  onBlur={saveData}
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
                <span className="publish-text12">Type d&apos;annonce</span>
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
                  <option value="0">
                    Veuillez sélectionner la nature de votre annonce
                  </option>
                  <option value="appartement">Appartement</option>
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
                  Quelle est la superficie totale de votre propriété en mètres
                  carrés
                </span>
                <input
                  type="text"
                  id="area"
                  required
                  placeholder="Superficie"
                  className="publish-type2 input"
                  onBlur={saveData}
                />
              </div>
              <div className="publish-services">
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
              </div>
              <div className="publish-legal">
                <span className="publish-text42">
                  Quel type de titre détient votre propriété
                </span>
                <div className="publish-container20">
                  <input
                    type="radio"
                    name="title"
                    required
                    className="publish-radiobutton12"
                    id="propertyTitle"
                    value="bleu"
                    onBlur={saveData}
                  />
                  <span>Titre Bleu / Titre Individuel</span>
                </div>
                <div className="publish-container21">
                  <input
                    type="radio"
                    name="title"
                    required
                    className="publish-radiobutton13"
                    id="propertyTitle"
                    value="jumelé"
                    onBlur={saveData}
                  />
                  <span>Titre Jumelé</span>
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
                  placeholder="Price"
                  className="publish-type3 input"
                  onBlur={saveData}
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
                  onBlur={saveData}
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
        </div>
        <Footer rootClassName="footer-root-class-name2"></Footer>
      </div>
    </div>
  );
};

export default Publish;
