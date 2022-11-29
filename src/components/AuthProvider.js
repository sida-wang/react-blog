import { AuthContext } from "../App"
import { useState } from "react"

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

  return (
    <AuthContext.Provider value={{'token': token, 'setToken': setToken }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider