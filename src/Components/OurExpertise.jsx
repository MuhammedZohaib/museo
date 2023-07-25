import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import DynamicComponent from "./DynamicComponent";
import image1 from "/assets/Our Expertise.svg";
import image2 from "/assets/Our Expertise 2.svg";
import image3 from "/assets/Our Expertise 3.svg";
import Footer from "./Footer";

const props1 = {
  Contrast: "Our",
  heading: "Expertise",
  subHeading1: "Digital",
  nonContrast: " Marketing",
  subHeading2: "",
  text: `Fusing together a wide ramp Of in-house marketing
    capabilities, your dedicated ot PPC. SEO, trending
    and content specialists deliver an individualized strategy
    that is f aligned with your brand ethos and optimized
    for conversion, That means pur products are being
    in front of '*ople who are Boking for what
    offering and your brand integrity is protected — a win-win`,
  alt: "Our Expertise Image1",
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
  Contrast: "",
  heading: "",
  subHeading1: "Expan your brand to ",
  nonContrast: " global ",
  subHeading2: "level",
  text: `We Offer full international online
  management in key markets through in-house
  management and complementary partnerships. Our
  capabilities reach global marketplaces in the US, I-JK, EU,
  CA, UAE, MX and JP, with even more on the horizom`,
  alt: "Our Expertise Image2",
};
const props3 = {
  Contrast: "",
  heading: "",
  subHeading1: "Data ",
  nonContrast: " & ",
  subHeading2: "Technology",
  text: `Fusing together a wide Of in-house marketifY
  capabilities, your dedicated team of PPC SEO, branding
  and content specialists deliver an individualized strategy
  that is fully aligned with your brand ethos and optimized
  for conversion. That means your products are being
  plu•ed in front of people who a re looking for exactly what
  you're offering and your brand integrity is protected — a
  win-win.`,
  alt: "Our Expertise Image3",
};
const OurExpertise = () => {
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
        image={image1}
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
        image={image2}
        style1={props1.style1}
        style2={props1.style2}
        alt={props2.alt}
        reversed={true}
      ></DynamicComponent>
      <DynamicComponent
        Contrast={props3.Contrast}
        heading={props3.heading}
        text={props3.text}
        subHeading1={props3.subHeading1}
        nonContrast={props3.nonContrast}
        subHeading2={props3.subHeading2}
        image={image3}
        style1={props1.style1}
        style2={props1.style2}
        alt={props3.alt}
      ></DynamicComponent>
      <Footer></Footer>
    </div>
  );
};

export default OurExpertise;
