import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
import { Link } from 'react-router-dom';
import ResetPassword from '../../../shared/ResetPassword/ResetPassword';
import './EditPatientProfile.scss'
import { IoIosArrowRoundBack } from "react-icons/io";

const EditPatientProfile = () => {
    const [openEditProfile, setOpenEditProfile] = useState(false);
    const handleOpenEditProfile = () => {
        setOpenEditProfile(!openEditProfile)
    }
    return (
        <div>
            {
                openEditProfile ? 
                    <div className="edit-profile">
                        <Form className='edit-profile-form'> 
                                {openEditProfile && <IoIosArrowRoundBack onClick={handleOpenEditProfile } className='go-back-to-options'/> }
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>user name</Form.Label>
                                <Form.Control className="textField" type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>email</Form.Label>
                                <Form.Control className="textField" type="email" />
                            </Form.Group>
                            <div className="submit-update-div">
                                <button className="update-profile-btn">Update</button>
                            </div>
                        </Form>
                    </div>
                    :
                    <div className="profile-options">
                        <Stack direction='column' spacing={2} className="profile-options-stack">
                            <button onClick={handleOpenEditProfile}>Edit profile</button>
                            <button className='change-pass'><ResetPassword /></button>
                        </Stack>
                    </div>
            }
        </div>
    );
};

export default EditPatientProfile;