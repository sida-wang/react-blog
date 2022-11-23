import { useState, useEffect } from "react";
import { useAuth } from '../App';
import { useNavigate } from "react-router-dom";
import { checkToken } from "../util/apiCalls";

const ProtectedRoute = ({ children }) => {
    const token = useAuth()['token'];
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
        const jsonData = await checkToken(token);
        if (jsonData['result'] === 'Success') {
          setIsLoading(false);
        }
        else {
          navigate('/');
        }})();
      },[])

    if (isLoading) {
        return <></>
    }
    else {
        return children;
    }
  
}

export default ProtectedRoute