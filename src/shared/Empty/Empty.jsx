import React from 'react';
import Lottie from 'lottie-react';
import empty from '../../images/Animation - 1714507273712.json';
import Box from '@mui/material/Box'
function Empty () {
    return (
        <Box sx={{width: {xs:'250px',sm:'250px',md:'400px',lg:'400px',xl:'400px'}, height: {xs:'250px',sm:'250px',md:'400px',lg:'400px',xl:'400px'}}}>
            <Lottie animationData={empty} style={{  }}></Lottie>
        </Box>
    );
};

export default Empty;