import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='flex justify-center mt-60'>
            <button type="button" class=" " disabled>
                <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                </svg>
                Processing...
            </button>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/login'></Navigate>;
};

export default PrivateRoute;