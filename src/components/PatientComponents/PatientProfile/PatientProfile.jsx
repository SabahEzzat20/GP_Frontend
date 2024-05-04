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
import { MdOutlineAlternateEmail } from "react-icons/md";
import Input from '@mui/joy/Input';
import { FaUser } from 'react-icons/fa';
import Empty from '../../../shared/Empty/Empty';
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
    const data = 0;
    const openImageInNewTab = (imageUrl) => {
        window.open(imageUrl, '_blank');
    };

    return (
        <Grid container sx={{display: 'flex'}} xs={12} sm={12} md={12} lg={12} xl={12}>
            <Grid item xs={12} sm={12} md={3} lg={2} xl={2}>
                <Box sx={{ backgroundColor: { xs: '#C54B43', sm: '#C54B43', md: 'rgb(241, 241, 241)', lg: 'rgb(241, 241, 241)', xl: 'rgb(241, 241, 241)' }, height: { xs: '145px', sm: '145px', md: '100vh', lg: '100vh', xl: '100vh' } }}> 
                    <Link className="home-icon" to={'/patient/homepage'} style={{paddingTop:'20px'}}>
                        <FaHome />
                    </Link>
                    <Stack spacing={3} direction='column' sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Box {...getRootProps()}>
                            <input {...getInputProps()} />
                            <div className='user-photo'>
                                <img src={image} alt="userPhoto" />
                                <div className="camera">
                                    {camera}
                                </div>
                            </div>
                        </Box>
                        <Stack direction='column' spacing={1} className="user-name" >
                            <p>Sabah Hassan</p>
                            <p>sabahhassan@gmail.com</p>
                        </Stack>
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
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={10} xl={10} sx={{marginTop:{xs:'130px',sm:'130px',md:'0',lg:'0',xl:'0'}}}>
                    <Grid item sx={{display:{xs:'none',sm:'none',md:'block',lg:'block',xl:'block'}}} className="breadcrumbs">
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link to={'/patient/homepage'}>Home</Link>
                            <Typography color="text.primary">Profile</Typography>
                            <Typography color="text.primary">{currentRoute }</Typography>
                        </Breadcrumbs>
                    </Grid>
                    <Stack direction='row' spacing={2} className="routes-stack" sx={{fontSize:{xs:'13px',sm:'13px',md:'16px',lg:'17px',xl:'17px'},display:'flex',justifyContent:'center',alignItems:'center'}}>
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
                    {
                        openRoute===1 && 
                            <Box>
                                            <Stack direction='column' spacing={2} className="profile-options-stack" sx={{height:'100%',display:'flex',justifyContent:'center',alignItems:'center',width:'100%',padding:{xs:'50px',sm:'50px',md:'40px',lg:'50px',xl:'50px'},paddingTop:{xs:'50px',sm:'50px'}}}>
                                                <Stack spacing={0.2} direction='column' sx={{width:{xs:'300px',sm:'300px',md:'600px',lg:'700px',xl:'700px'}}}>
                                                    <label className="contact-label">Name</label>
                                                    <Input disabled={!openEditProfile} placeholder="Name" startDecorator={<FaUser />} variant="plain" color="neutral" type="text" name="user_name"  />
                                                </Stack>
                                                <Stack spacing={0.2} direction='column' sx={{width:{xs:'300px',sm:'300px',md:'600px',lg:'700px',xl:'700px'}}}>
                                                    <label className="contact-label">Email</label>
                                                    <Input disabled={!openEditProfile} placeholder="Email" startDecorator={<MdOutlineAlternateEmail />} variant="plain" color="neutral" type="email" name="user_email"/>
                                                </Stack>
                                                {
                                                    openEditProfile &&
                                                        <Box sx={{width:{xs:'300px',sm:'300px',md:'600px',lg:'700px',xl:'700px'}}}>
                                                            <button onClick={handleOpenEditProfile} style={{width:'inherit'}}>Submit</button>
                                                        </Box>
                                                }
                                                {
                                                    !openEditProfile && 
                                                    <>
                                                        <Box sx={{width:{xs:'300px',sm:'300px',md:'600px',lg:'700px',xl:'700px'}}}>
                                                            <button onClick={handleOpenEditProfile} style={{width:'inherit'}}>Edit profile</button>
                                                        </Box>
                                                        <Box sx={{width:{xs:'300px',sm:'300px',md:'600px',lg:'700px',xl:'700px'}}}>
                                                            <button className='change-pass' style={{width:'inherit'}}><ResetPassword /></button>
                                                        </Box>
                                                        <Box sx={{display:{xl:'none',lg:'none',md:'none',xs:'block',sm:'block'},width:{xs:'300px',sm:'300px',md:'600px',lg:'700px',xl:'700px'}}}>
                                                            <button className='change-pass' style={{width:'inherit'}}>logout</button>
                                                        </Box>
                                                    </>
                                                }
                                            </Stack>
                                
                            </Box>
                    }

                    {
                        openRoute===2 && 
                            <div>
                                {
                                    data === 1 ? 
                                        <Box className="history-bar">
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
                                                
                                            </Stack>
                                        </Box>      
                                    : 
                                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100%'}}>
                                        <Empty/>
                                    </Box>
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