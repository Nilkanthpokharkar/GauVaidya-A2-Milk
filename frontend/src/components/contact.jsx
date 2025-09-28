import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import useContactAPI from "../hooks/useContactAPI";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNo: "",
    email: "",
    message: "",
  });

  const { isSubmitting, successMessage, sendContactForm } = useContactAPI();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await sendContactForm(formData);
    if (success) setFormData({ fullName: "", contactNo: "", email: "", message: "" });
  };

  const handleWhatsApp = () => {
    if (!formData.fullName && !formData.contactNo && !formData.message) {
      alert("⚠️ Please fill at least one field before sending on WhatsApp.");
      return;
    }

    const message = `Hello Gaudeva,\n\nName: ${formData.fullName || "Not provided"}\nContact: ${formData.contactNo || "Not provided"}\nEmail: ${formData.email || "Not provided"}\nMessage: ${formData.message || "No message"}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919322604350?text=${encodedMessage}`, "_blank");
  };

  return (
    <section className="contact-section">
      <div className="section-content">
        <div className="text-center mb-5">
          <h6 className="section-subtitle">📩 Get In Touch</h6>
          <h2 className="section-title">
            Contact <span className="hero-gradient-text">GauVeda</span>
          </h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="contact-card">
              <h4 className="fw-bold mb-4">Send us a Message</h4>

              {successMessage && (
                <div className="alert alert-success text-center mb-4">{successMessage}</div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label fw-semibold">Full Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Contact Number *</label>
                  <input
                    type="tel"
                    className="form-input"
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleChange}
                    placeholder="Enter your contact number"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Email Address</label>
                  <input
                    type="email"
                    className="form-input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Message *</label>
                  <textarea
                    className="form-input"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <div className="d-grid gap-3">
                  <button type="submit" className="form-submit" disabled={isSubmitting}>
                    {isSubmitting ? "⏳ Sending..." : "📨 Send Message"}
                  </button>
                  <button type="button" className="whatsapp-btn" onClick={handleWhatsApp}>
                    <FaWhatsapp className="me-2" />
                    Contact via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
