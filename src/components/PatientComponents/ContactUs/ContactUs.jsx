import "./ContactUs.scss";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";  
import contactImage from '../../../images/Sent Message-bro.png'
import Stack from '@mui/material/Stack'
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bv8j5i3",
        "template_q222bnf",
        form.current,
        "Wizi28BJ0wsO-yC58"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-container">
      <Stack direction='row' spacing={0}>
        <Link className="back-to-home-from-contact" to={'/patient/homepage'}>
          <FaHome />
        </Link>
        <div className="contact-img">
          <img src={contactImage} alt="contactus" />
        </div>
        <div className="cntct-form">
          <h1 className="title">Contact us</h1>
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <Stack direction='column' spacing={2}>
              <Stack direction='column' spacing={0.2}>
                <label className="contact-label">Name</label>
                <input className="contact-input" type="text" name="user_name" />
              </Stack>
              <Stack spacing={0.2} direction='column'>
                <label className="contact-label">Email</label>
                <input className="contact-input" type="email" name="user_email" />
              </Stack>
              <Stack spacing={0.2} direction='column'>
                <label className="contact-label">Message</label>
                <textarea name="message" />
              </Stack>
              <input className="submit-btn" type="submit" value="send message" />
              </Stack>
          </form>
        </div>
      </Stack>
    </div>
  );
};
export default ContactUs;

