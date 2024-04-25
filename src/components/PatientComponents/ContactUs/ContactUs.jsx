import React, { useRef } from "react";
import emailjs from "@emailjs/browser";  
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useMediaQuery } from '@mui/material';
import contactImage from '../../../images/Sent Message-bro.png'
import Form from "react-bootstrap/Form";
import Input from '@mui/joy/Input';
import { FaUser } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

import './ContactUs.scss';
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
    <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
      <div className="upper-contact">
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12} sx={{padding: '15px'}}>
          <Stack direction='row' spacing={3}>
            <Link className="back-to-home-from-contact" to={'/patient/homepage'}>
              <IoIosArrowBack />
            </Link>
            <h1 className="title">Contact us</h1>
          </Stack>
        </Grid>
      </div>
      <Grid container alignItems={"center"}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}
          sx={{
            padding: { 
              xs: '20px', 
              sm: '23px', 
              md: '30px', 
              lg: '30px', 
              xl: '50px' },
            marginTop: {
              xs: '20px', 
              sm: '23px', 
              md: '30px', 
              lg: '100px', 
              xl: '100px' },
            margin: {
              xs: '20px',
              sm: '20px'
            },
            boxShadow: {
              xs: '1px 1px 6px rgb(216, 216, 216);',
              sm: '1px 1px 6px rgb(216, 216, 216)',
              md: 'none',
              lg: 'none',
              xl: 'none'
            },
            borderRadius: {
              xs: '10px',
              sm: '10px'
            }
          }}>
          <Form className="contact-form" ref={form} onSubmit={sendEmail}>
            <Stack direction='column' spacing={3} className="profile-details-stack">
              <Stack direction='column' spacing={0.2}>
                  <label className="contact-label">Name</label>
                  <Input placeholder="Name" startDecorator={<FaUser />} variant="plain" color="neutral" type="text" name="user_name"/>
              </Stack>
              <Stack spacing={0.2} direction='column'>
                <label className="contact-label">Email</label>
                  <Input placeholder="Email" startDecorator={<MdOutlineAlternateEmail />} variant="plain" color="neutral" type="email" name="user_email"/>
              </Stack>
              <Stack spacing={0.2} direction='column'>
                <label className="contact-label">Message</label>
                <textarea name="message" />
              </Stack>
              <input className="submit-btn" type="submit" value="send message" />
            </Stack>
          </Form>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex'}}}>
          <img src={contactImage} alt="contactus" style={{ maxWidth: '500px', maxHeight: '500px' }}/>
        </Grid>
      </Grid>

    </Grid>
  );
};

export default ContactUs;
