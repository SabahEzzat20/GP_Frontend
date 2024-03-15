import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/PatientComponents/Navbar/Navbar';

const Patient = () => {
    return (
        <div className='patient'>
           <Navbar />
            <Outlet />
        </div>
    );
};

export default Patient;