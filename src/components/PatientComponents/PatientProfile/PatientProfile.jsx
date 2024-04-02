import React from 'react';
import LeftSideProfile from '../LeftSideProfile/LeftSideProfile';
import './PatientProfile.scss'
import ProfileLowerBar from '../ProfileLowerBar/ProfileLowerBar';
const PatientProfile = () => {
    return (
        <div className='patient-profile'>
            <div className='leftsideprofile'>
                <LeftSideProfile />
            </div>
            <div className='rightsideprofile'>
                <ProfileLowerBar />
            </div>
        </div>
    );
};

export default PatientProfile;