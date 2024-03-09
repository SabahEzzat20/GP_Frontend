import React , {useState} from 'react';
import { Avatar } from '@mui/material';
import sabah from '../../images/saboha.jpeg';
import './ReservationNotification.scss';
import { IoNotifications } from "react-icons/io5";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Box from '@mui/material/Box';

const ReservationNotification = () => {
    const [isOpenNotificationBar, setIsOpenNB] = useState(false);
    const toggleNotification = () => { setIsOpenNB(!isOpenNotificationBar); }
    const handleClickAway = () => {setIsOpenNB(false);};
    return (
        <div className='reservation-notification'>
            <div className="notification">
                <ClickAwayListener mouseEvent="onMouseDown" touchEvent="onTouchStart" onClickAway={handleClickAway}>
                    <Box sx={{ position: 'relative' }}>
                        <IconButton onClick={toggleNotification} >
                            <Badge color="error" size='large' badgeContent={4} max={9}>
                                <IoNotifications />
                            </Badge>
                        </IconButton>
                        <div className="notifications-body" style={{display: isOpenNotificationBar ? 'block' : 'none'}}>
                            <div className="not-title">notifications</div>
                            <div className="not-containter">
                                <div className="sole-notification">
                                    <Avatar alt="Sabah hassan" src={sabah} />
                                    <div className="patient-details">
                                        <p>sabah hassan</p>
                                        <p>date: 13/4/2024 , time: 10 a.m</p>
                                    </div>
                                </div>
                                <div className="sole-notification">
                                    <Avatar alt="Sabah hassan" src={sabah} />
                                    <div className="patient-details">
                                        <p>sabah hassan</p>
                                        <p>date: 13/4/2024 , time: 10 a.m</p>
                                    </div>
                                </div>
                                <div className="sole-notification">
                                    <Avatar alt="Sabah hassan" src={sabah} />
                                    <div className="patient-details">
                                        <p>sabah hassan</p>
                                        <p>date: 13/4/2024 , time: 10 a.m</p>
                                    </div>
                                </div>
                                <div className="sole-notification">
                                    <Avatar alt="Sabah hassan" src={sabah} />
                                    <div className="patient-details">
                                        <p>sabah hassan</p>
                                        <p>date: 13/4/2024 , time: 10 a.m</p>
                                    </div>
                                </div>
                                <div className="sole-notification">
                                    <Avatar alt="Sabah hassan" src={sabah} />
                                    <div className="patient-details">
                                        <p>sabah hassan</p>
                                        <p>date: 13/4/2024 , time: 10 a.m</p>
                                    </div>
                                </div>
                                <div className="sole-notification">
                                    <Avatar alt="Sabah hassan" src={sabah} />
                                    <div className="patient-details">
                                        <p>sabah hassan</p>
                                        <p>date: 13/4/2024 , time: 10 a.m</p>
                                    </div>
                                </div>
                                <div className="sole-notification">
                                    <Avatar alt="Sabah hassan" src={sabah} />
                                    <div className="patient-details">
                                        <p>sabah hassan</p>
                                        <p>date: 13/4/2024 , time: 10 a.m</p>
                                    </div>
                                </div>
                                <div className="sole-notification">
                                    <Avatar alt="Sabah hassan" src={sabah} />
                                    <div className="patient-details">
                                        <p>sabah hassan</p>
                                        <p>date: 13/4/2024 , time: 10 a.m</p>
                                    </div>
                                </div>
                                <div className="sole-notification">
                                    <Avatar alt="Sabah hassan" src={sabah} />
                                    <div className="patient-details">
                                        <p>sabah hassan</p>
                                        <p>date: 13/4/2024 , time: 10 a.m</p>
                                    </div>
                                </div>
                                <div className="sole-notification">
                                    <Avatar alt="Sabah hassan" src={sabah} />
                                    <div className="patient-details">
                                        <p>sabah hassan</p>
                                        <p>date: 13/4/2024 , time: 10 a.m</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Box>
                </ClickAwayListener>
            </div>
        </div>
    );
};

export default ReservationNotification;