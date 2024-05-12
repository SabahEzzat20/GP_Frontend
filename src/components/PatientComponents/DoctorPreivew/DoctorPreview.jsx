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
    const [value, setValue] = useState(doctor.Appointments.length > 0 ? doctor.Appointments[0].day : '');
    const [buttonClick, setButtonClick] = useState({});
    const [continueDisabled, setContinueDisabled] = useState(true);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    // const handleClick = (appointmentId, timeId) => {
    //     setButtonClick(prevState => ({
    //         [appointmentId]: {
    //             [timeId]: !prevState[appointmentId]?.[timeId] || prevState[appointmentId][timeId] === 'outlined' ? 'contained' : 'outlined'
    //         }
    //     }));
    //     setContinueDisabled(false); // Enable the continue button when  "hour" button is clicked
    // };
    return (
        <div className='doctor-preview-container'>
            <div className="doctor-identification">
                <Stack direction="row" spacing={2}>
                    <Avatar alt={doctor.doctorName} />
                    <div className="doctor-info">
                        <Stack direction="column" spacing={0.5}>
                            <p className='doctor-name'>Dr.{doctor.doctorName}</p>
                            <p className="expertise">{doctor.doctorDescription}</p>
                        </Stack>
                    </div>
                </Stack>
            </div>
            <div className="App-cont">
                <Box sx={{ maxWidth: { xs: '320px', sm: '480px' ,md:'500px',lg:'480px',xl:'480px'},height:'150px'}} className="appointments-box">
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} variant="scrollable" scrollButtons="auto">
                                {doctor.Appointments.map((appointment) => (
                                    <Tab key={appointment.day} label={appointment.day} value={appointment.day} />
                                ))}
                            </TabList>
                        </Box>
                        {doctor.Appointments.map((appointment,index) => (
                            <TabPanel key={index} value={value}>
                            {appointment.startTimes.map((time) => (
                                <Button  variant='outlined' className='hour'>{time}</Button>
                            ))}
                            </TabPanel>
                        ))}
                    </TabContext>
                </Box>
            </div>
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'end',marginTop:'10px'}}>
                <Button variant="contained" disabled={continueDisabled}>
                    <Link to="/patient/BigForm" style={{textDecoration:'none',color:'white'}}>
                        continue
                    </Link>
                </Button>
            </Box>
        </div>
    );
};

export default DoctorPreview;
