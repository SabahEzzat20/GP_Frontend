import React, { useCallback, useState } from 'react';
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
    const [file, setFile] = useState(null);
    const [result, setResult] = useState('');

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

    const handleUpload = (e) => {
        e.preventDefault();
        if (!file) {
            alert('Please select an image to upload');
            return;
        }
        const formData = new FormData();
        formData.append('file', file);
        console.log(file);
        axios.post(`http://localhost:8070/patient/uploadXRay?id=${auth.id}`, formData,{
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${auth.refreshToken}` 
            }
        })
        .then(response => {
            console.log('xray result besm Allah : '+response.data.result);
            setResult(response.data.result);
        })
        .catch(error => {
            console.error('Error uploading image: ', error);
            // Handle error
        });
    };

    return (
        <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
            {
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
            }
            <Box className="dropzone-container" sx={{ width: { xs: '90%', sm: '90%', md: '80%', lg: '70%', xl: '70%' } }}>
                <form encType="multipart/form-data" className='dragForm' onSubmit={handleUpload}>
                    <label htmlFor="xray-image">Upload XRay</label> <br />
                    <input type="file" name="file" id='xray-image' className='imageUpload' onChange={handleFileChange} />
                    {/* <button type="submit">Upload</button> */}
                    <button className="upload-btn" type='submit'>
                        <Stack spacing={0.5} direction='row' sx={{ fontSize: { xs: '20px', sm: '20px', md: '23px', lg: '23px', xl: '23px' }, width: { xs: '100px', sm: '100px', md: '130px', lg: '130px', xl: '130px' }, paddingLeft: "5px" }}>
                            <div className="upload-icon">
                                <BiCloudUpload />
                            </div>
                            <p>upload</p>
                        </Stack>
                    </button>
                </form>
                <div className="img-btn">
                    {preview && (
                        <div className='image-preview'>
                            <img src={preview} alt="Preview" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                        </div>
                    )}
                </div>
            </Box>
        </Grid>
    );
};

export default DragDrop;
