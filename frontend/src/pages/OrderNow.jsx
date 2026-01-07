// src/pages/OrderNow.js
import React, { useState } from 'react';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaTruck } from 'react-icons/fa';

const OrderNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    product: '',
    quantity: '1',
    instructions: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const products = [
    { value: 'a2-milk-500ml', label: 'A2 Fresh Milk 500ml - ₹50' },
    { value: 'a2-milk-1l', label: 'A2 Fresh Milk 1L - ₹100' },
    { value: 'a2-ghee', label: 'A2 Cow Ghee 500ml - ₹850' },
    { value: 'a2-paneer', label: 'A2 Paneer 250g - ₹180' },
    { value: 'a2-curd', label: 'A2 Curd 500ml - ₹45' },
    { value: 'a2-buttermilk', label: 'A2 Buttermilk 300ml - ₹25' }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage('Order placed successfully! We will contact you soon.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        product: '',
        quantity: '1',
        instructions: ''
      });
    }, 1500);
  };

  const handleWhatsAppOrder = () => {
    const message = `Hello GouVaidya, I would like to place an order:\n\nName: ${formData.name || 'Not provided'}\nPhone: ${formData.phone || 'Not provided'}\nProduct: ${formData.product || 'Not specified'}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919322604350?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="text-center mb-5">
              <h1 className="section-title">Order Fresh <span className="text-warning">A2 Milk</span></h1>
              <p className="lead text-muted">
                Fill out the form below and we'll deliver fresh A2 milk to your doorstep
              </p>
            </div>

            {successMessage && (
              <div className="alert alert-success text-center mb-4">
                {successMessage}
              </div>
            )}

            <div className="row">
              {/* Left: Order Form */}
              <div className="col-lg-8">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h4 className="card-title mb-4">Order Information</h4>
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label fw-semibold">Full Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label fw-semibold">Phone Number *</label>
                          <input
                            type="tel"
                            className="form-control"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label fw-semibold">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label fw-semibold">Delivery Address *</label>
                        <textarea
                          className="form-control"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          rows="3"
                          required
                        ></textarea>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label fw-semibold">Select Product *</label>
                          <select
                            className="form-select"
                            name="product"
                            value={formData.product}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Choose a product</option>
                            {products.map((p) => (
                              <option key={p.value} value={p.value}>
                                {p.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label fw-semibold">Quantity *</label>
                          <input
                            type="number"
                            className="form-control"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            min="1"
                            required
                          />
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="form-label fw-semibold">Special Instructions</label>
                        <textarea
                          className="form-control"
                          name="instructions"
                          value={formData.instructions}
                          onChange={handleChange}
                          rows="3"
                          placeholder="Any specific delivery instructions..."
                        ></textarea>
                      </div>

                      <div className="d-grid gap-2">
                        <button
                          type="submit"
                          className="btn btn-warning"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Placing Order...' : 'Place Order'}
                        </button>
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={handleWhatsAppOrder}
                        >
                          <FaWhatsapp className="me-2" /> Order via WhatsApp
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* Right: Quick Order Options */}
              <div className="col-lg-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h5 className="card-title mb-4">Quick Order Options</h5>

                    <div className="mb-4">
                      <a href="tel:+919322604350" className="btn btn-outline-warning w-100 mb-3">
                        <FaPhone className="me-2" />
                        Call to Order
                      </a>
                      <p className="text-muted small text-center">+91 93226 04350</p>
                    </div>

                    <div className="mb-4">
                      <h6 className="fw-semibold mb-3">Delivery Information</h6>
                      <div className="d-flex align-items-center mb-2">
                        <FaMapMarkerAlt className="me-2 text-warning" />
                        <span className="small">Free delivery within Pune</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaTruck className="me-2 text-warning" />
                        <span className="small">Morning delivery: 5 AM - 8 AM</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="small me-2">💰</span>
                        <span className="small">Minimum order: ₹100</span>
                      </div>
                    </div>

                    <div>
                      <h6 className="fw-semibold mb-3">Why Choose GouVaidya?</h6>
                      <ul className="list-unstyled small">
                        <li className="mb-2">✓ 100% Pure A2 Milk</li>
                        <li className="mb-2">✓ Fresh Daily Delivery</li>
                        <li className="mb-2">✓ From Happy Gir Cows</li>
                        <li className="mb-2">✓ No Artificial Additives</li>
                        <li className="mb-2">✓ Hygienic Packaging</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Quick Order */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;