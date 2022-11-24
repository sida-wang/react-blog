import { useState, useEffect } from "react";
import { useAuth } from '../App';
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const token = useAuth()['token'];
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
          navigate('/');
        } else {
          setIsLoading(false);
        }
      },[navigate, token])


      return isLoading ? <></> : children;

  
}

export default ProtectedRoute