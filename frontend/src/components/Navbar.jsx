import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-custom ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold fs-3" style={{ color: '#FF8C42' }}>
            GauVeda
          </Link>

          {/* Desktop Menu */}
          <div className="d-none d-lg-flex align-items-center">
            <ul className="navbar-nav d-flex flex-row align-items-center">
              {[
                { path: '/', label: 'Home' },
                { path: '/products', label: 'Products' },
                { path: '/about', label: 'About' },
                { path: '/reviews', label: 'Reviews' },
                { path: '/contact', label: 'Contact' } // Add Contact link

              ].map((item) => (
                <li className="nav-item" key={item.path}>
                  <Link 
                    to={item.path} 
                    className={`nav-link nav-link-custom ${isActive(item.path) ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/order-now" className="order-btn ms-3">
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="d-lg-none btn btn-link p-0"
            onClick={() => setMobileMenuOpen(true)}
            style={{ color: '#2C3E50' }}
          >
            <FaBars size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold" style={{ color: '#FF8C42' }}>GauVeda</h4>
          <button 
            className="btn btn-link p-0"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#999' }}
          >
            <FaTimes size={24} />
          </button>
        </div>
        <ul className="list-unstyled">
          {[
            { path: '/', label: 'Home' },
            { path: '/products', label: 'Products' },
            { path: '/about', label: 'About' },
            { path: '/reviews', label: 'Reviews' },
            { path: '/contact', label: 'Contact' } // Add Contact link

          ].map((item) => (
            <li className="mb-3" key={item.path}>
              <Link 
                to={item.path} 
                className={`text-decoration-none fw-medium ${isActive(item.path) ? 'text-warning' : 'text-dark'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link 
          to="/order-now" 
          className="order-btn w-100 text-center"
          onClick={() => setMobileMenuOpen(false)}
        >
          Order Now
        </Link>
      </div>
    </>
  );
};

export default Navbar;