import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = () => {
  // Fix dropdown behavior
  const handleDropdownClick = (e) => {
    e.preventDefault();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 py-2">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand text-warning fw-bold d-flex align-items-center" to="/">
          <span className="fs-4 me-2">📖</span> EduPress
        </Link>

        {/* Navbar Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-dark" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/courses">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/blog">Blog</Link>
            </li>

            {/* Dropdown Menu */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-dark"
                to="#" 
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={handleDropdownClick}
              >
                Pages
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/about">About</Link></li>
                <li><Link className="dropdown-item" to="/contact">Contact</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark" to="/learnpress">LearnPress Add-On</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/premium-theme">Premium Theme</Link>
            </li>
          </ul>

          {/* Login/Register & Search */}
          <div className="d-flex align-items-center">
            <Link className="nav-link text-dark me-3" to="/login-register">Login / Register</Link>
            <button className="btn btn-warning rounded-circle p-2">
              🔍
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
