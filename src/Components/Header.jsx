import React from "react";
import "../StyleSheets/Header.css";

import { FiMail } from "react-icons/fi";
import { LiaPhoneSolid } from "react-icons/lia";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter, FiLinkedin } from "react-icons/fi";

const style = {
  color: "#FF725E",
  fontSize: "2rem",
};

const Header = () => {
  return (
    <div className="siteHeader">
      <div className="contacts">
        <div className="contact">
          <FiMail style={style}></FiMail>
          <a href="test@gmail.com">test@gmail.com</a>
        </div>
        <div className="contact">
          <LiaPhoneSolid style={style}></LiaPhoneSolid>
          <p>+92 300 0000001</p>
        </div>
      </div>
      <div className="socials">
        <a href="">
          <FiFacebook style={style}></FiFacebook>
        </a>
        <a href="">
          <BsInstagram style={style}></BsInstagram>
        </a>
        <a href="">
          <FiTwitter style={style}></FiTwitter>
        </a>
        <a href="">
          <FiLinkedin style={style}></FiLinkedin>
        </a>
      </div>
    </div>
  );
};

export default Header;
