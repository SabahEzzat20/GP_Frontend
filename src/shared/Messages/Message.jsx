import React ,{ useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
const Message = (messageData) => {
    const [open, setOpen] = useState(false);
    const showMessage = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpen(false);
    };

    return (
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
                >
                Appointment reserved successfully!
                </Alert>
            </Snackbar>
    );
};

export default Message;