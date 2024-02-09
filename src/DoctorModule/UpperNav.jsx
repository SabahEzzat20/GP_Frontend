import React from 'react';
import '../Sass/UpperNav.scss';
import { IoNotifications } from "react-icons/io5";
import Avatar from '@mui/material/Avatar';
import sabah from '../images/saboha.jpeg';
import { Link } from 'react-router-dom';
const UpperNav = () => {
    return (
        <>
            <div className="doctor-nav">
                <div className="notification">
                    <Link to={'/viewNotifications'}>
                        <IoNotifications />
                    </Link>
                </div>
                <div className="doctor-profile">
                    <button className='profile-menu-btn'>
                        <Avatar alt="Sabah hassan" src={sabah} />
                        <p>sabah hassan</p>
                    </button>
                </div>
            </div>
        </>
    );
};

export default UpperNav;