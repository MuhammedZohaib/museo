import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import img from "/assets/Contact Us.svg";

const ContactUsPage = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <ContactUs image={img}></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default ContactUsPage;
