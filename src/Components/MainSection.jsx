import React from "react";
import "../StyleSheets/MainSection.css";
import img from "/assets/Home.svg";

const MainSection = () => {
  return (
    <div className="MainSection">
      <div className="MainSection-Typos">
        <h1 className="MainHeading">
          We <span className="headingContrast">do</span> Marketplaces. you
          <span className="headingContrast"> do</span> you
        </h1>
        <p className="Slogan">
          Museo is a fully aligned agency that buys product from you directly.
          This makes us uniquely invested in your continued success. we only
          succeed if you succeed
        </p>
        <button className="Main-CTA">Get in Touch</button>
      </div>
      <div className="MainSection-Image">
        <img src={img} alt="Home Image" />
      </div>
    </div>
  );
};

export default MainSection;
