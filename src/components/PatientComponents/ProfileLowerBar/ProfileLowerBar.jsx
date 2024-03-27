import React from 'react';
import RightSideProfile from '../RightSideProfile/RightSideProfile';
import { Outlet } from 'react-router-dom';

const ProfileLowerBar = () => {
    return (
        <div className='rightsideprofile'>
            <RightSideProfile />
            <Outlet />
        </div>
    );
};

export default ProfileLowerBar;