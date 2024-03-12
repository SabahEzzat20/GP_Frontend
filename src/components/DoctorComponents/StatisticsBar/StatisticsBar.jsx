import React from 'react';
import Stack from '@mui/material/Stack';
import './StatisticsBar.scss'
const StatisticsBar = ({statistic}) => {
    return (
        <div >
            <Stack direction="row" spacing={2} className='stat-container'>
                <div className="stat-icon">{statistic.icon}</div>
                <div className="stat-details">
                    <Stack direction="column" spacing={0.3}>
                        <p className='stat-title'>{statistic.title}</p>
                        <p className='stat-total'>{statistic.total}</p>
                    </Stack>
                </div>
            </Stack>
        </div>
    );
};

export default StatisticsBar;