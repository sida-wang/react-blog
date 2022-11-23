import { Form, FormGroup, Button } from "react-bootstrap";
import { useAuth } from "../App";
import './AdminLayout.css'

const AdminLayout = () => {
    const contextData = useAuth();
    const token = contextData['token'];
    const handleLogin = contextData['handleLogin'];
    const handleLogout = contextData['handleLogout'];

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