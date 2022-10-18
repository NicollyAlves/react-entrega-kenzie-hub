import { createContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../services/Api';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {

const [user, setUser] = useState([]);
const [loading, setLoading] = useState(true);
const navigate = useNavigate();
const location = useLocation();

const token = localStorage.getItem("@TOKEN")
useEffect(() => {
    async function loadUser() {
        
        if(token) {
            try {
                
                api.defaults.headers.authorization = `Token ${token}`;
                
                const { data } = await api.get('/profile');
                console.log(data);
        
        setUser(data);

        toast.success("Conta criada com sucesso!", {
            autoClose: 2000,
            style: {backgroundColor:"#343B41",
                    color:"white",
                    borderRadius:"5px",
                }
            })
        } catch (error) {
            console.error(error);
        }
    } else {
        navigate("/")
    }
    setLoading(false);
    }
    loadUser();
    

}, []);

async function loginUser(data) {
    try {
        const response = await api.post('/sessions', data);
        
        const { user: userResponse, token } = response.data;
        
        api.defaults.headers.authorization = `Token ${token}`;
        
        setUser(userResponse);
        localStorage.setItem("@TOKEN", token);
        localStorage.setItem("@USERID", response.data.user.id)
        
        
        const toNavigate = location.state?.from?.pathname || 'dashboard';
        
        navigate(toNavigate, { replace: true });

    } catch (error) {
        toast.error("Ops! Algo deu errado", {
                autoClose: 2000,
                style: {backgroundColor:"#343B41",
                        color:"white",
                        borderRadius:"5px", 
                        }
            })
        console.error(error);
    }
}

async function registerUser(data) {
    try {
        await api.post('/users', data)
        
        const toNavigate = location.state?.from?.pathname || '/';
        
        navigate(toNavigate, { replace: true });
        toast.success("Cadastro realizado com sucesso", {
                autoClose: 2000,
                style: {backgroundColor:"#343B41",
                        color:"white",
                        borderRadius:"5px", 
                        }
        })

    } catch (error) {
        console.error(error);
    }
}

return (
    <AuthContext.Provider value={{ loginUser, registerUser, user, loading }}>
        {children}
    </AuthContext.Provider>
);
};

export default AuthProvider;