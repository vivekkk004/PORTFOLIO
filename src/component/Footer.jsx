import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white mt-auto w-100">
      <div className="container py-4">
        <div className="mb-3">
          <h2 className="h4 text-white">Vivek Muthe</h2>
          <p className="text-light">MERN-Stack Developer & UI/UX Designer</p>
        </div>

        <hr className="border-secondary" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-2 mb-md-0 text-light">&copy; {currentYear} Vivek Muthe. All rights reserved.</p>

        

          <p className="mb-0 text-light">Designed & Built with <span className="text-danger">❤</span> by Vivek Muthe</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
