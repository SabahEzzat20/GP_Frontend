import React from 'react';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import userAvatar from '../../../images/saboha.jpeg';
import './NextPatientDetails.scss';
import Button from '@mui/material/Button';
import FolderIcon from '@mui/icons-material/Folder';
import xray from '../../../images/hand-255x300.jpg'
const NextPatientDetails = () => {
    const openImageInNewTab = (imageUrl) => {
        window.open(imageUrl, '_blank');
    };
    return (
        <div>
            <div className="next-patient-details">
                <Stack direction='column' spacing={5}>
                    <Stack direction="row" spacing={2}>
                        <Avatar alt={"sabah"} src={userAvatar} />
                        <div className="patient-details">
                            <Stack direction="column" spacing={0.1}>
                                <p className='patient-name'>Sabah Hassan</p>
                                <p className='patient-date'>Thurs , May 23 2024 [ 02:00 PM ]</p>
                            </Stack>
                        </div>
                    </Stack>
                    <Stack spacing={10} direction='row'>
                        <div className="patient-age">
                            <Stack direction="column" spacing={1}>
                                <p>Age</p>
                                <p className='patient-information'>21</p>
                            </Stack>
                        </div>
                        <div className="patient-gender">
                            <Stack direction="column" spacing={1}>
                                <p>Gender</p>
                                <p className='patient-information'>Female</p>
                            </Stack>
                        </div>
                        <div className="patient-height">
                            <Stack direction="column" spacing={1}>
                                <p>Height</p>
                                <p className='patient-information'>162 cm</p>
                            </Stack>
                        </div>
                        <div className="patient-gender">
                            <Stack direction="column" spacing={1}>
                                <p>Weight</p>
                                <p className='patient-information'>56 kg</p>
                            </Stack>
                        </div>
                    </Stack>
                    <Stack direction='row' spacing={2}>
                        <div className="">
                        <Button variant="outlined" startIcon={<FolderIcon />} onClick={() => openImageInNewTab(xray)}>
                            Attached X-Rays
                        </Button>
                        </div>
                    </Stack>
                </Stack>
            </div>
        </div>
    );
};

export default NextPatientDetails;