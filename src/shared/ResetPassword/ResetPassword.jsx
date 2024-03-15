import { Link } from 'react-router-dom';
import React , {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import './ResetPassword.scss'
import resetpassword from '../../images/Key-pana.png'
import ProvidingEmail from '../ProvidingEmail/ProvidingEmail';
import VerifyingCode from '../VerifyingCode/VerifyingCode';
import NewPassword from '../NewPassword/NewPassword';
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";


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
                        <div className="password-right-side">
                            {
                                provideEmail !== 1 ?
                                    ( <button className="back-arrow" onClick={handleBacking}>
                                        <IoIosArrowRoundBack />
                                    </button>
                                    ):''
                            }
                            <div className="resetpass-img">
                                <img src={resetpassword} alt="reset password" width={300} height={300}/>
                            </div>
                        </div>
                        {
                            provideEmail === 1 ? (
                                <div>
                                    <ProvidingEmail />
                                    <button className='submit-email-btn' onClick={handleProvide}>submit</button>
                                </div>
                            ) : provideEmail === 2 ? (
                                <div>
                                    <VerifyingCode />
                                    <button className='submit-email-btn' onClick={handleVerification}>verify</button>
                                </div>
                            ) : (
                                <div>
                                    <NewPassword />
                                    <button className='submit-email-btn'>confirm</button>
                                    <div className='back-login'>
                                        <p>Back to <Link to={'/login'} className='login-link'>login</Link></p>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ResetPassword;