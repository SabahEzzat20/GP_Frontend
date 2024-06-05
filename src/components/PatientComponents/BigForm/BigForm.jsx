import React, { useState } from "react";
import axios from 'axios';
import "./BigForm.scss";
import Stack from '@mui/material/Stack'
import { useNavigate } from "react-router-dom";
import Input from '@mui/joy/Input';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { HiPhone } from "react-icons/hi2";
import { FaChild } from "react-icons/fa6";
import { FaWeightScale } from "react-icons/fa6";
import { GiBodyHeight } from "react-icons/gi";
import { IoManSharp } from "react-icons/io5";
import { IoWoman } from "react-icons/io5";
import {getAuthenticatedUser} from '../../../Helper/Storage';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Box  from "@mui/material/Box";
import Lottie from 'lottie-react';
import loading from '../../../images/Animation - 1717439190883.json'
const BigForm = () => {
  const navigate = useNavigate();
  const auth = getAuthenticatedUser();
  const [patientData, setPatientData] = useState({
    phoneNumber : '',
    gender: 0,
    height : '',
    weight : '',
    birthDate : '',
    loading: true,
    err: ''
  })
  const handleGenderSelection = (value) => {
    setPatientData({ ...patientData, gender: value });
  };
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

  const addPatient = () => {
      // e.preventDefault();
      setPatientData({ ...patientData, loading: true, err: '' })
      axios
        .post("http://localhost:8070/patient/addPatientData", {
              userId: auth.id,
              phoneNumber: patientData.phoneNumber,
              height: patientData.height,
              weight: patientData.weight,
              birthDate: patientData.birthDate,
              gender: patientData.gender,
          },{
            headers: {
              'Authorization': `Bearer ${auth.refreshToken}`
            }
          })
          .then((response) => {
            setPatientData({ ...patientData, loading: false, err: '' });
            navigate('/patient/doctors-preview');
          })
          .catch((error) => {
            setPatientData({ ...patientData, loading: false, err: 'Something went wrong, please try again later!'})
            showMessage();
          })
  }

  return (
    <Box className="reservation-form" sx={{width:{xl:'600px',lg:'600px',md:'750px',sm:'600px',xs:'350px'}}}>
      <Stack direction='column' spacing={4}>
        <Stack direction={{xs:'column',sm:'column',md:'row',lg:'row',xl:'row'}} spacing={2}>
          <Stack direction='column' spacing={0.2}>
            <Input 
              placeholder="name" 
              startDecorator={<FaUser />} 
              variant="plain" 
              color="neutral" 
              type="text"
              required
              value={auth.name}
            />
          </Stack>
          <Stack spacing={0.2} direction='column'>
            <Input
              placeholder="email"
              startDecorator={<MdOutlineAlternateEmail />}
              variant="plain" 
              color="neutral"
              required
              type="email"
              value={auth.email}
            />
          </Stack>
        </Stack>
        <Stack direction={{xs:'column',sm:'column',md:'row',lg:'row',xl:'row'}} spacing={3}>
          <Stack direction='column' spacing={0.2}>
            <Input 
              placeholder="weight" 
              startDecorator={<FaWeightScale />} 
              variant="plain" 
              color="neutral" 
              type='number'
              required
              value={patientData.weight}
              onChange={(e)=>setPatientData({...patientData,weight:e.target.value})}
            />
          </Stack>
          <Stack spacing={0.2} direction='column'>
            <Input 
              placeholder="height" 
              startDecorator={<GiBodyHeight />} 
              variant="plain" 
              color="neutral" 
              type='number'
              required
              value={patientData.height}
              onChange={(e)=>setPatientData({...patientData,height:e.target.value})}
            />
          </Stack>
        </Stack>
        <Stack direction={{xs:'column',sm:'column',md:'row',lg:'row',xl:'row'}} spacing={2}>
          <Stack direction='column' spacing={0.2}>
            <Input
              placeholder="phone number" 
              startDecorator={<HiPhone />} 
              variant="plain" 
              color="neutral" 
              type="number" 
              required
              value={patientData.phoneNumber}
              onChange={(e)=>setPatientData({...patientData,phoneNumber:e.target.value})}
            />
          </Stack>
          <Stack  direction='column' spacing={0.2}>
            <Input 
            placeholder="birthdate" 
            startDecorator={<FaChild />} 
            variant="plain" 
            color="default" 
            type='text'
            value={patientData.birthDate}
            onChange={(e)=>setPatientData({...patientData,birthDate:e.target.value})}
            />
          </Stack>
        </Stack>
        <Stack direction='row' spacing={2} sx={{display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
          <Box className="gender">Gender</Box>
          <Stack spacing={2} direction='row'>
            <Input
              endDecorator={<IoWoman />}
              variant="plain"
              color="neutral"
              type='radio'
              name="gender"
              className='gender-option'
              onChange={() => handleGenderSelection(1)} // Set gender to female (1)
            />
            <Input
              endDecorator={<IoManSharp />}
              variant="plain"
              color="neutral"
              type='radio'
              name='gender'
              className='gender-option'
              onChange={() => handleGenderSelection(0)} // Set gender to male (0)
            />
          </Stack>
        </Stack>
        <button className="submit-reservation" onClick={(e)=>addPatient()}>submit</button>
      </Stack>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {patientData.err}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default BigForm;




