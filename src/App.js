import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import SignupSection from './Component/SignupSection/SignupSection';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Welcome Admin</h1>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignupSection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
