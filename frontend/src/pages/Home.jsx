// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaTruck, FaLeaf, FaAward, FaHeart, FaShoppingCart, FaChevronRight, FaStar, FaPlay, FaCheck } from 'react-icons/fa';
import Order from '../components/Order';

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate hero slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const benefits = [
    { 
      icon: <FaHeart className="benefit-icon" />, 
      title: 'Good for Health', 
      desc: 'Rich in nutrients that support overall health',
      color: '#e74c3c'
    },
    { 
      icon: <FaLeaf className="benefit-icon" />, 
      title: '100% Organic', 
      desc: 'No artificial additives or preservatives',
      color: '#2ecc71'
    },
    { 
      icon: <FaAward className="benefit-icon" />, 
      title: 'Premium Quality', 
      desc: 'Sourced from healthy Gir cows',
      color: '#f39c12'
    },
    { 
      icon: <FaTruck className="benefit-icon" />, 
      title: 'Fresh Delivery', 
      desc: 'Delivered fresh to your doorstep daily',
      color: '#3498db'
    }
  ];

  const products = [
    { 
      name: 'A2 Fresh Milk', 
      price: '₹50', 
      quantity: '500ml bottle', 
      description: 'Fresh A2 milk delivered daily. Rich in natural proteins.',
      icon: '🥛',
      badge: 'Best Seller'
    },
    { 
      name: 'A2 Cow Ghee', 
      price: '₹850', 
      quantity: '500ml jar', 
      description: 'Pure A2 cow ghee made using traditional bilona method.',
      icon: '🧈',
      badge: 'Traditional'
    },
    { 
      name: 'A2 Paneer', 
      price: '₹180', 
      quantity: '250g pack', 
      description: 'Fresh homemade paneer from pure A2 milk.',
      icon: '🧀',
      badge: 'Fresh'
    },
  ];

  const testimonials = [
    { 
      text: "The taste of GouVaidya A2 milk is incredible! My kids love it and I feel confident giving them the purest milk.",
      name: "Priya Sharma", 
      location: "Mumbai", 
      rating: 5
    },
    { 
      text: "After switching to A2 milk from GouVaidya, my digestion issues have completely resolved. The quality is outstanding!",
      name: "Rajesh Patel", 
      location: "Pune", 
      rating: 5
    },
    { 
      text: "As someone who was lactose intolerant, A2 milk has been a game-changer. GouVaidya's milk is pure and fresh.",
      name: "Anita Desai", 
      location: "Surat", 
      rating: 5
    }
  ];

  const heroSlides = [
    {
      title: "Pure A2 Milk from Happy Gir Cows",
      subtitle: "Experience the finest quality A2 milk, naturally rich in protein and nutrients",
      highlight: "100% Organic"
    },
    {
      title: "Traditional Farming, Modern Health",
      subtitle: "Sourced from indigenous Gir cows using ethical and sustainable practices",
      highlight: "Farm Fresh"
    },
    {
      title: "Delivered Fresh to Your Doorstep",
      subtitle: "From our farm to your table within hours of milking",
      highlight: "Daily Delivery"
    }
  ];

  return (
    <>
{/* Hero Section with Milk-Themed Slideshow */}
<section className="hero-section">
  <div className="hero-background">
    {/* Milk splash background elements */}
    <div className="milk-splash milk-splash-1"></div>
    <div className="milk-splash milk-splash-2"></div>
    <div className="milk-splash milk-splash-3"></div>
    <div className="milk-bubble milk-bubble-1"></div>
    <div className="milk-bubble milk-bubble-2"></div>
    <div className="milk-bubble milk-bubble-3"></div>
  </div>
  
  <div className="hero-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
    {heroSlides.map((slide, index) => (
      <div key={index} className="hero-slide">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className="hero-content">
                <div className="hero-badge mb-3">
                  <span className="badge bg-warning text-dark px-3 py-2">{slide.highlight}</span>
                </div>
                <h1 className="hero-title">
                  {slide.title}
                </h1>
                <p className="hero-subtitle mb-4">
                  {slide.subtitle}
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3">
                  <Link to="/products" className="btn btn-warning btn-lg px-4 py-3 hero-btn">
                    <FaShoppingCart className="me-2" /> Explore Products
                  </Link>
                  <button 
                    className="btn btn-success btn-lg px-4 py-3 hero-btn"
                    onClick={() => setShowForm(true)}
                  >
                    <FaWhatsapp className="me-2" /> Order on WhatsApp
                  </button>
                </div>
                
                {/* Milk quality indicators */}
                <div className="milk-indicators mt-5">
                  <div className="d-flex align-items-center mb-2">
                    <div className="milk-check-icon me-2">
                      <FaCheck />
                    </div>
                    <span>100% Pure A2 Protein</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div className="milk-check-icon me-2">
                      <FaCheck />
                    </div>
                    <span>No Preservatives or Additives</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="milk-check-icon me-2">
                      <FaCheck />
                    </div>
                    <span>Farm Fresh Daily Delivery</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image text-center position-relative">
                <div className="hero-image-container">
  {/* 
    ACTUAL MILK BOTTLE IMAGE 
    The path "/images/bottle.png" points to the public/images folder
  */}
  {/* <img 
    src="public/images/image2.png" 
    alt="GouVaidya A2 Milk Bottle" 
    className="img-fluid milk-bottle-image"
  /> */}
  
  {/* Tagline from the screenshot */}
  {/* <div className="product-tagline mt-4">
    <h3 className="text-warning fw-bold">safer. healthier. better.</h3>
  </div>
   */}
  {/* Floating badge */}
  {/* <div className="floating-badge">
    <span className="badge bg-success text-white p-2">Since 2010</span>
  </div> */}
  
  {/* Optional: Keep the milk drops animation for extra visual effect */}
  {/* <div className="milk-drops">
    <div className="milk-drop milk-drop-1"></div>
    <div className="milk-drop milk-drop-2"></div>
    <div className="milk-drop milk-drop-3"></div>
  </div> */}
</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  
  {/* Slide Indicators */}
  <div className="hero-indicators">
    {heroSlides.map((_, index) => (
      <button 
        key={index} 
        className={`indicator ${currentSlide === index ? 'active' : ''}`}
        onClick={() => setCurrentSlide(index)}
      />
    ))}
  </div>
</section>
      {/* Stats Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-item">
                <h2 className="text-warning">5000+</h2>
                <p className="text-muted">Happy Customers</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-item">
                <h2 className="text-warning">100%</h2>
                <p className="text-muted">Organic Products</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-item">
                <h2 className="text-warning">24h</h2>
                <p className="text-muted">Fresh Delivery</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-item">
                <h2 className="text-warning">12+</h2>
                <p className="text-muted">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h6 className="text-warning text-uppercase fw-bold mb-2">Why Choose Us</h6>
            <h2 className="section-title">Why <span className="text-warning">GouVaidya</span> A2 Milk?</h2>
            <p className="lead text-muted">Discover the benefits of pure A2 milk from indigenous Gir cows</p>
          </div>
          
          <div className="row g-4">
            {benefits.map((benefit, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="card h-100 border-0 shadow-sm benefit-card">
                  <div className="card-body text-center p-4">
                    <div className="benefit-icon-wrapper mb-3" style={{ backgroundColor: benefit.color }}>
                      {benefit.icon}
                    </div>
                    <h5 className="card-title fw-bold">{benefit.title}</h5>
                    <p className="card-text text-muted">{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h6 className="text-warning text-uppercase fw-bold mb-2">Our Products</h6>
            <h2 className="section-title">Our Premium <span className="text-warning">A2 Milk</span> Products</h2>
            <p className="lead text-muted">Explore our range of pure A2 milk products</p>
          </div>
          
          <div className="row g-4">
            {products.map((product, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 border-0 shadow-sm product-card">
                  <div className="card-badge">
                    <span className="badge bg-warning">{product.badge}</span>
                  </div>
                  <div className="card-body text-center p-4">
                    <div className="product-icon mb-3">
                      <span style={{ fontSize: '3rem' }}>{product.icon}</span>
                    </div>
                    <h5 className="card-title fw-bold">{product.name}</h5>
                    <h4 className="text-warning mb-2">{product.price}</h4>
                    <p className="text-muted mb-3">{product.quantity}</p>
                    <p className="card-text">{product.description}</p>
                    <button 
                      className="btn btn-warning mt-3"
                      onClick={() => setShowForm(true)}
                    >
                      Order Now <FaChevronRight className="ms-1" size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5">
            <Link to="/products" className="btn btn-outline-warning btn-lg px-4">
              View All Products <FaChevronRight className="ms-2" size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h6 className="text-warning text-uppercase fw-bold mb-2">Our Process</h6>
            <h2 className="section-title">From <span className="text-warning">Farm</span> to <span className="text-warning">Table</span></h2>
            <p className="lead text-muted">How we ensure the freshest A2 milk reaches you</p>
          </div>
          
          <div className="row">
            <div className="col-md-3 col-6 mb-4">
              <div className="process-item text-center">
                <div className="process-icon-wrapper mb-3">
                  <div className="process-icon">1</div>
                </div>
                <h5 className="fw-bold">Ethical Farming</h5>
                <p className="text-muted small">Happy cows raised with love and care</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="process-item text-center">
                <div className="process-icon-wrapper mb-3">
                  <div className="process-icon">2</div>
                </div>
                <h5 className="fw-bold">Daily Milking</h5>
                <p className="text-muted small">Fresh milk collected every morning</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="process-item text-center">
                <div className="process-icon-wrapper mb-3">
                  <div className="process-icon">3</div>
                </div>
                <h5 className="fw-bold">Quality Testing</h5>
                <p className="text-muted small">Rigorous quality checks at every step</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="process-item text-center">
                <div className="process-icon-wrapper mb-3">
                  <div className="process-icon">4</div>
                </div>
                <h5 className="fw-bold">Home Delivery</h5>
                <p className="text-muted small">At your doorstep within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h6 className="text-warning text-uppercase fw-bold mb-2">Testimonials</h6>
            <h2 className="section-title">What Our <span className="text-warning">Customers</span> Say</h2>
            <p className="lead text-muted">Hear from families who trust GouVaidya</p>
          </div>
          
          <div className="row">
            {testimonials.map((testimonial, index) => (
              <div className="col-lg-4 mb-4" key={index}>
                <div className="card h-100 border-0 shadow-sm testimonial-card">
                  <div className="card-body p-4">
                    <div className="mb-3">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-warning" />
                      ))}
                    </div>
                    <p className="card-text fst-italic">"{testimonial.text}"</p>
                    <div className="d-flex align-items-center mt-3">
                      <div className="testimonial-avatar me-3">
                        <div className="rounded-circle bg-warning text-white d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                          {testimonial.name.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <h6 className="mb-0 fw-semibold">{testimonial.name}</h6>
                        <small className="text-muted">{testimonial.location}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-4">
            <Link to="/reviews" className="btn btn-outline-warning btn-lg px-4">
              Read More Reviews <FaChevronRight className="ms-2" size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-warning text-white position-relative overflow-hidden">
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="mb-3 fw-bold">Start Your Healthy Journey Today</h2>
              <p className="lead mb-0">Experience the purity and goodness of A2 milk from our beloved Gir cows.</p>
              <ul className="list-unstyled mt-3">
                <li className="mb-2"><FaCheck className="me-2" /> 100% Pure A2 Milk</li>
                <li className="mb-2"><FaCheck className="me-2" /> No Artificial Additives</li>
                <li><FaCheck className="me-2" /> Farm Fresh Daily Delivery</li>
              </ul>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <Link to="/order-now" className="btn btn-light btn-lg px-4 py-3">
                Order Fresh A2 Milk Now <FaChevronRight className="ms-2" size={12} />
              </Link>
            </div>
          </div>
        </div>
        <div className="cta-shape-1"></div>
        <div className="cta-shape-2"></div>
      </section>

      {/* Order Modal */}
      <Order show={showForm} onClose={() => setShowForm(false)} />
    </>
  );
};

export default Home;