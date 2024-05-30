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
    const printNext10Dates = () =>{
        const today = new Date();
        const dates = [];
    
        // Loop to get next 10 dates
        for (let i = 0; i < 10; i++) {
            const nextDate = new Date(today);
            nextDate.setDate(today.getDate() + i);
            dates.push(nextDate.toDateString());
        }
    
        // Print the dates
        console.log("Next 10 dates:");
        dates.forEach(date => console.log(date));
    }
    printNext10Dates();
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
                <Box sx={{ maxWidth: { xs: '320px', sm: '480px' ,md:'500px',lg:'480px',xl:'480px'}, height:'150px'}} className="appointments-box">
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList variant="scrollable" scrollButtons="auto" value={value} onChange={handleChange}>
                                {doctor.Appointments.map((appointment) => (
                                    <Tab key={appointment.day} label={appointment.day} value={appointment.day} />
                                ))}
                            </TabList>
                        </Box>
                        {doctor.Appointments.map((appointment, index) => (
                            <TabPanel key={index} value={appointment.day}>
                                {appointment.startTimes.map((time, timeIndex) => (
                                    <Button key={timeIndex} variant='outlined' className='hour'>{time}</Button>
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