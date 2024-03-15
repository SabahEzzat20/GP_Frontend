import React from 'react';
import Form from "react-bootstrap/Form";
import './NewPassword.scss'
const NewPassword = () => {
    return (
        <div>
        <div className="provide-pass-form">
                <div className='verify-code'>
                <p className='forgot-pass'>Forgot <br /> your password?</p>
                <p className='tips'>Please enter your new password</p>
            </div>
            <Form>
                <Form.Group className="email-providing-group" controlId="exampleForm.ControlInput1">
                    <Form.Label>new password</Form.Label>
                    <Form.Control className="email-textfield" type="password" />
                </Form.Group>
            </Form>
        </div>
    </div>
    );
};

export default NewPassword;