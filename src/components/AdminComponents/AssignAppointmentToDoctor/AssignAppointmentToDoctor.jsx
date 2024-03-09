import React , {useState} from 'react';
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./AssignAppointmentToDoctor.scss";
import { TfiTimer } from "react-icons/tfi";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Doctors from "../../../DummyData/Doctors.json"
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { AiOutlineDelete } from "react-icons/ai";

const AssignAppointmentToDoctor = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [doctor, setDoctor] = useState('');
    const [Appointments , setAppointments] = useState([])
    const handleChange = (event) => {
        setDoctor(event.target.value);
    };
    const handleNewAppointment = (event) => {
        setAppointments([...Appointments, { day: '', fromHour: '' , toHour: ''}])
    };
    
    const handleDelete = (i) => {
        const deleteVal =[...Appointments];
        deleteVal.splice(i, 1);
        setAppointments(deleteVal);
    }
    
    const handleAppointmentChange = (e,i) => {
        const { name, value } = e.target;
        const onChangeVal = [...Appointments];
        onChangeVal[i][name] = value;
        setAppointments(onChangeVal);
    }
    
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
            <button  onClick={handleShow} className="modal-button-app">
                <TfiTimer />
                Assign appointment
            </button>
            <Modal
                show={show}
                size='lg'
                onHide={handleClose}
                // backdrop="static"
                keyboard={false}
                centered
                className="app-modal"
            >
                <Modal.Header className="modalHeader-app" closeButton>
                    <Stack dicrection='row' spacing={2}>
                        <item>hello</item>
                        <item>omar</item>
                    </Stack>
                    <p>Assign appointment to doctor</p>
                </Modal.Header>
                <Modal.Body className="modalBody-app">
                <Form>
                    <Form.Group className="mb-3-app" controlId="exampleForm.ControlInput1">
                        <Form.Label> Doctor </Form.Label>
                        <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
                            <InputLabel id="demo-select-small-label">doctor</InputLabel>
                            <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={doctor}
                                label="doctor"
                                onChange={handleChange}
                            >
                                {Doctors.map((doctor) => (
                                    <MenuItem key={doctor.id} value={doctor.name}>
                                        {doctor.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Form.Group>
                        {Appointments.map((value, i) => (
                            <div className='App-container'>
                            <Form.Group className='day-container'>
                                <Form.Label> day </Form.Label>
                                <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
                                    <InputLabel id="demo-select-small-label">day</InputLabel>
                                    <Select
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        value={value.day}
                                        label="day"
                                        onChange={(e) => handleAppointmentChange(e,i)}
                                        name='day'
                                        required
                                    >
                                        
                                        {week.map((day) => (
                                            <MenuItem key={day.id} value={day.day}>
                                                {day.day}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Form.Group>
                            <Form.Group className='time-container'>
                                <Form.Label> time  :  </Form.Label>
                            </Form.Group>
                            <Form.Group className='time-container'>
                                <Form.Label> from  </Form.Label>
                                <input required type="time" className='time-input' value={value.fromHour} name='fromHour' onChange={(e) => handleAppointmentChange(e,i)}/>
                            </Form.Group>
                            <Form.Group className='time-container'>
                                <Form.Label> to  </Form.Label>
                                <input required type="time" className='time-input' value={value.toHour} name='toHour' onChange={(e) => handleAppointmentChange(e,i)}/>
                            </Form.Group>
                            <button className='delete-app' onClick={()=>handleDelete(i)}>
                                <AiOutlineDelete />
                            </button>
                            </div>
                        ))}
                    <Fab size="small" color="primary" aria-label="add" className='add-app-btn' onClick={handleNewAppointment}>
                        <AddIcon />
                    </Fab>
                </Form>
                </Modal.Body>
                <Modal.Footer className="modalFooter-app">
                <button className='assign-app-action'> assign</button>
                <button onClick={handleClose} className='cancel-app-action'> cancel </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AssignAppointmentToDoctor;