import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../services/Api';
import { IData, IChildren } from './dashboardProvider';

export const AuthContext = createContext<IUserLoginContext>({} as IUserLoginContext);

export interface IUserLogin {
    email: string,
    password: string,
}

export interface IUserLoginContext{
    loginUser(data: IUserLogin): Promise<void>,
    user: IData | undefined,
    loading: boolean,
}

const AuthProvider = ({ children }: IChildren) => {
    
    const [user, setUser] = useState<IData>();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

const token = localStorage.getItem("@TOKEN")

useEffect(() => {
    async function loadUser() {

        if(token) {
            try {
                
                api.defaults.headers.authorization = `Token ${token}`;
                
                const { data } = await api.get<IData>('/profile');
                
                setUser(data);

                navigate("/dashboard", { replace: true })

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
    } 
    setLoading(false);
    }
    loadUser();
}, []);



async function loginUser(data: IUserLogin):Promise<void> {
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



return (
    <AuthContext.Provider value={{ loginUser, user, loading }}>
        {children}
    </AuthContext.Provider>
);
};

export function useUserLoginContext(): IUserLoginContext {
    const context = useContext(AuthContext)

    return context
}

export default AuthProvider;