import React from "react";
import mob1 from "/mobile/emp1.jpg";
import mob2 from "/mobile/emp2.jpg";
import mob3 from "/mobile/emp3.jpg";
import mob4 from "/mobile/emp4.jpg";
import mob5 from "/mobile/emp5.jpg";
import mob6 from "/mobile/emp6.jpg";
import desk1 from "/desktop/emp1.jpg";
import desk2 from "/desktop/emp2.jpg";
import desk3 from "/desktop/emp3.jpg";
import desk4 from "/desktop/emp4.jpg";
import desk5 from "/desktop/emp5.jpg";
import desk6 from "/desktop/emp6.jpg";
import comp1 from "/assets/About Museo Page.svg";
import comp2 from "/assets/About Museo.svg";
import Header from "./Header";
import Navbar from "./Navbar";
import DynamicComponent from "./DynamicComponent";
import Team from "./Team";
import CSS from "../StyleSheets/OurCompanyPage.module.css";
import Footer from "./Footer";

const props1 = {
  Contrast: "Our",
  heading: "Company",
  subHeading1: "Take back the ",
  nonContrast: "Control",
  subHeading2: "",
  text: `Your brand is your life's work. You've worked too hard to
  settle for barebones listings, disorganized supply chain
  management, and dated optimization features. Our
  multifaceted, assertive and fast-acting approach regains
  and retains your brantfs authority to give you peace of
  mind while your sales multi ply.

  We love what we do. You're here because you do as well.
  Contact us about your brand' unique path to continued
  growth.`,
  alt: "Our Company Image1",
  style1: {
    color: "#cc452c",
    zIndex: 99,
  },
  style2: {
    color: "#000",
    zIndex: 99,
  },
};
const props2 = {
  Contrast: "Our",
  heading: " Team",
  subHeading1: "About our",
  nonContrast: " Amazing ",
  subHeading2: "Team",
  text: `Were able to execute our high-growth, vertically-
  integrated, shared-services strategy because of the
  diverse experience of our executive team. And with the
  support of our 1000* associates, we have the resources
  to sustain our success.`,
  alt: "Our Company Image2",
};
const emp1 = {
  name: "Sarah Johnson",
  designation: "Marketing Manager",
};

const emp2 = {
  name: "David Chen",
  designation: "Senior Software Engineer",
};

const emp3 = {
  name: "Emily Ramirez",
  designation: "Human Resources Coordinator",
};

const emp4 = {
  name: "Michael Anderson",
  designation: "Sales Representative",
};

const emp5 = {
  name: "Olive Roberts",
  designation: "Financial Analyst",
};

const emp6 = {
  name: "Benjamin Thompson",
  designation: "Operations Supervisor",
};

const OurCompany = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <DynamicComponent
        Contrast={props1.Contrast}
        heading={props1.heading}
        text={props1.text}
        subHeading1={props1.subHeading1}
        nonContrast={props1.nonContrast}
        subHeading2={props1.subHeading2}
        image={comp1}
        style1={props1.style1}
        style2={props1.style2}
        alt={props1.alt}
      ></DynamicComponent>
      <DynamicComponent
        Contrast={props2.Contrast}
        heading={props2.heading}
        text={props2.text}
        subHeading1={props2.subHeading1}
        nonContrast={props2.nonContrast}
        subHeading2={props2.subHeading2}
        image={comp2}
        style1={props1.style1}
        style2={props1.style2}
        alt={props2.alt}
      ></DynamicComponent>
      <div className={CSS.main}>
        <h2 className={CSS.mainHeading} style={props1.style1}>
          Leadership
          <span style={props1.style2}>Team </span>
        </h2>
        <div className={CSS.employeeContainer}>
          <div className={CSS.employees}>
            <Team
              mob={mob1}
              desktop={desk1}
              designation={emp1.designation}
              name={emp1.name}
            ></Team>
            <Team
              mob={mob2}
              desktop={desk2}
              designation={emp2.designation}
              name={emp2.name}
            ></Team>
          </div>
          <div className={CSS.employees}>
            <Team
              mob={mob3}
              desktop={desk3}
              designation={emp3.designation}
              name={emp3.name}
            ></Team>
            <Team
              mob={mob4}
              desktop={desk4}
              designation={emp4.designation}
              name={emp4.name}
            ></Team>
          </div>
          <div className={CSS.employees}>
            <Team
              mob={mob5}
              desktop={desk5}
              designation={emp5.designation}
              name={emp5.name}
            ></Team>
            <Team
              mob={mob6}
              desktop={desk6}
              designation={emp6.designation}
              name={emp6.name}
            ></Team>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default OurCompany;
