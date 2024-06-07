import React, { useState, useEffect } from "react";
import Stack from '@mui/material/Stack';
import axios from "axios";
import { getAuthenticatedUser } from "../../../Helper/Storage";
import PatientDetailsForDoctor from '../PatientDetailsForDoctor/PatientDetailsForDoctor';
import './PatientsQueue.scss';
import NoData from '../../../images/No data-rafiki.png'
import { Box } from "@mui/material";
const PatientQueue = () => {
    const auth = getAuthenticatedUser();

  const [doctorAppointments, setDoctorAppointments] = useState({
    loading: true,
    result: [],
    err: "",
    reload: 0,
  });
 console.log(auth.id);

  useEffect(() => {
    setDoctorAppointments({ ...doctorAppointments, loading: true });
    axios
      .get(`http://localhost:8070/doctor/allMyReservations/${auth.id}`, {
        headers: {
          Authorization: `Bearer ${auth.refreshToken}`,
        },
      })
      .then((response) => {
        console.log("success");
        console.log(response.data);
        setDoctorAppointments({
          ...doctorAppointments,
          result: response.data,
          loading: false,
          err: "",
          reload:1
        });
      })
      .catch((err) => {
        console.log(err);
        setDoctorAppointments({
          ...doctorAppointments,
          loading: false,
          err: "there is something wrong",
          reload:1
        });
      });
  }, [doctorAppointments.result.length]);

  return (
    <div className='patients-preview-container'>
      {doctorAppointments.result.length > 0 ?
        <Stack direction="column" spacing={2}>
          {doctorAppointments.result.map((doctorAppointment) => (
            <PatientDetailsForDoctor
              key={doctorAppointment.id}
              doctorAppointment={doctorAppointment}
            />
          ))}
        </Stack>
        :
        <Box sx={{textAlign:'center',color:'rgb(172, 172, 172)'}}>
          <img src={NoData} alt="no data" width={100} height={300} />
          <p>There is no reservations yet !</p>
        </Box>
      }
    </div>
  );
};

export default PatientQueue;