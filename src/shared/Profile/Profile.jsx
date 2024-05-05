import { useCallback, useState } from "react";
import Avatar from '@mui/material/Avatar';
import sabah from '../../images/saboha.jpeg';
import './Profile.scss'
import { VscClose } from "react-icons/vsc";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { HiOutlineLogout } from "react-icons/hi";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ResetPassword from "../ResetPassword/ResetPassword";
import Stack from '@mui/material/Stack';
import { FiCamera } from "react-icons/fi";
import Input from '@mui/joy/Input';
import { FaUser } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { removeAuthenticatedUser } from "../../Helper/Storage";
import { useNavigate } from "react-router-dom";
const Profile = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const handleVisibility = () => {
        setIsVisible(!isVisible);
    };
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
    const [gender, setGender] = useState('');
    const handleChange = (event) => {
        setGender(event.target.value);
    };
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
                        <Stack spacing={4} direction='column'>
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
                                <p>Fatma hassan</p>
                            </div>
                        </Stack>
                    </Stack>
                    <div className="update-profile">
                        <Form>
                            <Stack direction='column' spacing={3} className="profile-details-stack">
                                <Stack direction='column' spacing={0.2}>
                                    <Input placeholder="user name" startDecorator={<FaUser />} variant="plain" color="neutral"/>
                                </Stack>
                                <Stack spacing={0.2} direction='column'>
                                    <Input placeholder="email" startDecorator={<MdOutlineAlternateEmail />} variant="plain" color="neutral" type="email"/>
                                </Stack>
                            </Stack>
                            <div className="reset-pass">
                                <ResetPassword />
                            </div>
                            <button className="update-profile-btn">Update</button> 
                        </Form>
                    </div>
                </div>
            }
        </>
    );
};

export default Profile;