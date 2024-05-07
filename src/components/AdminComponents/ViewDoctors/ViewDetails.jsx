import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
 import Stack from '@mui/material/Stack';
 import Avatar from '@mui/joy/Avatar';
 import Button from '@mui/material/Button';
 import sabah from '../../../images/saboha.jpeg';
 import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
 import Box  from "@mui/material/Box";
import './ViewDetails.scss';

 const ViewDetails = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [value, setValue] = useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
};
  return (
    <>
      <button onClick={handleShow} className="modal-button">
        view doctor
      </button>
      <Modal show={show} onHide={handleClose} keyboard={false} centered className="modal">
        <Modal.Header className="modalHeader" closeButton>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>  <Stack direction='row' spacing={2}>
               <div>
                 <Avatar alt="Sabah hassan" src={sabah} size='lg'/>
               </div>
               <Stack direction='column' spacing={0.1} className="doctor-details">
                 <p className="doctor-name">{props.name}</p>
                 <Stack direction={{xs:'column',sm:'column',md:'row',lg:'row',xl:'row'}} spacing={{xs:'1',sm:'1',md:'3',lg:'3',xl:'3'}} >
                   <Box className="expertise">{props.email}</Box>
                </Stack>
              </Stack>
             </Stack></Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <div className="App-cont">
                <Box sx={{ maxWidth: { xs: 320, sm: 480 }}} className="appointments-box">
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} variant="scrollable" scrollButtons="auto">
                                    <Tab  label="Sunday"/>
                                    <Tab  label="Monday"/>
                                    <Tab  label="Tuesday"/>
                                    <Tab  label="Wednesday"/>
                                    <Tab  label="Thursday"/>
                                    <Tab  label="Friday"/>
                                    <Tab  label="Saturday"/>
                            </TabList>
                        </Box>
                            <TabPanel onChange={handleChange}>
                                    <Button  className='hour'>02:00</Button>
                                    <Button  className='hour'>04:00</Button>
                                    <Button  className='hour'>05:00</Button>
                                    <Button  className='hour'>06:00</Button>
                            </TabPanel>
                    </TabContext>
                </Box>
            </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="modalFooter">
          <button onClick={handleClose} className='cancel-btn'>Cancel </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ViewDetails;