import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/PatientComponents/Navbar/Navbar';
import Footer from '../shared/Footer/Footer'
import DragDrop from '../components/PatientComponents/DragDrop/DragDrop'
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