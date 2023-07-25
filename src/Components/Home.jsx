import React from "react";

import DynamicComponent from "./DynamicComponent";
import Header from "./Header";
import MainSection from "./MainSection";
import Navbar from "./Navbar";

import aboutImage from "/assets/About Museo.svg";
import whyImage from "/assets/Why Museo.svg";
import whyImage2 from "/assets/Why Museo 2.svg";
import Partners from "./Partners";
import Testimonial from "./Testimonial";
import ContactUs from "./ContactUs";
import ContactUsImage from "/assets/Contact Us.svg";
import Footer from "./Footer.jsx";

const aboutUsProps = {
  Contrast: "About",
  heading: "Us",
  subHeading1: "Global Online Marketplace",
  nonContrast: " Agency",
  subHeading2: "",
  text: `Fortress brand represents acclaimed beauty, health and wellness
  brands on online marketplaces. With nearly a decade in the business
  and 45 exclusive partnerships with names like Glow Recipe, Youth to
  the people and HUM nutrition, our core strengths are channel
  control, protecting brand integrity, and driving growth through
  online channels.`,
  alt: "About Us Image",
  style: {
    color: "#cc452c",
    zIndex: 99,
  },
};
const chooseUs = {
  Contrast: "Why",
  heading: "Museo ?",
  subHeading1: "We make it",
  nonContrast: " easy ",
  subHeading2: "for you",
  text: `With two management models to choose from, you can select the marketplace management that works for you and your brand. Either 
  way you'll get full benefits of a collaborative partnership with us while we handle everything us.
  `,
  alt: "Why Choose Us Image",
  style: {
    color: "#000",
    zIndex: 99,
  },
};

const Slogan = {
  Contrast: "",
  heading: "",
  subHeading1: "Protect, Progress",
  nonContrast: " and ",
  subHeading2: "growth",
  text: `Our partnership lets you take back control of your brand on online marketplaces and have it reach its full potential through
  reseller control, brand strategy, performance, marketing, SEO, PPC, content, legal, logistics and data technology with our
  proprietary real time client dashboard.

  `,
  alt: "Why Choose Us Image 2",
  style: {
    color: "#000",
    zIndex: 99,
  },
};

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <MainSection></MainSection>
      <DynamicComponent
        Contrast={aboutUsProps.Contrast}
        heading={aboutUsProps.heading}
        text={aboutUsProps.text}
        subHeading1={aboutUsProps.subHeading1}
        nonContrast={aboutUsProps.nonContrast}
        subHeading2={aboutUsProps.subHeading2}
        image={aboutImage}
        style1={aboutUsProps.style}
        style2={chooseUs.style}
        alt={aboutUsProps.alt}
        reversed={true}
      ></DynamicComponent>
      <DynamicComponent
        Contrast={chooseUs.Contrast}
        heading={chooseUs.heading}
        subHeading1={chooseUs.subHeading1}
        nonContrast={chooseUs.nonContrast}
        subHeading2={chooseUs.subHeading2}
        style1={aboutUsProps.style}
        style2={chooseUs.style}
        text={chooseUs.text}
        image={whyImage}
        alt={chooseUs.alt}
      ></DynamicComponent>
      <DynamicComponent
        Contrast={Slogan.Contrast}
        heading={Slogan.heading}
        subHeading1={Slogan.subHeading1}
        nonContrast={Slogan.nonContrast}
        subHeading2={Slogan.subHeading2}
        style1={aboutUsProps.style}
        style2={chooseUs.style}
        text={Slogan.text}
        image={whyImage2}
        alt={Slogan.alt}
        reversed={true}
      ></DynamicComponent>
      <Partners></Partners>
      <Testimonial></Testimonial>
      <ContactUs image={ContactUsImage} alt={`contact Us Image`}></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
