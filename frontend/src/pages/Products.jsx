// src/pages/Products.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Order from '../components/Order.jsx';

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
      price: '₹850', 
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
    <div className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="section-title">Our Premium <span className="text-warning">A2 Milk</span> Products</h1>
          <p className="lead text-muted">Discover our complete range of pure A2 milk products crafted with care from our Gir cows</p>
        </div>

        <div className="row g-4">
          {products.map((product, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card h-100 border-0 shadow-sm product-card">
                <div className="card-body text-center">
                  <div className="product-icon mb-3">
                    <span style={{ fontSize: '3rem' }}>{product.icon}</span>
                  </div>
                  <h5 className="card-title">{product.name}</h5>
                  <h4 className="text-warning mb-2">{product.price}</h4>
                  <p className="text-muted mb-3">{product.quantity}</p>
                  <p className="card-text mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h6 className="fw-semibold mb-2">Key Benefits:</h6>
                    <ul className="list-unstyled">
                      {product.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-muted small mb-1">✓ {benefit}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <button 
                    className="btn btn-warning w-100"
                    onClick={() => handleOrderClick(product)}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <div className="card border-0 shadow-sm p-5">
            <h3 className="mb-3">Not sure which product to choose?</h3>
            <p className="lead text-muted mb-4">Our experts can help you select the right A2 milk products for your needs</p>
            <Link to="/order-now" className="btn btn-warning me-3">Get Free Consultation</Link>
            <a href="tel:+919322604350" className="btn btn-outline-warning">Call: +91 93226 04350</a>
          </div>
        </div>
      </div>

      <Order 
        show={showForm} 
        onClose={() => setShowForm(false)} 
        product={selectedProduct}
      />
    </div>
  );
};

export default Products;