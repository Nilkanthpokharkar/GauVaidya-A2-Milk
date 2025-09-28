import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OrderModal from '../components/OrderModal';

const Products = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { 
      name: 'A2 Fresh Milk', 
      price: '₹50', 
      quantity: '500ml bottle', 
      description: 'Fresh A2 milk delivered daily. Rich in natural proteins and easy to digest.',
      icon: '🥛',
      size: '500ml',
      benefits: ['Rich in A2 protein', 'Easy digestion', 'Fresh daily delivery']
    },
    { 
      name: 'A2 Fresh Milk', 
      price: '₹100', 
      quantity: '1 liter bottle', 
      description: 'Family pack of pure A2 milk. Perfect for daily consumption and cooking.',
      icon: '🥛',
      size: '1L',
      benefits: ['Family pack', 'Cost effective', 'Pure A2 protein']
    },
    { 
      name: 'A2 Cow Ghee', 
      price: '₹2200', 
      quantity: '500ml jar', 
      description: 'Pure A2 cow ghee made using traditional bilona method. Rich aroma and taste.',
      icon: '🧈',
      size: '500ml',
      benefits: ['Traditional bilona method', 'Rich aroma', 'High nutrition']
    },
    { 
      name: 'A2 Paneer', 
      price: '₹180', 
      quantity: '250g pack', 
      description: 'Fresh homemade paneer from pure A2 milk. Soft texture and rich taste.',
      icon: '🧀',
      size: '250g',
      benefits: ['Homemade', 'Soft texture', 'High protein']
    },
    { 
      name: 'A2 Curd', 
      price: '₹45', 
      quantity: '500ml container', 
      description: 'Fresh homemade curd with live probiotics. Great for digestion and immunity.',
      icon: '🥛',
      size: '500ml',
      benefits: ['Live probiotics', 'Helps digestion', 'Boosts immunity']
    },
    { 
      name: 'A2 Buttermilk', 
      price: '₹25', 
      quantity: '300ml bottle', 
      description: 'Traditional buttermilk with natural spices. Refreshing and healthy drink.',
      icon: '🥛',
      size: '300ml',
      benefits: ['Refreshing', 'Natural spices', 'Low fat']
    },
  ];

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    setShowForm(true);
  };

  return (
    <section className="full-width-section" style={{ background: '#FFF8F0', minHeight: '100vh', paddingTop: '100px' }}>
      <div className="section-content">
        <div className="text-center mb-5">
          <h6 className="section-subtitle">Our Products</h6>
          <h2 className="section-title">
            Premium <span className="hero-gradient-text">A2 Milk</span> Products
          </h2>
          <p className="fs-5 text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Discover our complete range of pure A2 milk products crafted with care from our Gir cows
          </p>
        </div>

        <div className="row">
          {products.map((product, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="product-card">
                <div className="product-image">
                  <div style={{ fontSize: '4rem', marginBottom: '10px' }}>{product.icon}</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: '600', color: '#2C3E50' }}>{product.size}</div>
                </div>
                <h4 className="fw-semibold mb-2">{product.name}</h4>
                <div className="fs-4 fw-bold mb-2" style={{ color: '#FF8C42' }}>{product.price}</div>
                <div className="text-muted mb-3">{product.quantity}</div>
                <p className="text-muted mb-3">{product.description}</p>
                
                <div className="mb-4">
                  <h6 className="fw-semibold mb-2">Key Benefits:</h6>
                  <ul className="list-unstyled">
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-muted small mb-1">✓ {benefit}</li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  className="btn w-100 fw-semibold text-white"
                  style={{ background: '#4CAF50', borderRadius: '25px' }}
                  onClick={() => handleOrderClick(product)}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <div className="bg-white p-5 rounded-4 shadow-sm">
            <h3 className="fw-bold mb-3">Not sure which product to choose?</h3>
            <p className="fs-5 text-muted mb-4">Our experts can help you select the right A2 milk products for your needs</p>
            <Link to="/order-now" className="order-btn me-3">Get Free Consultation</Link>
            <a href="tel:+919876543210" className="btn btn-outline-primary">Call: +91 98765 43210</a>
          </div>
        </div>
      </div>

      <OrderModal 
        show={showForm} 
        onClose={() => setShowForm(false)} 
        product={selectedProduct}
      />
    </section>
  );
};

export default Products;