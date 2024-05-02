import React from 'react';
import './ExperienceDoctors.scss';
import DoctorCard from './DoctorCard/DoctorCard';
const doctor1 = require('../../../images/ai-generated-8578389_1280.png');
const doctor2 = require('../../../images/ai-generated-8578393_1280.png');
const doctor3 = require('../../../images/ai-generated-8655322_1280.png');
const doctor4 = require('../../../images/ai-generated-8662131_1280.png');

const doctorsData = [
    {
      id: 1,
      name: 'Dr. John Doe',
      department: 'Orthopedics',
      image: doctor1,
    },
    {
      id: 2,
      name: 'Dr. Ahmed saber',
      department: 'Orthopedics',
      image: doctor3,
      
    },
    {
        id: 3,
        name: 'Dr. Rawan Hamdy',
        department: 'Orthopedics',
        image: doctor2,
        
      },
      {
        id: 4,
        name: 'Dr. Sarah Mohamed',
        department: 'Orthopedics',
        image: doctor4,
      }
  
  ];
const ExperienceDoctors = () => {
  return (
    <div className="experience-doctors">
      <h2>Our Experienced Doctors</h2>
      <div className="doctor-cards">
        {doctorsData.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
        </div>
    </div>
  );
};

export default ExperienceDoctors;
