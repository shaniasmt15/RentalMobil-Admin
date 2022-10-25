import { useState } from "react";
import "./Dash.css";
import AllCars from "../AllCars/AllCars";
import { Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate, Link } from "react-router-dom";

function Dash(props) {

  const { children } = props;
  const navigate = useNavigate()
  const [collapse, setCollapse] = useState(true);

  const HandleCollapse = () => {
    setCollapse(!collapse);
  };

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
            <MenuItem> List Cars</MenuItem>
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
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="content">
        <div className="main">
        {/* <div className="d-flex justify-content-between">
          <div>Halaman All Cars</div>
          <button
            className="btn btn-primary mb-3"
            onClick={() => navigate("add")}
          >
            Add New Car
          </button>
        </div> */}
          <AllCars />
        </div>
      </div>
    </>
  );
}

export default Dash;
