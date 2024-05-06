import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import DoctorPreview from '../DoctorPreivew/DoctorPreview';
import './DoctorsPreview.scss';
import doctorsData from '../../../DummyData/DoctorPreview.json';
import Box from '@mui/material/Box';
const DoctorsPreview = () => {
    return (
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',paddingLeft:'250px',paddingRight:'250px',paddingTop:'10px'}}>
            <Carousel
                className="carousel">
                {doctorsData.map((doctor) =>{
                    return <DoctorPreview key={doctor.id} doctor={doctor} />;
                })}
            </Carousel>
        </Box>
    );
};

export default DoctorsPreview;
