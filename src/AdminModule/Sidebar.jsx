import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import '../Sass/Sidebar.scss'
import doctor from '../images/medical-assistance.png'
import patient from '../images/patient.png'
import appointment from '../images/medical.png'
import { FaBars} from 'react-icons/fa';
import { RiLogoutCircleLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export const role = 2;
const adminRoutes= [
    {
        path: '/viewDoctors',
        name: "doctors",
        icon: <img src={doctor} alt="doctor" width={25} height={25}/>
    },
    {
        path: '/viewPatients',
        name: "patients",
        icon: <img src={patient} alt="patient" width={25} height={25}/>
    },
    {
        path: '/viewAppointments',
        name: "appointments",
        icon: <img src={appointment} alt="appointment" width={25} height={25}/>
    },
];
const doctorRoutes= [
    {
        path: '/viewDoctorAppointments',
        name: "appointments",
        icon: <img src={doctor} alt="doctor" width={25} height={25}/>
    },
    {
        path: '/viewPatientsReservations',
        name: "reservations",
        icon: <img src={patient} alt="patient" width={25} height={25}/>
    }
];
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <div className="main-container">
                <motion.div animate={{ width: isOpen? '220px' : '55px'}} className='sidebar'>
                    <section className='routes'>
                        <div className="top_section">
                            <div className="bars">
                                <FaBars onClick={toggle}/>
                            </div>
                            <AnimatePresence>
                                {isOpen &&  <motion.h1 className="logo">orth</motion.h1>}
                            </AnimatePresence>
                        </div>
                        {role === 1 ?
                            adminRoutes.map((route) => (
                                <>
                                    <NavLink to={route.path} key={route.name} className="link" activeClassName='active'>
                                        <div className="icon">{route.icon}</div>
                                        <AnimatePresence>
                                            {isOpen && <motion.div className="link_text">{route.name}</motion.div>}
                                        </AnimatePresence>
                                    </NavLink>
                                    <div className="logoutandprofilecontainer">
                                        <NavLink className='profile last'>
                                            <div className='profile-icon'>
                                                <CgProfile/>
                                            </div>
                                            <AnimatePresence>
                                                    {isOpen && <motion.div className='profile-name'>profile</motion.div>}
                                            </AnimatePresence>
                                            
                                        </NavLink>
                                        <NavLink  className='logout last'>
                                            <div className='logout-icon'>
                                                <RiLogoutCircleLine/>
                                            </div>
                                            <AnimatePresence>
                                                    {isOpen && <motion.div className='logout-name'>logout</motion.div>}
                                            </AnimatePresence>
                                        </NavLink>
                                        </div>
                                    </>
                            ))
                            :
                            doctorRoutes.map((doctorRoute) => (
                                <NavLink to={doctorRoute.path} key={doctorRoute.name} className="link" activeClassName = 'active'>
                                    <div className="icon">{doctorRoute.icon}</div>
                                    <AnimatePresence>
                                        {isOpen && <motion.div className="link_text">{doctorRoute.name}</motion.div>}
                                    </AnimatePresence>
                                </NavLink>
                            ))
                        }
                        
                    </section>
                </motion.div>
                <main>
                
                </main>
            </div>
        </>
    );
};

export default Sidebar;