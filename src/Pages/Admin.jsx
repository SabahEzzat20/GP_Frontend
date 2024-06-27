import React from 'react';
import Sidebar from '../shared/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom';
import UpperNav from '../shared/UpperNav/UpperNav';
import '../Sass/Admin.scss'
const Admin = () => {
    const role = 1;
    return (
        <div className='Admin'>
            <Sidebar role={role} />
            <div className="right-side">
                {/* <UpperNav /> */}
                <Outlet />
            </div>
        </div>
    );
};

export default Admin;