import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './AssignAppointmentToDoctor.scss';
import { TfiTimer } from 'react-icons/tfi';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Doctors from '../../../DummyData/Doctors.json';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { AiOutlineDelete } from 'react-icons/ai';
import { getAuthenticatedUser } from '../../../Helper/Storage';
import axios from 'axios';

const AssignAppointmentToDoctor = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [doctors, setDoctors] = useState({
        loading: true,
        result: [],
        selectedDoctor: '', // Holds the selected doctor
        err: null,
        reload: 0,
    });
    const [Appointments, setAppointments] = useState({
        doctorId: '',
        startTime: '',
        endTime : '',
        day : '',
        status: 1
    })

    const handleChange = (event) => {
        setDoctors({ ...doctors, selectedDoctor: event.target.value }); // Update the selected doctor
    };

    const handleNewAppointment = (event) => {
        setAppointments({})
    };
    
    const handleDelete = (i) => {
        const deleteVal =[...Appointments];
        deleteVal.splice(i, 1);
        setAppointments(deleteVal);
    }
    const AssignAppointment = () => {
        // setAppointments({...doctors,loading: true})
        // axios
        //     .post('http://localhost:8070/admin/assignAppointmentToDoctor', {
        //         doctorId: ,
        //         startTime: '',
        //         endTime : '',
        //         day : '',
        //         status: 1
        //     }, {
        //         headers: {
        //         'Authorization': `Bearer ${refreshToken}`
        //         },
        //     })
        //     .then((resp) => {
        //         setDoctors({...doctors, result: resp.data , loading: false , err: ''})
        //         // console.log(resp.data);
                
        //     })
        //     .catch((err) => {
        //     setDoctors({...doctors, err:'something went wrong' , loading: false})
        //     })
    }
    const handleAppointmentChange = (e,i) => {
        const { name, value } = e.target;
        const onChangeVal = [...Appointments];
        onChangeVal[i][name] = value;
        setAppointments(onChangeVal);
    }
    const refreshToken  = getAuthenticatedUser().refreshToken;
    useEffect(() => {
        setDoctors({...doctors,loading: true})
        axios
            .get('http://localhost:8070/admin/getAllDoctors', {
                headers: {
                'Authorization': `Bearer ${refreshToken}`
                },
            })
            .then((resp) => {
                setDoctors({...doctors, result: resp.data , loading: false , err: ''})
                // console.log(resp.data);
                
            })
            .catch((err) => {
            setDoctors({...doctors, err:'something went wrong' , loading: false})
            })
    }, []); 
    
    const week = [
        {
            id: 1,
            day: 'saterday'
        },
        {
            id: 2,
            day: 'sunday'
        },
        {
            id: 3,
            day: 'monday'
        },
        {
            id: 4,
            day: 'tuesday'
        },
        {
            id: 5,
            day: 'wednesday'
        },
        {
            id: 6,
            day: 'thursday'
        },
        {
            id: 7,
            day: 'friday'
        },
    ]

    return (
        <div>
            <button onClick={handleShow} className="modal-button-app">
                <TfiTimer />
                Assign appointment
            </button>
            <Modal
                show={show}
                size="lg"
                onHide={handleClose}
                keyboard={false}
                centered
                className="app-modal"
            >
                <Modal.Header className="modalHeader-app" closeButton>
                    <p>Assign appointment to doctor</p>
                </Modal.Header>
                <Modal.Body className="modalBody-app">
                    <Form>
                        <Form.Group className="mb-3-app" controlId="exampleForm.ControlInput1">
                            <Form.Label> Doctor </Form.Label>
                            <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
                                <InputLabel id="demo-select-small-label">Doctor</InputLabel>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    value={doctors.selectedDoctor} // Bind to the selected doctor
                                    label="Doctor"
                                    onChange={handleChange}
                                >
                                    {doctors.result.map((doctor) => (
                                        <MenuItem key={doctor.id} value={doctor.doctorName}>
                                            {doctor.doctorName}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Form.Group>
                        {/* Rest of the code remains the same */}
                    <Fab size="small" color="primary" aria-label="add" className='add-app-btn' onClick={handleNewAppointment}>
                        <AddIcon />
                    </Fab>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="modalFooter-app">
                    <button className="assign-app-action">Assign</button>
                    <button onClick={handleClose} className="cancel-app-action">
                        Cancel
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AssignAppointmentToDoctor;
