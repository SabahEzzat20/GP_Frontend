import "./ContactUs.scss";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";  

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
    <div className="container">
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <h1 className="title">Contact Us</h1>
        <label className="contact-label">Name</label>
        <input className="contact-input" type="text" name="user_name" />
        <label className="contact-label">Email</label>
        <input className="contact-input" type="email" name="user_email" />
        <label className="contact-label">Message</label>
        <textarea name="message" />
        <input className="contact-input" type="submit" value="Send" />
      </form>
    </div>
  );
};
export default ContactUs;

