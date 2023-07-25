import React from "react";
import CSS from "../StyleSheets/Company.module.css";

const Team = (props) => {
  return (
    <div className={CSS.main}>
      <img
        src={props.desktop}
        alt="Employee Profile"
        srcSet={`${props.mobile}+" 400w" ${props.desktop}+" 1024w"`}
      />
      <p>{props.designation}</p>
      <h2>{props.name}</h2>
    </div>
  );
};

export default Team;
