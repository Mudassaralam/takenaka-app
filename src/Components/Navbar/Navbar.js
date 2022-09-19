import React, { useDebugValue } from "react";
import logo from "../Images/logo.png";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
  
      <div className="">
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
          id="Nav-Header"
        >
          <div className="container-fluid ">
            <FaBars id="Fa-icon" />
            <img src={logo} className="navbar-brand logo" alt="Logo" style={{marginRight:'auto'}}/>
            <div className="d-flex" id="DropDown">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Profile
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                      <Link to='/myprofile'>
                      My Profile
                      </Link>
                        
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
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
      
    </>
  );
}
export default Navbar;
