import React, { useRef } from "react";
import emailjs from "@emailjs/browser";  
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useMediaQuery } from '@mui/material';
import contactImage from '../../../images/Sent Message-bro.png'


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

  // Use Media Query hook to check screen size
  const isMediumOrSmaller = useMediaQuery('(max-width: 960px)');

  return (
    <Container>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Link className="back-to-home-from-contact" to={'/patient/homepage'}>
            <FaHome />
          </Link>
        </Grid>
        {/* Conditionally render the image based on screen size */}
        {!isMediumOrSmaller && (
          <Grid item xs={12} md={6}>
            <img src={contactImage} alt="contactus" style={{ width: '100%', height: 'auto' }} />
          </Grid>
        )}
        <Grid item xs={12} md={6}>
          <div className="cntct-form">
            <h1 className="title">Contact us</h1>
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              {/* Your form content goes here */}
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
