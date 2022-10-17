import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import AllCars from './Pages/AllCars';
import Dashboard from './Component/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Login/>}/>
        <Route path='/main' element={<Dashboard />} />
        <Route path='/cars' element={<AllCars/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
