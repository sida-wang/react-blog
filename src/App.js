import { Outlet } from 'react-router-dom'
//import './App.css';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header title="The Nebulous Wander" subtitle="chaos.map((exp) => { isUseful(exp) ? console.log(exp) : null })" />
      <Outlet />
    </div>
  );
}

export default App;
