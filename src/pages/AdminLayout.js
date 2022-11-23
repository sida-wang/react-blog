import { useOutlet, useOutletContext } from "react-router-dom"

const AdminLayout = () => {
    const contextData = useOutletContext();
    const token = contextData['token'];
    const handleLogin = contextData['handleLogin'];
    const handleLogout = contextData['handleLogout'];

  return (
    <>
    <div>Login</div>
    { !token && (<button type="button" onClick={handleLogin}>
        Sign In
      </button>)}
      { token && (<button type="button" onClick={handleLogout}>
        Sign Out
      </button>)}
    </>
  )
}

export default AdminLayout