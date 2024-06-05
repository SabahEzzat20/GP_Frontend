import React from 'react';
import notfoundImage from '../../images/404page.png'
import './NotFoundPage.scss';
import {Link} from 'react-router-dom'
import Stack from '@mui/material/Stack';
import  Box from '@mui/material/Box';
const NotFoundPage = () => {
    return (
        <div className='notfoundcontainer'>
            <Stack className="notfoundbody" direction='column' spacing={3}>
                <img src={notfoundImage} alt="notfound" />
                <p style={{ color: 'rgb(61, 61, 61)', fontWeight: 'bold' ,fontSize:'40px'}}>Page Not Found</p>
                <Box sx={{textAlign:'center',lineHeight:'1.6',color:'rgb(116, 116, 116)',fontSize:'15px'}}>
                    <p>We're sorry, the page you requested could not be found <br />
                        please go back to the homepage !</p>
                </Box>
                <Link to={'/patient/homepage'}>
                    <button>Go Home</button>
                </Link>
            </Stack>
        </div>
    );
};

export default NotFoundPage;