import React from 'react';
import notfoundImage from '../../images/404page.png'
import './NotFoundPage.scss';
import {Link} from 'react-router-dom'
import Stack from '@mui/material/Stack';
const NotFoundPage = () => {
    return (
        <div className='notfoundcontainer'>
            <Stack className="notfoundbody" direction='column' spacing={3}>
                <img src={notfoundImage} alt="notfound" />
                <Link to={'/patient/homepage'}>
                    <button>back to home page</button>
                </Link>
            </Stack>
        </div>
    );
};

export default NotFoundPage;