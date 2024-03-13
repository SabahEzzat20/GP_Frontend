import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss'
import { FaBars} from 'react-icons/fa';
import { doctorRoutes } from '../../DummyData/doctorRoutes';
import { adminRoutes } from '../../DummyData/adminRoutes'


const Sidebar = (props) => {
    const {role , doctorRole} = props;
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <div className="main-container">
                <motion.div animate={{ width: isOpen? '220px' : '55px'}} className='sidebar'>
                    <section className='routes'>
                        <div className="top_section">
                            <AnimatePresence>
                                {isOpen &&  <motion.h1 className="logo">orthopedista</motion.h1>}
                            </AnimatePresence>
                            <div className="bars">
                                <FaBars onClick={toggle}/>
                            </div>
                        </div>
                        {role === 1?
                            <>
                                {adminRoutes.map((route) => (
                                    
                                        <NavLink to={route.path} key={route.name} className="link">
                                            <div className="icon">{route.icon}</div>
                                            <AnimatePresence>
                                                {isOpen && <motion.div className="link_text">{route.name}</motion.div>}
                                            </AnimatePresence>
                                        </NavLink>
                                    
                                ))}
                            </>
                            :
                            doctorRoutes.map((doctorRoute) => (
                                <NavLink to={doctorRoute.path} key={doctorRoute.name} className="link" activeClassName='active'>
                                    <div className="icon">{doctorRoute.icon}</div>
                                    <AnimatePresence>
                                        {isOpen && <motion.div className="link_text">{doctorRoute.name}</motion.div>}
                                    </AnimatePresence>
                                </NavLink>
                            ))
                        }
                        
                    </section>
                </motion.div>
                <main></main>
            </div>
        </>
    );
};

export default Sidebar;