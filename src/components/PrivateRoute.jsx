import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate } from 'react-router';
import Loading from '../Pages/Loading';

const PrivateRoute = ({ children }) => {

    const {user, loading}= useContext(AuthContext)

    if (loading) {
        return <Loading></Loading>
    }

    // if User thake then return children
    if (user && user?.email) {
        return children;
    }
    // else navigate to Login
    return <Navigate to={'/auth/login'}></Navigate>
    
};

export default PrivateRoute;