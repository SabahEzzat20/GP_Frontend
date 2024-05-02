import React from 'react';
import './DoctorCard.scss';
//const doctor = require('../../../../images/doctor-nurses-special-equipment.jpg');


const DoctorCard = ({doctor}) => {
    return (
        <div className="doctor-card">
            <img src={doctor.image} alt="Doctor" className="doctor-image" />
            <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <p>{doctor.department}</p>
                
            </div>
        </div>
    );
};

export default DoctorCard;
