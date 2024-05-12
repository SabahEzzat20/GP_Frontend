import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./BigForm.scss";
import Stack from '@mui/material/Stack'
import { Link } from "react-router-dom";
import Input from '@mui/joy/Input';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { HiPhone } from "react-icons/hi2";
import { FaChild } from "react-icons/fa6";
import { FaWeightScale } from "react-icons/fa6";
import { GiBodyHeight } from "react-icons/gi";
import { IoManSharp } from "react-icons/io5";
import Checkbox from '@mui/joy/Checkbox';
import { IoWoman } from "react-icons/io5";
import Avatar from '@mui/joy/Avatar';
import sabah from '../images/saboha.jpeg';
import {getAuthenticatedUser} from '../Helper/Storage';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Box  from "@mui/material/Box";
import { IoIosArrowBack } from "react-icons/io";

const BigForm = () => {
  const auth = getAuthenticatedUser();
  const [patientData, setPatientData] = useState({
    userId: '',
    userName: '',
    userEmail: '',
    phoneNumber : '',
    gender: 0,
    height : '',
    weight : '',
    birthDate : '',
    loading: true,
    err: []
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
  // const refreshToken = getAuthenticatedUser().refreshToken
  // console.log(refreshToken);
  useEffect(() => {
    axios
      .get(`http://localhost:8070/user/getUserByToken/${auth.refreshToken}`)
        .then((response) => {
            setPatientData({...patientData,userId:response.data.id,userName:response.data.name,userEmail:response.data.email});
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);
    // console.log(patientData)
  const addPatient = (e) => {
      // e.preventDefault();
      setPatientData({ ...patientData, loading: true, err: [] })
      axios
        .post("http://localhost:8070/patient/addPatientData", {
              userId: patientData.userId,
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
              setPatientData({ ...patientData, loading: false, err: [] });
              showMessage();
          })
          .catch((error) => {
              setPatientData({ ...patientData, loading: false, err: error.response.data.errors })
            // console.log(error);
          })
      // console.log(login);
  }

  return (
    <Box className="reservation-form" sx={{width:{xl:'750px',lg:'750px',md:'750px',sm:'600px',xs:'350px'}}}>
      <Stack direction='column' spacing={4}>
        <div className="go-back-arrow">
          <Link to={'/patient/doctors-preview'}><IoIosArrowBack /></Link>
        </div>
        <Stack direction='row' spacing={2}>
          <div>
            <Avatar alt="Sabah hassan" src={sabah} size='lg'/>
          </div>
          <Stack direction='column' spacing={0.1} className="doctor-details">
            <p className="doctor-name">Dr.sabah hassan</p>
            <Stack direction={{xs:'column',sm:'column',md:'row',lg:'row',xl:'row'}} spacing={{xs:'1',sm:'1',md:'3',lg:'3',xl:'3'}}>
              <Box className="expertise">Consultant orthopedic and joint surgeon , </Box>
              <Box className="expertise">Duration : 15min</Box>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction={{xs:'column',sm:'column',md:'row',lg:'row',xl:'row'}} spacing={2}>
          <Stack direction='column' spacing={0.2}>
            <Input 
              placeholder="name" 
              startDecorator={<FaUser />} 
              variant="plain" 
              color="neutral" 
              type="text"
              required
              value={patientData.userName}
              onChange={(e)=>setPatientData({...patientData,userName:e.target.value})}/>
          </Stack>
          <Stack spacing={0.2} direction='column'>
            <Input
              placeholder="email"
              startDecorator={<MdOutlineAlternateEmail />}
              variant="plain" 
              color="neutral"
              required
              type="email"
              value={patientData.userEmail}
              onChange={(e)=>setPatientData({...patientData,userEmail:e.target.value})}
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
        <Stack direction='row' spacing={1}>
          <Checkbox required/>
          <label className=''>makesure to download Zoom App before meetting from <Link to={'https://zoom.en.softonic.com/'} target="_blank">here</Link></label>
        </Stack>
        <button className="submit-reservation" onClick={(e)=>addPatient()}>submit</button>
      </Stack>
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
    </Box>
  );
};

export default BigForm;




