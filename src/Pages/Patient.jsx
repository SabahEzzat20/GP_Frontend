import React from 'react';
import { Outlet } from 'react-router-dom';
const Patient = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Patient;