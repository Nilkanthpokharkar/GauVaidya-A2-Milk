import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="full-width-section text-white" style={{ background: '#2C3E50' }}>
      <div className="section-content">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="mb-3">
              <h3 className="fw-bold" style={{ color: '#FF8C42' }}>GauVeda</h3>
            </div>
            <p className="opacity-75 mb-4">
              Premium A2 milk from indigenous Gir cows, delivered fresh to your doorstep daily.
            </p>
            <div className="mb-3">
              <strong className="d-block mb-2">Address:</strong>
              <span className="opacity-75">
                Gauveda Organic Farm, Wakad, Hinjewadi, District Pune, Maharashtra - 410511, India.
              </span>
            </div>
            <div className="mb-2">
              <a href="mailto:gauveda.milk@gmail.com" className="text-decoration-none opacity-75 text-white">
                <MdEmail className="me-2" />
                gauveda.milk@gmail.com
              </a>
            </div>
            <div>
              <a href="tel:+919322604350" className="text-decoration-none opacity-75 text-white">
                <MdPhone className="me-2" />
                +91 93226 04350
              </a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-4 mb-4">
            <h5 className="fw-semibold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              {[
                { path: '/', label: 'Home' },
                { path: '/products', label: 'Products' },
                { path: '/about', label: 'About Us' },
                { path: '/reviews', label: 'Reviews' },
                { path: '/contact', label: 'Contact' } // Add Contact link
              ].map((item) => (
                <li className="mb-2" key={item.path}>
                  <Link to={item.path} className="text-decoration-none opacity-75 text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-4 mb-4">
            <h5 className="fw-semibold mb-3">Products</h5>
            <ul className="list-unstyled">
              {[
                'A2 Fresh Milk',
                'A2 Cow Ghee',
                'A2 Paneer',
                'A2 Curd',
                'A2 Buttermilk'
              ].map((product) => (
                <li className="mb-2" key={product}>
                  <Link to="/products" className="text-decoration-none opacity-75 text-white">
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-4 mb-4">
            <h5 className="fw-semibold mb-3">Support</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/order-now" className="text-decoration-none opacity-75 text-white">Order Now</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-decoration-none opacity-75 text-white">Contact Us</Link> {/* Update this link */}
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none opacity-75 text-white">Delivery Info</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none opacity-75 text-white">FAQ</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none opacity-75 text-white">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-4 opacity-25" />
        
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <p className="mb-0 opacity-75">
              © {new Date().getFullYear()} GauVeda A2 Milk. All rights reserved.
            </p>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-md-end justify-content-center gap-3">
              <a href="https://facebook.com/gaudeva" target="_blank" rel="noopener noreferrer" className="text-white opacity-75">
                <FaFacebookF size={20} />
              </a>
              <a href="https://twitter.com/gaudeva" target="_blank" rel="noopener noreferrer" className="text-white opacity-75">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com/gaudeva" target="_blank" rel="noopener noreferrer" className="text-white opacity-75">
                <FaInstagram size={20} />
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-white opacity-75">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;