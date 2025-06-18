import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container">
        <a
          className="navbar-brand fw-bold fs-4 text-light"
          href="#home"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Portfolio
        </a>

        {/* Mobile Toggler */}
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNav">
          <ul className="navbar-nav ms-auto text-center gap-lg-3 gap-2 mt-3 mt-lg-0">

            <li className="nav-item">
              <a className="nav-link nav-hover" href="#home" onClick={toggleNavbar}>
                <i className="bi bi-house-door-fill me-1"></i>Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link nav-hover" href="#about" onClick={toggleNavbar}>
                <i className="bi bi-person-fill me-1"></i>About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link nav-hover" href="#skills" onClick={toggleNavbar}>
                <i className="bi bi-tools me-1"></i>Skills
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link nav-hover" href="#education" onClick={toggleNavbar}>
                <i className="bi bi-mortarboard-fill me-1"></i>Education
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link nav-hover" href="#courses" onClick={toggleNavbar}>
                <i className="bi bi-tools me-1"></i>Course
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link nav-hover" href="#projects" onClick={toggleNavbar}>
                <i className="bi bi-folder-fill me-1"></i>Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link nav-hover" href="#hobbies" onClick={toggleNavbar}>
                <i className="bi bi-controller me-1"></i>Hobbies
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link nav-hover" href="#contact" onClick={toggleNavbar}>
                <i className="bi bi-envelope-fill me-1"></i>Contact
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
