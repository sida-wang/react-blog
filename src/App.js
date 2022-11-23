import { Outlet } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react'
import { loginUser } from './util/apiCalls'

function App() {

  const [token, setToken] = useState(null);

  const handleLogin = async() => {
    const jsonData = await loginUser({password: "Password"})
    setToken(jsonData['token']);
  }

  const handleLogout = async() => {
    setToken(null);
  }

  return (
    <div className="App">
      <Header title="The Nebulous Wander" subtitle="chaos.map((exp) => { isUseful(exp) ? console.log(exp) : null })" />
      <div className='main-body'>
        <Outlet context={{token: token, 'handleLogin': handleLogin, 'handleLogout': handleLogout}} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
