import React, { useState } from 'react';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import useOrderAPI from '../hooks/useOrderAPI';

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

  const { isSubmitting, successMessage, sendOrder } = useOrderAPI();

  const products = [
    { value: 'a2-milk-500ml', label: 'A2 Fresh Milk 500ml - ₹50' },
    { value: 'a2-milk-1l', label: 'A2 Fresh Milk 1L - ₹100' },
    { value: 'a2-ghee', label: 'A2 Cow Ghee 500ml - ₹2200' },
    { value: 'a2-paneer', label: 'A2 Paneer 250g - ₹180' },
    { value: 'a2-curd', label: 'A2 Curd 500ml - ₹45' },
    { value: 'a2-buttermilk', label: 'A2 Buttermilk 300ml - ₹25' }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await sendOrder(formData);
    if (success) {
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        product: '',
        quantity: '1',
        instructions: ''
      });
    }
  };

  const handleWhatsAppOrder = () => {
    const message = `Hello GauVeda, I would like to place an order:\n\nName: ${formData.name || 'Not provided'}\nPhone: ${formData.phone || 'Not provided'}\nProduct: ${formData.product || 'Not specified'}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919322604350?text=${encodedMessage}`, '_blank');
  };

  return (
    <section
      className="full-width-section"
      style={{ background: '#FFF8F0', minHeight: '100vh', paddingTop: '100px' }}
    >
      <div className="section-content">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="text-center mb-5">
              <h6 className="section-subtitle">Place Your Order</h6>
              <h2 className="section-title">
                Order Fresh <span className="hero-gradient-text">A2 Milk</span>
              </h2>
              <p className="fs-5 text-muted">
                Fill out the form below and we'll deliver fresh A2 milk to your doorstep
              </p>
            </div>

            {successMessage && (
              <div className="alert alert-success text-center mb-3">
                {successMessage}
              </div>
            )}

            <div className="row">
              {/* Left: Order Form */}
              <div className="col-lg-8">
                <div className="product-card">
                  <h4 className="fw-bold mb-4">Order Information</h4>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-semibold">Full Name *</label>
                        <input
                          type="text"
                          className="form-input"
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
                          className="form-input"
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
                        className="form-input"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">Delivery Address *</label>
                      <textarea
                        className="form-input"
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
                          className="form-input"
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
                          className="form-input"
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
                        className="form-input"
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
                        className="form-submit"
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

              {/* Right: Quick Order Options */}
              <div className="col-lg-4">
                <div className="product-card h-100">
                  <h5 className="fw-bold mb-4">Quick Order Options</h5>

                  <div className="mb-4">
                    <a href="tel:+919876543210" className="btn btn-primary w-100 mb-3">
                      <FaPhone className="me-2" />
                      Call to Order
                    </a>
                    <p className="text-muted small text-center">+91 93226 04350</p>
                  </div>

                  <div className="mb-4">
                    <h6 className="fw-semibold mb-3">Delivery Information</h6>
                    <div className="d-flex align-items-center mb-2">
                      <FaMapMarkerAlt className="me-2 text-muted" />
                      <span className="small">Free delivery within Pune</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <span className="small">🕒 Morning delivery: 5 AM - 8 AM</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="small">🚚 Minimum order: ₹100</span>
                    </div>
                  </div>

                  <div>
                    <h6 className="fw-semibold mb-3">Why Choose GauVeda?</h6>
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
              {/* End Quick Order */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderNow;
