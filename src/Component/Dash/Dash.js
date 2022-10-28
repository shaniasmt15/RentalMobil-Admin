import { useState } from "react";
import "./Dash.css";
import AllCars from "../AllCars/AllCars";
import { Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate, Link, Outlet } from "react-router-dom";
import Login from "../../Pages/Login";
import Swal from "sweetalert2";

function Dash(props) {
  const { children } = props;
  const navigate = useNavigate();
  const [collapse, setCollapse] = useState(true);

  const HandleCollapse = () => {
    setCollapse(!collapse);
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const logOut = () => {
  
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to see this page again",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("user")
        localStorage.clear()
        navigate('/login')
        Swal.fire(
          'Success!',
          'Logout.',
          'success'
        )
        
      }
    })
  }


  return (
    <>
      {/* Navbar */}
      <div className="navigation">
        <div className="logo"></div>
        <div className="navigation-icon">
          <img src="/Assets/Home.png" alt="" />
        </div>
        <div className="navigation-icon">
          <img src="/Assets/Cars.png" alt="" />
        </div>
      </div>

      <div className="container">
        <div className={collapse ? "sidebar sidebar-show" : "sidebar"}>
          <Menu>
            <MenuItem> Cars</MenuItem>
            <MenuItem onClick={() => navigate("/")}> List Cars</MenuItem>
          </Menu>
        </div>
        <div className={collapse ? "content content-show " : "content"}>
          {children}
        </div>
      </div>

      {/* Header */}
      <div className="header">
        <div className="toggle" onClick={() => HandleCollapse()}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 18H21"
              stroke="#151515"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 12H21"
              stroke="#151515"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6H21"
              stroke="#151515"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="space-header" />
        <div>
          <div className="input-group">
            <div className="form-outline">
              <input id="search-input" type="search" className="form-control" />
              <label className="form-label" htmlFor="form1">
                Search
              </label>
            </div>
            <button
              id="search-button"
              type="button"
              className="btn btn-primary"
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        <div>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              { user ? user?.email : "" }
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button class="dropdown-item"  onClick={() => logOut()}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="content">
        <div className="main">
          <Outlet  />
        </div>
      </div>
    </>
  );
}

export default Dash;
