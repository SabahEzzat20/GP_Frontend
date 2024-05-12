import React ,{useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import FolderIcon from '@mui/icons-material/Folder';
import xray from '../../../images/hand-255x300.jpg'
import Stack from '@mui/material/Stack';
import './PatientHistory.scss';
import Divider from '@mui/material/Divider';
import emptyPage from '../../../images/No data-cuate.png'
import { getAuthenticatedUser } from '../../../Helper/Storage';
import axios from 'axios';
const PatientHistory = () => {
    const data = 1;
    const [appointments, setAppointments] = useState({
        loading: false,
        result: [],
        err: '',
    });
    const openImageInNewTab = (imageUrl) => {
        window.open(imageUrl, '_blank');
    };
    const userToken = getAuthenticatedUser();
    const refreshToken = userToken.refreshToken;
    useEffect(() => {
        // setAppointments({...appointments,loading: true})
        axios
        .get(`http://localhost:8070/user/getUserByToken/${refreshToken}`)
        .then((response) => {
        })
        .catch((error) => {
            console.log(error);
        });
       

    }, []); 

    
    return (
        <div>
                {
                    data === 1 ? 
                        <div className="history-bar">
                            <Stack spacing={3} direction='column'>
                                <Stack direction='row' spacing={70}>
                                    <Stack spacing={3} direction='row'>
                                        <Button variant="outlined" startIcon={<FolderIcon />} onClick={() => openImageInNewTab(xray)}>
                                            Attached X-Rays
                                        </Button>
                                        <div className="history-result">
                                            <Stack spacing={1} direction='row'>
                                                <p> Result :</p>
                                                <p className='fractured'> fractured</p>
                                            </Stack>
                                        </div>
                                    </Stack>
                                    <Stack direction='row' spacing={2} className='history-time'>
                                        <p>25/3/2024</p>
                                        <p>[10:00 AM]</p>
                                    </Stack>
                                </Stack>
                                <Divider />
                                <Stack direction='row' spacing={70}>
                                    <Stack spacing={3} direction='row'>
                                        <Button variant="outlined" startIcon={<FolderIcon />} onClick={() => openImageInNewTab(xray)}>
                                            Attached X-Rays
                                        </Button>
                                        <div className="history-result">
                                            <Stack spacing={1} direction='row'>
                                                <p> Result :</p>
                                                <p className='fractured'> fractured</p>
                                            </Stack>
                                        </div>
                                    </Stack>
                                    <Stack direction='row' spacing={2} className='history-time'>
                                        <p>1/7/2024</p>
                                        <p>[10:00 AM]</p>
                                    </Stack>
                                </Stack>
                                <Divider />
                                <Stack spacing={3} direction='row'>
                                    <Button variant="outlined" startIcon={<FolderIcon />} onClick={() => openImageInNewTab(xray)}>
                                        Attached X-Rays
                                    </Button>
                                    <div className="history-result">
                                        <Stack spacing={1} direction='row'>
                                            <p> Result :</p>
                                            <p className='nonfractured'> fractured</p>
                                        </Stack>
                                    </div>
                                </Stack>
                                <Divider />
                                <Stack spacing={3} direction='row'>
                                    <Button variant="outlined" startIcon={<FolderIcon />} onClick={() => openImageInNewTab(xray)}>
                                        Attached X-Rays
                                    </Button>
                                    <div className="history-result">
                                        <Stack spacing={1} direction='row'>
                                            <p> Result :</p>
                                            <p className='nonfractured'> fractured</p>
                                        </Stack>
                                    </div>
                                </Stack>
                                <Divider />
                                <Stack spacing={3} direction='row'>
                                    <Button variant="outlined" startIcon={<FolderIcon />} onClick={() => openImageInNewTab(xray)}>
                                        Attached X-Rays
                                    </Button>
                                    <div className="history-result">
                                        <Stack spacing={1} direction='row'>
                                            <p> Result :</p>
                                            <p className='nonfractured'> fractured</p>
                                        </Stack>
                                    </div>
                                </Stack>
                                <Divider />
                                <Stack spacing={3} direction='row'>
                                    <Button variant="outlined" startIcon={<FolderIcon />} onClick={() => openImageInNewTab(xray)}>
                                        Attached X-Rays
                                    </Button>
                                    <div className="history-result">
                                        <Stack spacing={1} direction='row'>
                                            <p> Result :</p>
                                            <p className='fractured'> fractured</p>
                                        </Stack>
                                    </div>
                                </Stack>
                                <Divider />
                                <Stack spacing={3} direction='row'>
                                    <Button variant="outlined" startIcon={<FolderIcon />} onClick={() => openImageInNewTab(xray)}>
                                        Attached X-Rays
                                    </Button>
                                    <div className="history-result">
                                        <Stack spacing={1} direction='row'>
                                            <p> Result :</p>
                                            <p className='fractured'> fractured</p>
                                        </Stack>
                                    </div>
                                </Stack>
                                <Divider />
                                <Stack spacing={3} direction='row'>
                                    <Button variant="outlined" startIcon={<FolderIcon />} onClick={() => openImageInNewTab(xray)}>
                                        Attached X-Rays
                                    </Button>
                                    <div className="history-result">
                                        <Stack spacing={1} direction='row'>
                                            <p> Result :</p>
                                            <p className='nonfractured'> fractured</p>
                                        </Stack>
                                    </div>
                                </Stack>
                                <Divider />
                                <Stack spacing={3} direction='row'>
                                    <Button variant="outlined" startIcon={<FolderIcon />} onClick={() => openImageInNewTab(xray)}>
                                        Attached X-Rays
                                    </Button>
                                    <div className="history-result">
                                        <Stack spacing={1} direction='row'>
                                            <p> Result :</p>
                                            <p className='fractured'> fractured</p>
                                        </Stack>
                                    </div>
                                </Stack>
                                <Divider />
                                <Stack spacing={3} direction='row'>
                                    <Button variant="outlined" startIcon={<FolderIcon />} onClick={() => openImageInNewTab(xray)}>
                                        Attached X-Rays
                                    </Button>
                                    <div className="history-result">
                                        <Stack spacing={1} direction='row'>
                                            <p> Result :</p>
                                            <p className='fractured'> fractured</p>
                                        </Stack>
                                    </div>
                                </Stack>
                            </Stack>
                        </div>      
                        : 
                        <div className="empty-page">
                            <img src={emptyPage} alt="no data"/>
                        </div>
                }
        </div>
    );
};

export default PatientHistory;