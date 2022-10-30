import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import AllCars from "./Component/AllCars/AllCars";
import { CreateCars } from "./Pages/CreateCars";
import { EditCars } from "./Pages/EditCars";
import Dash from "./Component/Dash/Dash";
import Dashboard from "./Pages/Dashboard";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dash />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cars" element={<AllCars />} />
          <Route path="/cars/add" element={<CreateCars />} />
          <Route path="/cars/edit/:id" element={<EditCars />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
