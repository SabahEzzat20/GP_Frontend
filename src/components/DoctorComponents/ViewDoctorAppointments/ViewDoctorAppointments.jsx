import React, { useEffect, useState } from 'react';
import StatisticsBar from '../StatisticsBar/StatisticsBar';
import Stack from '@mui/material/Stack';
import './ViewDoctorAppointments.scss'
import PatientQueue from '../PatientsQueue/PatientQueue.jsx';
import  Box from '@mui/material/Box';
import { getAuthenticatedUser } from '../../../Helper/Storage.jsx';
import { MdDateRange } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
import Tooltip from '@mui/material/Tooltip';
import { VscClose } from "react-icons/vsc";
import IconButton from '@mui/material/IconButton';
import axios from 'axios';
import { BsCurrencyDollar } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import UpperNav from '../../../shared/UpperNav/UpperNav.jsx';
import Loading from '../../../shared/Loading.jsx';
import NoData from '../../../images/No data-rafiki.png'
const ViewDoctorAppointments = () => {
    const [isMobile, setIsMobile] = React.useState(false);
    const auth =  getAuthenticatedUser();
    const Statistics = [
        {
            id: 1,
            title: "Patients",
            total: "1000",
            icon: <FiUsers />
        },
        {
            id: 2,
            title: "Income",
            total: "21,000",
            icon: <BsCurrencyDollar />
        }
    ]
    React.useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.matchMedia('(max-width: 768px)').matches);
        };

        // Initial check on component mount
        handleResize();

        // Add event listener for resize events
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the event listener
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);
    const [showAppointments, setShowAppointments] = useState(false);
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString('default', {month: 'long'});  
    const year = today.getFullYear();
    const formatedDate = `${day} ${month} ${year}`;
    const [appointments, setAppointments] = useState([{
        loading: false,
        result: [],
        err: ''
    }])
    useEffect(() => {
        setAppointments({ ...appointments, loading: true })
        axios
            .get(`http://localhost:8070/doctor/myAppointments/${auth.id}`, {
                headers: {
                    'Authorization': `Bearer ${auth.refreshToken}`
                }
        })
        .then((response) => {
            setAppointments({...appointments,result: response.data,loading: false})
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
            setAppointments({...appointments,loading: false,err: 'can not retrieve appointments'})
        });
    }, []);
    const DeleteReservation = (id) => {
        axios
            .delete(`http://localhost:8070/doctor/cancelAppointment/${id}`,
                {
                    headers: {
                        'Authorization': `Bearer ${auth.refreshToken}`
                    }
                }
            )
            .then((response) => {
                // showMessage();
                console.log('deleted successfully!');
            })
            .catch((err) => {
                console.log('error deleting function: ' + err);
            });
    
    }
    const [selected, setSelected] = useState(null);
    const toggle = (id) => {
        setSelected((prevId) => (prevId === id ? null : id));
    }
    return (
        appointments.loading ?
            <><Loading /></>
            :
            <>
                <UpperNav/>
                <div className='doc-app-container'> 
                    <Box sx={{display: 'flex' , justifyContent: 'space-between', alignItems: 'center',color:'rgb(87, 87, 87)',padding:'10px',paddingBottom:'10px'}}> 
                        <Stack direction='column' spacing={.4}> 
                            <Box sx={{fontSize:'27px' ,fontWeight:'600'}}>Welcome Dr.{auth.name}</Box> 
                            <Box>Have a nice day at great work!</Box> 
                        </Stack> 
                        <Box sx={{borderRadius: '5px',border: '1px solid rgb(230, 230, 230)',padding:'5px',display:'flex',alignItems:'baseline' ,justifyContent: 'space-between',color:'rgb(87, 87, 87)'}}> 
                            <Box sx={{fontSize:'20px',paddingRight:'6px'}}><MdDateRange /></Box> 
                            <Box>{formatedDate}</Box> 
                        </Box> 
                    </Box> 
                <Stack direction="row" spacing={2}> 
                    {/* {Statistics.map((statistic) => ( 
                            <StatisticsBar key={statistic.id} statistic={statistic} />
                        ))} */}
                    </Stack>
                    <Stack direction= {isMobile? "column" :"row"} spacing={isMobile? 2 : 10} >
                        <div className="patients-preview">
                            <div className="patients-details-title">Patients Reservations</div>
                            <PatientQueue />
                        </div>
                        <Box sx={{width:'500px',marginTop:'20px'}} className='patietns-preview'>
                            <div className="patients-details-title">Your Appointments</div>
                            <Box className='DocotrAppointments' >
                            {appointments.result && appointments.result.length > 0 ? (
                                    appointments.result.map((app) => (
                                        <Box key={app.id}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'rgba(105, 105, 105)' }} onClick={() => toggle(app.id)}>
                                                <span>{app.day}</span>
                                                <span className={selected === app.id ? 'rotate' : 'arrow'}><IoIosArrowForward /></span>
                                            </Box>
                                            {selected === app.id && (
                                                <Box className='app-contnr-visible'>
                                                    <Box className='app-div' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <Box>
                                                            <MdDateRange />
                                                            <span style={{ marginLeft: '5px' }}>from {app.startTime} to {app.endTime}</span>
                                                        </Box>
                                                        <Box className="cancel-appointment" onClick={() => DeleteReservation(app.id)}>
                                                            <Tooltip title="Cancel appointment">
                                                                <IconButton color="primary" size='small'>
                                                                    <VscClose />
                                                                </IconButton>
                                                            </Tooltip>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            )}
                                        </Box>
                                    ))
                                ) : (
                                    <Box sx={{textAlign:'center',color:'rgb(172, 172, 172)'}}>
                                        <img src={NoData} alt="no data" width={100} height={300} />
                                        <p>There is no appointments yet !</p>
                                    </Box>
                                )}
                                {/* <Divider/> */}
                            </Box>
                        </Box>
                    </Stack>    
                </div>
            </>
    );
};

export default ViewDoctorAppointments;
