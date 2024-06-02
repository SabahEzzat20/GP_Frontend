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
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { getAuthenticatedUser } from '../../../Helper/Storage';
import axios from 'axios';
import { IoIosStar } from 'react-icons/io';
const DoctorPreview = ({ doctor }) => {
    const auth = getAuthenticatedUser();
    const [value, setValue] = useState('');
    const [buttonClick, setButtonClick] = useState({});
    const [continueDisabled, setContinueDisabled] = useState(true);
    const [selected, setSelected] = useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [reservation, setReservation] = useState({
        loading: false,
        err: '',
        reservationId: '',
        userId: auth.id,
        date: '',
        status: 0
    })
    function formatDate(inputDate) {
        const parsedDate = new Date(inputDate);
        const day = parsedDate.getDate();
        const month = parsedDate.getMonth() + 1; // Months are zero-based, so add 1
        const year = parsedDate.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;
        return formattedDate;
    }
        const [open, setOpen] = React.useState(false);

        const showMessage = () => {
        setOpen(true);
        };
    
        const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    
        setOpen(false);
        };
    
    const handleSelectedReservation = (id,reservationDate) => {
        console.log('reservationId : ' + id)
        setSelected(() => (reservation.reservationId === id ? !selected : selected));
        setReservation({ ...reservation, reservationId: id, date: formatDate(reservationDate)});
    }
    const MakeReservation = (e) => {
        e.preventDefault();
        console.log(reservation)
        setReservation({ ...reservation, loading: true })
        axios
            .put('http://localhost:8070/patient/add-reservation', {
                id: reservation.reservationId,
                patientUserId: reservation.userId,
                date: reservation.date,
                status: reservation.status
        },{
            headers: {
                'Authorization': `Bearer ${auth.refreshToken}`
            }
        })
        .then((response) => {
            setReservation({...reservation,loading: false });
            showMessage();
            // handleOpenEditProfile();
            console.log('reservated successfully!');
        })
        .catch((error) => {
            setReservation({ ...reservation, loading: false})
            console.log('failed to reserve an appointment'+error);
        });
    }
    const printNext10Dates = () =>{
        const today = new Date();
        const dates = [];
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        for (let i = 0; i < 10; i++) {
            const nextDate = new Date(today);
            nextDate.setDate(today.getDate() + i);
            dates.push({
                date: nextDate.toDateString(),
                dayName: dayNames[nextDate.getDay()],
            });
        }
        return dates;
    }
    // console.log(printNext10Dates())
    const Dates = printNext10Dates();
    return (
        <div className='doctor-preview-container'>
            <div className="doctor-identification">
                <Stack direction="row" spacing={2}>
                    <Avatar alt={doctor.doctorName} />
                    <div className="doctor-info">
                        <Stack direction="column" spacing={0.5}>
                            <p className='doctor-name'>Dr.{doctor.doctorName}</p>
                            <p className="expertise">{doctor.description}</p>
                            {/* <p className="expertise">
                                <Rating name="read-only" value={value} readOnly />
                            </p> */}
                            <p className="expertise"><IoIosStar/> not rated yet</p>
                        </Stack>
                    </div>
                </Stack>
            </div>
            <div className="App-cont">
                <Box sx={{ maxWidth: { xs: '320px', sm: '480px' ,md:'500px',lg:'480px',xl:'480px'}, height:'150px'}} className="appointments-box">
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList variant="scrollable" scrollButtons="auto" value={value} onChange={handleChange}>
                                {Dates.map((appointment) => (
                                    <Tab key={appointment.date} label={appointment.date} value={appointment.date} />
                                ))}
                            </TabList>
                        </Box>
                        {Dates.map((date) => (
                            <TabPanel key={date.date} value={date.date}>
                                {doctor.appointments
                                    .filter(appointment => appointment.day === date.dayName).length > 0 ? (
                                    doctor.appointments
                                        .filter(appointment => appointment.day === date.dayName)
                                        .map((appointment, index) => (
                                            <div key={index}>
                                                {appointment.times.map((time) => (
                                                    <Button key={time.id} variant={selected ? 'contain' : 'outlined'} className='hour' onClick={() => handleSelectedReservation(time.id, date.date)}>{time.startTime}</Button>
                                                ))}
                                            </div>
                                        ))
                                ) : (
                                    <p>There are no appointments today</p>
                                )}
                            </TabPanel>
                        ))}
                    </TabContext>
                </Box>
            </div>

            <Box sx={{display:'flex',alignItems:'center',justifyContent:'end',marginTop:'10px'}}>
                <Button variant="contained" disabled={!selected} onClick={MakeReservation}>
                    <Link style={{textDecoration:'none',color:'white'}}>
                        continue
                    </Link>
                </Button>
            </Box>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
                >
                Appointment reserved successfully!
                </Alert>
            </Snackbar>
        </div>
    );
};

export default DoctorPreview;