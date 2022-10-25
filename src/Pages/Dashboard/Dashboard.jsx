import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
// import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="container" id="top">
        <aside className="sidebar-wrapper">
          <div className="sidebar-header">
            {/* <i className="fa-duotone fa-car-rear"></i> */}
            <i class="fa-light fa-truck"></i>
            {/* <i class="fa-thin fa-truck"></i> */}
            <h4>Logo</h4>
            <div className="close-menu">
              <i className="fas fa-chevron-left"></i>
            </div>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#">
                  <i className="fas fa-home"></i>
                  <div className="title">dashboard</div>
                </a>
              </li>
              <li>
                <Link to="/">
                  <i className="fas fa-truck"></i>

                  <div className="title">Mobil</div>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="content">
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
          <section className="main">
            <Outlet />
          </section>

          <footer>
                <div className="copyright">
                    copyright &copy; 2022. all right reserved.
                </div>
            </footer>
        </main>
      </div>

      {/* <div className="switcher-container">
        <div className="switcher-icon">
            <i className="fas fa-cog"></i>
        </div>
        <div className="switcher-close">
            <i className="fas fa-times"></i>
        </div>
        <div className="switcher-header">
            <h3>theme customizer</h3>
            <h4>theme styles</h4>
        </div>
        <div className="switcher-body">
            <ul>
                <li data-color="#f7f7f7" className="active"></li>
                <li data-color="#212529"></li>
            </ul>
        </div>
    </div> */}
    </>
  );
}

export default Dashboard;
