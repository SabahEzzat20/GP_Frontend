import React, { useState ,useEffect} from 'react';
import Carousel from 'react-elastic-carousel';
import DoctorPreview from '../DoctorPreivew/DoctorPreview';
import './DoctorsPreview.scss';
import doctorsData from '../../../DummyData/DoctorPreview.json';
import Box from '@mui/material/Box';
import {getAuthenticatedUser} from '../../../Helper/Storage';
import axios from 'axios';
const DoctorsPreview = () => {
    const [reservations, setReservations] = useState([]);
    const userToken = getAuthenticatedUser();
    const refreshToken = userToken.refreshToken;
    useEffect(() => {
        // Fetch reservations data from your API
        fetchReservationsData();
        console.log(fetchReservationsData())
    }, []);
    const fetchReservationsData = async () => {
        try {
            // Make GET request to fetch reservations data using Axios
            const response = await axios.get('http://localhost:8070/patient/getAllAppointments', {
                headers: {
                    'Authorization': `Bearer ${refreshToken}`
                }
            });
            const data = response.data;
            // Merge reservations by doctorId and day
            const mergedReservations = mergeReservations(data);
            // Update state with merged reservations
            setReservations(mergedReservations);
        } catch (error) {
            console.error('Error fetching reservations data:', error);
        }
    };
    // Function to merge reservations based on doctorId and day
    const mergeReservations = (reservationsData) => {
        const mergedReservations = {};
        // Iterate over reservations data
        reservationsData.forEach(reservation => {
            const { doctorId, doctorName, doctorDescription, day, startTime } = reservation;
            // Check if the reservation's doctorId already exists in mergedReservations
            if (!mergedReservations[doctorId]) {
                // If not, initialize a new object for the doctorId
                mergedReservations[doctorId] = {
                    id: reservation.id,
                    doctorId: doctorId,
                    doctorName: doctorName,
                    status: reservation.status,
                    doctorDescription: doctorDescription,
                    Appointments: []
                };
            }
            // Check if the reservation's day already exists in the doctor's Appointments
            const appointmentIndex = mergedReservations[doctorId].Appointments.findIndex(appointment => appointment.day === day);
            if (appointmentIndex !== -1) {
                // If day already exists, add the startTime to existing day
                mergedReservations[doctorId].Appointments[appointmentIndex].startTimes.push(startTime);
            } else {
                // If day doesn't exist, create a new day object with the startTime
                mergedReservations[doctorId].Appointments.push({
                    day: day,
                    startTimes: [startTime]
                });
            }
        });
        // Convert mergedReservations object to an array
        const mergedReservationsArray = Object.values(mergedReservations);
        return mergedReservationsArray;
    };
    console.log(reservations)
    
    return (
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',paddingLeft:'250px',paddingRight:'250px',paddingTop:'10px'}}>
            <Carousel
                className="carousel">
                {reservations.map((doctor) =>{
                    return <DoctorPreview key={doctor.doctorId} doctor={doctor} />;
                })}
            </Carousel>
        </Box>
    );
};

export default DoctorsPreview;
