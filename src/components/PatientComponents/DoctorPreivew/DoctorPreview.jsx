import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Button from '@mui/material/Button';
import './DoctorPreview.scss';
import { Link } from 'react-router-dom';
const DoctorPreview = ({ doctor }) => {
    const [value, setValue] = useState(1);
    const [buttonClick, setButtonClick] = useState({});
    const [continueDisabled, setContinueDisabled] = useState(true);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    const handleClick = (appointmentId, timeId) => {
        setButtonClick(prevState => ({
            [appointmentId]: {
                [timeId]: !prevState[appointmentId]?.[timeId] || prevState[appointmentId][timeId] === 'outlined' ? 'contained' : 'outlined'
            }
        }));
        setContinueDisabled(false); // Enable the continue button when  "hour" button is clicked
    };
    return (
        <div className='doctor-preview-container'>
            <div className="doctor-identification">
                <Stack direction="row" spacing={2}>
                    <Avatar alt={doctor.name} src={doctor.profilePhoto} />
                    <div className="doctor-info">
                        <Stack direction="column" spacing={0.5}>
                            <p className='doctor-name'>Dr.{doctor.name}</p>
                            <p className="expertise">consultant orthopedic and joint surgeon</p>
                        </Stack>
                    </div>
                </Stack>
            </div>
            <div className="App-cont">
                <Box sx={{ maxWidth: { xs: 320, sm: 480 }}} className="appointments-box">
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} variant="scrollable" scrollButtons="auto">
                                {doctor.Appointments.map(appointment => (
                                    <Tab key={appointment.id} label={appointment.date} value={appointment.id} />
                                ))}
                            </TabList>
                        </Box>
                        {doctor.Appointments.map(appointment => (
                            <TabPanel key={appointment.id} value={appointment.id}>
                                {appointment.time.map(time => (
                                    <Button key={time.id} variant={buttonClick[appointment.id]?.[time.id] || 'outlined'} className='hour' onClick={() => handleClick(appointment.id, time.id)}>{time.exactTime}</Button>
                                ))}
                            </TabPanel>
                        ))}
                    </TabContext>
                </Box>
            </div>
            <Link to="/patient/BigForm">
                <Button variant="contained" disabled={continueDisabled} className='continue-btn'>continue</Button>
            </Link>
        </div>
    );
};

export default DoctorPreview;
