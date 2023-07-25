import React from "react";

import CSS from "../StyleSheets/ContactUs.module.css";

const style = {
  color: "#ff9f64",
};

const ContactUs = (props) => {
  return (
    <div className={CSS.main}>
      <h2 className={CSS.heading}>
        <span style={style}>Contact </span>Us
      </h2>
      <div className={CSS.form}>
        <form action="" className={CSS.formContainer}>
          <h2 style={style}>Get in touch</h2>
          <p>Fill in the form below to contact us</p>
          <div className={CSS.borderDiv}>
            <label htmlFor="Name">Name</label>
            <input type="text" name="Name" id="Name" />
            <label htmlFor="Email">Email</label>
            <input type="text" name="Email" id="Email" />
            <label htmlFor="Subject">Subject</label>
            <input type="text" name="Subject" id="Subject" />
            <label htmlFor="Meassage">Message</label>
            <textarea
              name="Message"
              id="Message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button type="button" className={CSS.button}>
            Submit
          </button>
        </form>
        <img src={props.image} alt="Contact US Image" className={CSS.image} />
      </div>
    </div>
  );
};

export default ContactUs;
