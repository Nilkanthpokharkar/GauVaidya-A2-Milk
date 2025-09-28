import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const GaudevaA2Milk = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully! We will contact you soon.');
    setShowForm(false);
  };

  if (isLoading) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ 
        minHeight: '100vh', 
        background: '#FFF8F0',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999
      }}>
        <div className="spinner-border text-warning mb-3" role="status" style={{ width: '3rem', height: '3rem' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="fs-5 text-muted">Loading Gaudeva...</p>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', overflowX: 'hidden', margin: 0, padding: 0 }}>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html, body {
          width: 100%;
          overflow-x: hidden;
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        /* Full Width Container Reset */
        .container-fluid {
          width: 100%;
          padding: 0;
          margin: 0;
          max-width: none;
        } 

        /* Navigation Styles */
        .navbar-custom {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95) !important;
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .navbar-scrolled {
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
          padding: 0.5rem 0;
        }

        .navbar-custom .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .nav-link-custom {
          color: #2C3E50 !important;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          padding: 8px 0 !important;
          margin: 0 1.5rem;
        }

        .nav-link-custom:hover {
          color: #FF8C42 !important;
        }

        .nav-link-custom::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%;
          background: linear-gradient(135deg, #FF8C42, #FFB366);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-link-custom:hover::after {
          width: 100%;
        }

        .order-btn {
          background: linear-gradient(135deg, #FF8C42, #FFB366);
          color: white !important;
          padding: 12px 28px;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 600;
          border: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 140, 66, 0.3);
        }

        .order-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 140, 66, 0.4);
          color: white !important;
        }

        /* Hero Section - Full Screen */
        .hero-section {
          width: 100vw;
          min-height: 100vh;
          background: linear-gradient(135deg, #FFF8F0 0%, #FFF8DC 100%);
          padding: 0;
          margin: 0;
          position: relative;
          display: flex;
          align-items: center;
        }

        .hero-content {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 120px 2rem 2rem;
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          color: #2C3E50;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
        }

        .hero-gradient-text {
          background: linear-gradient(135deg, #FF8C42, #FFB366);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 3vw, 1.25rem);
          color: #555;
          max-width: 500px;
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }

        .cta-form {
          background: white;
          border-radius: 60px;
          padding: 10px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          max-width: 450px;
          display: flex;
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
        }

        .cta-form:hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .cta-input {
          border: none;
          padding: 18px 24px;
          font-size: 16px;
          outline: none;
          background: transparent;
          color: #2C3E50;
          font-weight: 500;
          flex: 1;
        }

        .cta-input::placeholder {
          color: #888;
        }

        .cta-button {
          width: 56px;
          height: 56px;
          border: none;
          background: linear-gradient(135deg, #FF8C42, #FFB366);
          border-radius: 50%;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cta-button:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(255, 140, 66, 0.4);
        }

        .hero-illustration {
          width: 100%;
          max-width: 500px;
          height: 400px;
          background: linear-gradient(135deg, #FFF8DC, #F0E68C);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }

        .benefit-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: white;
          margin: 0 auto 1rem;
          transition: all 0.3s ease;
        }

        .benefit-item {
          text-align: center;
          padding: 1rem;
          transition: all 0.3s ease;
        }

        .benefit-item:hover {
          transform: translateY(-5px);
        }

        /* Sections Full Width */
        .full-width-section {
          width: 100vw;
          margin: 0;
          padding: 0;
        }

        .section-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 5rem 2rem;
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 2.8rem);
          font-weight: 700;
          color: #2C3E50;
          line-height: 1.2;
          letter-spacing: -0.02em;
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .section-subtitle {
          color: #FF8C42;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-align: center;
          margin-bottom: 1rem;
        }

        .product-card {
          background: white;
          border-radius: 24px;
          padding: 2rem;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          height: 100%;
          border: 1px solid rgba(0, 0, 0, 0.05);
          text-align: center;
        }

        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          background: linear-gradient(135deg, #FFF8F0 0%, #ffffff 100%);
        }

        .product-image {
          width: 150px;
          height: 150px;
          margin: 0 auto 1.5rem;
          border-radius: 15px;
          background: linear-gradient(135deg, #FFF8DC, #F9F9F9);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
        }

        .feature-illustration {
          width: 100%;
          max-width: 400px;
          height: 300px;
          background: linear-gradient(135deg, #FFF8DC, #F0E68C);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          margin: 0 auto;
        }

        .testimonial-card {
          background: white;
          padding: 2rem;
          border-radius: 24px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          position: relative;
          transition: all 0.3s ease;
          min-width: 350px;
          flex-shrink: 0;
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .testimonial-ribbon {
          position: absolute;
          top: 0;
          left: 2rem;
          width: 5px;
          height: 80px;
          border-radius: 3px;
        }

        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 280px;
          height: 100vh;
          background: white;
          z-index: 9999;
          transition: right 0.3s ease;
          box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
          padding: 2rem;
        }

        .mobile-menu.open {
          right: 0;
        }

        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          z-index: 9998;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .mobile-overlay.open {
          opacity: 1;
          visibility: visible;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 1rem;
        }

        .modal-content {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          width: 100%;
          max-width: 400px;
          position: relative;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .form-input {
          width: 100%;
          padding: 12px 15px;
          margin-bottom: 15px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 16px;
        }

        .form-input:focus {
          outline: none;
          border-color: #FF8C42;
        }

        .form-submit {
          width: 100%;
          padding: 12px;
          background: linear-gradient(135deg, #FF8C42, #FFB366);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .form-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(255, 140, 66, 0.4);
        }

        /* Scroll Top Button */
        .scroll-top-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 55px;
          height: 55px;
          background: #FF8C42;
          border: none;
          border-radius: 50%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 1000;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .scroll-top-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-content {
            padding: 100px 1rem 2rem;
          }
          
          .section-content {
            padding: 3rem 1rem;
          }
          
          .navbar-custom .container {
            padding: 0 1rem;
          }
          
          .cta-form {
            flex-direction: column;
            border-radius: 20px;
            padding: 20px;
          }
          
          .cta-input {
            margin-bottom: 15px;
            border-radius: 15px;
          }
          
          .cta-button {
            width: 100%;
            height: 50px;
            border-radius: 15px;
          }
          
          .hero-illustration {
            height: 300px;
            margin-top: 2rem;
          }
          
          .feature-illustration {
            height: 250px;
            max-width: 100%;
          }
          
          .benefit-icon {
            width: 60px;
            height: 60px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem !important;
          }
          
          .product-card {
            margin-bottom: 2rem;
          }
          
          .testimonial-card {
            min-width: 300px;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className={`navbar navbar-expand-lg navbar-custom ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <a href="/" className="navbar-brand fw-bold fs-3" style={{ color: '#FF8C42' }}>
            GauVeda
          </a>

          {/* Desktop Menu */}
          <div className="d-none d-lg-flex align-items-center">
            <ul className="navbar-nav d-flex flex-row align-items-center">
              <li className="nav-item">
                <a href="#home" className="nav-link nav-link-custom" onClick={(e) => { e.preventDefault(); handleScrollTo('home'); }}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#products" className="nav-link nav-link-custom" onClick={(e) => { e.preventDefault(); handleScrollTo('products'); }}>
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link nav-link-custom" onClick={(e) => { e.preventDefault(); handleScrollTo('about'); }}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#testimonials" className="nav-link nav-link-custom" onClick={(e) => { e.preventDefault(); handleScrollTo('testimonials'); }}>
                  Reviews
                </a>
              </li>
            </ul>
            <button className="order-btn ms-3" onClick={() => setShowForm(true)}>
              Order Now
            </button>
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
          <li className="mb-3">
            <a href="#home" className="text-decoration-none text-dark fw-medium" onClick={(e) => { e.preventDefault(); handleScrollTo('home'); }}>
              Home
            </a>
          </li>
          <li className="mb-3">
            <a href="#products" className="text-decoration-none text-dark fw-medium" onClick={(e) => { e.preventDefault(); handleScrollTo('products'); }}>
              Products
            </a>
          </li>
          <li className="mb-3">
            <a href="#about" className="text-decoration-none text-dark fw-medium" onClick={(e) => { e.preventDefault(); handleScrollTo('about'); }}>
              About
            </a>
          </li>
          <li className="mb-3">
            <a href="#testimonials" className="text-decoration-none text-dark fw-medium" onClick={(e) => { e.preventDefault(); handleScrollTo('testimonials'); }}>
              Reviews
            </a>
          </li>
        </ul>
        <button className="order-btn w-100" onClick={() => { setShowForm(true); setMobileMenuOpen(false); }}>
          Order Now
        </button>
      </div>

      {/* Hero Section - Full Screen */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="hero-title">
                Pure <span className="hero-gradient-text">A2 Milk</span> from Happy Gir Cows
              </h1>
              <p className="hero-subtitle">
                Experience the finest quality A2 milk, naturally rich in protein and nutrients, delivered fresh to your doorstep daily.
              </p>
              <div className="cta-form">
                <input 
                  type="tel" 
                  className="cta-input" 
                  placeholder="+91 98765 43210" 
                />
                <button
                  className="cta-button"
                  onClick={() => setShowForm(true)}
                >
                  <FaWhatsapp size={24} color="white" />
                </button>
              </div>
              <p className="text-muted">
                Call us for instant delivery. <a href="#" className="text-decoration-none fw-semibold" style={{ color: '#FF8C42' }} onClick={() => setShowForm(true)}>Order Now!</a>
              </p>
            </div>
            <div className="col-lg-6">
              <div className="hero-illustration">
<div style={{ marginBottom: '20px' }}>
  <img 
    src="./images/gir.png" 
    alt="GirCow" 
    style={{ width: '12rem', height: '12rem', objectFit: 'contain' }} 
  />
</div>
                <h3 className="text-center mb-3 fw-bold" style={{ color: '#2C3E50' }}>Premium Gir Cow Milk</h3>
                <p className="text-center text-muted">Fresh, pure, and naturally rich A2 milk from our beloved Gir cows</p>
                
                <div style={{ position: 'absolute', top: '20px', right: '20px', fontSize: '2rem', opacity: '0.3' }}>🌱</div>
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', fontSize: '2rem', opacity: '0.3' }}>🥛</div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="text-center mt-5 pt-5">
            <p className="fs-5 text-muted mb-4">
              Trusted by <span className="fw-bold fs-4" style={{ color: '#FF8C42' }}>5000+</span> families for healthier living
            </p>
            <div className="row justify-content-center">
              {[
                { icon: '💪', title: 'Rich in Protein', desc: 'High quality protein for muscle health', color: '#4CAF50' },
                { icon: '🦴', title: 'Strong Bones', desc: 'Natural calcium for bone strength', color: '#FF8C42' },
                { icon: '💚', title: 'Easy Digestion', desc: 'A2 protein is gentle on stomach', color: '#9C27B0' },
                { icon: '🌿', title: '100% Natural', desc: 'No artificial additives or hormones', color: '#2196F3' },
                { icon: '🏠', title: 'Farm Fresh', desc: 'Directly from our organic farm', color: '#FF5722' },
              ].map((benefit, index) => (
                <div className="col-6 col-md-4 col-lg-2 mb-4" key={index}>
                  <div className="benefit-item">
                    <div className="benefit-icon" style={{ background: benefit.color }}>
                      {benefit.icon}
                    </div>
                    <h6 className="fw-semibold mb-2">{benefit.title}</h6>
                    <small className="text-muted">{benefit.desc}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="full-width-section" id="products" style={{ background: 'white' }}>
        <div className="section-content">
          <div className="text-center mb-5">
            <h6 className="section-subtitle">Our Products</h6>
            <h2 className="section-title">
              Our Premium <span className="hero-gradient-text">A2 Milk</span> Products
            </h2>
          </div>

          <div className="row">
            {[
              { 
                name: 'A2 Fresh Milk', 
                price: '₹35', 
                quantity: '500ml bottle', 
                description: 'Fresh A2 milk delivered daily. Rich in natural proteins and easy to digest.',
                icon: '🥛',
                size: '500ml'
              },
              { 
                name: 'A2 Fresh Milk', 
                price: '₹65', 
                quantity: '1 liter bottle', 
                description: 'Family pack of pure A2 milk. Perfect for daily consumption and cooking.',
                icon: '🥛',
                size: '1L'
              },
              { 
                name: 'A2 Cow Ghee', 
                price: '₹850', 
                quantity: '500ml jar', 
                description: 'Pure A2 cow ghee made using traditional bilona method. Rich aroma and taste.',
                icon: '🧈',
                size: 'Fresh'
              },
              { 
                name: 'A2 Paneer', 
                price: '₹180', 
                quantity: '250g pack', 
                description: 'Fresh homemade paneer from pure A2 milk. Soft texture and rich taste.',
                icon: '🧀',
                size: 'Fresh'
              },
              { 
                name: 'A2 Curd', 
                price: '₹45', 
                quantity: '500ml container', 
                description: 'Fresh homemade curd with live probiotics. Great for digestion and immunity.',
                icon: '🥛',
                size: 'Thick'
              },
              { 
                name: 'A2 Buttermilk', 
                price: '₹25', 
                quantity: '300ml bottle', 
                description: 'Traditional buttermilk with natural spices. Refreshing and healthy drink.',
                icon: '🥛',
                size: 'Sweet'
              },
            ].map((product, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <div className="product-card">
                  <div className="product-image">
                    <div style={{ fontSize: '4rem', marginBottom: '10px' }}>{product.icon}</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: '600', color: '#2C3E50' }}>{product.size}</div>
                  </div>
                  <h4 className="fw-semibold mb-2">{product.name}</h4>
                  <div className="fs-4 fw-bold mb-2" style={{ color: '#FF8C42' }}>{product.price}</div>
                  <div className="text-muted mb-3">{product.quantity}</div>
                  <p className="text-muted mb-4">{product.description}</p>
                  <button 
                    className="btn w-100 fw-semibold" 
                    style={{ background: '#4CAF50', color: 'white', borderRadius: '25px' }}
                    onClick={() => setShowForm(true)}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="full-width-section" id="about" style={{ background: '#FFF8F0' }}>
        <div className="section-content">
          <div className="text-center mb-5">
            <h6 className="section-subtitle">About GauVeda</h6>
            <h2 className="section-title">
              Why Choose Our <span className="hero-gradient-text">A2 Gir Cow</span> Milk?
            </h2>
            <p className="fs-5 text-muted mx-auto" style={{ maxWidth: '650px' }}>
              We are passionate about providing the purest A2 milk from indigenous Gir cows, raised with love and care in our organic farm.
            </p>
          </div>
          
          {/* Feature Blocks */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <div className="feature-illustration" style={{ background: 'linear-gradient(135deg, #FFF8DC, #F0E68C)' }}>
                <div style={{ fontSize: '8rem', marginBottom: '10px' }}>🐄</div>
                <h4 className="text-center fw-bold" style={{ color: '#2C3E50' }}>Happy Gir Cows</h4>
              </div>
            </div>
            <div className="col-lg-5 order-lg-1">
              <h6 className="section-subtitle text-start">Indigenous Breed</h6>
              <h3 className="fw-bold mb-3 text-start" style={{ color: '#2C3E50', fontSize: '2.2rem' }}>Pure Gir Cow Breed</h3>
              <p className="fs-5 text-muted">
                Our indigenous Gir cows are known for producing the finest A2 milk. These native Indian cows are naturally suited to our climate and produce milk that's easier to digest and more nutritious than regular milk.
              </p>
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="feature-illustration" style={{ background: 'linear-gradient(135deg, #90EE90, #98FB98)' }}>
                <div style={{ fontSize: '8rem', marginBottom: '10px' }}>🌱</div>
                <h4 className="text-center fw-bold" style={{ color: '#2C3E50' }}>Organic Farm</h4>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <h6 className="section-subtitle text-start">Organic Farming</h6>
              <h3 className="fw-bold mb-3 text-start" style={{ color: '#2C3E50', fontSize: '2.2rem' }}>Natural & Organic Process</h3>
              <p className="fs-5 text-muted">
                Our cows graze on pesticide-free pastures and are fed only natural, organic fodder. We believe in sustainable farming practices that keep both our cows and the environment healthy.
              </p>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <div className="feature-illustration" style={{ background: 'linear-gradient(135deg, #87CEEB, #B0E0E6)' }}>
                <div style={{ fontSize: '8rem', marginBottom: '10px' }}>🚚</div>
                <h4 className="text-center fw-bold" style={{ color: '#2C3E50' }}>Fresh Delivery</h4>
              </div>
            </div>
            <div className="col-lg-5 order-lg-1">
              <h6 className="section-subtitle text-start">Daily Delivery</h6>
              <h3 className="fw-bold mb-3 text-start" style={{ color: '#2C3E50', fontSize: '2.2rem' }}>Farm to Doorstep</h3>
              <p className="fs-5 text-muted">
                We ensure our milk reaches you within hours of milking. Our cold chain delivery system maintains freshness and quality from our farm directly to your doorstep every morning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="full-width-section" id="testimonials" style={{ background: 'white' }}>
        <div className="section-content">
          <div className="text-center mb-5">
            <h6 className="section-subtitle">Customer Reviews</h6>
            <h2 className="section-title">
              What Our <span className="hero-gradient-text">Happy Customers</span> Say
            </h2>
          </div>
          
          <div className="d-flex overflow-auto pb-3" style={{ gap: '2rem' }}>
            {[
              { 
                text: "The taste of Gaudeva A2 milk is incredible! My kids love it and I feel confident giving them the purest milk.", 
                name: "Priya Sharma", 
                location: "Pune", 
                color: "#FF8C42" 
              },
              { 
                text: "After switching to A2 milk from Gaudeva, my digestion issues have completely resolved. The quality is outstanding!", 
                name: "Rajesh Patel", 
                location: "Pune", 
                color: "#4CAF50" 
              },
              { 
                text: "As someone who was lactose intolerant, A2 milk has been a game-changer. Gaudeva's milk is pure and fresh.", 
                name: "Anita Desai", 
                location: "Pune", 
                color: "#9C27B0" 
              },
              { 
                text: "The ghee made from their A2 milk is absolutely divine! Rich aroma and traditional taste.", 
                name: "Vijay Kumar", 
                location: "Pune", 
                color: "#FF5722" 
              }
            ].map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-ribbon" style={{ background: testimonial.color }}></div>
                <p className="mb-4 fst-italic fw-medium">"{testimonial.text}"</p>
                <div className="d-flex align-items-center">
                  <div 
                    className="rounded-circle me-3 d-flex align-items-center justify-content-center text-white fw-bold" 
                    style={{ 
                      width: '50px', 
                      height: '50px', 
                      backgroundColor: testimonial.color 
                    }}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h6 className="mb-0 fw-semibold">{testimonial.name}</h6>
                    <small className="text-muted">{testimonial.location}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="full-width-section text-white" style={{ background: 'linear-gradient(135deg, #FF8C42, #FFB366)' }}>
        <div className="section-content text-center">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold mb-4">Start Your Healthy Journey Today</h2>
              <p className="fs-5 mb-4 opacity-75">
                Experience the purity and goodness of A2 milk from our beloved Gir cows. Order now and taste the difference!
              </p>
              <button
                className="btn btn-light btn-lg px-5 py-3 fw-bold"
                style={{ color: '#FF8C42', borderRadius: '50px' }}
                onClick={() => setShowForm(true)}
              >
                Order Fresh A2 Milk Now
              </button>
              <div className="mt-3 opacity-75">
                <small>Free delivery within 10 km radius • Fresh daily supply</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                  GauVeda Organic Farm, Wakad, Hinjewadi, District Pune, Maharashtra -410511, India.
                </span>
              </div>
              <div className="mb-2">
                <a href="mailto:gauveda.milk@gmail.com" className="text-decoration-none opacity-75 text-white">
                  <MdEmail className="me-2" />
                  gauveda.milk@gmail.com
                </a>
              </div>
              <div>
                <a href="tel:+919876543210" className="text-decoration-none opacity-75 text-white">
                  <MdPhone className="me-2" />
                  +91 93226 04350
                </a>
              </div>
            </div>
            
            <div className="col-lg-2 col-md-4 mb-4">
              <h5 className="fw-semibold mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#home" className="text-decoration-none opacity-75 text-white" onClick={(e) => { e.preventDefault(); handleScrollTo('home'); }}>
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#products" className="text-decoration-none opacity-75 text-white" onClick={(e) => { e.preventDefault(); handleScrollTo('products'); }}>
                    Products
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#about" className="text-decoration-none opacity-75 text-white" onClick={(e) => { e.preventDefault(); handleScrollTo('about'); }}>
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#testimonials" className="text-decoration-none opacity-75 text-white" onClick={(e) => { e.preventDefault(); handleScrollTo('testimonials'); }}>
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="col-lg-3 col-md-4 mb-4">
              <h5 className="fw-semibold mb-3">Products</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#products" className="text-decoration-none opacity-75 text-white">A2 Fresh Milk</a>
                </li>
                <li className="mb-2">
                  <a href="#products" className="text-decoration-none opacity-75 text-white">A2 Cow Ghee</a>
                </li>
                <li className="mb-2">
                  <a href="#products" className="text-decoration-none opacity-75 text-white">A2 Paneer</a>
                </li>
                <li className="mb-2">
                  <a href="#products" className="text-decoration-none opacity-75 text-white">A2 Curd</a>
                </li>
                <li className="mb-2">
                  <a href="#products" className="text-decoration-none opacity-75 text-white">A2 Buttermilk</a>
                </li>
              </ul>
            </div>
            
            <div className="col-lg-3 col-md-4 mb-4">
              <h5 className="fw-semibold mb-3">Support</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="text-decoration-none opacity-75 text-white" onClick={() => setShowForm(true)}>Order Now</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none opacity-75 text-white">Delivery Info</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none opacity-75 text-white">Contact Us</a>
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

      {/* Scroll to Top Button */}
      <button 
        className="scroll-top-btn" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>

      {/* Order Form Modal */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button 
              className="position-absolute top-0 end-0 btn btn-link p-2 text-muted"
              style={{ fontSize: '1.5rem' }}
              onClick={() => setShowForm(false)}
            >
              ×
            </button>
            <h3 className="text-center mb-4 fw-semibold">Order Fresh A2 Milk</h3>
            <form onSubmit={handleFormSubmit}>
              <input type="text" className="form-input" placeholder="Your Name" required />
              <input type="tel" className="form-input" placeholder="Mobile Number" required />
              <input type="email" className="form-input" placeholder="Email Address" required />
              <input type="text" className="form-input" placeholder="Delivery Address" required />
              <select className="form-input" required>
                <option value="">Select Product</option>
                <option value="a2-milk-500ml">A2 Fresh Milk 500ml - ₹50</option>
                <option value="a2-milk-1l">A2 Fresh Milk 1L - ₹100</option>
                <option value="a2-ghee">A2 Cow Ghee 500ml - ₹2200</option>
                <option value="a2-paneer">A2 Paneer 250g - ₹180</option>
                <option value="a2-curd">A2 Curd 500ml - ₹45</option>
                <option value="a2-buttermilk">A2 Buttermilk 300ml - ₹25</option>
              </select>
              <input type="number" className="form-input" placeholder="Quantity" min="1" required />
              <textarea 
                className="form-input" 
                placeholder="Special Instructions (Optional)" 
                rows="3"
                style={{ resize: 'vertical', minHeight: '100px' }}
              ></textarea>
              <button type="submit" className="form-submit">Place Order</button>
            </form>
            <div className="text-center mt-3">
              <small className="text-muted">
                📞 Call us at +91 93226 04350 for instant orders
              </small>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GaudevaA2Milk;