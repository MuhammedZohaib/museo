import React from "react";
import CSS from "../StyleSheets/Footer.module.css";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter, FiLinkedin } from "react-icons/fi";
import Map from "../Components/Map";
import { Link } from "react-router-dom";

const style = {
  color: "#FF725E",
  fontSize: "2rem",
};

const Footer = () => {
  return (
    <div className={CSS.mainContainer}>
      <div className={CSS.subSection1}>
        <h2>MUSEO</h2>
        <p>
          Museo is a fully aligned agency that buys product from you directly.
          This makes us uniquely invested in your continued success. We only
          succeed if you succeed.
        </p>
        <div className={CSS.socialLinks}>
          <BsInstagram style={style} />
          <FiTwitter style={style} />
          <FiLinkedin style={style} />
        </div>
      </div>
      <div className={CSS.subSection}>
        <h3>Quick Links</h3>
        <div>
          <Link to="/">Home</Link>
          <Link to="/ourExpertise">Our Expertise</Link>
          <Link to="/company">Company</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
      <div className={CSS.subSection}>
        <h3>Expertise</h3>
        <div>
          <a href="">Marketing</a>
          <a href="">Internation</a>
          <a href="">Data & Tech</a>
        </div>
      </div>
      <div className={CSS.subSection}>
        <h3>Contact Info</h3>
        <div>
          <a href="">alizuhaib828@gmail.com</a>
          <a href="">+92 3442709695</a>
          <a href="">Lahore, Pakistan</a>
        </div>
      </div>
      <div className={CSS.subSection5}>
        <Map></Map>
        <div>
          <a href="">Terms & Conditions</a>
          <a href="">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
