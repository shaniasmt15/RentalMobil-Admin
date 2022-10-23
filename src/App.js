import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import AllCars from "./Component/AllCars/AllCars";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { CreateCars } from "./Pages/CreateCars";
import { EditCars } from "./Pages/EditCars";
import Aside from "./Component/Aside/Aside";
import { TCards } from "./Component/TCards/TCards";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<Aside />} />

        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<AllCars />} />
          <Route path="add" element={<CreateCars />} />
          <Route path="edit/:id" element={<EditCars />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
