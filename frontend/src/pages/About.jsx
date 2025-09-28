import React from 'react';

const About = () => {
  return (
    <section className="full-width-section" style={{ background: '#FFF8F0', minHeight: '100vh', paddingTop: '100px' }}>
      <div className="section-content">
        <div className="text-center mb-5">
          <h6 className="section-subtitle">About GauVeda</h6>
          <h2 className="section-title">
            Our Story of <span className="hero-gradient-text">Pure A2 Milk</span>
          </h2>
          <p className="fs-5 text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Gaudeva is committed to providing the purest A2 milk from indigenous Gir cows, raised with love and care in our organic farm. 
            We believe in sustainable farming and delivering nature's goodness directly to your home.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="row mb-5">
          <div className="col-lg-6 mb-4">
            <div className="product-card h-100">
              <div className="text-center mb-4">
                <div className="benefit-icon mx-auto" style={{ background: '#4CAF50', fontSize: '2.5rem' }}>🎯</div>
              </div>
              <h3 className="text-center fw-bold mb-3">Our Mission</h3>
              <p className="text-muted fs-5">
                To provide 100% pure A2 milk from indigenous Gir cows while promoting sustainable farming practices 
                and contributing to the health and well-being of our community.
              </p>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="product-card h-100">
              <div className="text-center mb-4">
                <div className="benefit-icon mx-auto" style={{ background: '#FF8C42', fontSize: '2.5rem' }}>👁️</div>
              </div>
              <h3 className="text-center fw-bold mb-3">Our Vision</h3>
              <p className="text-muted fs-5">
                To become the most trusted A2 milk brand in India, known for purity, quality, and commitment 
                to animal welfare and environmental sustainability.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Blocks */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
            <div className="feature-illustration">
              <div style={{ fontSize: '8rem', marginBottom: '10px' }}>🐄</div>
              <h4 className="text-center fw-bold" style={{ color: '#2C3E50' }}>Happy Gir Cows</h4>
            </div>
          </div>
          <div className="col-lg-5 order-lg-1">
            <h6 className="section-subtitle text-start">Indigenous Breed</h6>
            <h3 className="fw-bold mb-3 text-start">Pure Gir Cow Breed</h3>
            <p className="fs-5 text-muted">
              Our indigenous Gir cows are known for producing the finest A2 milk. These native Indian cows 
              are naturally suited to our climate and produce milk that's easier to digest and more nutritious.
            </p>
            <ul className="fs-5 text-muted">
              <li>Native Indian breed with superior genetics</li>
              <li>Naturally produces A2 beta-casein protein</li>
              <li>Well-adapted to Indian climate conditions</li>
              <li>Known for their gentle temperament</li>
            </ul>
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
            <h3 className="fw-bold mb-3 text-start">Natural & Organic Process</h3>
            <p className="fs-5 text-muted">
              Our cows graze on pesticide-free pastures and are fed only natural, organic fodder. 
              We believe in sustainable farming practices that keep both our cows and the environment healthy.
            </p>
            <ul className="fs-5 text-muted">
              <li>Chemical-free grazing pastures</li>
              <li>Organic fodder and feed</li>
              <li>No artificial growth hormones</li>
              <li>Ethical treatment of animals</li>
            </ul>
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
            <h3 className="fw-bold mb-3 text-start">Farm to Doorstep</h3>
            <p className="fs-5 text-muted">
              We ensure our milk reaches you within hours of milking. Our cold chain delivery system 
              maintains freshness and quality from our farm directly to your doorstep every morning.
            </p>
            <ul className="fs-5 text-muted">
              <li>Morning milking and same-day delivery</li>
              <li>Temperature-controlled transportation</li>
              <li>Hygienic packaging</li>
              <li>Free delivery within 10km radius</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;