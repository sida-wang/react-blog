import logo from './logo.svg';
import { Outlet } from 'react-router-dom'
//import './App.css';
import Header from './components/Header'
import Filter from './components/Filter'
import Actions from './components/Actions'
import Body from './components/Body'

function App() {
  return (
    <div className="App">
      <Header title="The Nebulous Wander" subtitle="chaos.map((exp) => { isUseful(exp) ? console.log(exp) : null })" />
      <Actions />
      <Filter />
      <Outlet />
    </div>
  );
}

export default App;
