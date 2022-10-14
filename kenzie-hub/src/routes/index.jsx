import { Route, Routes } from 'react-router-dom';
import { Login } from '../components/Login/Login';
import { Register } from '../components/Register/Register';
import { DashBoard } from '../components/DashBoard/DashBoard';

export const Rotas = () => {
return (
    <>    
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<DashBoard />} />
        </Routes>
    </>
);
}
