import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../AuthProvider';
import { toast } from 'react-toastify';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="bg-primary text-primary-content radial-progress animate-spin" style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }}></div>
    }

    if (user) {
        return children;
    }
    toast.error('You must log in first!');
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;