import React from "react";
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
import sabah from '../images/saboha.jpeg'
const BigForm = () => {
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
            <Input placeholder="user name" startDecorator={<FaUser />} variant="plain" color="neutral"/>
          </Stack>
          <Stack spacing={0.2} direction='column'>
            {/* <input className='' type="email" name="user_email" /> */}
            <Input placeholder="email" startDecorator={<MdOutlineAlternateEmail />} variant="plain" color="neutral" type="email"/>
          </Stack>
        </Stack>
        <Stack direction='row' spacing={2}>
          <Stack direction='column' spacing={0.2}>
            <Input placeholder="phone number" startDecorator={<HiPhone />} variant="plain" color="neutral" type="phone number"/>
          </Stack>
          <Stack spacing={0.2} direction='column'>
            <Input placeholder="age" startDecorator={<FaChild />} variant="plain" color="neutral" type='number'/>
          </Stack>
        </Stack>
        <Stack direction='row' spacing={3}>
          <Stack direction='row' spacing={0.2}>
            <Input placeholder="weight" startDecorator={<FaWeightScale />} variant="plain" color="neutral" type='number'/>
          </Stack>
          <Stack spacing={0.2} direction='row'>
            <Input placeholder="height" startDecorator={<GiBodyHeight />} variant="plain" color="neutral" type='number'/>
          </Stack>
        </Stack>
        <Stack direction='column'>
          <p className="gender">Gender</p>
          <Stack spacing={2} direction='row'>
              <Input endDecorator={<IoWoman />} variant="plain" color="neutral" type='radio' name="gender" className='gender-option'/>
              <Input endDecorator={<IoManSharp />} variant="plain" color="neutral" type='radio' name='gender' className='gender-option'/>
            </Stack>
        </Stack>
        <Stack direction='row' spacing={1}>
          <Checkbox/>
          <label className=''>makesure to download Zoom App before meetting from <Link to={'https://zoom.en.softonic.com/'} target="_blank">here</Link></label>
        </Stack>
        <button className="submit-reservation">submit</button>
      </Stack>
    </div>
  );
};

export default BigForm;
