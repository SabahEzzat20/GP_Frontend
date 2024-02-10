import { Avatar } from '@mui/material';
import React from 'react';
import sabah from '../images/saboha.jpeg';
import '../Sass/ReservationNotification.scss';
const ReservationNotification = () => {
    return (
        <div className='reservation-notification'>
            <Avatar alt="Sabah hassan" src={sabah} />
            <div className="patient-details">
                <p>sabah hassan</p>
                <p>date: 13/4/2024 , time: 10 a.m</p>
            </div>
        </div>
    );
};

export default ReservationNotification;