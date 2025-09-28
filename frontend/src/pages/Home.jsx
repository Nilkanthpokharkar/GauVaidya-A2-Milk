import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaHeart, FaBrain, FaShieldAlt, FaBone, FaLeaf, FaBolt, FaChild, FaMoon, FaSmile } from 'react-icons/fa';
import LoadingSpinner from '../components/LoadingSpinner';
import OrderModal from '../components/OrderModal';

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <LoadingSpinner />
      
      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="hero-title">
                Pure <span className="hero-gradient-text">Organic A2 Milk</span> from Happy Gir Cows
              </h1>
              <p className="hero-subtitle">
                Experience the finest quality A2 milk, naturally rich in protein and nutrients, delivered fresh to your doorstep daily.
              </p>
              <div className="cta-form">
                <input 
                  type="tel" 
                  className="cta-input" 
                  placeholder="+91 93226 04350" 
                />
                <button
                  className="cta-button"
                  onClick={() => setShowForm(true)}
                >
                  <FaWhatsapp size={24} color="white" />
                </button>
              </div>
              <p className="text-muted">
                Call us for instant delivery. <Link to="/order-now" className="text-decoration-none fw-semibold" style={{ color: '#FF8C42' }}>Order Now!</Link>
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

      {/* Why Choose Us Section */}
      <section className="full-width-section" style={{ background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)' }}>
        <div className="section-content">
          <div className="text-center mb-5">
            <h6 className="section-subtitle" style={{ color: '#FF8C42', fontWeight: '600', textTransform: 'uppercase' }}>Why Choose Us</h6>
            <h2 className="section-title mb-4">
              <span className="hero-gradient-text">A2 DESI GIR COW MILK</span>
            </h2>
            <p className="fs-5 text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Experience the difference with our premium A2 milk from indigenous Gir cows
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                icon: '🐄',
                iconBg: '#FF8C42',
                title: 'Love for Cows',
                description: 'Milking and non-milking cows are treated with equal care. Around 25% cows are non-milking. All calves are fully fed.'
              },
              {
                icon: '🌾',
                iconBg: '#FF8C42',
                title: 'Free Range Cows',
                description: 'Our gir cows are left in open land for freely grazing. They are not kept tied in shed as other cows are.'
              },
              {
                icon: '🚫',
                iconBg: '#FF8C42',
                title: 'No Hormonal Injections',
                description: 'The Gir cow breeds are ethnic breeds so they dont need any hormonal injections for milk as other non-Indian breeds need.'
              },
              {
                icon: '🚚',
                iconBg: '#FF8C42',
                title: 'Delivered within 24 hrs',
                description: 'Milk is delivered from farm to your home within 24 hrs of milking.'
              },
              {
                icon: '💊',
                iconBg: '#FF8C42',
                title: 'No Antibiotics',
                description: 'The Gir cows have very high immunity so no vets or antibiotics are required, resulting the milk to be antibiotic free.'
              },
              {
                icon: '🥛',
                iconBg: '#FF8C42',
                title: 'Pure A2 Protein',
                description: 'Our Gir cows naturally produce A2 beta-casein protein which is easier to digest and more nutritious than regular milk.'
              }
            ].map((feature, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <div className="why-choose-card h-100" style={{ 
                  background: 'white', 
                  borderRadius: '20px', 
                  padding: '2rem', 
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  border: 'none'
                }}>
                  <div 
                    className="feature-icon d-flex align-items-center justify-content-center mx-auto mb-3" 
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${feature.iconBg}, ${feature.iconBg}dd)`,
                      fontSize: '2rem',
                      color: 'white',
                      boxShadow: '0 8px 25px rgba(255, 140, 66, 0.3)'
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: '#2C3E50' }}>{feature.title}</h5>
                  <p className="text-muted mb-0" style={{ lineHeight: '1.6' }}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Benefits Section - Redesigned to match existing UI */}
      <section className="full-width-section" style={{ background: 'white' }}>
        <div className="section-content">
          <div className="text-center mb-5">
            <h6 className="section-subtitle" style={{ color: '#4CAF50', fontWeight: '600', textTransform: 'uppercase' }}>Health Benefits</h6>
            <h2 className="section-title mb-4">
              Why <span className="hero-gradient-text">Gir Cow A2 Milk</span> is Better for You
            </h2>
            <p className="fs-5 text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Discover the scientifically proven health advantages of pure A2 milk from indigenous Gir cows
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                icon: <FaBrain size={28} />,
                title: 'Brain Development',
                description: 'Rich in Omega-3 fatty acids that enhance cognitive function and improve memory',
                color: '#2196F3'
              },
              {
                icon: <FaShieldAlt size={28} />,
                title: 'Strong Immunity',
                description: 'High immunoglobin content with natural antibodies that boost disease resistance',
                color: '#FF9800'
              },
              {
                icon: <FaHeart size={28} />,
                title: 'Heart Health',
                description: 'Helps maintain balanced cholesterol levels and improves cardiovascular function',
                color: '#F44336'
              },
              {
                icon: <FaBone size={28} />,
                title: 'Bone Strength',
                description: 'High calcium absorption with natural Vitamin D for stronger bones and teeth',
                color: '#4CAF50'
              },
              {
                icon: <FaLeaf size={28} />,
                title: 'Easy Digestion',
                description: 'A2 protein is gentle on stomach, reduces bloating and suitable for lactose sensitivity',
                color: '#8BC34A'
              },
              {
                icon: <FaBolt size={28} />,
                title: 'Natural Energy',
                description: 'Provides sustained energy release with essential nutrients for active lifestyle',
                color: '#FFC107'
              }
            ].map((benefit, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <div className="benefit-card h-100" style={{ 
                  background: 'white', 
                  borderRadius: '20px', 
                  padding: '2rem', 
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  border: 'none'
                }}>
                  <div 
                    className="benefit-icon-main d-flex align-items-center justify-content-center mx-auto mb-4" 
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${benefit.color}, ${benefit.color}dd)`,
                      color: 'white',
                      boxShadow: `0 8px 25px ${benefit.color}40`
                    }}
                  >
                    {benefit.icon}
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: '#2C3E50' }}>{benefit.title}</h5>
                  <p className="text-muted mb-0" style={{ lineHeight: '1.6' }}>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Benefits in Grid Style */}
          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="additional-benefits" style={{ background: 'linear-gradient(135deg, #f8f9fa, #ffffff)', borderRadius: '15px', padding: '2rem' }}>
                <h4 className="fw-bold mb-4" style={{ color: '#2C3E50' }}>Additional Benefits</h4>
                <div className="row">
                  {[
                    { icon: <FaChild size={20} />, text: 'Ideal for children growth and development' },
                    { icon: <FaMoon size={20} />, text: 'Promotes better sleep and relaxation' },
                    { icon: <FaSmile size={20} />, text: 'Improves skin health and natural glow' },
                    { icon: <FaLeaf size={20} />, text: '100% natural with no artificial additives' }
                  ].map((item, index) => (
                    <div className="col-12 mb-3" key={index}>
                      <div className="d-flex align-items-center">
                        <span style={{ color: '#4CAF50', marginRight: '15px' }}>{item.icon}</span>
                        <span style={{ color: '#555' }}>{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="nutrition-facts" style={{ background: 'linear-gradient(135deg, #FF8C4210, #4CAF5020)', borderRadius: '15px', padding: '2rem', height: '100%' }}>
                <h4 className="fw-bold mb-4" style={{ color: '#2C3E50' }}>Nutritional Superiority</h4>
                <div className="nutrition-grid">
                  {[
                    { nutrient: 'A2 Protein', value: '100% Pure', color: '#4CAF50' },
                    { nutrient: 'Omega-3', value: '2-3x Higher', color: '#2196F3' },
                    { nutrient: 'Calcium', value: 'Better Absorption', color: '#FF9800' },
                    { nutrient: 'Anti-oxidants', value: 'Rich Source', color: '#9C27B0' }
                  ].map((item, index) => (
                    <div key={index} className="text-center mb-4">
                      <div className="fw-bold fs-5 mb-1" style={{ color: item.color }}>{item.value}</div>
                      <div className="text-muted small">{item.nutrient}</div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-3">
                  <small className="text-muted">Compared to regular A1 milk</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="full-width-section" style={{ background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)' }}>
        <div className="section-content">
          <div className="text-center mb-5">
            <h6 className="section-subtitle">Featured Products</h6>
            <h2 className="section-title">
              Our Premium <span className="hero-gradient-text">A2 Milk</span> Collection
            </h2>
            <p className="fs-5 text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Discover our range of pure A2 milk products made from the finest Gir cow milk
            </p>
          </div>

          <div className="row">
            {[
              { 
                name: 'A2 Fresh Milk', 
                price: '₹50', 
                quantity: '500ml bottle', 
                description: 'Fresh A2 milk delivered daily. Rich in natural proteins.',
                icon: '🥛',
                size: '500ml'
              },
              { 
                name: 'A2 Cow Ghee', 
                price: '₹2200', 
                quantity: '500ml jar', 
                description: 'Pure A2 cow ghee made using traditional bilona method.',
                icon: '🧈',
                size: 'Pure'
              },
              { 
                name: 'A2 Paneer', 
                price: '₹180', 
                quantity: '250g pack', 
                description: 'Fresh homemade paneer from pure A2 milk.',
                icon: '🧀',
                size: 'Fresh'
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
                  <Link 
                    to="/products" 
                    className="btn w-100 fw-semibold text-white text-decoration-none"
                    style={{ background: '#4CAF50', borderRadius: '25px' }}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link to="/products" className="btn order-btn">
              View All Products
            </Link>
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
              <Link
                to="/order-now"
                className="btn btn-light btn-lg px-5 py-3 fw-bold text-decoration-none"
                style={{ color: '#FF8C42', borderRadius: '50px' }}
              >
                Order Fresh A2 Milk Now
              </Link>
              <div className="mt-3 opacity-75">
                <small>Free delivery within Pune radius • Fresh daily supply</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Modal */}
      <OrderModal show={showForm} onClose={() => setShowForm(false)} />
    </>
  );
};

export default Home;