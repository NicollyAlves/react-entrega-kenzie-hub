import { useContext } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';


const ProtectedRoutes = () => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()

    if (loading) {
        return <div>Carregando...</div>;
    }

    return user ? (
        <Outlet />
    ) : (
        <Navigate to='/' replace />
    );
};  

export default ProtectedRoutes;