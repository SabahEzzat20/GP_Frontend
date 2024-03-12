import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import './TodayCalendar.scss'
const TodayCalendar = () => {
    return (
        <div className="today-calendar">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                    <DemoItem>
                        <DateCalendar defaultValue={dayjs()} readOnly />
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
        </div>
    );
};

export default TodayCalendar;
