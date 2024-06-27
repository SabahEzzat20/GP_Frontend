import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './AssignAppointmentToDoctor.scss';
import { TfiTimer } from 'react-icons/tfi';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getAuthenticatedUser } from '../../../Helper/Storage';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Input from '@mui/joy/Input';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
const AssignAppointmentToDoctor = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        setAppointment({
            selectedDoctorId: '',
            startTime: '',
            endTime : '',
            day : '',
            status: 1,
            loading: false,
            err: ''
        })
    };
    const handleShow = () => setShow(true);
    const [doctors, setDoctors] = useState({
        loading: false,
        result: [],
        selectedDoctor: '',
        err: null,
        reload: 0,
    });
    const [doctor,setDoctor] = useState({
        id: '',
        doctorName: ''
    })
    const findDoctorName = (name) => {
        return doctors.result.find(doctor => doctor.doctorName === name);
    }
    const getDoctorId = (event) => {
        const foundDoctor = findDoctorName(event.target.value);
        if (foundDoctor) {
            setDoctor({ ...doctor, id: foundDoctor.id, doctorName: event.target.value });
            setAppointment({...Appointment, selectedDoctorId: foundDoctor.id });
        }
    }
    const [Appointment, setAppointment] = useState({
        selectedDoctorId: '',
        startTime: '',
        endTime : '',
        day : '',
        status: 1,
        loading: false,
        err: ''
    })
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState({
        msg: '',
        severity:''
    })
    const showMessage = (msg, sv) => {
        setMsg({msg:msg,severity:sv})
        setOpen(true);
    };

    const handleMsgClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    
        setOpen(false);
    };
    const AssignAppointment = () => {
        setAppointment({...Appointment,loading: true})
        axios
            .post('http://localhost:8070/admin/assignAppointmentToDoctor', {
                doctorId: doctor.id,
                startTime: Appointment.startTime,
                endTime : Appointment.endTime,
                day : Appointment.day,
                status: Appointment.status
            }, {
                headers: {
                'Authorization': `Bearer ${refreshToken}`
                },
            })
            .then((resp) => {
                showMessage('appointment assigned successfully!', 'success');
                handleClose();
                setAppointment({
                    selectedDoctorId: '',
                    startTime: '',
                    endTime : '',
                    day : '',
                    status: 1,
                    loading: false,
                    err: ''
                })
                
            })
            .catch((err) => {
                showMessage('something went wrong, please try again later','error');
            })
    }
    const userToken = getAuthenticatedUser();
    const refreshToken = userToken.refreshToken;
    useEffect(() => {
        setDoctors({...doctors,loading: true})
        axios
            .get('http://localhost:8070/admin/getAllDoctors', {
                headers: {
                'Authorization': `Bearer ${refreshToken}`
                }
            })
            .then((resp) => {
                setDoctors({...doctors, result: resp.data , loading: false , err: ''})
            })
            .catch((err) => {
                setDoctors({...doctors, err:'something went wrong' , loading: false})
            })
    }, [doctors.loading]); 
    
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
                Assign Appointment
            </button>
            <Modal
                show={show}
                size="md"
                onHide={handleClose}
                keyboard={false}
                centered
                className="app-modal"
            >
                <Modal.Body className="modalBody-app">
                    <Form>
                        <Form.Group className="mb-3-app" controlId="exampleForm.ControlInput1">
                            <Form.Label> Doctor </Form.Label>
                            <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
                                <InputLabel id="demo-select-small-label">Doctor</InputLabel>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    value={doctor.doctorName}
                                    label="Doctor"
                                    onChange={getDoctorId}
                                >
                                    {doctors.result.map((doctor) => (
                                        <MenuItem key={doctor.id} value={doctor.doctorName}>
                                            {doctor.doctorName}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Form.Group>
                        <br />
                    <Stack direction='column' spacing={3}>
                    <Stack direction='row' spacing={2} sx={{display:'flex'}}>
                    <Form.Label> Day </Form.Label>
                        <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
                            <InputLabel id="demo-select-small-label">Day</InputLabel>
                            <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                label="Day"
                                value={Appointment.day}
                                onChange={(e)=>setAppointment({ ...Appointment,day:e.target.value})}
                            >
                                {week.map((day) => (
                                    <MenuItem key={day.id} value={day.day}>
                                        {day.day}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Stack>
                    <br />
                    <Stack direction='row' spacing={2} sx={{display:'flex'}}>
                            <InputLabel id="demo-select-small-label">Start time</InputLabel>
                            <Input variant="plain" color="neutral" required type='text' value={Appointment.startTime} onChange={(e)=>setAppointment({...Appointment,startTime:e.target.value})} />
                    </Stack>
                    <br />
                    <Stack direction='row' spacing={2} sx={{display:'flex'}}>
                        <InputLabel id="demo-select-small-label">End time</InputLabel>
                        <Input  variant="plain" color="neutral" required type='text' value={Appointment.endTime} onChange={(e)=>setAppointment({...Appointment,endTime:e.target.value})}/>
                    </Stack>
                    </Stack>
                    </Form>
                    <div className="modalFooter-app" >
                        <button className="assign-app-action" onClick={()=>AssignAppointment()}>{Appointment.loading?'assigning...':'assign'}</button>
                        <button onClick={handleClose} className="cancel-app-action">
                            Cancel
                        </button>
                    </div>
                </Modal.Body>
            </Modal>
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert
                onClose={handleMsgClose}
                severity={msg.severity}
                variant="filled"
                sx={{ width: '100%' }}
                >
                    {msg.msg}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default AssignAppointmentToDoctor;
