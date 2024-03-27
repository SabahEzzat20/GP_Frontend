import {React, useState ,useCallback} from 'react';
import saboha2 from '../../../images/saboha2.jpg'
import './LeftSideProfile.scss'
import Stack from '@mui/material/Stack';
// import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { FiCamera } from "react-icons/fi";
import { useDropzone } from 'react-dropzone';
import { TbLogout2 } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LeftSideProfile = () => {
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
    return (
        <div className='profile-sidebar'> 
            <Link className="home-icon" to={'/patient/homepage'}>
                <FaHome />
            </Link>
            <Stack spacing={4} direction='column'>
                {/* <Badge color="secondary" badgeContent='7'> */}
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
            {/* </Badge> */}
                <div className="user-name">
                    <p>Fatma hassan</p>
                </div>
            </Stack>
            <Stack direction='row' spacing={1} className='logout'>
                <div >
                    <TbLogout2 /> 
                </div>
                <div > 
                    <p>logout</p>
                </div>
            </Stack>
        </div>
    );
};

export default LeftSideProfile;