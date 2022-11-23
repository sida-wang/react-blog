import { AuthContext } from "../App"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { loginUser } from "../util/apiCalls";

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();
        const jsonData = await loginUser({password: e.target.password.value})
        setToken(jsonData['token']);
        navigate('/');
    }

    const handleLogout = async() => {
        setToken(null);
    }

  return (
    <AuthContext.Provider value={{'token': token, 'handleLogin': handleLogin, 'handleLogout': handleLogout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider