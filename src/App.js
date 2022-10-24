import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import EditCar from './Pages/EditCar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Welcome Admin</h1>} />
        <Route path='/login' element={<Login />} />
        <Route path='edit' element={<EditCar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
