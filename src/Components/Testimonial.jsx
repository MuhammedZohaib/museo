import React from "react";
import testmonialCss from "../StyleSheets/Testimonial.module.css";
import DynamicTestimonial from "./DynamicTestimonial";
import img1 from "/assets/emc-corporation-logo.svg";
import img2 from "/assets/ogura-clutch.svg";
import img3 from "/assets/veolia.svg";

const style = {
  color: "#ff725e",
};

const props = {
  text: `As a beauty brand passionate about clean products and mindful practices
    we need a partner who would authentically represent. Fortress Brand was able
    to resolve our online marketplace concerns and grow our sales while staying true
    to our mission and goals`,
};

const Testimonial = () => {
  return (
    <div className={testmonialCss.main}>
      <h1>
        <span style={style}>Testi</span>monial
      </h1>
      <div className={testmonialCss.mainContainer}>
        <DynamicTestimonial text={props.text} image={img1}></DynamicTestimonial>
        <DynamicTestimonial text={props.text} image={img2}></DynamicTestimonial>
        <DynamicTestimonial text={props.text} image={img3}></DynamicTestimonial>
      </div>
    </div>
  );
};

export default Testimonial;
