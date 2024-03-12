import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
const Patient = () => {
    return (
        <div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Patient;