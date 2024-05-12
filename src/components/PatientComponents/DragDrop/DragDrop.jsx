import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import './DragDrop.scss';
import { BiCloudUpload } from "react-icons/bi";
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { getAuthenticatedUser } from '../../../Helper/Storage';

const DragDrop = () => {
    const auth = getAuthenticatedUser();
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
    const { getRootProps, getInputProps , isDragActive } = useDropzone({ onDrop });
    
    const handleUpload = (e) => {
        e.preventDefault();
        if (!image) {
            alert('Please select an image to upload');
            return;
        }

        const formData = new FormData();
        formData.append('image', image);
        console.log(image)
        axios.post(`http://localhost:8070/patient/uploadXRay?id=${auth.id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${auth.refreshToken}` 
            }
        })
        .then(response => {
            console.log(response.data);
            // Handle success
            console.log('uploaded successfully!')
        })
        .catch(error => {
            console.error('Error uploading image: ', error);
            // Handle error
        });
    };

    return (
        <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
            <Box className="dropzone-container" sx={{width:{xs:'90%',sm:'90%',md:'80%',lg:'70%',xl:'70%'}}}>
                <Box {...getRootProps()} className='dropzone' sx={{padding:'15px'}}>
                        <input {...getInputProps()} />
                        {
                            isDragActive ?
                            <Box sx={{fontSize:{xs:'15px',sm:'15px',md:'20px',lg:'20px',xl:'20px'}}}>Drop X-Ray here...</Box> :
                            <Box sx={{fontSize:{xs:'15px',sm:'15px',md:'20px',lg:'20px',xl:'20px'}}}>Drag and drop your X-Ray here or click here to upload.</Box>
                        }
                </Box>
                <div className="img-btn">
                    {image && (
                        <div className='image-preview'>
                            <img src={image} alt="Preview" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                        </div>
                    )}
                    {/* <ShowResult /> */}
                    <button className="upload-btn" onClick={handleUpload}>
                        <Stack spacing={0.5} direction='row' sx={{ fontSize:{xs:'20px',sm:'20px',md:'23px',lg:'23px',xl:'23px'},width:{xs:'100px',sm:'100px',md:'130px',lg:'130px',xl:'130px'},paddingLeft:"5px"}}>
                            <div className="upload-icon">
                                <BiCloudUpload />
                            </div>
                            <p>upload</p>
                        </Stack>
                    </button>
                </div>
            </Box>
            <Box className="scan-result" sx={{width:{xs:'90%',sm:'90%',md:'80%',lg:'70%',xl:'70%'}}}>
                <Alert severity='success'>none fractured</Alert>
            </Box>
        </Grid>
    );
};

export default DragDrop;
