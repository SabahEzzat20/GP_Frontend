import React from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import CopyrightIcon from '@mui/icons-material/Copyright';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import { ImFacebook } from "react-icons/im";
import './Footer.scss'
import { PiCopyrightLight } from "react-icons/pi";

import Fab from '@mui/material/Fab';
const Footer = () => {
    return (
        <div className='footer-container'>
            <Stack direction='column' spacing={5}>
                <div className="footer-head">
                    <Stack direction='row' spacing={10}>
                        <div className="footer-title">Orthopedista</div>
                        <div className="">
                            <Stack direction='column' spacing={2}>
                                <div className="footer-highlights">about</div>
                                <div className='highlights-details'>Our mission is to easily scan your x-ray as fast as possible , <br /> we also provide online diagnosis with proffesionel doctors.</div>
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
                                <div className="footer-highlights">Contact</div>
                                <div className='highlights-details'>sabahhassan@gmail.com</div>
                                <div className='highlights-details'>+201119314797</div>
                            </Stack>
                        </div>
                        <div className="">
                            <Stack direction='column' spacing={2}>
                                <div className="footer-highlights">Services</div>
                                <div className='highlights-details'>
                                    <Stack>
                                        <div>Bones fracture detection.</div>
                                        <div>Online diagnosis.</div>
                                    </Stack>
                                </div>
                            </Stack>
                        </div>
                    </Stack>
                </div>
                <Divider variant="middle"/>
                <div className="footer-tail">2024 Orthopedista , All rights reserved<PiCopyrightLight /></div>
            </Stack>
        </div>
    );
};

export default Footer;