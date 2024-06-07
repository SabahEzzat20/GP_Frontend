import React, { useCallback, useRef, useState } from 'react';
import axios from 'axios';
import './DragDrop.scss';
import { BiCloudUpload } from "react-icons/bi";
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { getAuthenticatedUser } from '../../../Helper/Storage';
import Modal from "react-bootstrap/Modal";
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import Lottie from 'lottie-react';
import success from '../../../images/Animation - 1717674376494.json'
const DragDrop = () => {
    const auth = getAuthenticatedUser();
    const [file, setFile] = useState(null);
    const [result, setResult] = useState('');
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const showMessage = () => {
    setOpen(true);
    };

    const handleCloseMessage = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }

    setOpen(false);
    };
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);

        const reader = new FileReader();
        reader.onload = (event) => {
            setPreview(event.target.result);
        };
        reader.readAsDataURL(selectedFile);
    };

    const [preview, setPreview] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const handleShowResult = () => {
        setShowResult(!showResult)
    }
    const handleUpload = (e) => {
        e.preventDefault();
        if (!file) {
            alert('Please select an image to upload');
            return;
        } else if (auth) {
            setLoading(true)
            const formData = new FormData();
            formData.append('file', file);
            console.log(file);
            axios.post(`http://localhost:8070/patient/uploadXRay?id=${auth.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${auth.refreshToken}`
                }
            })
                .then(response => {
                    setResult(response.data.result);
                    setLoading(false)
                    setFile(null)
                    setPreview(null)
                    handleShowResult();
                })
                .catch(error => {
                    setLoading(false)
                    showMessage()
                });
        } else {
            handleOpen();
        }
    };
    const inputRef = useRef(null);
    const handleImageClick = () => {
        inputRef.current.click();
    }
    const [openMessage, SetOpenMessage] = useState(false);
    const handleOpen = () => {
        SetOpenMessage(!openMessage)
    }
    const handleClose = () => SetOpenMessage(false);
    return (
        <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
            {/* {
                result === 'fractured' &&
                <Box className="scan-result" sx={{ width: { xs: '90%', sm: '90%', md: '80%', lg: '70%', xl: '70%' } }}>
                    <Alert severity='error'>Bone exists in XRay is fractured</Alert>
                </Box>
            }
            {
                result === 'not fractured' && 
                <Box className="scan-result" sx={{ width: { xs: '90%', sm: '90%', md: '80%', lg: '70%', xl: '70%' } }}>
                    <Alert severity='success'>Bone exists in XRay is not fractured</Alert>
                </Box>
            } */}
            {showResult &&
                <Modal
                show={showResult}
                onHide={handleShowResult}
                // backdrop="static"
                keyboard={false}
                centered
                className="forget-pass-modal"
                size="md"
                style={{border:'none'}}
            >
                <Modal.Body className="modalBody" style={{textAlign:'center'}}>
                    <Box sx={{ borderRadius: '50%', backgroundColor: 'white',marginLeft:'auto',marginRight:'auto',marginTop:'-20%',border:'1px solid #46df86', width:'150px',height:'150px',display:"flex",alignItems:'center',justifyContent:'center'}}>
                        <Lottie animationData={success} ></Lottie>
                    </Box>
                    <Box>
                    {
                        result === 'fractured' &&
                        <Box sx={{ fontSize: '35px', color: 'rgba(104, 104, 104)', fontWeight: 'bold',marginBottom:'30px' }}>There is a Fracture!</Box>
                    }
                    {
                        result === 'not fractured' && 
                        <Box sx={{ fontSize: '35px', color: 'rgba(104, 104, 104)', fontWeight: 'bold',marginBottom:'30px' }}>There is no Fracture!</Box>
                    }
                    <Box sx={{color:'rgba(112, 112, 112)',margin:'10px'}}>We provide an online reservation with specialized orthopedist and then go to his clinic location, would you like to make a reservation?</Box>
                    </Box>
                    {/* <Divider /> */}
                    <Box sx={{display:"flex",justifyContent:'flex-end',marginTop:'40px'}}>
                        <button className='action-btn no' onClick={handleShowResult}>No, thanks</button>
                        <Link style={{color:'white',textDecoration:'none'}} to={'/patient/bigForm'}><button className='action-btn yes'>Yes, I would like</button></Link>
                    </Box>
                </Modal.Body>
            </Modal>
            }
            <Box className="dropzone-container" sx={{ width: { xs: '90%', sm: '90%', md: '80%', lg: '60%', xl: '60%' }}}>
                <form encType="multipart/form-data" onSubmit={handleUpload} style={{width:'100%',height:'80%'}}>
                    <Box  className='dragForm' onClick={handleImageClick}>
                        <div htmlFor="xray-image" style={{fontSize:'23px'}}>Upload xray here for scanning and show result for you !</div> <br />
                        <input type="file" name="file" ref={inputRef} id='xray-image' className='imageUpload' onChange={handleFileChange} style={{display:'none'}} />
                    </Box>
                    <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'20px',height:'60px'}}>
                        {preview && (
                            <div className='image-preview'>
                                <img src={preview} alt="Preview" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                            </div>
                        )}
                        <button className="upload-btn" type='submit'>
                            <Stack spacing={0.5} direction='row' sx={{ display:'flex',alignItems:'center',justifyContent:'center',fontSize: { xs: '20px', sm: '20px', md: '20px', lg: '20px', xl: '20px' }, width: { xs: '100px', sm: '100px', md: '170px', lg: '170px', xl: '170px' }, paddingLeft: "5px" }}>
                            {loading ? <>uploading....</> : 'upload xray'} 
                            </Stack>
                        </button>
                    </Box>
                </form>
            </Box>
            {openMessage &&
                <Modal
                show={openMessage}
                onHide={handleClose}
                // backdrop="static"
                keyboard={false}
                centered
                className="forget-pass-modal"
                size="md"
                style={{border:'none'}}
            >
                <Modal.Body className="modalBody" style={{textAlign:'center'}}>
                        <Box sx={{ fontSize: '35px', color: 'rgba(104, 104, 104)', fontWeight: 'bold' }}>Login</Box>
                        <br />
                        <Box sx={{margin:'40px'}}>
                            <Box sx={{ fontSize: '16px', color: 'rgba(112, 112, 112)'}}>To continue scanning your xray , we need you to login so you can browse our system comfortably !</Box>
                            <br /><br />
                            <Link style={{textDecoration:'none',color:'white'}} to={'/login'}><button className='loginFromHome-btn'>Login</button></Link>
                        </Box>
                        <Divider variant="middle" />
                        <Box sx={{color: 'rgba(112, 112, 112)',marginTop:'20px'}}>New to Orthopedista? <span><Link style={{textDecoration:'none',color:'#cf453b'}} to={'/register'}>Create an account</Link></span></Box>
                </Modal.Body>
            </Modal>
            }
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert
                    onClose={handleCloseMessage}
                    severity="error"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    something went wrong, try again later!
                </Alert>
            </Snackbar>
        </Grid>
    );
};

export default DragDrop;
