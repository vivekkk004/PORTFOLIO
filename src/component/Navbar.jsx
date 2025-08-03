import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary border-bottom fixed-top">
        <div className="container-fluid">

          {/* Toggle Button for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse justify-content-center fw-medium text-muted mt-1 mb-1" id="navbarNavDropdown">
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <Link className="nav-link fs-6 me-2" to="/" aria-label="Go to Home">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-6 me-2" to="/about" aria-label="Go to About">ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-6 me-2" to="/work" aria-label="Go to Work">WORK</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-6 me-2" to="/skill" aria-label="Go to Skills">SKILL</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-6 me-2" to="/contacts" aria-label="Go to Contacts">CONTACT</Link>
              </li>
{/*                <li className="nav-item">
                <a className="nav-link resume fs-6 me-2" href="/resume" aria-label="Go to Contacts">RESUME</a>
              </li> */}
            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
