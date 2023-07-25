import React from "react";
import CSS from "../StyleSheets/DynamicTestimonial.module.css";
import img from "/assets/quote.svg";

const DynamicTestimonial = (props) => {
  return (
    <div className={CSS.mainContainer}>
      <img
        src={props.image}
        className={CSS.logo}
        alt="Testimonial Organization"
      />
      <img className={CSS.quote} src={img} alt="quote symbol" />
      <p className={CSS.text}>{props.text}</p>
    </div>
  );
};

export default DynamicTestimonial;
