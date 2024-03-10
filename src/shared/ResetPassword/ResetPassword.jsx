import { Link } from 'react-router-dom';
import React , {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import './ResetPassword.scss'
import resetpassword from '../../images/Key-pana.png'
import ProvidingEmail from '../ProvidingEmail/ProvidingEmail';
import VerifyingCode from '../VerifyingCode/VerifyingCode';
const ResetPassword = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [provideEmail, setProvideEmail] = useState(true);
    const handleProvide = () => setProvideEmail(!provideEmail);
    return (
        <div>
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
                    <div className="reset-container">
                        <div className="resetpass-img">
                            <img src={resetpassword} alt="reset password" width={300} height={300}/>
                        </div>
                            {
                                provideEmail ? 
                                    <div>
                                        <ProvidingEmail />
                                        <button className='submit-email-btn' onClick={handleProvide}>submit</button>
                                    </div> 
                                    :
                                    <div>
                                        <VerifyingCode />
                                        <button className='submit-email-btn'>verify</button>
                                        <div className='back-login'>
                                            <p>Back to <Link to={'/login'} className='login-link'>login</Link></p>
                                        </div>
                                    </div>
                            }
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ResetPassword;