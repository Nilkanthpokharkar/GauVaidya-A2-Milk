// src/pages/Reviews.js
import React from 'react';
import { Link } from 'react-router-dom';

const Reviews = () => {
  const testimonials = [
    { 
      text: "The taste of GouVaidya A2 milk is incredible! My kids love it and I feel confident giving them the purest milk. The difference in quality is noticeable from the first sip.", 
      name: "Priya Sharma", 
      location: "Mumbai", 
      rating: 5,
      date: "2 weeks ago"
    },
    { 
      text: "After switching to A2 milk from GouVaidya, my digestion issues have completely resolved. The quality is outstanding and the customer service is excellent. Highly recommended!", 
      name: "Rajesh Patel", 
      location: "Pune", 
      rating: 5,
      date: "1 month ago"
    },
    { 
      text: "As someone who was lactose intolerant, A2 milk has been a game-changer. GouVaidya's milk is pure and fresh. I can finally enjoy milk without any discomfort.", 
      name: "Anita Desai", 
      location: "Surat", 
      rating: 5,
      date: "3 weeks ago"
    },
    { 
      text: "The ghee made from their A2 milk is absolutely divine! Rich aroma and traditional taste. It reminds me of my grandmother's homemade ghee. Exceptional quality!", 
      name: "Vijay Kumar", 
      location: "Ahmedabad", 
      rating: 5,
      date: "2 months ago"
    },
    { 
      text: "Regular customer for 6 months now. The consistency in quality and timely delivery is impressive. My entire family has become healthier since we switched to GouVaidya.", 
      name: "Sunita Reddy", 
      location: "Bangalore", 
      rating: 5,
      date: "2 weeks ago"
    },
    { 
      text: "The paneer is so fresh and soft! Perfect for making curries. The buttermilk is also very refreshing during summers. Great variety of products.", 
      name: "Amit Verma", 
      location: "Delhi", 
      rating: 5,
      date: "1 month ago"
    }
  ];

  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <div className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="section-title">What Our <span className="text-warning">Happy Customers</span> Say</h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Don't just take our word for it. Here's what our customers have to say about their experience with GouVaidya A2 Milk.
          </p>
        </div>

        {/* Stats */}
        <div className="row text-center mb-5">
          <div className="col-md-3 col-6 mb-4">
            <div className="fs-1 fw-bold text-warning">5000+</div>
            <div className="text-muted">Happy Families</div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="fs-1 fw-bold text-warning">4.9/5</div>
            <div className="text-muted">Average Rating</div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="fs-1 fw-bold text-warning">98%</div>
            <div className="text-muted">Recommend Us</div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="fs-1 fw-bold text-warning">2 Years</div>
            <div className="text-muted">Trusted Service</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col-lg-6 mb-4" key={index}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="card-text fst-italic">"{testimonial.text}"</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div 
                        className="rounded-circle bg-warning text-white d-flex align-items-center justify-content-center me-3" 
                        style={{ width: '50px', height: '50px' }}
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
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-5">
          <div className="card border-0 shadow-sm p-5">
            <h3 className="mb-3">Ready to experience the difference?</h3>
            <p className="lead text-muted mb-4">Join thousands of happy customers who have switched to GouVaidya A2 Milk</p>
            <Link to="/order-now" className="btn btn-warning me-3">Order Now</Link>
            <Link to="/products" className="btn btn-outline-warning">View Products</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;