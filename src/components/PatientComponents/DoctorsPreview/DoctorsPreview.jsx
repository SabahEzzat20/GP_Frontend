import React, { useState ,useEffect} from 'react';
import Carousel from 'react-elastic-carousel';
import DoctorPreview from '../DoctorPreivew/DoctorPreview';
import './DoctorsPreview.scss';
import Box from '@mui/material/Box';
import {getAuthenticatedUser} from '../../../Helper/Storage';
import axios from 'axios';
import Loading from '../../../shared/Loading';

const transformData = (data) => {
    return data.map(item => {
        const transformedAppointments = item.appointments.reduce((acc, curr) => {
            const dayIndex = acc.findIndex(a => a.day === curr.day);
            if (dayIndex > -1) {
                acc[dayIndex].times.push({
                    startTime: curr.startTime,
                    endTime: curr.endTime,
                    status: curr.status,
                    id: curr.id
                });
            } else {
                acc.push({
                    day: curr.day,
                    times: [{
                        startTime: curr.startTime,
                        endTime: curr.endTime,
                        status: curr.status,
                        id: curr.id
                    }]
                });
            }
            return acc;
        }, []);

        return {
            ...item,
            appointments: transformedAppointments
        };
    });
};

const DoctorsPreview = () => {
    const [reservations, setReservations] = useState([]);
    const userToken = getAuthenticatedUser();
    const refreshToken = userToken.refreshToken;
    const [data,setData] = useState([{
        loading: false,
        result: [],
        err: ''
    }])
    useEffect(() => {
        setData({ ...data, loading: true })
        axios.get('http://localhost:8070/patient/doctorPreview', {
                headers: {
                    'Authorization': `Bearer ${refreshToken}`
                }
        })
            .then((response) => {
                const transformedResult = transformData(response.data);
                setData({ ...data, loading: false, result: transformedResult, err: '' })
                console.log(transformedResult)
        })
            .catch((error) => {
            setData({...data,loading:false,err:'failed to load data'})
            })
        
    }, []);
    // const fetchReservationsData = async () => {
    //     try {
    //         // Make GET request to fetch reservations data using Axios
    //         const response = await axios.get('http://localhost:8070/patient/getAllAppointments', {
    //             headers: {
    //                 'Authorization': `Bearer ${refreshToken}`
    //             }
    //         });
    //         const data = response.data;
    //         // Merge reservations by doctorId and day
    //         const mergedReservations = mergeReservations(data);
    //         // Update state with merged reservations
    //         setReservations(mergedReservations);
    //     } catch (error) {
    //         console.error('Error fetching reservations data:', error);
    //     }
    // };
    // // Function to merge reservations based on doctorId and day
    // const mergeReservations = (reservationsData) => {
    //     const mergedReservations = {};
    //     // Iterate over reservations data
    //     reservationsData.forEach(reservation => {
    //         const { doctorId, doctorName, doctorDescription, day, startTime } = reservation;
    //         // Check if the reservation's doctorId already exists in mergedReservations
    //         if (!mergedReservations[doctorId]) {
    //             // If not, initialize a new object for the doctorId
    //             mergedReservations[doctorId] = {
    //                 id: reservation.id,
    //                 doctorId: doctorId,
    //                 doctorName: doctorName,
    //                 status: reservation.status,
    //                 doctorDescription: doctorDescription,
    //                 Appointments: []
    //             };
    //         }
    //         // Check if the reservation's day already exists in the doctor's Appointments
    //         const appointmentIndex = mergedReservations[doctorId].Appointments.findIndex(appointment => appointment.day === day);
    //         if (appointmentIndex !== -1) {
    //             // If day already exists, add the startTime to existing day
    //             mergedReservations[doctorId].Appointments[appointmentIndex].startTimes.push(startTime);
    //         } else {
    //             // If day doesn't exist, create a new day object with the startTime
    //             mergedReservations[doctorId].Appointments.push({
    //                 day: day,
    //                 startTimes: [startTime]
    //             });
    //         }
    //     });
    //     // Convert mergedReservations object to an array
    //     const mergedReservationsArray = Object.values(mergedReservations);
    //     return mergedReservationsArray;
    // };
    // console.log(reservations)
    
    return (
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',paddingLeft:'250px',paddingRight:'250px',paddingTop:'10px',color:'red'}}>
            <Carousel
                className="carousel"
                sx={{
                    width: '100%', // Set the width to 100%
                    maxWidth: '1200px', // Set a maximum width
                }}>
                {data.result && data.result.length > 0 ? (
                    data.result.map((doctor) => (
                        <DoctorPreview key={doctor.id} doctor={doctor} />
                    ))
                ) : (
                    <Loading/>
                )}
            </Carousel>
        </Box>
    );
};

export default DoctorsPreview;

