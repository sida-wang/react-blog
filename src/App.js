import { Outlet } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header title="The Nebulous Wander" subtitle="chaos.map((exp) => { isUseful(exp) ? console.log(exp) : null })" />
      <div className='main-body'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
