// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaWhatsapp } from 'react-icons/fa';

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-custom ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            <img 
              src="/images/image.png" 
              alt="GouVaidya A2 Milk" 
              className="logo-image"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="d-none d-lg-flex align-items-center">
            <ul className="navbar-nav d-flex flex-row align-items-center">
              {[
                { path: '/', label: 'Home' },
                { path: '/products', label: 'Products' },
                { path: '/about', label: 'About' },
                { path: '/reviews', label: 'Reviews' },
                { path: '/contact', label: 'Contact' } 
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
            <div className="ms-3 d-flex align-items-center">
              <a href="tel:+919322604350" className="btn btn-outline-secondary me-2">
                <FaPhone /> <span className="d-none d-md-inline">Call Us</span>
              </a>
              <Link to="/order-now" className="order-btn">
                Order Now
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="d-lg-none btn btn-link p-0"
            onClick={toggleMobileMenu}
            style={{ color: '#2C3E50' }}
          >
            <FaBars size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}></div>
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold" style={{ color: '#FF8C42' }}>GouVaidya</h4> 
          <button 
            className="btn btn-link p-0"
            onClick={toggleMobileMenu}
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
            { path: '/contact', label: 'Contact' } 
          ].map((item) => (
            <li className="mb-3" key={item.path}>
              <Link 
                to={item.path} 
                className={`text-decoration-none fw-medium ${isActive(item.path) ? 'text-warning' : 'text-dark'}`}
                onClick={toggleMobileMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="d-grid gap-2 mt-4">
          <a href="tel:+919322604350" className="btn btn-outline-secondary">
            <FaPhone /> Call Us
          </a>
          <a href="https://wa.me/919322604350" className="btn btn-success">
            <FaWhatsapp /> WhatsApp
          </a>
          <Link 
            to="/order-now" 
            className="order-btn w-100 text-center"
            onClick={toggleMobileMenu}
          >
            Order Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;