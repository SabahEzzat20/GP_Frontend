import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
import { Link } from 'react-router-dom';
import ResetPassword from '../../../shared/ResetPassword/ResetPassword';
const EditPatientProfile = () => {
    const [openEditProfile, setOpenEditProfile] = useState(false);
    const handleOpenEditProfile = () => {
        setOpenEditProfile(!openEditProfile)
    }
    return (
        <div>
            {
                openEditProfile ? 
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>user name</Form.Label>
                            <Form.Control className="textField" type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>email</Form.Label>
                            <Form.Control className="textField" type="email" />
                        </Form.Group>
                        <Button className="update-profile-btn">Update</Button>
                    </Form>
                    :
                    <div className="profile-options">
                        <Stack direction='column' spacing={3}>
                            <Button onClick={handleOpenEditProfile}>Edit profile</Button>
                            <ResetPassword />
                        </Stack>
                    </div>
            }
        </div>
    );
};

export default EditPatientProfile;