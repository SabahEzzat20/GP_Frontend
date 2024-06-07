import React, { useCallback, useState , useEffect, useRef } from 'react';
import './PatientProfile.scss';
import defaultPhoto from '../../../images/default.png'
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
import CancelIcon from '@mui/icons-material/Cancel';
import xray from '../../../images/hand-255x300.jpg'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { MdOutlineAlternateEmail } from "react-icons/md";
import Input from '@mui/joy/Input';
import { FaUser } from 'react-icons/fa';
import Empty from '../../../shared/Empty/Empty';
import { removeAuthenticatedUser ,getAuthenticatedUser} from '../../../Helper/Storage';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

const PatientProfile = () => {
    const navigate = useNavigate();
    const auth = getAuthenticatedUser();
    // const patientId = useParams();
    const [openRoute, setOpenRoute] = useState(1);
    const [openEditProfile, setOpenEditProfile] = useState(false);
    // const { getRootProps, getInputProps } = useDropzone({
    //     onDrop: acceptedFiles => {
    //         const file = acceptedFiles[0];
    //         const filePath = file.path; // Assuming the file object contains the path property
    //         updateProfilePhoto(filePath);
    //     }
    // });
    // const [image, setImage] = useState(defaultPhoto);
    const [currentRoute, setCurrentRoute] = useState('Edit Profile');
    const camera = <FiCamera />;
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
    const inputRef = useRef(null); 
    const [image, setImage] = useState(null);
    const handleImageClick = () => {
        inputRef.current.click();
    }
    const updateProfilePhoto = () => {
        // setProfilePhoto({ ...profilePhoto, loading: true });
        axios
            .put('http://localhost:8070/user/updateProfilePhoto', {
                id: auth.id,
                userPhoto: image
            }, {
                headers: {
                    'Authorization': `Bearer ${auth.refreshToken}`
                }
            })
            .then((response) => {
                // setProfilePhoto({ ...profilePhoto, photo: filePath, loading: false });
                showMessage();
                console.log(response.data)
                console.log('Profile photo updated successfully!');
            })
            .catch((error) => {
                console.log('Failed to update profile photo: ' + error);
                // setProfilePhoto({ ...profilePhoto, loading: false, err: error });
            });
    };
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
        console.log(file);
        updateProfilePhoto(file);
    }
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
    ];

    const handleChange = (id, route) => {
        setCurrentRoute(route);
        setOpenRoute(id);
    };

    const handleOpenEditProfile = () => {
        setOpenEditProfile(!openEditProfile);
    };

    const openImageInNewTab = (imageUrl) => {
        window.open(imageUrl, '_blank');
    };

    const LogoutFunction = () => {
        removeAuthenticatedUser();
        navigate('/login');
        console.log('logged out successfully!');
    };

    const [profile, setProfile] = useState({
        id: '',
        name: '',
        userPhoto: null,
        email: '',
        loading: true,
        err: []
    });

    const [reservedAppointments, setReservedAppointments] = useState({
        loading: false,
        result: [],
        err: ''
    });

    const [History, setHistory] = useState({
        loading: false,
        result: [],
        err: ''
    });

    const [userDataPreview, setUserDataPreview] = useState({
        name: '',
        email: ''
    });

    const getMyReservations = () => {
        setReservedAppointments({ ...reservedAppointments, loading: true });
        axios
            .get(`http://localhost:8070/patient/myReservation/${auth.id}`, {
                headers: {
                    'Authorization': `Bearer ${auth.refreshToken}`
                }
            })
            .then((response) => {
                setReservedAppointments({ ...reservedAppointments, result: response.data, loading: false });
                console.log(response.data);
            })
            .catch((error) => {
                console.log('update profile error: ' + error);
                setReservedAppointments({ ...reservedAppointments, loading: false, err: 'cannot retrieve reserved appointments' });
            });
    };

    const UpdateProfile = () => {
        setProfile({ ...profile, loading: true });
        axios
            .put('http://localhost:8070/user/updateUserProfile', {
                id: profile.id,
                name: profile.name,
                email: profile.email
            })
            .then((response) => {
                setProfile({ ...profile, loading: false });
                setUserDataPreview({ name: profile.name, email: profile.email });
                showMessage();
                setOpenEditProfile(false);
                console.log('updated successfully!');
            })
            .catch((error) => {
                console.log('update profile error: ' + error);
                setProfile({ ...profile, loading: false, err: [error] });
            });
    };

    useEffect(() => {
        setProfile({ ...profile, loading: true, name: auth.name, email: auth.email, id: auth.id });
        getMyReservations();
        axios
            .get(`http://localhost:8070/patient/getAllMyXRays/${auth.id}`, {
                headers: {
                    "Authorization": `Bearer ${auth.refreshToken}`
                }
            })
            .then((response) => {
                setHistory({ ...History, result: response.data, loading: false });
                console.log(response.data);
            })
            .catch((error) => {
                console.log('failed to get history: ' + error);
                setProfile({ ...profile, loading: false, err: [error] });
            });

        axios
            .get(`http://localhost:8070/user/getProfilePhoto/${auth.id}`, {
                headers: {
                    "Authorization": `Bearer ${auth.refreshToken}`
                }
            })
            .then((response) => {
                // setProfilePhoto({ ...profilePhoto, loading: false, image: response.data });
                setImage(response.data);
                console.log('profile photo data: ' + response.data);
            })
            .catch((error) => {
                console.log('failed to get profile photo: ' + error);
                setProfilePhoto({ ...profilePhoto, loading: false, err: error });
            });
    }, []);

    const [profilePhoto, setProfilePhoto] = useState({
        photo: null,
        loading: false,
        err: ''
    });

    const DeleteReservation = (id) => {
        console.log('patient id ' + id);
        axios
            .delete(`http://localhost:8070/patient/cancelReservation/${id}`, {
                headers: {
                    'Authorization': `Bearer ${auth.refreshToken}`
                }
            })
            .then((response) => {
                console.log('deleted successfully!');
            })
            .catch((err) => {
                console.log('error of delete function: ' + err);
            });
    };

        return (
            <Grid container sx={{ display: 'flex' }} xs={12} sm={12} md={12} lg={12} xl={12}>
                <Grid item xs={12} sm={12} md={3} lg={2} xl={2}>
                    <Box sx={{ backgroundColor: { xs: '#C54B43', sm: '#C54B43', md: 'rgb(241, 241, 241)', lg: 'rgb(241, 241, 241)', xl: 'rgb(241, 241, 241)' }, height: { xs: '145px', sm: '145px', md: '100vh', lg: '100vh', xl: '100vh' } }}>
                        <Link className="home-icon" to={'/patient/homepage'} style={{ paddingTop: '20px' }}>
                            <FaHome />
                        </Link>
                        <Stack spacing={3} direction='column' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box>
                                <input type='file' ref={inputRef} style={{ display: 'none' }} onChange={handleImageChange}/>
                                <div className='user-photo' onClick={handleImageClick} style={{ cursor: 'pointer' }}>
                                    {image ? <img src={URL.createObjectURL(image)} alt="userPhoto" />:<img src={defaultPhoto} alt="userPhoto" />}
                                    <div className="camera">
                                        {camera}
                                    </div>
                                </div>
                                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                    <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
                                        Profile photo updated successfully!
                                    </Alert>
                                </Snackbar>
                            </Box>
                            <Stack direction='column' spacing={1} className="user-name" >
                                <p>{userDataPreview.name}</p>
                                <p>{userDataPreview.email}</p>
                            </Stack>
                        </Stack>
                        <Grid item className='logOUtBtn' md={3} lg={2} xl={2} sx={{ position: "fixed", bottom: '0', fontSize: '20px', width: '100%', display: { xs: 'none', lg: 'flex', xl: 'flex', sm: 'none', justifyContent: 'center', alignItems: 'end', paddingTop: 'auto', height: '70px' } }} >
                            <Link className='logout-link' style={{ textDecoration: 'none' }} onClick={() => LogoutFunction()} >
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
                <Grid item xs={12} sm={12} md={9} lg={10} xl={10} sx={{ marginTop: { xs: '130px', sm: '130px', md: '0', lg: '0', xl: '0' } }}>
                    <Grid item sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}} className="breadcrumbs">
                        <Breadcrumbs aria-label="breadcrumb" sx={{paddingLeft:'20px'}}>
                            <Link to={'/patient/homepage'}>Home</Link>
                            <Typography color="text.primary">Profile</Typography>
                            <Typography color="text.primary">{currentRoute}</Typography>
                        </Breadcrumbs>
                    </Grid>
                    <Stack direction='row' spacing={2} className="routes-stack" sx={{ fontSize: { xs: '13px', sm: '13px', md: '16px', lg: '17px', xl: '17px' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {
                            profileRoutes.map((subpage) => (
                                <div className="subpage">
                                    <button key={subpage.route} className='profile-route' onClick={() => handleChange(subpage.id, subpage.route)}>
                                        {subpage.route}
                                    </button>
                                </div>
                            ))
                        }
                    </Stack>
                    <Divider />
                    {
                        openRoute === 1 &&
                        <Box>
                            <Stack direction='column' spacing={2} className="profile-options-stack" sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', padding: { xs: '50px', sm: '50px', md: '40px', lg: '50px', xl: '50px' }, paddingTop: { xs: '50px', sm: '50px' } }}>
                                <Stack spacing={0.2} direction='column' sx={{ width: { xs: '300px', sm: '300px', md: '600px', lg: '700px', xl: '700px' } }}>
                                    <label className="contact-label">Name</label>
                                    <Input value={profile.name} disabled={!openEditProfile} placeholder="Name" startDecorator={<FaUser />} variant="plain" color="neutral" type="text" name="user_name" onChange={(e)=>setProfile({...profile,name:e.target.value})}/>
                                </Stack>
                                <Stack spacing={0.2} direction='column' sx={{ width: { xs: '300px', sm: '300px', md: '600px', lg: '700px', xl: '700px' } }}>
                                    <label className="contact-label">Email</label>
                                    <Input value={profile.email} disabled={!openEditProfile} placeholder="Email" startDecorator={<MdOutlineAlternateEmail />} variant="plain" color="neutral" type="email" name="user_email" onChange={(e)=>setProfile({...profile,email:e.target.value})}/>
                                </Stack>
                                {
                                    openEditProfile &&
                                    <Box sx={{ width: { xs: '300px', sm: '300px', md: '600px', lg: '700px', xl: '700px' } }}>
                                        <button onClick={()=>UpdateProfile()} style={{ width: 'inherit' }}>{profile.loading ? <CircularProgress size={40} /> : 'confirm'}</button>
                                    </Box>
                                }
                                {
                                    !openEditProfile &&
                                    <>
                                        <Box sx={{ width: { xs: '300px', sm: '300px', md: '600px', lg: '700px', xl: '700px' } }}>
                                            <button onClick={handleOpenEditProfile} style={{ width: 'inherit' }}>edit profile</button>
                                        </Box>
                                        <Box sx={{ width: { xs: '300px', sm: '300px', md: '600px', lg: '700px', xl: '700px' } }}>
                                            <button className='change-pass' style={{ width: 'inherit' }}><ResetPassword /></button>
                                        </Box>
                                        <Box sx={{ display: { xl: 'none', lg: 'none', md: 'none', xs: 'block', sm: 'block' }, width: { xs: '300px', sm: '300px', md: '600px', lg: '700px', xl: '700px' } }}>
                                            <button className='change-pass' style={{ width: 'inherit' }} onClick={()=>LogoutFunction()}>logout</button>
                                        </Box>
                                    </>
                                }
                            </Stack>
                                
                        </Box>
                    }
                    {
                        openRoute === 2 &&
                        <div>
                            {
                                History.result.length !== 0 ?
                                    <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Box className="history-bar" sx={{ width: '100%' }}>
                                            <Stack spacing={3} direction='column'>
                                                    {
                                                        History.result.map((history) => (
                                                            <>
                                                            <Stack direction='column' >
                                                                <Box sx={{ display: 'flex', justifyContent: "flex-end", fontSize: '13px', color: 'gray' }}>{history.uploadingDate}</Box>
                                                                <Stack spacing={3} direction='row' sx={{ display: "flex", justifyContent: { xs: 'space-between', sm: 'space-between', md: 'flex-start', lg: 'flex-start', xl: 'flex-start' }, alignItems: 'baseline' }}>
                                                                    <Box className="history-result">
                                                                        <p> Result : <span className='fractured'>{history.result}</span></p>
                                                                    </Box>
                                                                    <Box>
                                                                        <Button onClick={() => openImageInNewTab(history.photo)}>
                                                                            <FolderIcon />
                                                                            <Box sx={{ paddingLeft: '5px', display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' } }}>attached xray</Box>
                                                                        </Button>
                                                                    </Box>
                                                                </Stack>
                                                            </Stack>
                                                            <Divider />
                                                            </>
                                                        )
                                                    )}
                                            </Stack>
                                        </Box>
                                    </Grid>
                                    :
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '50vh', padding: "15px", marginTop: '40px' }}>
                                        <Empty />
                                    </Box>
                            }
                        </div>
                    }
                    {
                        openRoute === 3 &&
                        <div>
                            {
                                reservedAppointments.result.length > 0 ?
                                    <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Box className='reserved-apps' sx={{ width: '100%' }}>
                                        {
                                            reservedAppointments.result.map((appointment) => {
                                                return (
                                                    <Stack key={appointment.id} spacing={2} direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' }} className='reserved-app' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <Stack direction='column' spacing={1} sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                <Box>Doctor : {appointment.doctorName}</Box>
                                                                <Box>Appointment : {appointment.date} [{appointment.startTime}]</Box>
                                                            </Stack>
                                                        </Grid>
                                                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                                            <Stack direction='row' sx={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
                                                                <Box>
                                                                    <Button size='small' onClick={() => openImageInNewTab(xray)}>
                                                                        <FolderIcon />
                                                                        <Box sx={{ paddingLeft: '5px' }}>
                                                                            attached xray
                                                                        </Box>
                                                                    </Button>
                                                                </Box>
                                                                <Box>
                                                                    <Button size='small' color='error' onClick={() => DeleteReservation(appointment.id)}>
                                                                        <CancelIcon />
                                                                        <Box sx={{ paddingLeft: '5px' }}>
                                                                            cancel date
                                                                        </Box>
                                                                    </Button>
                                                                </Box>
                                                            </Stack>
                                                        </Grid>
                                                    </Stack>
                                                );
                                            })
                                        }

                                            <Divider />
                                        </Box>
                                    </Grid>
                                    :
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '50vh', padding: "15px", marginTop: '40px' }}>
                                        <Empty />
                                    </Box>
                            }
                        </div>
                    }
                </Grid>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                    >
                        Profile updated successfully!
                    </Alert>
                </Snackbar>
            </Grid>
        );
    };
export default PatientProfile;