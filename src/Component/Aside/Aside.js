//import useState hook to create menu collapse state
import React, { useState } from "react";

//import sidebar css from react-pro-sidebar module and our custom css
// import "react-pro-sidebar/dist/css/styles.css";
import "./Aside.css";

import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Outlet, useNavigate } from "react-router-dom";

export default function Aside() {
  const { collapseSidebar } = useProSidebar();
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", height: "100%", minHeight: "400px" }}>
      <Sidebar width="250px">
        <Menu>
          <MenuItem> LOGO</MenuItem>
          <MenuItem> Dashboard</MenuItem>
          <MenuItem onClick={() => navigate('/')} > Cars</MenuItem>
          <MenuItem> Examples</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <header>
          <div className="header-wrapper">
            <div className="header-left">
              <div className="toggle-icon">
                <i className="fas fa-bars"></i>
              </div>
            </div>
            <div className="header-right">
              <div>
                <i className="fas fa-search"></i>
                <input type={"text"} placeholder="search..."></input>
              </div>
              <i className="far fa-user-circle"></i>
              <label>Username</label>
            </div>
          </div>
        </header>
        <div className="d-flex justify-content-between">
          <div>Halaman All Cars</div>
          <button
            className="btn btn-primary mb-3"
            onClick={() => navigate("add")}
          >
            Add New Car
          </button>
        </div>
        <Outlet />
      </main>
    </div>
  );
}
