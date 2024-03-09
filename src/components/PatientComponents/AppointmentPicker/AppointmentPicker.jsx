import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export const AppointmentPicker = () => {
    const [value, setValue] = React.useState(dayjs('2024-03-05'));
    
    const handleDateChange = (newValue) => {
        const formattedDate = newValue.format('YYYY-MM-DD');
        const day = newValue.format('dddd');
        const month = newValue.format('MMMM');
        const year = newValue.format('YYYY');
        
        console.log('Formatted Date:', formattedDate);
        console.log('Day:', day);
        console.log('Month:', month);
        console.log('Year:', year);

        setValue(newValue);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateCalendar','DateCalendar']}>
                <DemoItem >
                    <DateCalendar value={value} onChange={handleDateChange} />
                </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
    );
}
