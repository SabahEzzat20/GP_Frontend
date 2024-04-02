import React, { useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { Link, NavLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import './RightSideProfile.scss';
import Divider from '@mui/material/Divider';
const RightSideProfile = () => {
    const [currentRoute, setCurrentRoute] = useState('Edit Profile');
    const profileRoutes = [
        {
            id: 1,
            route: 'Edit Profile',
            path: '/patientprofile/Editprofile'
        },
        {
            id: 2,
            route: 'History',
            path: '/patientprofile/patient-history'
        },
        {
            id: 3,
            route: 'Appointments',
            path: '/patientprofile/patient-reserved-appointment'
        },
    ]
    const handleChange = (route) => {
        setCurrentRoute(route);
    }
    return (
        <div>
            <div className="breadcrumbs">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link to={'/patient/homepage'}>Home</Link>
                    <Typography color="text.primary">Profile</Typography>
                    <Typography color="text.primary">{currentRoute }</Typography>
                </Breadcrumbs>
            </div>
            <Stack direction='row' spacing={2} className="routes-stack">
                {
                    profileRoutes.map((subpage) => (
                        <div className="subpage">
                            <NavLink to={subpage.path} key={subpage.route}  className='profile-route' activeClassName='active' onClick={()=>handleChange(subpage.route)}>
                                {subpage.route}
                            </NavLink>
                        </div>
                    ))
                }
            </Stack>
            <Divider />
        </div>
    );
};

export default RightSideProfile;