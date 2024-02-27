import React, { useState } from 'react';
import '../Sass/UpperNav.scss';
import { IoNotifications } from "react-icons/io5";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ReservationNotification from './ReservationNotification';
import Profile from './Profile/Profile';
import Avatar from '@mui/material/Avatar';
import sabah from '../images/saboha.jpeg';
const UpperNav = () => {
    const [isOpenNotificationBar, setIsOpenNB] = useState(false);
    const [isOpenProfileBar, setIsOpenProfileBar] = useState(false);
    const toggleNotification = () => {setIsOpenNB(!isOpenNotificationBar);}
    const toggleProfile = () => {setIsOpenProfileBar(!isOpenNotificationBar);}
    return (
        <>
            <div className="doctor-nav">
                <div className="notification">
                    <IconButton onClick={toggleNotification}>
                        <Badge color="error" size='large' badgeContent={4} max={9}>
                            <IoNotifications />
                            </Badge>
                    </IconButton>
                    <div className="notifications-body" style={{display: isOpenNotificationBar ? 'block' : 'none'}}>
                        <div className="not-title">notifications</div>
                        <div className="not-containter">
                            <ReservationNotification />
                            <ReservationNotification />
                            <ReservationNotification />
                            <ReservationNotification />
                            <ReservationNotification />
                            <ReservationNotification />
                            <ReservationNotification />
                            <ReservationNotification />
                            <ReservationNotification />
                            <ReservationNotification />
                        </div>
                    </div>
                </div>
                <div className="doctor-profile">
                    {/* <button className='profile-menu-btn' onClick={toggleProfile}>
                        <Avatar alt="Sabah hassan" src={sabah} />
                    </button> */}
                    <div className="profile-container">
                        <Profile />
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpperNav;