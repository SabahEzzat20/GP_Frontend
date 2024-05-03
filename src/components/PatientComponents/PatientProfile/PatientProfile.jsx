import React, { useCallback, useState } from 'react';
import './PatientProfile.scss';
import saboha2 from '../../../images/saboha2.jpg'
import { useDropzone } from 'react-dropzone';
import { FiCamera } from "react-icons/fi";
import Stack from '@mui/material/Stack';
import { TbLogout2 } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { Link, NavLink } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Form from "react-bootstrap/Form";
import { IoIosArrowRoundBack } from "react-icons/io";
import ResetPassword from '../../../shared/ResetPassword/ResetPassword';
import Button from '@mui/material/Button';
import FolderIcon from '@mui/icons-material/Folder';
import xray from '../../../images/hand-255x300.jpg'
import emptyPage from '../../../images/No data-cuate.png';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const PatientProfile = () => {
    const [openRoute, setOpenRoute] = useState(1);
    const [image, setImage] = useState(saboha2);
    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.onloadend = () => {
        setImage(reader.result);
        };
        reader.readAsDataURL(file);
    }, []);
    // const {  isDragActive } = useDropzone({ onDrop });
    const { getRootProps, getInputProps } = useDropzone({ onDrop }); 
    const camera = <FiCamera />;
    const [currentRoute, setCurrentRoute] = useState('Edit Profile');
    const profileRoutes = [
        {
            id: 1,
            route: 'Edit Profile',
            path: '/patientprofile/Editprofile'
        },
        {
            id: 2,
            route: 'History',
            path: '/patientprofile/patient-history'
        },
        {
            id: 3,
            route: 'Appointments',
            path: '/patientprofile/patient-reserved-appointment'
        },
    ]
    const handleChange = (id,route) => {
        setCurrentRoute(route);
        setOpenRoute(id);
    }
    const [openEditProfile, setOpenEditProfile] = useState(false);
    const handleOpenEditProfile = () => {
        setOpenEditProfile(!openEditProfile)
    }
    const data = 1;
    const openImageInNewTab = (imageUrl) => {
        window.open(imageUrl, '_blank');
    };

    return (
        <Grid container sx={{display: 'flex'}} xs={12} sm={12} md={12} lg={12} xl={12}>
            <Grid item xs={12} sm={12} md={3} lg={2} xl={2}>
                <Box className='profile-sidebar' sx={{ backgroundColor: { xs: '#C54B43', sm: '#C54B43', md: 'rgb(241, 241, 241)', lg: 'rgb(241, 241, 241)', xl: 'rgb(241, 241, 241)' }, height: { xs: '140px', sm: '140px', md: '100vh', lg: '100vh', xl: '100vh' } }}> 
                <Link className="home-icon" to={'/patient/homepage'} style={{paddingTop:'20px'}}>
                    <FaHome />
                </Link>
                <Stack spacing={43} direction='column'>
                    <Stack spacing={4} direction='column'>
                        <div className="update-photo">
                                <div {...getRootProps()} className='profile-photo-dropzone'>
                                    <input {...getInputProps()} />
                                    <div className='user-photo'>
                                        <img src={image} alt="userPhoto" />
                                        <div className="camera">
                                            {camera}
                                        </div>
                                    </div>
                                </div>
                        </div>
                        {/* <div className="user-name">
                            <p>Fatma hassan</p>
                        </div> */}
                    </Stack>
                    <Grid item className='logOUtBtn' md={3} lg={2} xl={2} sx={{position:"fixed", bottom:'0',fontSize:'20px',width: '100%',display:{xs:'none',lg:'flex',xl:'flex',sm:'none',justifyContent:'center',alignItems:'end',paddingTop:'auto',height:'70px'}}} >
                        <Link className='logout-link'style={{textDecoration: 'none'}} to={'/register'}>
                            <Stack direction='row' spacing={1} className='logout'>
                                <div >
                                    <TbLogout2 /> 
                                </div>
                                <div > 
                                    <p>Logout</p>
                                </div>
                            </Stack>
                        </Link>
                    </Grid>
                </Stack>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={10} xl={10} sx={{paddingTop: {xs:'50px',sm:'50px'}}}>
                <div>
                    <Grid container sx={{display:{xs:'none',sm:'none'}}} className="breadcrumbs">
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link to={'/patient/homepage'}>Home</Link>
                            <Typography color="text.primary">Profile</Typography>
                            <Typography color="text.primary">{currentRoute }</Typography>
                        </Breadcrumbs>
                    </Grid>
                    <Stack direction='row' spacing={2} className="routes-stack">
                        {
                            profileRoutes.map((subpage) => (
                                <div className="subpage">
                                    <button  key={subpage.route}  className='profile-route'  onClick={()=>handleChange(subpage.id,subpage.route)}>
                                        {subpage.route}
                                    </button>
                                </div>
                            ))
                        }
                    </Stack>
                    <Divider />
                </div>
                    
                    {
                        openRoute===1 && 
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
                                                <div> user name : fatma hassan</div>
                                                <div> email : fatma hassan@gmail.com</div>
                                                <button onClick={handleOpenEditProfile}>Edit profile</button>
                                                <button className='change-pass'><ResetPassword /></button>
                                                <button className='change-pass'>logout</button>
                                            </Stack>
                                        </div>
                                }
                            </div>
                    }

                    {
                        openRoute===2 && 
                            <div>
                                {
                                    data === 1 ? 
                                        <div className="history-bar">
                                            <Stack spacing={3} direction='column'>
                                                <Stack direction='row' spacing={70}>
                                                    <Stack spacing={3} direction='row'>
                                                        <Button variant="outlined" startIcon={<FolderIcon />} onClick={() => openImageInNewTab(xray)}>
                                                            Attached X-Rays
                                                        </Button>
                                                        <div className="history-result">
                                                            <Stack spacing={1} direction='row'>
                                                                <p> Result :</p>
                                                                <p className='fractured'> fractured</p>
                                                            </Stack>
                                                        </div>
                                                    </Stack>
                                                    <Stack direction='row' spacing={2} className='history-time'>
                                                        <p>25/3/2024</p>
                                                        <p>[10:00 AM]</p>
                                                    </Stack>
                                                </Stack>
                                                <Divider />
                                                <Stack direction='row' spacing={70}>
                                                    <Stack spacing={3} direction='row'>
                                                        <Button variant="outlined" startIcon={<FolderIcon />} onClick={() => openImageInNewTab(xray)}>
                                                            Attached X-Rays
                                                        </Button>
                                                        <div className="history-result">
                                                            <Stack spacing={1} direction='row'>
                                                                <p> Result :</p>
                                                                <p className='fractured'> fractured</p>
                                                            </Stack>
                                                        </div>
                                                    </Stack>
                                                    <Stack direction='row' spacing={2} className='history-time'>
                                                        <p>1/7/2024</p>
                                                        <p>[10:00 AM]</p>
                                                    </Stack>
                                                </Stack>
                                                <Divider />
                                                <Stack spacing={3} direction='row'>
                                                    <Button variant="outlined" startIcon={<FolderIcon />} onClick={() => openImageInNewTab(xray)}>
                                                        Attached X-Rays
                                                    </Button>
                                                    <div className="history-result">
                                                        <Stack spacing={1} direction='row'>
                                                            <p> Result :</p>
                                                            <p className='nonfractured'> fractured</p>
                                                        </Stack>
                                                    </div>
                                                </Stack>
                                                <Divider />
                                                <Stack spacing={3} direction='row'>
                                                    <Button variant="outlined" startIcon={<FolderIcon />} onClick={() => openImageInNewTab(xray)}>
                                                        Attached X-Rays
                                                    </Button>
                                                    <div className="history-result">
                                                        <Stack spacing={1} direction='row'>
                                                            <p> Result :</p>
                                                            <p className='nonfractured'> fractured</p>
                                                        </Stack>
                                                    </div>
                                                </Stack>
                                                <Divider />
                                                <Stack spacing={3} direction='row'>
                                                    <Button variant="outlined" startIcon={<FolderIcon />} onClick={() => openImageInNewTab(xray)}>
                                                        Attached X-Rays
                                                    </Button>
                                                    <div className="history-result">
                                                        <Stack spacing={1} direction='row'>
                                                            <p> Result :</p>
                                                            <p className='nonfractured'> fractured</p>
                                                        </Stack>
                                                    </div>
                                                </Stack>
                                                <Divider />
                                                <Stack spacing={3} direction='row'>
                                                    <Button variant="outlined" startIcon={<FolderIcon />} onClick={() => openImageInNewTab(xray)}>
                                                        Attached X-Rays
                                                    </Button>
                                                    <div className="history-result">
                                                        <Stack spacing={1} direction='row'>
                                                            <p> Result :</p>
                                                            <p className='fractured'> fractured</p>
                                                        </Stack>
                                                    </div>
                                                </Stack>
                                                <Divider />
                                                <Stack spacing={3} direction='row'>
                                                    <Button variant="outlined" startIcon={<FolderIcon />} onClick={() => openImageInNewTab(xray)}>
                                                        Attached X-Rays
                                                    </Button>
                                                    <div className="history-result">
                                                        <Stack spacing={1} direction='row'>
                                                            <p> Result :</p>
                                                            <p className='fractured'> fractured</p>
                                                        </Stack>
                                                    </div>
                                                </Stack>
                                                <Divider />
                                                <Stack spacing={3} direction='row'>
                                                    <Button variant="outlined" startIcon={<FolderIcon />} onClick={() => openImageInNewTab(xray)}>
                                                        Attached X-Rays
                                                    </Button>
                                                    <div className="history-result">
                                                        <Stack spacing={1} direction='row'>
                                                            <p> Result :</p>
                                                            <p className='nonfractured'> fractured</p>
                                                        </Stack>
                                                    </div>
                                                </Stack>
                                                <Divider />
                                                <Stack spacing={3} direction='row'>
                                                    <Button variant="outlined" startIcon={<FolderIcon />} onClick={() => openImageInNewTab(xray)}>
                                                        Attached X-Rays
                                                    </Button>
                                                    <div className="history-result">
                                                        <Stack spacing={1} direction='row'>
                                                            <p> Result :</p>
                                                            <p className='fractured'> fractured</p>
                                                        </Stack>
                                                    </div>
                                                </Stack>
                                                <Divider />
                                                <Stack spacing={3} direction='row'>
                                                    <Button variant="outlined" startIcon={<FolderIcon />} onClick={() => openImageInNewTab(xray)}>
                                                        Attached X-Rays
                                                    </Button>
                                                    <div className="history-result">
                                                        <Stack spacing={1} direction='row'>
                                                            <p> Result :</p>
                                                            <p className='fractured'> fractured</p>
                                                        </Stack>
                                                    </div>
                                                </Stack>
                                            </Stack>
                                        </div>      
                                        : 
                                        <div className="empty-page">
                                            <img src={emptyPage} alt="no data"/>
                                        </div>
                                }
                            </div>
                    }

                    {
                        openRoute===3 &&
                            <div>
                                {
                                    data === 1 ? 
                                        <div className='reserved-apps'>
                                            <Stack spacing={90} direction='row' >
                                                <Stack spacing={2} direction='column' className='reserved-app' >
                                                    <div className="doctor-name">
                                                        <Stack spacing={2} direction='row'>
                                                            <p>Doctor : </p>
                                                            <p>Tamer hani</p>
                                                        </Stack>
                                                    </div>
                                                    <div className="appointment">
                                                        <Stack spacing={2} direction='row'>
                                                            <p>Appointment : </p>
                                                            <Button variant='text' className='hour'>03:00 AM</Button>
                                                        </Stack>
                                                        <Button variant="text" startIcon={<FolderIcon />} onClick={() => openImageInNewTab(xray)}>
                                                            Attached X-Rays
                                                        </Button>
                                                    </div>
                                                </Stack>
                                                <Stack direction='row'>
                                                    <div className='cancel-reservation-btn-cont'>
                                                        <button className='cancel-reservation-btn'>cancel</button>
                                                    </div>
                                                </Stack>
                                            </Stack>
                                            <Divider />
                                            <Stack spacing={90} direction='row' >
                                                <Stack spacing={2} direction='column' className='reserved-app' >
                                                    <div className="doctor-name">
                                                        <Stack spacing={2} direction='row'>
                                                            <p>Doctor : </p>
                                                            <p>Tamer hani</p>
                                                        </Stack>
                                                    </div>
                                                    <div className="appointment">
                                                        <Stack spacing={2} direction='row'>
                                                            <p>Appointment : </p>
                                                            <Button variant='text' className='hour'>03:00 AM</Button>
                                                        </Stack>
                                                        <Button variant="text" startIcon={<FolderIcon />} onClick={() => openImageInNewTab(xray)}>
                                                            Attached X-Rays
                                                        </Button>
                                                    </div>
                                                </Stack>
                                                <Stack direction='row'>
                                                    <div className='cancel-reservation-btn-cont'>
                                                        <button className='cancel-reservation-btn'>cancel</button>
                                                    </div>
                                                </Stack>
                                            </Stack>
                                            <Divider />
                                            <Stack spacing={90} direction='row' >
                                                <Stack spacing={2} direction='column' className='reserved-app' >
                                                    <div className="doctor-name">
                                                        <Stack spacing={2} direction='row'>
                                                            <p>Doctor : </p>
                                                            <p>Tamer hani</p>
                                                        </Stack>
                                                    </div>
                                                    <div className="appointment">
                                                        <Stack spacing={2} direction='row'>
                                                            <p>Appointment : </p>
                                                            <Button variant='text' className='hour'>03:00 AM</Button>
                                                        </Stack>
                                                        <Button variant="text" startIcon={<FolderIcon />} onClick={() => openImageInNewTab(xray)}>
                                                            Attached X-Rays
                                                        </Button>
                                                    </div>
                                                </Stack>
                                                <Stack direction='row'>
                                                    <div className='cancel-reservation-btn-cont'>
                                                        <button className='cancel-reservation-btn'>cancel</button>
                                                    </div>
                                                </Stack>
                                            </Stack>
                                            <Divider />
                                        </div> 
                                        :
                                        <div className="empty-page">
                                            <img src={emptyPage} alt="no data"/>
                                        </div>
                                }
                            </div>
                    }

            </Grid>
        </Grid>
    );
};

export default PatientProfile;