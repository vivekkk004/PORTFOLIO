import React from 'react';

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
                <a className="nav-link fs-6 me-2" href="/" aria-label="Go to Home">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-6 me-2" href="/about" aria-label="Go to About">ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-6 me-2" href="/work" aria-label="Go to Work">WORK</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-6 me-2" href="/skill" aria-label="Go to Skills">SKILL</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-6 me-2" href="/contacts" aria-label="Go to Contacts">CONTACT</a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
