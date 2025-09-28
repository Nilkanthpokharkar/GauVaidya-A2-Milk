import React from 'react';
import { Link } from 'react-router-dom';

const Reviews = () => {
  const testimonials = [
    { 
      text: "The taste of GauVeda A2 milk is incredible! My kids love it and I feel confident giving them the purest milk. The difference in quality is noticeable from the first sip.", 
      name: "Priya Sharma", 
      location: "Mumbai", 
      color: "#FF8C42",
      rating: 5,
      date: "2 weeks ago"
    },
    { 
      text: "After switching to A2 milk from Gaudeva, my digestion issues have completely resolved. The quality is outstanding and the customer service is excellent. Highly recommended!", 
      name: "Rajesh Patel", 
      location: "Pune", 
      color: "#4CAF50",
      rating: 5,
      date: "1 month ago"
    },
    { 
      text: "As someone who was lactose intolerant, A2 milk has been a game-changer. Gaudeva's milk is pure and fresh. I can finally enjoy milk without any discomfort.", 
      name: "Anita Desai", 
      location: "Surat", 
      color: "#9C27B0",
      rating: 5,
      date: "3 weeks ago"
    },
    { 
      text: "The ghee made from their A2 milk is absolutely divine! Rich aroma and traditional taste. It reminds me of my grandmother's homemade ghee. Exceptional quality!", 
      name: "Vijay Kumar", 
      location: "Ahmedabad", 
      color: "#FF5722",
      rating: 5,
      date: "2 months ago"
    },
    { 
      text: "Regular customer for 6 months now. The consistency in quality and timely delivery is impressive. My entire family has become healthier since we switched to Gaudeva.", 
      name: "Sunita Reddy", 
      location: "Bangalore", 
      color: "#2196F3",
      rating: 5,
      date: "2 weeks ago"
    },
    { 
      text: "The paneer is so fresh and soft! Perfect for making curries. The buttermilk is also very refreshing during summers. Great variety of products.", 
      name: "Amit Verma", 
      location: "Delhi", 
      color: "#E91E63",
      rating: 5,
      date: "1 month ago"
    }
  ];

  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <section className="full-width-section" style={{ background: 'white', minHeight: '100vh', paddingTop: '100px' }}>
      <div className="section-content">
        <div className="text-center mb-5">
          <h6 className="section-subtitle">Customer Reviews</h6>
          <h2 className="section-title">
            What Our <span className="hero-gradient-text">Happy Customers</span> Say
          </h2>
          <p className="fs-5 text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Don't just take our word for it. Here's what our customers have to say about their experience with Gaudeva A2 Milk.
          </p>
        </div>

        {/* Stats */}
        <div className="row text-center mb-5">
          <div className="col-md-3 col-6 mb-4">
            <div className="fs-1 fw-bold" style={{ color: '#FF8C42' }}>5000+</div>
            <div className="text-muted">Happy Families</div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="fs-1 fw-bold" style={{ color: '#FF8C42' }}>4.9/5</div>
            <div className="text-muted">Average Rating</div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="fs-1 fw-bold" style={{ color: '#FF8C42' }}>98%</div>
            <div className="text-muted">Recommend Us</div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="fs-1 fw-bold" style={{ color: '#FF8C42' }}>2 Years</div>
            <div className="text-muted">Trusted Service</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col-lg-6 mb-4" key={index}>
              <div className="testimonial-card h-100">
                <div className="testimonial-ribbon" style={{ background: testimonial.color }}></div>
                <div className="mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="mb-4 fst-italic fw-medium">"{testimonial.text}"</p>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div 
                      className="rounded-circle me-3 d-flex align-items-center justify-content-center text-white fw-bold" 
                      style={{ 
                        width: '50px', 
                        height: '50px', 
                        backgroundColor: testimonial.color 
                      }}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h6 className="mb-0 fw-semibold">{testimonial.name}</h6>
                      <small className="text-muted">{testimonial.location}</small>
                    </div>
                  </div>
                  <small className="text-muted">{testimonial.date}</small>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-5">
          <div className="bg-light p-5 rounded-4">
            <h3 className="fw-bold mb-3">Ready to experience the difference?</h3>
            <p className="fs-5 text-muted mb-4">Join thousands of happy customers who have switched to Gaudeva A2 Milk</p>
            <Link to="/order-now" className="order-btn me-3">Order Now</Link>
            <Link to="/products" className="btn btn-outline-primary">View Products</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;