import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import LoaderSpinner from '../components/LoaderSpinner/LoaderSpinner';

const PrivateRouter = ({children}) => {
    const {user, loading}= useContext(AuthContext)
    const location = useLocation();
    if(loading){
        return <LoaderSpinner></LoaderSpinner>;
    }
    if(user?.email){
        return children;
    }
    return <Navigate to={'/login'} state={location.pathname}></Navigate>
};

export default PrivateRouter;