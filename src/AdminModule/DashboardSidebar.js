import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import '../Sass/DashboardSidebar.css';
import websiteLogo from '../images/boneLogo.png'
import doctor from '../images/medical-assistance.png'
import patient from '../images/patient.png'
import appointment from '../images/medical.png'
export const DashboardSidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <div className='dashboardContainer' style={{width: isOpen ? '200px' : '45px'} }>
                <div className='dashboardHeader' onClick={toggle}>
                    <img src={websiteLogo} alt="logo" width={40} height={40} />
                    <div style={{display: isOpen ? 'block' : 'none'}}>
                        <p>Orth</p>
                    </div>
                </div>
                <div className='adminSidebarOptions' >
                    <Link to={'/viewDoctors'} >
                        <img src={doctor} alt="doctor" width={23} height={23}/>
                        <p style={{ display: isOpen ? 'block' : 'none' }}>Doctors</p>
                    </Link>
                    <Link to={'/viewPatients'} >
                        <img src={patient} alt="doctor" width={23} height={23}/>
                        <p style={{ display: isOpen ? 'block' : 'none' }}>Patients</p>
                    </Link>
                    <Link to={'/viewAppointments'} >
                        <img src={appointment} alt="doctor" width={23} height={23}/>
                        <p style={{ display: isOpen ? 'block' : 'none' }}>Appointments</p>
                    </Link>
                </div>
            </div>
        </>
    );
};