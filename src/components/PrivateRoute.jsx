import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    // to find users current location to redirect after login
    const location = useLocation();
    console.log(location);
    

    if (loading) {
        return <Loading></Loading>
    }

    // if User thake then return children
    if (user && user?.email) {
        return children;
    }
    // else navigate to Login
    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
    
};

export default PrivateRoute;