import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return (
            <section className='d-flex text-center mt-16' style={{minHeight:"300px"}}>
                <div className="spinner-grow inline-block w-6 h-6 bg-green-500 rounded-full opacity-1
                " role="status">
                    <span className="visually-hidden hidden">Loading...</span>
                </div>
                <div className="spinner-grow inline-block w-12 h-12 bg-green-500 rounded-full opacity-1
                " role="status">
                    <span className="visually-hidden hidden">Loading...</span>
                </div>
            </section>
        )
    }

    if (!user) {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuth;