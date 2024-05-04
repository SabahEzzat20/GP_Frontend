import React from 'react';
import Lottie from 'lottie-react';
import empty from '../../images/Animation - 1714507273712.json';
import Box from '@mui/material/Box'
function Empty () {
    return (
        <Box sx={{}}>
            <Lottie animationData={empty} style={{ width: '250px', height: '250px' }}></Lottie>
        </Box>
    );
};

export default Empty;