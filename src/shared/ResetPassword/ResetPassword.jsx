import { Link } from 'react-router-dom';
import React , {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import './ResetPassword.scss'
import resetpassword from '../../images/Key-pana.png';
import Form from "react-bootstrap/Form";
import  Box from '@mui/material/Box';
import  Grid from '@mui/material/Grid';
import { IoIosArrowRoundBack } from "react-icons/io";
import Input from '@mui/joy/Input';
import Stack from '@mui/material/Stack';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { VscVerifiedFilled } from "react-icons/vsc";
import { MdVerifiedUser } from "react-icons/md";
import { IoMdKey } from "react-icons/io";
import { IoKey } from "react-icons/io5";
import { GoPasskeyFill } from "react-icons/go";

const ResetPassword = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [provideEmail, setProvideEmail] = useState(1);
    const handleProvide = () => setProvideEmail(2);
    const handleVerification = () => setProvideEmail(3);
    const handleBacking = () => {
        if (provideEmail===3) {
            setProvideEmail(2)
        } else if (provideEmail === 2) {
            setProvideEmail(1)
        }
    }
    return (
        <Box>
            <Link className="change-pass-link" onClick={handleShow}>Change password</Link>
            <Modal
                show={show}
                onHide={handleClose}
                // backdrop="static"
                keyboard={false}
                centered
                className="forget-pass-modal"
                size='lg'
            >
                <Modal.Body className="modalBody">
                    <Grid container className="reset-container" xs={12} sm={12} md={12} lg={12} xl={12} sx={{minHeight:'450px'}}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            {
                                provideEmail !== 1 ?
                                    (
                                        <button className="back-arrow" onClick={handleBacking}>
                                        <IoIosArrowBack />
                                        </button>
                                    ):''
                            }
                        </Grid>
                        <Grid container xs={12} sm={12} md={12} lg={12} xl={12} sx={{padding:'45px'}}>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{display:{xs:'none',sm:'none',md:'flex',lg:'flex',xl:'flex'}}}>
                                <Box className="password-right-side">
                                    <Box className="resetpass-img" >
                                        <img src={resetpassword} alt="reset password" width={300} height={300}/>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <p className='forgot-pass'>Change <br /> your password</p>
                                <Box className="provide-pass-form">
                                {
                                        provideEmail === 1 ? (
                                            <Stack direction='column' spacing={5} >
                                                <Stack  direction='column' spacing={2}>
                                                    <p className='tips'>Please provide your email for verification</p>
                                                    <Form>
                                                        <Form.Group className="email-providing-group" controlId="exampleForm.ControlInput1">
                                                            {/* <Form.Label>Email</Form.Label> */}
                                                            <Input placeholder="Email" startDecorator={<MdOutlineAlternateEmail />} variant="plain" color="neutral" required type='email'/>
                                                        </Form.Group>
                                                    </Form>
                                                </Stack>
                                                <button className='submit-email-btn' onClick={handleProvide}>next</button>
                                            </Stack>
                                    ) : provideEmail === 2 ? (    
                                        <Stack  direction='column' spacing={5}>
                                            <Stack  direction='column' spacing={2}>
                                                <p className='tips'>Please enter your verification code</p>
                                                <Form>
                                                    <Form.Group className="email-providing-group" controlId="exampleForm.ControlInput1">
                                                        {/* <Form.Label>verification code</Form.Label> */}
                                                        <Input placeholder="verification code" startDecorator={<MdVerifiedUser />} variant="plain" color="neutral" required type='number'/>
                                                    </Form.Group>
                                                </Form>
                                            </Stack>                                        
                                            <button className='submit-email-btn' onClick={handleVerification}>verify</button>
                                        </Stack>
                                    ) : (
                                        <Stack direction='column' spacing={5}>
                                            <Stack direction='column' spacing={2}>
                                            <p className='tips'>Please enter your new password</p>
                                            <Form>
                                                <Stack  direction='column' spacing={1.5}>
                                                    <Form.Group className="email-providing-group" controlId="exampleForm.ControlInput1">
                                                        {/* <Form.Label>new password</Form.Label> */}
                                                        <Input placeholder="password" startDecorator={<GoPasskeyFill />} variant="plain" color="neutral" required type='password'/>
                                                    </Form.Group>
                                                    <Form.Group className="email-providing-group" controlId="exampleForm.ControlInput1">
                                                        {/* <Form.Label> confirm new password</Form.Label> */}
                                                        <Input placeholder="confirm new password" startDecorator={<GoPasskeyFill />} variant="plain" color="neutral" required type='password'/>
                                                    </Form.Group>
                                                </Stack>
                                            </Form>
                                            </Stack>
                                            <button className='submit-email-btn'>submit</button>
                                            {/* <div className='back-login'>
                                                <p>Back to <Link to={'/login'} className='login-link'>login</Link></p>
                                            </div> */}
                                        </Stack>
                                    )
                                }
                                </Box>
                            </Grid>
                        </Grid>
                        </Grid>
                </Modal.Body>
            </Modal>
        </Box>
    );
};

export default ResetPassword;