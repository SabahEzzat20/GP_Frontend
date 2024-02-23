import React from 'react';
import addAppImage from '../images/Doctors-pana.png';
// import Button from 'react-bootstrap/Button';
import '../Sass/AddAppointmentCard.scss';
import Button from '@mui/material/Button';

const AddAppointmentCard = () => {
    return (
        <>
            <div className='add-appointment'>
                <div className="add-appointment-leftside">
                    <p>Add appointment in 
                        <br /> your schedule now
                    </p>
                    <Button variant="contained" className='addapp-btn'>add appointment</Button>
                </div>
                <div className="add-appointmetn-rightside">
                    <img src={addAppImage} alt="add appointment" width={300} height={200} />
                </div>
            </div>
        </>
    );
};

export default AddAppointmentCard;