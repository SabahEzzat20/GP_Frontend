import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { Link, NavLink } from 'react-router-dom';
// import EditPatientProfile from '../EditPatientProfile/EditPatientProfile';
// import PatientHistory from '../PatientHistory/PatientHistory';
// import PatientReservedAppointment from '../PatientReservedAppointment/PatientReservedAppointment';
import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import Button from '@mui/material/Button';
import './RightSideProfile.scss';
const RightSideProfile = () => {
    const profileRoutes = [
        {
            id: 1,
            route: 'Profile',
            path: '/patientprofile/Editprofile'
        },
        {
            id: 1,
            route: 'History',
            path: '/patientprofile/patient-history'
        },
        {
            id: 1,
            route: 'Appointments',
            path: '/patientprofile/patient-reserved-appointment'
        },
    ]
    return (
        <div>
            <div className="breadcrumbs">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link to={'/patient/homepage'}>Home</Link>
                    <Typography color="text.primary">Edit Profile</Typography>
                </Breadcrumbs>
            </div>
            <Stack direction='row' spacing={2} className="routes-stack">
                {
                    profileRoutes.map((subpage) => (
                        <div className="subpage">
                            <NavLink to={subpage.path} key={subpage.route}  className='profile-route' activeClassName='activate'>
                                {subpage.route}
                            </NavLink>
                        </div>
                    ))
                }
            </Stack>
        </div>
    );
};

export default RightSideProfile;