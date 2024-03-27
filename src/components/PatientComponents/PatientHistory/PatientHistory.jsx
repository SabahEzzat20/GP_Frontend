import React from 'react';
import Button from '@mui/material/Button';
import FolderIcon from '@mui/icons-material/Folder';
import xray from '../../../images/hand-255x300.jpg'
import Stack from '@mui/material/Stack';

const PatientHistory = () => {
    const openImageInNewTab = (imageUrl) => {
        window.open(imageUrl, '_blank');
    };
    return (
        <div>
            <div className="history-bar">
                <Stack spacing={3} direction='row'>
                    <Button variant="outlined" startIcon={<FolderIcon />} onClick={() => openImageInNewTab(xray)}>
                        Attached X-Rays
                    </Button>
                    <div className="result">
                        <p>Fractured</p>
                    </div>
                </Stack>
            </div>
        </div>
    );
};

export default PatientHistory;