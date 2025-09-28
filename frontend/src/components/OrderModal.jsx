import React, { useState, useEffect } from 'react';
import useOrderAPI from '../hooks/useOrderAPI';

const OrderModal = ({ show, onClose, product }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    product: product || '',
    quantity: '1',
    instructions: ''
  });

  const { isSubmitting, successMessage, sendOrder } = useOrderAPI();

  useEffect(() => {
    setFormData(prev => ({ ...prev, product: product || '' }));
  }, [product]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await sendOrder(formData);
    if (success) {
      onClose();
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

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button 
          className="position-absolute top-0 end-0 btn btn-link p-2 text-muted"
          style={{ fontSize: '1.5rem' }}
          onClick={onClose}
        >
          ×
        </button>

        <h3 className="text-center mb-4 fw-semibold">Order Fresh A2 Milk</h3>

        {successMessage && (
          <div className="alert alert-success text-center">{successMessage}</div>
        )}

        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            className="form-input" 
            placeholder="Your Name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required 
          />

          <input 
            type="tel" 
            className="form-input" 
            placeholder="Mobile Number" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required 
          />

          <input 
            type="email" 
            className="form-input" 
            placeholder="Email Address" 
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <input 
            type="text" 
            className="form-input" 
            placeholder="Delivery Address" 
            name="address"
            value={formData.address}
            onChange={handleChange}
            required 
          />

          <select 
            className="form-input" 
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
          >
            <option value="">Select Product</option>
            <option value="a2-milk-500ml">A2 Fresh Milk 500ml - ₹50</option>
            <option value="a2-milk-1l">A2 Fresh Milk 1L - ₹100</option>
            <option value="a2-ghee">A2 Cow Ghee 500ml - ₹2200</option>
            <option value="a2-paneer">A2 Paneer 250g - ₹180</option>
            <option value="a2-curd">A2 Curd 500ml - ₹45</option>
            <option value="a2-buttermilk">A2 Buttermilk 300ml - ₹25</option>
          </select>

          <input 
            type="number" 
            className="form-input" 
            placeholder="Quantity" 
            min="1" 
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required 
          />

          <textarea 
            className="form-input" 
            placeholder="Special Instructions (Optional)" 
            rows="3"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            style={{ resize: 'vertical', minHeight: '100px' }}
          ></textarea>

          <button type="submit" className="form-submit" disabled={isSubmitting}>
            {isSubmitting ? '⏳ Placing Order...' : 'Place Order'}
          </button>
        </form>

        <div className="text-center mt-3">
          <small className="text-muted">
            📞 Call us at +91 93226 04350 for instant orders
          </small>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
