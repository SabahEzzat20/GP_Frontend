import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/joy/Avatar";
import Button from "@mui/material/Button";
import sabah from "../../../images/default.png";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import axios from "axios";
import { getAuthenticatedUser } from "../../../Helper/Storage";
import "./ViewDetails.scss";

const ViewDetails = (props) => {
  const [doctorAppointments, setDoctorAppointments] = useState({
    loading: true,
    result: [
      {
        doctorId: "",
        startTime: "",
        endTime: "",
        day: "",
        doctorName: "",
        doctorDescription: "",
      },
    ],
    err: "",
    reload: 0,
  });

  const userToken = getAuthenticatedUser();
  const refreshToken = userToken.refreshToken;
  useEffect(() => {
    setDoctorAppointments({ ...doctorAppointments, loading: true });
    axios
      .get("http://localhost:8070/admin/getAllAppointments", {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setDoctorAppointments({
          ...doctorAppointments,
          result: response.data,
          loading: false,
          err: "",
        });
      })
      .catch((err) => {
        setDoctorAppointments({
          ...doctorAppointments,
          loading: false,
          err: "there is something wrong",
        });
      });
  }, [doctorAppointments.reload + 1]);

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
      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
        centered
        className="modal"
      >
        <Modal.Header className="modalHeader" closeButton></Modal.Header>
        <Modal.Body className="modalBody">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                <Stack direction="row" spacing={3}>
                  <div className="photo">
                    <Avatar alt="Sabah hassan" src={sabah} size="lg" />
                  </div>
                  <Stack
                    direction="column"
                    spacing={.8}
                    className="doctor-details"
                  >
                    <h1 className="doctor-name">{props.name}</h1>
                    <Stack
                      direction={{
                        xs: "column",
                        sm: "column",
                        md: "row",
                        lg: "row",
                        xl: "row",
                      }}
                      spacing={{ xs: "1", sm: "1", md: "3", lg: "3", xl: "3" }}
                    >
                      <Box className="expertise">{props.email}</Box>
                     
                    </Stack>
                      <Box className="expertise">{props.location}</Box>
                  </Stack>
                </Stack>
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <div className="App-cont">
                <Box
                  sx={{ maxWidth: { xs: 320, sm: 480 } }}
                  className="appointments-box"
                >
                  <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <TabList
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                      >
                        <Tab label="Sunday" value="Sunday" />
                        <Tab label="Monday" value="Monday" />
                        <Tab label="Tuesday" value="Tuesday" />
                        <Tab label="Wednesday" value="Wednesday" />
                        <Tab label="Thursday" value="Thursday" />
                        <Tab label="Friday" value="Friday" />
                        <Tab label="Saturday" value="Saturday" />
                      </TabList>
                    </Box>
                    {[
                      "Sunday",
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                    ].map((day) => (
                      <TabPanel value={day} key={day}>
                        {doctorAppointments.result.some(
                          (appointment) =>
                            appointment.day === day &&
                            appointment.doctorName === props.name &&
                            appointment.startTime
                        ) ? (
                          doctorAppointments.result
                            .filter(
                              (appointment) =>
                                appointment.day === day &&
                                appointment.doctorName === props.name &&
                                appointment.startTime
                            )
                            .map((appointment) => (
                              <Button
                                className="hour"
                                style={{fontSize:"20px",gap:"1rem",color:"#59aedf"}}
                                key={appointment.startTime}
                              >
                               <div className="appointment-button" >{appointment.startTime}</div>
                              </Button>
                            ))
                        ) : (
                          <h5 className="hour" style={{color:"rgb(77, 77, 77)",fontSize:"24px",textAlign:"center"}}>
                            No appointment in this day
                          </h5>
                        )}
                      </TabPanel>
                    ))}
                  </TabContext>
                </Box>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="modalFooter">
          <button onClick={handleClose} className="cancel-btn">
            Cancel{" "}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ViewDetails;
