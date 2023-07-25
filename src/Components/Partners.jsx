import React from "react";

import partnerCSS from "../StyleSheets/Partners.module.css";
import img1 from "/assets/veolia.svg";
import img2 from "/assets/nestjs.svg";
import img3 from "/assets/tesla-motors-1.svg";
import img4 from "/assets/ogura-clutch.svg";
import img5 from "/assets/composer.svg";
import img6 from "/assets/dextools.svg";
import img7 from "/assets/emc-corporation-logo.svg";
import img8 from "/assets/spotify-2.svg";

const style = {
  color: "#ff9f64",
};

const Partners = () => {
  return (
    <div className={partnerCSS.mainContainer}>
      <div className={partnerCSS.mainHeadingContainer}>
        <h2 className={partnerCSS.mainHeading}>
          <span style={style}>Our </span>
          Partners
        </h2>
        <h1 className={partnerCSS.absolute} style={style}>
          Our Partners
        </h1>
      </div>
      <div className={partnerCSS.imageContainer}>
        <div className={partnerCSS.subSection}>
          <img src={img1} alt="Partners" />
          <img src={img2} alt="Partners" />
        </div>
        <div className={partnerCSS.subSection}>
          <img src={img3} alt="Partners" />
          <img src={img4} alt="Partners" />
        </div>
        <div className={partnerCSS.subSection}>
          <img src={img5} alt="Partners" />
          <img src={img6} alt="Partners" />
        </div>
        <div className={partnerCSS.subSection}>
          <img src={img7} alt="Partners" />
          <img src={img8} alt="Partners" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
