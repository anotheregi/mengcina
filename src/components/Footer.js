import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h3>Mengcina</h3>
          <p>drama cina enjoyers</p>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/trending">Trending</Link>
            <Link to="/must-see">Must See</Link>
            <Link to="/hidden-gems">Hidden Gems</Link>
          </div>
          <p className="copyright">© {new Date().getFullYear()} build with ♡ by egi ganteng</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;