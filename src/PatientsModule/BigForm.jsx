import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./BigForm.scss";
import Stack from '@mui/material/Stack'
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Input from '@mui/joy/Input';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { HiPhone } from "react-icons/hi2";
import { FaChild } from "react-icons/fa6";
import { FaWeightScale } from "react-icons/fa6";
import { GiBodyHeight } from "react-icons/gi";
import { IoWomanSharp } from "react-icons/io5";
import { IoManSharp } from "react-icons/io5";
import Checkbox from '@mui/joy/Checkbox';
import { IoWomanOutline } from "react-icons/io5";
import { IoWoman } from "react-icons/io5";
import { IoMdMan } from "react-icons/io";
import Avatar from '@mui/joy/Avatar';
import sabah from '../images/saboha.jpeg';
import {getAuthenticatedUser} from '../Helper/Storage';
import { useParams } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const BigForm = () => {
  // const userToken = useParams();
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
  const userToken = getAuthenticatedUser();
  const refreshToken = userToken.refreshToken;
  // console.log(refreshToken);
  useEffect(() => {
    axios
      .get(`http://localhost:8070/user/getUserByToken/${refreshToken}`)
        .then((response) => {
            setPatientData({...patientData,userId:response.data.id,userName:response.data.name,userEmail:response.data.email});
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);
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
              'Authorization': `Bearer ${refreshToken}`
            }
          })
          .then((response) => {
              setPatientData({ ...patientData, loading: false, err: [] });
              // navigate("/");
              showMessage();
          })
          .catch((error) => {
              setPatientData({ ...patientData, loading: false, err: error.response.data.errors })
            console.log(error);
          })
      // console.log(login);
  }

  return (
    <div className="reservation-form">
      <Stack direction='column' spacing={4}>
        <div className="go-back-arrow">
          <Link to={'/patient/doctors-preview'}><IoIosArrowRoundBack /></Link>
        </div>
        <Stack direction='row' spacing={2}>
          <div>
            <Avatar alt="Sabah hassan" src={sabah} size='lg'/>
          </div>
          <Stack direction='column' spacing={0.1} className="doctor-details">
            <p className="doctor-name">Dr.sabah hassan</p>
            <Stack direction='row' spacing={3}>
              <p className="expertise">Consultant orthopedic and joint surgeon</p>
              <p className="expertise">Duration : 15min</p>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction='row' spacing={2}>
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
            {/* <input className='' type="email" name="user_email" /> */}
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
        <Stack direction='row' spacing={2}>
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
          <Stack spacing={0.2} direction='column'>
            <Input 
            placeholder="birthdate" 
            startDecorator={<FaChild />} 
            variant="plain" 
            color="neutral" 
            type='text'
            value={patientData.birthDate}
            onChange={(e)=>setPatientData({...patientData,birthDate:e.target.value})}
            />
          </Stack>
        </Stack>
        <Stack direction='row' spacing={3}>
          <Stack direction='row' spacing={0.2}>
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
          <Stack spacing={0.2} direction='row'>
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
        <Stack direction='column'>
          <p className="gender">Gender</p>
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
    </div>
  );
};

export default BigForm;




