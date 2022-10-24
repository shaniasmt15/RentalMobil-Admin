import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'

function Header(props) {
    const { children } = props;
    const [collapse, setCollapse] = useState(true);

    const HandleCollapse = () => {
        setCollapse(!collapse);
    };

    return (
        <div className="layout">
            <div className="navigation">
                <div className="logo"></div>
                <div className="navigation-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M9 22V12H15V22"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <div>Dasboard</div>
                </div>
                <div className="navigation-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M5.5 21C6.88071 21 8 19.8807 8 18.5C8 17.1193 6.88071 16 5.5 16C4.11929 16 3 17.1193 3 18.5C3 19.8807 4.11929 21 5.5 21Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M16 8H20L23 11V16H16V8Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M16 3H1V16H16V3Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <div>Cars</div>
                </div>
            </div>
            <div className="header">
                {/* <div>logo</div> */}
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
                <div class="d-flex">
                    <form class="d-flex p-1" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button class="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>

                <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fs-4 bi-person-circle p-1"></i>
                        Unis Badri
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>

            </div>
            <div className="container">
                <div className={collapse ? "sidebar sidebar-show" : "sidebar"}>
                    <div> Cars</div>
                    <div>List Car</div>
                </div>
                <div className={collapse ? "content content-show " : "content"}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Header;
