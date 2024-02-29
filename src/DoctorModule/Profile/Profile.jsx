import { useCallback, useState } from "react";
import Avatar from '@mui/material/Avatar';
import sabah from '../../images/saboha.jpeg';
import './Profile.scss'
import { VscClose } from "react-icons/vsc";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import  scanProfilePhoto  from '../../images/face-id (1).png';
import { useDropzone } from "react-dropzone";
import { HiOutlineLogout } from "react-icons/hi";

const Profile = () => {
    const [isVisible, setIsVisible] = useState(false);
    const handleVisibility = () => {
        setIsVisible(!isVisible);
    };
    
    const [image, setImage] = useState(null);

    const onDrop = useCallback((acceptedFiles) => {
    // Assuming you only want to handle one file
    const file = acceptedFiles[0];
    
    // Use FileReader to read the file as a data URL
    const reader = new FileReader();
    reader.onloadend = () => {
        setImage(reader.result);
    };
    reader.readAsDataURL(file);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    
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
                        <div className="profile-logout-container">
                            <HiOutlineLogout />
                        </div>
                    </div>
                    <div className="profile-content">
                        {/* <Avatar alt="Sabah hassan" src={sabah} /> */}
                        <div className="profile-photo-container">
                            <img src={sabah} alt="profilePhoto" />
                        </div>
                        <div className="para-container">
                            <p>sabah hassan</p>
                            <p>doctor</p>
                        </div>
                        </div>
                        <div className="update-photo">
                            <div {...getRootProps()} className='profile-photo-dropzone'>
                                <input {...getInputProps()} />
                                {
                                    isDragActive ?
                                        <p>Drop photo here...</p> :
                                        image ? (
                                            <div className='image-preview'>
                                                <img src={image} alt="Preview" style={{ width: '128px', height: '128px', objectFit: 'cover' }} />
                                            </div>
                                        ):
                                        <img src={scanProfilePhoto} alt="reset img" />
                                }
                                
                            </div>
                        </div>
                    <div className="update-profile">
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>user name</Form.Label>
                            <Form.Control className="textField" type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>email</Form.Label>
                            <Form.Control className="textField" type="email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>phone</Form.Label>
                            <Form.Control className="textField" type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>gender</Form.Label>
                            <Form.Control className="textField" type="text" />
                            </Form.Group>
                            <Link className="change-pass-link">Change password</Link>
                            <button className="update-profile-btn">Update</button>
                        </Form>
                    </div>
                </div>
            }
        </>
    );
};

export default Profile;