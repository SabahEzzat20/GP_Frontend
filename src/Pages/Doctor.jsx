import React from 'react';
import Sidebar from '../shared/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom';
import UpperNav from '../shared/UpperNav/UpperNav';
import ViewDoctorAppointments from '../components/DoctorComponents/ViewDoctorAppointments/ViewDoctorAppointments'
import '../Sass/Admin.scss'
const Doctor = () => {
    const role = 2;
    return (
        <div className='Admin'>
            {/* <Sidebar doctorRole={role} /> */}
            <div className="right-side">
                <UpperNav />
                {/* <Outlet /> */}
                <ViewDoctorAppointments />
            </div>
        </div>
    );
};

export default Doctor;