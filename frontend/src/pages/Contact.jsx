import React, { useState } from 'react';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNo: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');
    
    try {
      // Make REAL API call to your working backend
      const response = await fetch("http://localhost:5006/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccessMessage('✅ Thank you! Your message has been sent successfully. We will get back to you soon.');
        // Reset form on success
        setFormData({
          fullName: '',
          contactNo: '',
          email: '',
          message: '',
        });
      } else {
        setErrorMessage('❌ ' + (data.message || 'Failed to send message. Please try again.'));
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setErrorMessage('⚠️ Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
      
      // Clear messages after 5 seconds
      setTimeout(() => {
        setSuccessMessage('');
        setErrorMessage('');
      }, 5000);
    }
  };

  const handleWhatsApp = () => {
    if (!formData.fullName && !formData.contactNo && !formData.message) {
      alert('⚠️ Please fill at least one field before sending on WhatsApp.');
      return;
    }

    const message = `Hello GouVaidya,\n\nName: ${formData.fullName || "Not provided"}\nContact: ${formData.contactNo || "Not provided"}\nEmail: ${formData.email || "Not provided"}\nMessage: ${formData.message || "No message"}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919322604350?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="section-title">Contact <span className="text-warning">GouVaidya</span></h1>
          <p className="lead text-muted">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h4 className="card-title mb-4">Send us a Message</h4>

                {successMessage && (
                  <div className="alert alert-success text-center mb-4">{successMessage}</div>
                )}

                {errorMessage && (
                  <div className="alert alert-danger text-center mb-4">{errorMessage}</div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Full Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Contact Number *</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="contactNo"
                      value={formData.contactNo}
                      onChange={handleChange}
                      placeholder="Enter your contact number"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold">Message *</label>
                    <textarea
                      className="form-control"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell us how we can help you..."
                      required
                    ></textarea>
                  </div>

                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-warning" disabled={isSubmitting}>
                      {isSubmitting ? "⏳ Sending..." : "📨 Send Message"}
                    </button>
                    <button type="button" className="btn btn-success" onClick={handleWhatsApp}>
                      <FaWhatsapp className="me-2" />
                      Contact via WhatsApp
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="row mt-5">
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm h-100 text-center">
              <div className="card-body p-4">
                <div className="contact-icon-wrapper mx-auto mb-3">
                  <FaMapMarkerAlt />
                </div>
                <h5 className="card-title">Our Location</h5>
                <p className="card-text">
                  GouVaidya Organic Farm, Wakad, Hinjewadi, District Pune, Maharashtra - 410511, India.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm h-100 text-center">
              <div className="card-body p-4">
                <div className="contact-icon-wrapper mx-auto mb-3">
                  <FaPhone />
                </div>
                <h5 className="card-title">Phone Number</h5>
                <p className="card-text">
                  <a href="tel:+919322604350" className="text-decoration-none">+91 93226 04350</a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm h-100 text-center">
              <div className="card-body p-4">
                <div className="contact-icon-wrapper mx-auto mb-3">
                  <FaEnvelope />
                </div>
                <h5 className="card-title">Email Address</h5>
                <p className="card-text">
                  <a href="mailto:gouVaidya.milk@gmail.com" className="text-decoration-none">gouVaidya.milk@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;