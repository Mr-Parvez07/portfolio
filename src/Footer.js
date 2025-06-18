// src/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-3 mt-auto shadow-sm">
      <div className="container text-center">
        <p className="mb-1">© {new Date().getFullYear()} Parvez. All rights reserved.</p>
        <p className="mb-0">
          <a href="mailto:your-email@example.com" className="text-info text-decoration-none">
            mohammedparvez7457@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;