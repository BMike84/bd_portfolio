import React, { useState, useRef } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./Footer.scss";

import "./Footer.scss";

const Footer = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { user_name, user_email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    setLoading(true);

    e.preventDefault();

    emailjs
      .sendForm(
        "service_3gaw26l",
        "template_31bbt7t",
        form.current,
        "PUrMfxdGI8-Tr0y_c"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setIsFormSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <h2 className="head-text">
        Have Any <span>Questions?</span>
      </h2>
      <h2 className="head-text">
        <span>Contact</span> Me<span>!</span>
      </h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <p className="email-icon">
            <HiOutlineMail />
          </p>
          <a href="mailto:michael@michaelbuffone.net" className="p-text">
            michael@michaelbuffone.net
          </a>
        </div>
        <div className="app__footer-card">
          <p>
            <AiFillPhone />
          </p>
          <span href="" className="p-text">
            +1 (514) 574-6006
          </span>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form className="app__footer-form app__flex" ref={form}>
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              name="user_name"
              placeholder="Your Name"
              value={user_name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              name="user_email"
              placeholder="Your Email"
              value={user_email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch.</h3>
          <h3 className="head-text">I'll get back to you within 24hrs.</h3>
        </div>
      )}
    </>
  );
};
export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__secondarybg"
);
