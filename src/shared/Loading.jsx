import React from 'react';
import Lottie from 'lottie-react';
import loading from '../images/Animation - 1717741589297.json'
import Box from '@mui/material/Box';
const Loading = () => {
    return (
        <Box sx={{width:'100%',height:'100vh',backgroundColor:'white',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'100px',height:'100px',backgroundColor:'white'}}>
                <Lottie animationData={loading} ></Lottie>
            </Box>
        </Box>
    );
};

export default Loading;