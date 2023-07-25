import React, { useRef } from "react";
import { MdOutlineSegment } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";
import "../StyleSheets/Navbar.css";
import { Link } from "react-router-dom";

const style = {
  color: "#FF725E",
  fontSize: "2.5rem",
  transform: "rotate(180)",
};

const Navbar = () => {
  const openNav = useRef(null);
  const close = useRef(null);
  const container = useRef(null);
  const navBtn = useRef(null);

  const NavbarToggle = () => {
    close.current.classList.toggle("show");
    openNav.current.classList.toggle("hide");
    container.current.classList.toggle("show");
  };

  return (
    <div className="main">
      <h2 className="logo">MUSEO</h2>
      <div className="mainNav-Container">
        <button className="nav-btn" onClick={NavbarToggle} ref={navBtn}>
          <div className="nav-open" ref={openNav}>
            <MdOutlineSegment style={style}></MdOutlineSegment>
          </div>
          <div className="nav-close" ref={close}>
            <GrFormClose style={style}></GrFormClose>
          </div>
        </button>
        <div className="navLinks" ref={container}>
          <Link to="/museo/">Home</Link>
          <Link to="/ourExpertise/">Our Expertise</Link>
          <Link to="/company/">Company</Link>
          <Link to="/contact/">Contact Us</Link>
          <button className="nav-CTA">Get in Touch</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
