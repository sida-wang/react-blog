import { Form, FormGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../App";
import { useState } from "react";
import { loginUser } from "../util/apiCalls";
import './AdminLayout.css'

const AdminLayout = () => {
    const navigate = useNavigate();
    const contextData = useAuth();
    const token = contextData['token'];
    const setToken = contextData['setToken'];
    const [wrongPassword, setWrongPassword] = useState(false);
  
    const handleLogin = async(e) => {
         e.preventDefault();
        const jsonData = await loginUser({password: e.target.password.value});
        if (jsonData.result === "Success"){
          setToken(jsonData['token']);
          navigate(-1);
        }
        else {
          setWrongPassword(true);
        }
    }

    const handleLogout = async() => {
        setToken(null);
    }


  if (!token) {
    return (
      <>
      <div></div>
      <section className='login'>
      <div></div>
      <div>
      <h3 className="mb-5">Login</h3>
        <Form onSubmit={handleLogin}>
          <FormGroup className='mb-3'>
            <label htmlFor="password" className="h5">Password</label>
            <input className="form-control" id="password" type="password" name="password"></input>
            <label hidden={!wrongPassword} className='text-primary text fw-semibold ms-1'>Wrong Password</label>
          </FormGroup>
          <Button type="submit">Sign In</Button>
        </Form>
      </div>
      </section>
      </>
    )
  }
  else { return (
    <>
    <div></div>
    <section className='login'>
    <div></div>
    <div>
    <h3 className="mb-5">Logout</h3>
      <Button type="button" className="btn" onClick={handleLogout}>Sign Out</Button>
    </div>
    </section>
    </>
  )
}
}

export default AdminLayout