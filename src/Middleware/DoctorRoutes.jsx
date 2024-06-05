import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {getAuthenticatedUser} from '../Helper/Storage'
const AdminRoutes = () => {
    const auth = getAuthenticatedUser();
    return (
        <>
            {
                auth && auth.role === 'doctor' ? 
                    <Outlet /> 
                    :
                    <Navigate to={'/patient/homepage'}/>
            }
        </>
    );
};

export default AdminRoutes;