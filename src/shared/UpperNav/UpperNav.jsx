import React from 'react';
import './UpperNav.scss';
import ReservationNotification from '../ReservationNotification/ReservationNotification';
import Profile from '../Profile/Profile';

const UpperNav = () => {
    return (
        <>
            <div className="doctor-nav">
                <ReservationNotification />
                <div className="doctor-profile">
                            <Profile />
                </div>
            </div>
        </>
    );
};

export default UpperNav;