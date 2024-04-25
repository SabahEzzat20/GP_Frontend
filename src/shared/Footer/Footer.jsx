import React from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import CopyrightIcon from '@mui/icons-material/Copyright';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import { ImFacebook } from "react-icons/im";
import './Footer.scss'
import { PiCopyrightLight } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import Fab from '@mui/material/Fab';
import { Link } from 'react-router-dom';
import { TbLineScan } from "react-icons/tb";
import { RiBodyScanFill } from "react-icons/ri";
import { BiLogoTelegram } from "react-icons/bi";
import { FaUserDoctor } from "react-icons/fa6";
import Grid from '@mui/material/Grid';
const Footer = () => {
    return (
        <div className='footer-container'>
            <Grid container xs={12} sm={12} md={12} lg={12} xl={12} spacing={5} >
                <Grid container xs={12} sm={12} md={12} lg={12} xl={12} pt={7} pl={5} spacing={5}>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                        <div className="footer-title">Orthopedista</div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                        <Stack direction='column' spacing={1}>
                            <div className="footer-highlights">Contact us</div>
                            <div className='highlights-details'>
                                <Link to={'/contact'}>
                                    <Stack spacing={1} direction='row'>
                                        <div className='mail-icon'><BiLogoTelegram /></div>
                                        <p>Via Website</p>
                                    </Stack>
                                </Link>
                            </div>
                            <div className='highlights-details'>
                                <Link to={'mailto:orthopedistawebsite@gmail.com'}>
                                    <Stack spacing={1} direction='row'>
                                        <div className='mail-icon'><MdEmail /></div>
                                        <p>orthopedistawebsite@gmail.com</p>
                                    </Stack>
                                </Link>
                            </div>
                            <Stack direction='row' spacing={3}>
                                <Fab size="small" color="dark" aria-label="add" className='add-app-btn'>
                                    <ImFacebook />
                                </Fab>
                                <Fab size="small" color="dark" aria-label="add" className='add-app-btn'>
                                    <InstagramIcon />
                                </Fab>
                                <Fab size="small" color="dark" aria-label="add" className='add-app-btn'>
                                    <XIcon />
                                </Fab>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                    <Stack direction='column' spacing={1}>
                        <div className="footer-highlights">About</div>
                        <div className='highlights-details'>
                            Our mission is to easily scan your x-ray as fast as possible
                            , <br /> we also provide online diagnosis with proffesionel doctors.
                        </div>
                    </Stack>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                        <Stack direction='column' spacing={1}>
                            <div className="footer-highlights">Services</div>
                            <div className='highlights-details'>
                                <Stack direction='column' spacing={1}>
                                    <Link to={'/patient/uploadXRay'}>
                                        <Stack spacing={1} direction='row'>
                                            <div className='mail-icon'><RiBodyScanFill /></div>
                                            <p>Bones fracture detection.</p>
                                        </Stack>
                                    </Link>
                                    <Link to={'/patient/doctors-preview'}>
                                        <Stack spacing={1} direction='row'>
                                            <div className='mail-icon'><FaUserDoctor /></div>
                                            <p>Online diagnosis with a doctor.</p>
                                        </Stack>
                                    </Link>
                                </Stack>
                            </div>
                        </Stack>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Divider variant="middle"/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className="footer-tail">2024 Orthopedista , All rights reserved<PiCopyrightLight /></div>
                </Grid>
            </Grid>
            {/* <Stack direction='column' spacing={5}>
                <div className="footer-head">
                    <Stack direction='row' spacing={10}>
                        <div className="footer-title">Orthopedista</div>
                        <div className="">
                            <Stack direction='column' spacing={2}>
                                    <div className="footer-highlights">Contact us</div>
                                    <div className='highlights-details'>
                                        <Link to={'/contact'}>
                                            <Stack spacing={1} direction='row'>
                                                <div className='mail-icon'><BiLogoTelegram /></div>
                                                <p>Via Website</p>
                                            </Stack>
                                        </Link>
                                    </div>
                                    <div className='highlights-details'>
                                        <Link to={'mailto:orthopedistawebsite@gmail.com'}>
                                            <Stack spacing={1} direction='row'>
                                                <div className='mail-icon'><MdEmail /></div>
                                                <p>orthopedistawebsite@gmail.com</p>
                                            </Stack>
                                        </Link>
                                    </div>
                                <Stack direction='row' spacing={3}>
                                    <Fab size="small" color="dark" aria-label="add" className='add-app-btn'>
                                        <ImFacebook />
                                    </Fab>
                                    <Fab size="small" color="dark" aria-label="add" className='add-app-btn'>
                                        <InstagramIcon />
                                    </Fab>
                                    <Fab size="small" color="dark" aria-label="add" className='add-app-btn'>
                                        <XIcon />
                                    </Fab>
                                </Stack>
                            </Stack>
                        </div>
                        <div className="">
                            <Stack direction='column' spacing={2}>
                                <div className="footer-highlights">About</div>
                                <div className='highlights-details'>
                                    Our mission is to easily scan your x-ray as fast as possible
                                    , <br /> we also provide online diagnosis with proffesionel doctors.
                                </div>
                            </Stack>
                        </div>
                        <div className="">
                            <Stack direction='column' spacing={2}>
                                <div className="footer-highlights">Services</div>
                                <div className='highlights-details'>
                                    <Stack direction='column' spacing={2}>
                                        <Link to={'/patient/uploadXRay'}>
                                            <Stack spacing={1} direction='row'>
                                                <div className='mail-icon'><RiBodyScanFill /></div>
                                                <p>Bones fracture detection.</p>
                                            </Stack>
                                        </Link>
                                        <Link to={'/patient/doctors-preview'}>
                                            <Stack spacing={1} direction='row'>
                                                <div className='mail-icon'><FaUserDoctor /></div>
                                                <p>Online diagnosis with a doctor.</p>
                                            </Stack>
                                        </Link>
                                    </Stack>
                                </div>
                            </Stack>
                        </div>
                    </Stack>
                </div>
                <Divider variant="middle"/>
                <div className="footer-tail">2024 Orthopedista , All rights reserved<PiCopyrightLight /></div>
            </Stack> */}
        </div>
    );
};

export default Footer;