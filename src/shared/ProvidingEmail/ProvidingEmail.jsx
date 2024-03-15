import React from 'react';
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';
import './ProvidingEmail.scss'
const ProvidingEmail = () => {
    return (
        <div>
            <div className="provide-pass-form">
                <div className='forgot-pass-paragraph'>
                    <p className='forgot-pass'>Forgot <br /> your password?</p>
                    <p className='tips'>Please provide your email for verification</p>
                </div>
                <Form>
                    <Form.Group className="email-providing-group" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className="email-textfield" type="email" placeholder='enter your email address....'/>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default ProvidingEmail;