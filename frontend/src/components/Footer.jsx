// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-logo">
              <Link to="/" className="d-flex align-items-center mb-3">
                <img src="public/images/image.png" alt="GouVaidya" height="50" className="me-2" />
                <h3 className="fw-bold mb-0" style={{ color: '#FF8C42' }}>GouVaidya</h3>
              </Link>
              <p className="mb-4">
                Premium A2 milk from indigenous Gir cows, delivered fresh to your doorstep daily.
              </p>
              <div className="social-links">
                <a href="https://facebook.com/gouVaidya" target="_blank" rel="noopener noreferrer" className="me-2">
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com/gouVaidya" target="_blank" rel="noopener noreferrer" className="me-2">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com/gouVaidya" target="_blank" rel="noopener noreferrer" className="me-2">
                  <FaInstagram />
                </a>
                <a href="https://wa.me/919322604350" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-semibold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              {[
                { path: '/', label: 'Home' },
                { path: '/products', label: 'Products' },
                { path: '/about', label: 'About Us' },
                { path: '/reviews', label: 'Reviews' },
                { path: '/contact', label: 'Contact' }
              ].map((item) => (
                <li className="mb-2" key={item.path}>
                  <Link to={item.path} className="text-decoration-none text-light">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-semibold mb-3">Our Products</h5>
            <ul className="list-unstyled">
              {[
                'A2 Fresh Milk',
                'A2 Cow Ghee',
                'A2 Paneer',
                'A2 Curd',
                'A2 Buttermilk'
              ].map((product) => (
                <li className="mb-2" key={product}>
                  <Link to="/products" className="text-decoration-none text-light">
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-semibold mb-3">Contact Us</h5>
            <ul className="list-unstyled contact-info">
              <li className="mb-3 d-flex align-items-start">
                <FaMapMarkerAlt className="me-3 mt-1" />
                <span>GouVaidya Organic Farm, Wakad, Hinjewadi, District Pune, Maharashtra - 410511, India.</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FaPhone className="me-3" />
                <a href="tel:+919322604350" className="text-decoration-none text-light">+91 93226 04350</a>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FaEnvelope className="me-3" />
                <a href="mailto:gouVaidya.milk@gmail.com" className="text-decoration-none text-light">gouVaidya.milk@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-4 bg-light" />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0 text-light">
              © {new Date().getFullYear()} GouVaidya A2 Milk. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item me-3">
                <Link to="/privacy-policy" className="text-decoration-none text-light">Privacy Policy</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/terms" className="text-decoration-none text-light">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;