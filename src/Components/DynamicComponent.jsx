import React from "react";
import AboutCSS from "../StyleSheets/AboutSection.module.css";

const DynamicComponent = (props) => {
  return (
    <div className={AboutCSS.aboutSection}>
      <div className={AboutCSS.mainHeading}>
        <h1 className={`${AboutCSS.contrast} ${AboutCSS.absolute}`}>
          {`${props.Contrast} ${props.heading}`}
        </h1>
        <h2 className={AboutCSS.head1}>
          <span className={`${AboutCSS.contrast}`}>{props.Contrast} </span>
          {props.heading}
        </h2>
      </div>
      <div
        className={`${AboutCSS.mainDiv} ${
          props.reversed ? AboutCSS.reversed : ""
        }`}
      >
        <div className={`${props.alignmentStyle} ${AboutCSS.typo}`}>
          <h2 style={props.style1} className={AboutCSS.subHeading}>
            {props.subHeading1}
            <span style={props.style2}>{props.nonContrast} </span>
            {props.subHeading2}
          </h2>
          <div className={`${AboutCSS.aboutSectionTypo}`}>
            <p>{props.text}</p>
          </div>
          <div className={AboutCSS.CTA}>
            <button className={`${AboutCSS.button}`}>Learn More</button>
          </div>
        </div>
        <div className={`${AboutCSS.image}`}>
          <img src={props.image} alt={props.alt} />
        </div>
      </div>
    </div>
  );
};

export default DynamicComponent;
