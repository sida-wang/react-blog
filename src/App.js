import { Outlet } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { createContext, useContext } from 'react'
import AuthProvider from './components/AuthProvider';

export const AuthContext = createContext(null);
export const useAuth = () => {
  return useContext(AuthContext);
}

function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Header title="The Nebulous Wander" subtitle="chaos.map((exp) => { isUseful(exp) ? console.log(exp) : null })" />
      <div className='main-body'>
        <Outlet />
      </div>
      <Footer />
    </div>
    </AuthProvider>
  );
}

export default App;
