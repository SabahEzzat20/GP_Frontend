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
    <Container style={{width: '100%' , height: 'auto'}}>
      <Grid container>
        <Grid item xs={3} sm={3} md={6} lg={6} xl={6} >
          <Link className="back-to-home-from-contact" to={'/patient/homepage'}>
            <FaHome />
          </Link>
        </Grid>
        <Grid item xs={9} sm={9} md={6} lg={6} xl={6} sx={{fontSize: {xs: '20px', sm: '27px', md:'27px',lg: '50px',xl: '50px'}}}>
          <h1 className="title">Contact us</h1>
        </Grid>
      </Grid>
      <Grid container >
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'flex', xl: 'flex'} }}>
          <img src={contactImage} alt="contactus" style={{ width: '100%', height: 'auto' }}/>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Form className="contact-form" ref={form} onSubmit={sendEmail}>
          <Stack direction='column' spacing={3} className="profile-details-stack">
            <Stack direction='column' spacing={0.2}>
                <Input placeholder="Name" startDecorator={<FaUser />} variant="plain" color="neutral"/>
            </Stack>
            <Stack spacing={0.2} direction='column'>
                <Input placeholder="Email" startDecorator={<MdOutlineAlternateEmail />} variant="plain" color="neutral" type="email"/>
            </Stack>
            <Stack spacing={0.2} direction='column'>
                <Input placeholder="Email" startDecorator={<MdOutlineAlternateEmail />} variant="plain" color="neutral" type="email"/>
            </Stack>
            <input className="submit-btn" type="submit" value="send message" />
          </Stack>
        </Form>
        </Grid>
      </Grid>

    </Container>
  );
};

export default ContactUs;
