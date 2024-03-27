import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/PatientComponents/Navbar/Navbar';
import Footer from '../shared/Footer/Footer'
const Patient = () => {
    return (
        <div className='patient'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Patient;