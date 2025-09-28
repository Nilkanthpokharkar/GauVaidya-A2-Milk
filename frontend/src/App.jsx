import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Reviews from './pages/Reviews';
import OrderNow from './pages/OrderNow';
import Contact from './components/contact'; // Add this import


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/order-now" element={<OrderNow />} />
          <Route path="/contact" element={<Contact />} /> {/* Add this route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;