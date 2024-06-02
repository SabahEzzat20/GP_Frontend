import { useCallback, useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';
import sabah from '../../images/saboha.jpeg';
import './Profile.scss'
import { VscClose } from "react-icons/vsc";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { HiOutlineLogout } from "react-icons/hi";
import ResetPassword from "../ResetPassword/ResetPassword";
import Stack from '@mui/material/Stack';
import { FiCamera } from "react-icons/fi";
import Input from '@mui/joy/Input';
import { FaUser } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { removeAuthenticatedUser ,getAuthenticatedUser} from '../../Helper/Storage';
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Box from '@mui/material/Box';

const Profile = () => {
    const auth = getAuthenticatedUser();
    const [openEditProfile, setOpenEditProfile] = useState(false);
    const [profile, setProfile] = useState({
        id: auth.id,
        name: auth.name,
        userPhoto: null,
        email: auth.email,
        loading: false,
        err: []
    })
    const [open, setOpen] = useState(false);

    const showMessage = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };
    const [userDataPreview, setUserDataPreview] = useState({
        name: '',
        email: ''
    });
    const UpdateProfile = (e) => {
        e.preventDefault();
        setProfile({ ...profile, loading: true })
        axios
            .put('http://localhost:8070/user/updateUserProfile', {
                id: profile.id,
                name: profile.name,
                email: profile.email
        })
        .then((response) => {
            setProfile({...profile,loading: false });
            setUserDataPreview({name:profile.name,email:profile.email});
            showMessage();
            handleOpenEditProfile();
            console.log('updated successfully!');
        })
        .catch((error) => {
            setProfile({ ...profile, loading: false})
            console.log('update profile error: '+error);
        });
    }
    useEffect(() => {

        // axios
        //     .get(`http://localhost:8070/user/getUserByToken/${auth.refreshToken}`)
        //     .then((response) => {
        //         setProfile({ ...profile, id: response.data.id, name: response.data.name, email: response.data.email,role: response.data.role, loading: false });
        //         setUserDataPreview({name:profile.name,email:profile.email});
        //         // console.log(response.data);
        //     })
        //     .catch((error) => {
        //         console.log('view profile error: '+error);
        //         setProfile({ ...profile, loading: false});
        //     });
        }, []);
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const handleVisibility = () => {
        setIsVisible(!isVisible);
    };
    const handleOpenEditProfile = () => {
        setOpenEditProfile(!openEditProfile)
    }
    const [image, setImage] = useState(null);
    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.onloadend = () => {
        setImage(reader.result);
        };
        reader.readAsDataURL(file);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    const camera = <FiCamera />;
    const LogoutFunction = () => {
        removeAuthenticatedUser();
        navigate('/login');
        console.log('loged out successfully!')
    }
    return (
        <>  
            <button className='profile-menu-btn' onClick={handleVisibility}>
                <Avatar alt="Sabah hassan" src={sabah} />
            </button>
            {
                isVisible && 
                <div className="profile-bar" >
                    <div className="profile-upper">
                        <div className="close-btn" onClick={handleVisibility}>
                            <VscClose />
                        </div>
                        <Link className="profile-logout-container" onClick={()=>LogoutFunction()}>
                            <HiOutlineLogout />
                        </Link>
                    </div>
                    <Stack spacing={43} direction='column'>
                        <Stack spacing={6} direction='column'>
                            <div className="update-photo">
                                <div {...getRootProps()} className='profile-photo-dropzone'>
                                    <input {...getInputProps()} />
                                    <div className='user-photo'>
                                        <img src={sabah} alt="userPhoto" />
                                        <div className="camera">
                                            {camera}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="user-name">
                                <p style={{fontSize:'25px'}}>{userDataPreview.name}</p>
                            </div>
                        </Stack>
                    </Stack>
                    <div className="update-profile">
                        <Form>
                            <Stack direction='column' spacing={3} className="profile-details-stack">
                                <Stack spacing={0.2} direction='column'>
                                    <label className="contact-label">Name</label>
                                    <Input value={profile.name} disabled={!openEditProfile} placeholder="Name" startDecorator={<FaUser />} variant="plain" color="neutral" type="text" name="user_name" onChange={(e)=>setProfile({...profile,name:e.target.value})}/>
                                </Stack>
                                <Stack spacing={0.2} direction='column'>
                                    <label className="contact-label">Email</label>
                                    <Input value={profile.email} disabled={!openEditProfile} placeholder="Email" startDecorator={<MdOutlineAlternateEmail />} variant="plain" color="neutral" type="email" name="user_email" onChange={(e)=>setProfile({...profile,email:e.target.value})}/>
                                    </Stack>
                                    {
                                    openEditProfile &&
                                    <>
                                        <button className='update-profile-btn' onClick={UpdateProfile} >{profile.loading ? <CircularProgress size={20} /> : 'confirm'}</button>
                                    </>
                                }
                                {
                                    !openEditProfile &&
                                    <>
                                        <button className='update-profile-btn' onClick={handleOpenEditProfile}  >edit profile</button>
                                        <button  className='update-profile-btn'><ResetPassword /></button>
                                    </>
                                }
                            </Stack>
                            
                        </Form>
                    </div>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert
                        onClose={handleClose}
                        severity="success"
                        variant="filled"
                        sx={{ width: '100%' }}
                        >
                            Your profile updated successfully!
                        </Alert>
                    </Snackbar>
                </div>
            }
        </>
    );
};

export default Profile;