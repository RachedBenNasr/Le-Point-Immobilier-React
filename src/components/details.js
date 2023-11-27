import React from "react";

import PropTypes from "prop-types";

import "./details.css";

const Details = (props) => {
  return (
    <div className={`details-blog-post-card`}>
      <div className="details-container">
        <svg
          viewBox="0 0 804.5714285714286 1024"
          className="details-icon"
          onClick={props.closeDetails}
        >
          <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
        </svg>
        <div className="details-container1">
          <svg viewBox="0 0 768 1024" className="details-icon02 hover">
            <path d="M669.143 172l-303.429 303.429 303.429 303.429c14.286 14.286 14.286 37.143 0 51.429l-94.857 94.857c-14.286 14.286-37.143 14.286-51.429 0l-424-424c-14.286-14.286-14.286-37.143 0-51.429l424-424c14.286-14.286 37.143-14.286 51.429 0l94.857 94.857c14.286 14.286 14.286 37.143 0 51.429z"></path>
          </svg>
          <svg viewBox="0 0 694.8571428571428 1024" className="details-icon04">
            <path d="M632.571 501.143l-424 424c-14.286 14.286-37.143 14.286-51.429 0l-94.857-94.857c-14.286-14.286-14.286-37.143 0-51.429l303.429-303.429-303.429-303.429c-14.286-14.286-14.286-37.143 0-51.429l94.857-94.857c14.286-14.286 37.143-14.286 51.429 0l424 424c14.286 14.286 14.286 37.143 0 51.429z"></path>
          </svg>
        </div>
        <div className="details-content">
          <div className="details-left">
            <span className="details-text">{props.title}</span>
            <div className="details-location">
              <svg
                viewBox="0 0 585.1428571428571 1024"
                className="details-icon06"
              >
                <path d="M438.857 365.714c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM585.143 365.714c0 34.857-4 70.857-18.857 102.286l-208 442.286c-12 25.143-38.286 40.571-65.714 40.571s-53.714-15.429-65.143-40.571l-208.571-442.286c-14.857-31.429-18.857-67.429-18.857-102.286 0-161.714 130.857-292.571 292.571-292.571s292.571 130.857 292.571 292.571z"></path>
              </svg>
              <span className="details-text01">{props.location}</span>
            </div>
            <div className="details-description">
              <span className="details-text02">Description:</span>
              <span className="details-text03">{props.body}</span>
            </div>
          </div>
          <div className="details-right">
            <div className="details-info">
              <div className="details-basics">
                <div className="details-container2">
                  <svg
                    viewBox="0 0 1170.2857142857142 1024"
                    className="details-icon08"
                  >
                    <path d="M146.286 585.143h987.429c20 0 36.571 16.571 36.571 36.571v256h-146.286v-146.286h-877.714v146.286h-146.286v-694.857c0-20 16.571-36.571 36.571-36.571h73.143c20 0 36.571 16.571 36.571 36.571v402.286zM475.429 402.286c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM1170.286 548.571v-36.571c0-121.143-98.286-219.429-219.429-219.429h-402.286c-20 0-36.571 16.571-36.571 36.571v219.429h658.286z"></path>
                  </svg>
                  <span className="details-text04">{props.beds}</span>
                </div>
                <div className="details-container3">
                  <svg viewBox="0 0 1024 1024" className="details-icon10">
                    <path d="M950.857 621.714v109.714c0 65.143-28.571 122.857-73.143 163.429v110.857c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-67.429c-22.857 8-47.429 12.571-73.143 12.571h-438.857c-25.714 0-50.286-4.571-73.143-12.571v62.857c0 12.571-8 22.857-18.286 22.857h-36.571c-10.286 0-18.286-10.286-18.286-22.857v-106.286c-44.571-40.571-73.143-98.286-73.143-163.429v-109.714h877.714zM402.286 384c0 10.286-8 18.286-18.286 18.286s-18.286-8-18.286-18.286 8-18.286 18.286-18.286 18.286 8 18.286 18.286zM438.857 347.429c0 10.286-8 18.286-18.286 18.286s-18.286-8-18.286-18.286 8-18.286 18.286-18.286 18.286 8 18.286 18.286zM402.286 310.857c0 10.286-8 18.286-18.286 18.286s-18.286-8-18.286-18.286 8-18.286 18.286-18.286 18.286 8 18.286 18.286zM475.429 310.857c0 10.286-8 18.286-18.286 18.286s-18.286-8-18.286-18.286 8-18.286 18.286-18.286 18.286 8 18.286 18.286zM438.857 274.286c0 10.286-8 18.286-18.286 18.286s-18.286-8-18.286-18.286 8-18.286 18.286-18.286 18.286 8 18.286 18.286zM402.286 237.714c0 10.286-8 18.286-18.286 18.286s-18.286-8-18.286-18.286 8-18.286 18.286-18.286 18.286 8 18.286 18.286zM1024 530.286v36.571c0 10.286-8 18.286-18.286 18.286h-987.429c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h54.857v-365.714c0-80.571 65.714-146.286 146.286-146.286 41.143 0 78.286 17.143 105.143 44.571 35.429-14.286 77.714-9.143 109.143 15.429l12.571-12.571c3.429-3.429 9.143-3.429 12.571 0l24 24c3.429 3.429 3.429 9.143 0 12.571l-179.429 179.429c-3.429 3.429-9.143 3.429-12.571 0l-24-24c-3.429-3.429-3.429-9.143 0-12.571l12.571-12.571c-27.429-34.857-30.857-82.857-9.714-121.143-13.143-12.571-30.857-20-50.286-20-40.571 0-73.143 32.571-73.143 73.143v365.714h859.429c10.286 0 18.286 8 18.286 18.286zM512 274.286c0 10.286-8 18.286-18.286 18.286s-18.286-8-18.286-18.286 8-18.286 18.286-18.286 18.286 8 18.286 18.286zM475.429 237.714c0 10.286-8 18.286-18.286 18.286s-18.286-8-18.286-18.286 8-18.286 18.286-18.286 18.286 8 18.286 18.286zM438.857 201.143c0 10.286-8 18.286-18.286 18.286s-18.286-8-18.286-18.286 8-18.286 18.286-18.286 18.286 8 18.286 18.286zM548.571 237.714c0 10.286-8 18.286-18.286 18.286s-18.286-8-18.286-18.286 8-18.286 18.286-18.286 18.286 8 18.286 18.286zM512 201.143c0 10.286-8 18.286-18.286 18.286s-18.286-8-18.286-18.286 8-18.286 18.286-18.286 18.286 8 18.286 18.286zM475.429 164.571c0 10.286-8 18.286-18.286 18.286s-18.286-8-18.286-18.286 8-18.286 18.286-18.286 18.286 8 18.286 18.286zM585.143 201.143c0 10.286-8 18.286-18.286 18.286s-18.286-8-18.286-18.286 8-18.286 18.286-18.286 18.286 8 18.286 18.286zM548.571 164.571c0 10.286-8 18.286-18.286 18.286s-18.286-8-18.286-18.286 8-18.286 18.286-18.286 18.286 8 18.286 18.286zM621.714 164.571c0 10.286-8 18.286-18.286 18.286s-18.286-8-18.286-18.286 8-18.286 18.286-18.286 18.286 8 18.286 18.286z"></path>
                  </svg>
                  <span className="details-text05">{props.baths}</span>
                </div>
                <div className="details-container4">
                  <svg
                    viewBox="0 0 1170.2857142857142 1024"
                    className="details-icon12"
                  >
                    <path d="M1170.286 877.714v73.143h-1170.286v-877.714h73.143v804.571h1097.143zM950.857 292.571l146.286 512h-950.857v-329.143l256-329.143 329.143 329.143z"></path>
                  </svg>
                  <span className="details-text06">{props.area}</span>
                </div>
              </div>
              <div className="details-extras">
                <div className="details-container5">
                  <svg
                    viewBox="0 0 1170.2857142857142 1024"
                    className="details-icon14"
                  >
                    <path d="M274.286 621.714c0-50.286-41.143-91.429-91.429-91.429s-91.429 41.143-91.429 91.429 41.143 91.429 91.429 91.429 91.429-41.143 91.429-91.429zM294.857 438.857h580.571l-50.857-204c-1.714-6.286-13.143-15.429-20-15.429h-438.857c-6.857 0-18.286 9.143-20 15.429zM1078.857 621.714c0-50.286-41.143-91.429-91.429-91.429s-91.429 41.143-91.429 91.429 41.143 91.429 91.429 91.429 91.429-41.143 91.429-91.429zM1170.286 566.857v219.429c0 10.286-8 18.286-18.286 18.286h-54.857v73.143c0 60.571-49.143 109.714-109.714 109.714s-109.714-49.143-109.714-109.714v-73.143h-585.143v73.143c0 60.571-49.143 109.714-109.714 109.714s-109.714-49.143-109.714-109.714v-73.143h-54.857c-10.286 0-18.286-8-18.286-18.286v-219.429c0-70.857 57.143-128 128-128h16l60-239.429c17.714-72 87.429-126.286 161.714-126.286h438.857c74.286 0 144 54.286 161.714 126.286l60 239.429h16c70.857 0 128 57.143 128 128z"></path>
                  </svg>
                  <span className="details-text07">{props.cars}</span>
                </div>
                <div className="details-container6">
                  <svg viewBox="0 0 1024 1024" className="details-icon16">
                    <path d="M598 234q0-44 31-75t75-31 75 31 31 75-31 76-75 32-75-32-31-76zM370 512q-24 0-50-16-8-6-32-16l138-138-42-44q-64-64-170-64v-106q82 0 134 19t100 67l274 272q-12 8-18 10-26 16-50 16-22 0-48-16-44-26-94-26t-94 26q-26 16-48 16zM938 704q-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28v-86q26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14v86zM938 896q-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28t-94-28q-22-14-48-14-28 0-50 14-46 28-92 28v-86q26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28t94 28q22 14 48 14 28 0 50-14 46-28 92-28 48 0 94 28 22 14 48 14v86z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 804.5714285714286 1024"
                    className="details-icon18"
                  >
                    <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
                  </svg>
                </div>
                <div className="details-container7">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="details-icon20"
                  >
                    <path d="M859.429 841.143c0 20-16.571 36.571-36.571 36.571h-264c1.714 36.571 6.286 74.857 6.286 112 0 18.857-15.429 34.286-34.857 34.286h-182.857c-19.429 0-34.857-15.429-34.857-34.286 0-37.143 4.571-75.429 6.286-112h-264c-20 0-36.571-16.571-36.571-36.571 0-9.714 4-18.857 10.857-25.714l229.714-230.286h-130.857c-20 0-36.571-16.571-36.571-36.571 0-9.714 4-18.857 10.857-25.714l229.714-230.286h-112.571c-20 0-36.571-16.571-36.571-36.571 0-9.714 4-18.857 10.857-25.714l219.429-219.429c6.857-6.857 16-10.857 25.714-10.857s18.857 4 25.714 10.857l219.429 219.429c6.857 6.857 10.857 16 10.857 25.714 0 20-16.571 36.571-36.571 36.571h-112.571l229.714 230.286c6.857 6.857 10.857 16 10.857 25.714 0 20-16.571 36.571-36.571 36.571h-130.857l229.714 230.286c6.857 6.857 10.857 16 10.857 25.714z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="details-icon22">
                    <path d="M954.857 323.429c0 14.286-5.714 28.571-16 38.857l-491.429 491.429c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-284.571-284.571c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168.571 374.857-375.429c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="details-separator"></div>
            <div className="details-ownership">
              <span className="details-text08">Propriétaire</span>
              <span className="details-text09">{props.ownership}</span>
            </div>
            <div className="details-separator1"></div>
            <div className="details-price">
              <span className="details-text10">Fourchette</span>
              <span className="details-text11">{props.price}</span>
            </div>
            <div className="details-separator2"></div>
            <span className="details-text12">Demandez un devis précis</span>
            <div className="details-container8">
              <input
                type="text"
                placeholder="Email ici"
                className="details-textinput input"
              />
              <button className="details-button button">
                <span className="details-text13">
                  <span>Demander</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//TODO Implement missing data types

Details.defaultProps = {
  area: "DEFAULT",
  baths: "DEFAULT",
  ownership: "DEFAULT",
  title: "DEFAULT",
  beds: "DEFAULT",
  cars: "DEFAULT",
  description: "DEFAULT:",
  quote: "DEFAULT",
  location: "DEFAULT",
  price: "DEFAULT",
  range: "DEFAULT",
  body: "DEFAULT",
  closeDetails: "DEFAULT",
};

Details.propTypes = {
  area: PropTypes.string,
  baths: PropTypes.string,
  ownership: PropTypes.string,
  title: PropTypes.string,
  beds: PropTypes.string,
  cars: PropTypes.string,
  description: PropTypes.string,
  quote: PropTypes.string,
  location: PropTypes.string,
  price: PropTypes.string,
  range: PropTypes.string,
  body: PropTypes.string,
  closeDetails: PropTypes.func,
};

export default Details;
