import React, { useState, useEffect } from "react";
import Stack from '@mui/material/Stack';
import axios from "axios";
import { getAuthenticatedUser } from "../../../Helper/Storage";

import PatientDetailsForDoctor from '../PatientDetailsForDoctor/PatientDetailsForDoctor';
import './PatientsQueue.scss';

const PatientQueue = () => {
  const [doctorAppointments, setDoctorAppointments] = useState({
    loading: true,
    result: [],
    err: "",
    reload: 0,
  });
  
  const userToken = getAuthenticatedUser();
  const refreshToken = userToken.refreshToken;
  const userId = userToken.userId; 

  useEffect(() => {
    setDoctorAppointments({ ...doctorAppointments, loading: true });
    axios
      .get(`http://localhost:8070/doctor/allMyReservations/${userId}`, {
        headers: {
          "Authorization": `Bearer ${refreshToken}`,
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
        });
      })
      .catch((err) => {
        console.log(err);
        setDoctorAppointments({
          ...doctorAppointments,
          loading: false,
          err: "there is something wrong",
        });
      });
  }, [doctorAppointments.reload + 1]);

  return (
    <div className='patients-preview-container'>
      <Stack direction="column" spacing={2}>
        {doctorAppointments.result.map((doctorAppointment) => (
          <PatientDetailsForDoctor
            key={doctorAppointment.id}
            doctorAppointment={doctorAppointment}
          />
        ))}
      </Stack>
    </div>
  );
};

export default PatientQueue;