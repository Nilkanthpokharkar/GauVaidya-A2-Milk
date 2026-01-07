// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="section-title">Our Story of <span className="text-warning">Pure A2 Milk</span></h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
            GouVaidya is committed to providing the purest A2 milk from indigenous Gir cows, raised with love and care in our organic farm. 
            We believe in sustainable farming and delivering nature's goodness directly to your home.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="row mb-5">
          <div className="col-lg-6 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="benefit-icon-wrapper mx-auto mb-4" style={{ background: '#4CAF50' }}>
                  🎯
                </div>
                <h3 className="card-title mb-3">Our Mission</h3>
                <p className="card-text">
                  To provide 100% pure A2 milk from indigenous Gir cows while promoting sustainable farming practices 
                  and contributing to the health and well-being of our community.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="benefit-icon-wrapper mx-auto mb-4" style={{ background: '#FF8C42' }}>
                  👁️
                </div>
                <h3 className="card-title mb-3">Our Vision</h3>
                <p className="card-text">
                  To become the most trusted A2 milk brand in India, known for purity, quality, and commitment 
                  to animal welfare and environmental sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Blocks */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
            <div className="text-center">
              <img 
                src="/images/happy-cows.jpg" 
                alt="Happy Gir Cows" 
                className="img-fluid rounded-3 shadow"
              />
            </div>
          </div>
          <div className="col-lg-5 order-lg-1">
            <h6 className="text-warning mb-2">Indigenous Breed</h6>
            <h3 className="mb-3">Pure Gir Cow Breed</h3>
            <p className="lead text-muted mb-4">
              Our indigenous Gir cows are known for producing the finest A2 milk. These native Indian cows 
              are naturally suited to our climate and produce milk that's easier to digest and more nutritious.
            </p>
            <ul className="list-unstyled">
              <li className="mb-2 d-flex align-items-center">
                <span className="text-warning me-2">✓</span>
                Native Indian breed with superior genetics
              </li>
              <li className="mb-2 d-flex align-items-center">
                <span className="text-warning me-2">✓</span>
                Naturally produces A2 beta-casein protein
              </li>
              <li className="mb-2 d-flex align-items-center">
                <span className="text-warning me-2">✓</span>
                Well-adapted to Indian climate conditions
              </li>
              <li className="d-flex align-items-center">
                <span className="text-warning me-2">✓</span>
                Known for their gentle temperament
              </li>
            </ul>
          </div>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="text-center">
              <img 
                src="/images/organic-farm.jpg" 
                alt="Organic Farm" 
                className="img-fluid rounded-3 shadow"
              />
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <h6 className="text-warning mb-2">Organic Farming</h6>
            <h3 className="mb-3">Natural & Organic Process</h3>
            <p className="lead text-muted mb-4">
              Our cows graze on pesticide-free pastures and are fed only natural, organic fodder. 
              We believe in sustainable farming practices that keep both our cows and the environment healthy.
            </p>
            <ul className="list-unstyled">
              <li className="mb-2 d-flex align-items-center">
                <span className="text-warning me-2">✓</span>
                Chemical-free grazing pastures
              </li>
              <li className="mb-2 d-flex align-items-center">
                <span className="text-warning me-2">✓</span>
                Organic fodder and feed
              </li>
              <li className="mb-2 d-flex align-items-center">
                <span className="text-warning me-2">✓</span>
                No artificial growth hormones
              </li>
              <li className="d-flex align-items-center">
                <span className="text-warning me-2">✓</span>
                Ethical treatment of animals
              </li>
            </ul>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
            <div className="text-center">
              <img 
                src="/images/fresh-delivery.jpg" 
                alt="Fresh Delivery" 
                className="img-fluid rounded-3 shadow"
              />
            </div>
          </div>
          <div className="col-lg-5 order-lg-1">
            <h6 className="text-warning mb-2">Daily Delivery</h6>
            <h3 className="mb-3">Farm to Doorstep</h3>
            <p className="lead text-muted mb-4">
              We ensure our milk reaches you within hours of milking. Our cold chain delivery system 
              maintains freshness and quality from our farm directly to your doorstep every morning.
            </p>
            <ul className="list-unstyled">
              <li className="mb-2 d-flex align-items-center">
                <span className="text-warning me-2">✓</span>
                Morning milking and same-day delivery
              </li>
              <li className="mb-2 d-flex align-items-center">
                <span className="text-warning me-2">✓</span>
                Temperature-controlled transportation
              </li>
              <li className="mb-2 d-flex align-items-center">
                <span className="text-warning me-2">✓</span>
                Hygienic packaging
              </li>
              <li className="d-flex align-items-center">
                <span className="text-warning me-2">✓</span>
                Free delivery within 10km radius
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;