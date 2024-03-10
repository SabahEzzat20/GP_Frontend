import React from 'react';
import Form from "react-bootstrap/Form";
import './VerifyingCode.scss'
const VerifyingCode = () => {
    return (
        <div>
        <div className="provide-pass-form">
                <div className='verify-code'>
                <p className='forgot-pass'>Forgot <br /> your password?</p>
                <p>Please enter your verification code</p>
            </div>
            <Form>
                <Form.Group className="email-providing-group" controlId="exampleForm.ControlInput1">
                    <Form.Label>verification code</Form.Label>
                    <Form.Control className="email-textfield" type="text" />
                </Form.Group>
            </Form>
        </div>
    </div>
    );
};

export default VerifyingCode;