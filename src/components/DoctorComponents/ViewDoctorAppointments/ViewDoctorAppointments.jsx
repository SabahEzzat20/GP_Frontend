import React from 'react';
import StatisticsBar from '../StatisticsBar/StatisticsBar';
import { Statistics } from '../../../DummyData/Statistics.jsx';
import Stack from '@mui/material/Stack';
import './ViewDoctorAppointments.scss'
import PatientQueue from '../PatientsQueue/PatientQueue.jsx';
import NextPatientDetails from '../NextPatientDetails/NextPatientDetails.jsx';
const ViewDoctorAppointments = () => {
    const [isMobile, setIsMobile] = React.useState(false);

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
    return (
        <div className='doc-app-container'>
            <Stack direction="row" spacing={2}>
                {Statistics.map((statistic) => (
                    <StatisticsBar key={statistic.id} statistic={statistic} />
                ))}
            </Stack>
            <Stack direction= {isMobile? "column" :"row"} spacing={isMobile? 2 : 10} >
                <div className="patients-preview">
                    <div className="patients-details-title">Patients Appointments</div>
                    <PatientQueue />
                </div>
                <div className="patients-preview">
                    <div className="patients-details-title">Next Patient Details</div>
                    <NextPatientDetails />
                </div>
            </Stack>
            
        </div>
    );
};

export default ViewDoctorAppointments;
