import { Route, Routes } from 'react-router-dom';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { DashBoard } from './components/DashBoard/DashBoard';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [ user, setUser ] = useState([])


  return (
    <>
      <ToastContainer  />
      
      <Routes>
        <Route path='/' element={<Login setUser={setUser} user={user} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<DashBoard user={user} setUser={setUser} />} />
      </Routes>
    </>
  );
}

export default App;
